import {
  PortableText,
  type PortableTextComponents,
  type PortableTextProps,
} from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import { urlForImage } from "@/sanity/lib/image";
import type { ReactNode } from "react";

interface ImageBlockValue {
  _type?: "image";
  asset?: {
    _ref?: string;
    _type?: string;
  };
  alt?: string;
  caption?: string;
}

interface LinkMarkValue {
  href?: string;
  _type?: string;
}

const components: PortableTextComponents = {
  types: {
    image: ({ value }: { value?: ImageBlockValue }) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <figure className="my-8 overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/50">
          <div className="relative aspect-video w-full">
            <Image
              src={urlForImage(value as Parameters<typeof urlForImage>[0]).url()}
              alt={value.alt || "Blog illustration"}
              fill
              className="object-cover"
            />
          </div>
          {value.caption && (
            <figcaption className="p-3 text-center text-xs font-mono text-zinc-500">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },
  block: {
    h2: ({ children }: { children?: ReactNode }) => (
      <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100 mt-12 mb-4 tracking-tight border-b border-zinc-800 pb-2">
        {children}
      </h2>
    ),
    h3: ({ children }: { children?: ReactNode }) => (
      <h3 className="text-xl sm:text-2xl font-semibold text-zinc-200 mt-8 mb-3 tracking-tight">
        {children}
      </h3>
    ),
    h4: ({ children }: { children?: ReactNode }) => (
      <h4 className="text-lg sm:text-xl font-medium text-zinc-200 mt-6 mb-2">
        {children}
      </h4>
    ),
    blockquote: ({ children }: { children?: ReactNode }) => (
      <blockquote className="border-l-2 border-cyan-500 pl-4 my-6 italic text-zinc-300 font-sans">
        {children}
      </blockquote>
    ),
    normal: ({ children }: { children?: ReactNode }) => (
      <p className="text-zinc-300 leading-relaxed my-4 text-base sm:text-lg">
        {children}
      </p>
    ),
  },
  list: {
    bullet: ({ children }: { children?: ReactNode }) => (
      <ul className="list-disc list-inside space-y-2 my-4 text-zinc-300 pl-2">
        {children}
      </ul>
    ),
    number: ({ children }: { children?: ReactNode }) => (
      <ol className="list-decimal list-inside space-y-2 my-4 text-zinc-300 pl-2">
        {children}
      </ol>
    ),
  },
  marks: {
    strong: ({ children }: { children?: ReactNode }) => (
      <strong className="font-semibold text-zinc-100">{children}</strong>
    ),
    em: ({ children }: { children?: ReactNode }) => (
      <em className="italic text-zinc-200">{children}</em>
    ),
    code: ({ children }: { children?: ReactNode }) => (
      <code className="px-1.5 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-cyan-400 font-mono text-sm">
        {children}
      </code>
    ),
    link: ({
      value,
      children,
    }: {
      value?: LinkMarkValue;
      children?: ReactNode;
    }) => {
      const target = (value?.href || "").startsWith("http")
        ? "_blank"
        : undefined;
      const rel = target === "_blank" ? "noopener noreferrer" : undefined;
      return (
        <Link
          href={value?.href || "#"}
          target={target}
          rel={rel}
          className="text-cyan-400 underline underline-offset-4 decoration-cyan-500/40 hover:decoration-cyan-400 transition-colors"
        >
          {children}
        </Link>
      );
    },
  },
};

interface PortableTextRendererProps {
  value: PortableTextProps["value"];
}

export default function PortableTextRenderer({ value }: PortableTextRendererProps) {
  if (!value) return null;
  return (
    <div className="portable-text-content">
      <PortableText value={value} components={components} />
    </div>
  );
}
