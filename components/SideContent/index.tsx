"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import ProfileDanielle from "../../public/images/profile_danielle.svg";

const SideContent = () => {
  return (
    <aside className="rounded-xl border bg-card p-6 shadow-sm">
      <h2 className="text-2xl font-bold tracking-tight">Articles recents</h2>

      <article className="mt-6">
        <div className="flex items-start gap-3">
          <Image
            src={ProfileDanielle}
            alt="Profile de Danielle"
            width={50}
            height={50}
            className="rounded-full"
          />
          <h3 className="text-lg font-semibold leading-snug">
            Sport : Comment se faire du bien sans se faire mal ?
          </h3>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          Pas toujours attentifs aux signaux que notre corps nous envoie, nous
          avons tendance a le malmener quand on pratique notre activite preferee...
        </p>

        <Link
          href="https://www.femina.fr/article/sport-comment-se-faire-du-bien-sans-se-faire-mal"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block font-semibold text-[#7d0323] hover:underline"
        >
          Lire l&apos;article
        </Link>
      </article>
    </aside>
  );
};

export default SideContent;
