import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { client, isSanityConfigured } from "@/sanity/lib/client";
import { POSTS_QUERY } from "@/sanity/lib/queries";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Writing | Mehrab Hossain",
  description:
    "Articles on Next.js, React, TypeScript, and web engineering by Mehrab Hossain.",
  alternates: {
    canonical: "https://devmehrab.com/blog",
  },
  openGraph: {
    title: "Writing | Mehrab Hossain",
    description: "Articles on Next.js, React, and web engineering.",
    url: "https://devmehrab.com/blog",
    type: "website",
  },
};

interface BlogPostItem {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  tags: string[];
}

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

async function getAllPosts(): Promise<BlogPostItem[]> {
  const postsMap = new Map<string, BlogPostItem>();

  // 1. Try fetching from Sanity if configured
  if (isSanityConfigured) {
    try {
      const sanityPosts = await client.fetch(POSTS_QUERY);
      if (Array.isArray(sanityPosts)) {
        for (const post of sanityPosts) {
          if (post?.slug) {
            postsMap.set(post.slug, {
              slug: post.slug,
              title: post.title || "Untitled Post",
              description: post.excerpt || "",
              publishedAt: post.publishedAt || new Date().toISOString(),
              tags: post.categories || [],
            });
          }
        }
      }
    } catch {
      // If Sanity network fails, silently fall back to MDX
    }
  }

  // 2. Read local MDX files as fallback or coexisting posts
  try {
    if (fs.existsSync(BLOG_DIR)) {
      const files = fs.readdirSync(BLOG_DIR);
      for (const filename of files) {
        if (!filename.endsWith(".mdx")) continue;
        const slug = filename.replace(".mdx", "");
        if (!postsMap.has(slug)) {
          const fileContent = fs.readFileSync(path.join(BLOG_DIR, filename), "utf8");
          const { data } = matter(fileContent);
          postsMap.set(slug, {
            slug,
            title: data.title || slug,
            description: data.description || "",
            publishedAt: data.publishedAt || new Date().toISOString(),
            tags: data.tags || [],
          });
        }
      }
    }
  } catch {
    // Ignore local read errors
  }

  const posts = Array.from(postsMap.values());
  return posts.sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}

export default async function BlogHub() {
  const posts = await getAllPosts();

  const allTags = Array.from(
    new Set(posts.flatMap((post) => post.tags || [])),
  ).sort();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: posts.map((post, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `https://devmehrab.com/blog/${post.slug}`,
      name: post.title,
    })),
  };

  return (
    <div className="relative py-28 md:py-36 w-full bg-black min-h-screen text-[#f5f5f7]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-4xl mx-auto px-6 w-full">
        <header className="mb-16">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#86868b] mb-3">
            Articles
          </p>
          <h1 className="text-4xl sm:text-6xl font-bold text-[#f5f5f7] tracking-tight mb-4">
            Writing.
          </h1>
          <p className="text-base sm:text-lg text-[#86868b] max-w-xl leading-relaxed">
            Technical notes on Next.js, web performance, and software
            engineering.
          </p>
        </header>

        <div className="space-y-4">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group relative flex flex-col p-6 sm:p-8 rounded-3xl bg-[#121214] border border-white/[0.08] hover:border-white/[0.18] transition-all duration-300"
            >
              <Link
                href={`/blog/${post.slug}`}
                className="absolute inset-0 z-10"
              >
                <span className="sr-only">Read {post.title}</span>
              </Link>

              <div className="flex items-center gap-3 mb-3 text-xs text-[#86868b]">
                <time dateTime={post.publishedAt}>
                  {new Date(post.publishedAt).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </time>
                {post.tags && post.tags.length > 0 && (
                  <>
                    <span>&bull;</span>
                    <span className="text-[#86868b]">{post.tags[0]}</span>
                  </>
                )}
              </div>

              <h2 className="text-xl sm:text-2xl font-semibold text-[#f5f5f7] mb-2 group-hover:text-white transition-colors">
                {post.title}
              </h2>

              <p className="text-sm text-[#86868b] leading-relaxed mb-6">
                {post.description}
              </p>

              <div className="mt-auto flex items-center gap-1.5 text-xs font-medium text-[#f5f5f7]">
                <span>Read article</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
