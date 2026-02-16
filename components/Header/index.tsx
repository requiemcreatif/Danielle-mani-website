"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <section id="home" className="border-b border-white/10 bg-black text-white">
      <div className="mx-auto grid w-full max-w-[1280px] gap-10 px-4 py-12 md:grid-cols-2 md:items-center md:px-6 md:py-16 lg:py-20">
        <div className="flex h-full flex-col justify-between">
          <div>
            <span className="inline-flex rounded-full border border-brand-crimson px-5 py-2 text-sm font-semibold tracking-wide text-brand-crimson">
              Coach Sportif & Bien-Être
            </span>
          </div>

          <div className="mt-14 md:mt-20">
            <h1 className="text-3xl font-black leading-tight tracking-tight md:text-5xl">
              Coach Sportif Et Bien Être
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-400 md:text-[32px] md:leading-tight">
              Selon les besoins et les attentes, j&apos;établis un programme
              personnalisé d&apos;entretien et de remise en forme alliant séances
              sportives et de massage.
            </p>
          </div>

          <Button
            asChild
            className="mt-10 h-14 w-fit rounded-full bg-primary px-10 text-lg font-semibold text-white hover:bg-primary/90"
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
        </div>
      </div>
    </section>
  );
};

export default Header;
