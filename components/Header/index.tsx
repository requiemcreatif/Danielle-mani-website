"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <section
      id="home"
      className="border-b border-white/10 bg-black pt-24 text-white md:pt-28"
    >
      <div className="mx-auto grid w-full max-w-[1280px] gap-10 px-4 py-12 md:grid-cols-2 md:items-center md:px-6 md:py-8 lg:py-10">
        <div className="flex h-full flex-col gap-6 justify-center">
          <div>
            <span className="inline-flex rounded-full border border-brand-crimson px-5 py-2 text-sm font-semibold tracking-wide text-brand-crimson">
              Coach Sportif & Bien-Être
            </span>
          </div>

          <div className="mt-0">
            <h1 className="text-3xl font-black leading-tight tracking-tight md:text-5xl">
              Coach Sportif Et Bien Être
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-400 md:text-base md:leading-relaxed">
              Selon les besoins et les attentes, j&apos;établis un programme
              personnalisé d&apos;entretien et de remise en forme alliant
              séances sportives et de massage.
            </p>
          </div>

          <Button
            asChild
            className="mt-2 h-12 w-fit rounded-full bg-primary px-8 text-base font-semibold text-white hover:bg-primary/90"
          >
            <Link href="#contact">Contactez-moi</Link>
          </Button>
        </div>

        <div className="relative min-h-[460px] overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 shadow-2xl">
          <Image
            src="/images/training_center.svg"
            alt="Training center"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/30" />
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center px-6 text-center"
          >
            <div className="leading-[0.85] tracking-tight text-brand-crimson drop-shadow-[0_8px_24px_rgba(0,0,0,0.45)]">
              <p className="slide-down text-5xl font-black uppercase md:text-7xl lg:text-8xl">
                Danielle
              </p>
              <p className="fade-in text-6xl font-black uppercase md:text-8xl lg:text-9xl">
                Mani
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Header;
