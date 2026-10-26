"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github } from "lucide-react";
import { navLinks } from "@/config/nav";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-40 flex flex-col justify-center px-8 bg-black/95 backdrop-blur-2xl"
        >
          <div className="flex flex-col gap-6 max-w-sm w-full mx-auto">
            {navLinks.map((link, i) => (
              <motion.a
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i }}
                key={link.name}
                href={link.href}
                onClick={onClose}
                className="text-2xl font-medium text-[#f5f5f7] hover:text-white transition-colors"
              >
                {link.name}
              </motion.a>
            ))}

            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
              href="https://github.com/DevMehrab"
              target="_blank"
              onClick={onClose}
              className="inline-flex items-center justify-center gap-2.5 w-full py-3.5 mt-4 bg-white text-black font-medium text-sm rounded-full transition-opacity hover:opacity-90"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </motion.a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
