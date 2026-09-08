import type { Metadata, Viewport } from "next";
import { Outfit, Fira_Code, Geist } from "next/font/google";
import Script from "next/script";
import "./globals.css";

import SiteShell from "@/components/layout/SiteShell";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
  display: "swap",
});

const siteUrl = "https://devmehrab.com";

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Mehrab Hossain | Full-Stack Developer & Next.js Specialist",
    template: "%s | Mehrab Hossain",
  },
  description:
    "Mehrab Hossain (devmehrab) is a Full-Stack Developer based in Dhaka, Bangladesh, specializing in Next.js, React, Node.js, TypeScript, and high-performance web architecture.",
  keywords: [
    "Mehrab Hossain",
    "devmehrab",
    "Full-Stack Developer",
    "Next.js Developer Dhaka",
    "React Developer Bangladesh",
    "TypeScript Developer",
    "MERN Stack Expert",
  ],
  alternates: {
    canonical: siteUrl,
  },
  authors: [{ name: "Mehrab Hossain", url: siteUrl }],
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Mehrab Hossain | Full-Stack Developer Portfolio",
    description: "Expert Next.js & MERN Stack Developer based in Dhaka.",
    siteName: "Mehrab Hossain Portfolio",
    images: [
      { url: "/og-image.png", width: 1794, height: 938, alt: "Mehrab Hossain" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mehrab Hossain | @devmehrab",
    description: "Full-Stack Developer specializing in Next.js and MERN.",
    images: ["/og-image.png"],
    creator: "@devmehrab",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Mehrab Hossain",
    alternateName: "devmehrab",
    url: siteUrl,
    image: `${siteUrl}/my-profile-photo.png`,
    jobTitle: "Full-Stack Developer",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dhaka",
      addressCountry: "BD",
    },
    sameAs: [
      "https://github.com/devmehrab",
      "https://linkedin.com/in/devmehrab",
      "https://www.facebook.com/dev.mehrabhossain",
      "https://twitter.com/devmehrab",
    ],
    knowsAbout: [
      "Next.js",
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "TypeScript",
      "MERN Stack",
      "SEO",
    ],
    description:
      "Full-Stack Developer specializing in Next.js, React, and scalable modern web architecture.",
  };

  return (
    <html
      lang="en"
      className={cn("dark scroll-smooth", outfit.variable, firaCode.variable)}
    >
      <body className="font-sans bg-[#0a0a0a] text-zinc-400 antialiased min-h-screen flex flex-col">
        <Script
          src="https://cloud.umami.is/script.js"
          data-website-id="4b8d7ecd-4782-4cc9-b668-c492f20dc407"
          strategy="afterInteractive"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
