"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/ui/SmoothScroll";
import FloatingChatToggle from "@/components/ui/FloatingChatToggle";

export default function SiteShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isStudio = pathname?.startsWith("/studio");

  if (isStudio) {
    return <div className="min-h-screen w-full">{children}</div>;
  }

  return (
    <>
      <SmoothScroll />
      <Navbar />

      <main className="relative flex flex-col min-h-screen">{children}</main>

      <FloatingChatToggle />

      <Footer />
    </>
  );
}
