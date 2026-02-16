"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/providers/ThemeProvider";
import { Button } from "@/components/ui/button";

const navItems = [
  { text: "Accueil", href: "#home" },
  { text: "Services", href: "#services" },
  { text: "Contact", href: "#contact" },
];

const Navbar = () => {
  const { mode, toggleMode } = useTheme();
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-4 z-50">
      <div className="mx-auto flex h-16 w-[min(96%,1200px)] items-center justify-between rounded-full border border-black/10 bg-white/95 px-5 shadow-[0_10px_30px_rgba(0,0,0,0.08)] backdrop-blur md:px-7 dark:border-white/15 dark:bg-black/85">
        <Link href="#home" className="text-xl font-black tracking-[0.14em] text-foreground">
          DM
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {navItems.slice(0, 2).map((item) => (
            <Link
              key={item.text}
              href={item.href}
              className="text-base font-medium text-brand-neutral600 transition-colors hover:text-foreground dark:text-zinc-300 dark:hover:text-white"
            >
              {item.text}
            </Link>
          ))}
          <Link
            href={navItems[2].href}
            className="rounded-full bg-primary px-8 py-2.5 text-base font-semibold text-primary-foreground transition-colors hover:opacity-90"
          >
            {navItems[2].text}
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMode}
            aria-label="Toggle theme"
            className="rounded-full text-foreground"
          >
            {mode === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setDrawerOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {drawerOpen && (
          <>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setDrawerOpen(false)}
              className="fixed inset-0 z-40 bg-black/40 md:hidden"
              aria-label="Close menu overlay"
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 28 }}
              className="fixed right-0 top-0 z-50 flex h-screen w-full max-w-sm flex-col border-l bg-background p-6 md:hidden"
            >
              <div className="mb-8 flex items-center justify-end">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setDrawerOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              <nav className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <Link
                    key={item.text}
                    href={item.href}
                    className="rounded-md px-3 py-4 text-center text-2xl font-semibold hover:bg-muted"
                    onClick={() => setDrawerOpen(false)}
                  >
                    {item.text}
                  </Link>
                ))}
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
