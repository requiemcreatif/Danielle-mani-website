"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Danielle from "../../public/images/danielle_yoga.png";
import ProfileDanielle from "../../public/images/profile_danielle.svg";
import ContactForm from "../ContactForm";
import { Button } from "@/components/ui/button";

const MainContent = () => {
  return (
    <main>
      <section className="bg-[#f4f4f4] py-16 md:py-24">
        <div className="mx-auto grid w-full max-w-[1280px] gap-10 px-4 md:grid-cols-2 md:items-center md:px-6">
          <div className="overflow-hidden rounded-2xl">
            <div className="relative min-h-[520px] w-full">
              <Image
                src={Danielle}
                alt="Danielle Mani practicing yoga"
                fill
                className="object-cover grayscale"
              />
            </div>
          </div>

          <div>
            <div className="mb-6 flex items-center gap-4">
              <span className="h-[2px] w-10 bg-brand-crimson" />
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-crimson">
                Mon Parcours
              </p>
            </div>
            <h2 className="max-w-lg text-4xl font-bold leading-tight tracking-tight text-black ">
              Passionnée de sports, dévouée à votre transformation.
            </h2>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-zinc-600">
              Passionnée de sports, j&apos;ai pratiqué pendant de nombreuses
              années l&apos;athlétisme (vitesse, relais, etc.) avant de décider
              de passer mon diplôme d&apos;État <strong>BEMF</strong> (Brevet
              des métiers de la forme) et me consacrer à la{" "}
              <strong>préparation physique générale</strong> pour les sportifs.
            </p>
            <Button
              asChild
              className="mt-8 h-12 rounded-full bg-black px-8 text-base font-semibold text-white hover:bg-zinc-800"
            >
              <Link href="#contact">Contactez-moi</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="services" className="bg-black py-16 text-white md:py-24">
        <div className="mx-auto w-full max-w-[1280px] px-4 md:px-6">
          <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <div className="mb-5 flex items-center gap-4">
                <span className="h-[2px] w-10 bg-brand-crimson" />
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-crimson">
                  Articles récents
                </p>
              </div>
              <h3 className="text-4xl font-bold tracking-tight">
                Conseils & Actualités
              </h3>
            </div>
            <Button
              variant="outline"
              className="h-11 rounded-full border-white/25 bg-transparent px-6 text-white hover:bg-white/10"
            >
              Voir tous les articles
            </Button>
          </div>

          <div>
            <article className="overflow-hidden rounded-2xl border border-white/10 bg-[#111216]">
              <div className="flex items-center gap-4 p-7 pb-0">
                <Image
                  src={ProfileDanielle}
                  alt="Profile de Danielle"
                  width={88}
                  height={88}
                  className="h-[88px] w-[88px] rounded-full object-cover"
                />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-crimson">
                    Sport & Santé
                  </p>
                  <h4 className="mt-2 text-xl font-semibold leading-tight md:text-2xl">
                    Sport : Comment se faire du bien sans se faire mal ?
                  </h4>
                </div>
              </div>
              <div className="space-y-4 p-7">
                <p className="text-base leading-relaxed text-zinc-400 max-w-2xl">
                  Pas toujours attentifs aux signaux que notre corps nous
                  envoie, nous avons tendance à le malmener quand on pratique
                  notre activité préférée...
                </p>
                <Link
                  href="https://www.femina.fr/article/sport-comment-se-faire-du-bien-sans-se-faire-mal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-base font-semibold text-brand-crimson hover:underline"
                >
                  Lire l&apos;article
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <ContactForm />
    </main>
  );
};

export default MainContent;
