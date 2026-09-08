import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import { Metadata } from "next";
import { TerminalSquare, FolderGit2, Calendar, ArrowRight } from "lucide-react";
import { client, isSanityConfigured } from "@/sanity/lib/client";
import { POSTS_QUERY } from "@/sanity/lib/queries";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Engineering Blog & Tutorials | Mehrab Hossain",
  description:
    "Deep-dive technical articles, tutorials, and case studies on Next.js, React, and Full-Stack MERN development by Mehrab Hossain in Dhaka.",
  alternates: {
    canonical: "https://devmehrab.com/blog",
  },
  openGraph: {
    title: "Engineering Blog | Mehrab Hossain",
    description: "Deep-dive technical articles on Next.js and MERN stack.",
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
    <section className="relative py-32 w-full bg-zinc-950 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-5xl mx-auto px-6 w-full">
        <header className="mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-zinc-900/50 border border-zinc-800">
            <TerminalSquare className="w-4 h-4 text-cyan-400" />
            <span className="text-zinc-400 font-mono text-xs uppercase tracking-widest">
              Knowledge Base
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-zinc-100 tracking-tight mb-6">
            Engineering <span className="text-cyan-500">Log.</span>
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">
            Technical deep dives, architectural decisions, and performance
            optimization strategies for modern web applications.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 space-y-8">
            <h2 className="text-2xl font-bold text-zinc-100 flex items-center gap-3 mb-8 border-b border-zinc-800 pb-4">
              <Calendar className="w-6 h-6 text-zinc-500" />
              Latest Transmissions
            </h2>

            {posts.map((post) => (
              <article
                key={post.slug}
                className="group relative flex flex-col p-6 sm:p-8 rounded-2xl bg-zinc-900/30 border border-zinc-800 hover:border-cyan-500/50 transition-all duration-300"
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="absolute inset-0 z-10"
                >
                  <span className="sr-only">Read {post.title}</span>
                </Link>

                <div className="flex flex-wrap gap-2 mb-4 relative z-20">
                  {post.tags?.map((tag: string) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-mono text-cyan-400 bg-cyan-500/10 rounded-md border border-cyan-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-2xl font-bold text-zinc-100 mb-3 group-hover:text-cyan-400 transition-colors">
                  {post.title}
                </h3>

                <p className="text-zinc-400 leading-relaxed mb-6">
                  {post.description}
                </p>

                <div className="mt-auto flex items-center justify-between text-sm">
                  <time
                    className="text-zinc-500 font-mono"
                    dateTime={post.publishedAt}
                  >
                    {new Date(post.publishedAt).toLocaleDateString(
                      "en-US",
                      {
                        month: "short",
                        day: "2-digit",
                        year: "numeric",
                      },
                    )}
                  </time>
                  <span className="text-cyan-500 font-mono flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300">
                    Read Article <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </article>
            ))}
          </div>

          <aside className="lg:col-span-4 mt-0 md:mt-20">
            <div className="sticky top-32 p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800">
              <h2 className="text-xl font-bold text-zinc-100 flex items-center gap-3 mb-6">
                <FolderGit2 className="w-5 h-5 text-cyan-400" />
                Explore by Topic
              </h2>

              <div className="flex flex-col gap-2">
                {allTags.map((tag) => {
                  const count = posts.filter((p) =>
                    p.tags?.includes(tag),
                  ).length;

                  return (
                    <div
                      key={tag}
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-zinc-800/50 transition-colors border border-transparent hover:border-zinc-700 group cursor-default"
                    >
                      <span className="text-zinc-300 font-mono text-sm group-hover:text-cyan-400 transition-colors">
                        #{tag.toLowerCase().replace(/\s+/g, "-")}
                      </span>
                      <span className="text-xs text-zinc-500 font-mono bg-zinc-950 px-2 py-1 rounded-md border border-zinc-800">
                        {count} {count === 1 ? "post" : "posts"}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
