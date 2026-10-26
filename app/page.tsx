import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Faq from "@/components/sections/Faq";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Mehrab Hossain | Software Engineer",
  description:
    "Software Engineer based in Dhaka, building web applications with Next.js, React, and TypeScript.",
  keywords: [
    "Mehrab Hossain",
    "devmehrab",
    "Software Engineer",
    "Next.js",
    "React",
    "TypeScript",
  ],
  authors: [{ name: "Mehrab Hossain" }],
  creator: "Mehrab Hossain",
  metadataBase: new URL("https://devmehrab.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Mehrab Hossain | Software Engineer",
    description:
      "Building web applications with Next.js, React, and TypeScript.",
    url: "https://devmehrab.com",
    siteName: "Mehrab Hossain",
    images: [
      {
        url: "/my-profile-photo.png",
        width: 1200,
        height: 1200,
        alt: "Mehrab Hossain",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mehrab Hossain",
    description:
      "Software Engineer building with Next.js, React, and TypeScript.",
    images: ["/og-image.png"],
    creator: "@devmehrab",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Home() {
  return (
    <div className="flex bg-black flex-col w-full selection:bg-neutral-800 selection:text-white">
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Faq />
    </div>
  );
}
