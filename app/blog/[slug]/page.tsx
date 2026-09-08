import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { client, isSanityConfigured } from "@/sanity/lib/client";
import { POST_QUERY, POST_SLUGS_QUERY } from "@/sanity/lib/queries";
import { urlForImage } from "@/sanity/lib/image";
import PortableTextRenderer from "@/components/blog/PortableTextRenderer";

export const revalidate = 60;

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

type UnifiedPost =
  | {
      type: "sanity";
      data: {
        title: string;
        description: string;
        publishedAt: string;
        tags: string[];
        body: any;
        mainImage?: any;
        author?: { name: string; image?: any };
      };
    }
  | {
      type: "mdx";
      data: {
        title: string;
        description: string;
        publishedAt: string;
        tags: string[];
        content: string;
        author?: string;
      };
    };

async function getPostData(slug: string): Promise<UnifiedPost | null> {
  // 1. Check Sanity first if configured
  if (isSanityConfigured) {
    try {
      const sanityPost = await client.fetch(POST_QUERY, { slug });
      if (sanityPost && sanityPost.title) {
        return {
          type: "sanity",
          data: {
            title: sanityPost.title,
            description: sanityPost.excerpt || "",
            publishedAt: sanityPost.publishedAt || new Date().toISOString(),
            tags: sanityPost.categories || [],
            body: sanityPost.body,
            mainImage: sanityPost.mainImage,
            author: sanityPost.author,
          },
        };
      }
    } catch {
      // If Sanity network fails, fall back to MDX
    }
  }

  // 2. Check local MDX
  try {
    const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(fileContent);
      return {
        type: "mdx",
        data: {
          title: data.title || slug,
          description: data.description || "",
          publishedAt: data.publishedAt || new Date().toISOString(),
          tags: data.tags || [],
          content,
        },
      };
    }
  } catch {
    // Ignore read error
  }

  return null;
}

export async function generateStaticParams() {
  const slugs = new Set<string>();

  // Sanity slugs if configured
  if (isSanityConfigured) {
    try {
      const sanitySlugs = await client.fetch(POST_SLUGS_QUERY);
      if (Array.isArray(sanitySlugs)) {
        for (const item of sanitySlugs) {
          if (item?.slug) slugs.add(item.slug);
        }
      }
    } catch {
      // Ignore Sanity query errors during build
    }
  }

  // MDX slugs
  try {
    if (fs.existsSync(BLOG_DIR)) {
      const files = fs.readdirSync(BLOG_DIR);
      for (const file of files) {
        if (file.endsWith(".mdx")) {
          slugs.add(file.replace(".mdx", ""));
        }
      }
    }
  } catch {
    // Ignore file errors
  }

  return Array.from(slugs).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostData(slug);
  if (!post) return {};

  const { title, description, publishedAt, tags } = post.data;
  const siteUrl = "https://devmehrab.com";

  return {
    title,
    description,
    alternates: {
      canonical: `${siteUrl}/blog/${slug}`,
    },
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime: publishedAt,
      url: `${siteUrl}/blog/${slug}`,
      authors: ["Mehrab Hossain"],
      tags: tags || [],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostData(slug);

  if (!post) {
    notFound();
  }

  const { title, description, publishedAt, tags } = post.data;
  const authorName =
    (post.type === "sanity" && post.data.author?.name) || "Mehrab Hossain";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description: description,
    author: {
      "@type": "Person",
      name: authorName,
      url: "https://devmehrab.com",
    },
    datePublished: publishedAt,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://devmehrab.com/blog/${slug}`,
    },
    keywords: tags?.join(", "),
  };

  return (
    <article className="max-w-3xl mx-auto px-6 py-32 w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="mb-12 border-b border-zinc-800 pb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-zinc-100 leading-normal md:leading-18 mb-4">
          {title}
        </h1>
        <div className="flex items-center gap-4 text-zinc-500 font-mono text-sm">
          <time dateTime={publishedAt}>
            {new Date(publishedAt).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </time>
          <span>//</span>
          <span>By {authorName}</span>
        </div>

        {post.type === "sanity" && post.data.mainImage?.asset?._ref && (
          <div className="relative aspect-video w-full mt-8 rounded-xl overflow-hidden border border-zinc-800">
            <Image
              src={urlForImage(post.data.mainImage).url()}
              alt={post.data.mainImage.alt || title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}
      </header>

      <div className="markdown-content">
        {post.type === "sanity" ? (
          <PortableTextRenderer value={post.data.body} />
        ) : (
          <MDXRemote source={post.data.content} />
        )}
      </div>
    </article>
  );
}

