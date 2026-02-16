"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Danielle from "../../public/images/danielle_yoga.png";
import SideContent from "../SideContent";
import ContactForm from "../ContactForm";
import { Button } from "@/components/ui/button";

const MainContent = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
    hover: {
      scale: 1.03,
      y: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <main>
      <section className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-16 md:grid-cols-3 md:px-6">
        <div className="space-y-12 md:col-span-2">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden rounded-2xl border bg-muted/30 shadow-sm"
            >
              <Image
                src={Danielle}
                alt="Danielle Mani practicing yoga"
                className="h-full w-full object-cover"
              />
            </motion.div>

            <div>
              <h2 className="text-3xl font-black tracking-tight">Mon Parcours</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Passionnee de sports, j&apos;ai pratique pendant de nombreuses annees
                l&apos;athletisme (vitesse, relais, etc.) avant de decider de passer mon
                diplome d&apos;Etat <strong>BEMF</strong> (Brevet des metiers de la forme)
                et me consacrer a la <strong>preparation physique generale</strong> pour
                les sportifs.
              </p>
              <Button asChild className="mt-6 bg-[#7d0323] text-white hover:bg-[#66021d]">
                <Link href="#contact">Contactez-moi</Link>
              </Button>
            </div>
          </div>

          <div id="services">
            <h3 className="text-2xl font-black tracking-tight">Mon Approche</h3>
            <p className="mt-3 text-muted-foreground">
              J&apos;axe mon coaching personnalise autour de trois elements complementaires:
            </p>

            <motion.ul
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              className="mt-6 grid gap-3"
            >
              {["La pratique physique", "La nutrition", "Le massage"].map((item) => (
                <motion.li
                  key={item}
                  variants={itemVariants}
                  whileHover="hover"
                  className="rounded-lg border bg-card p-4"
                >
                  <h4 className="font-semibold">{item}</h4>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>

        <div>
          <SideContent />
        </div>
      </section>

      <section className="border-t bg-muted/20">
        <div className="mx-auto w-full max-w-4xl px-4 py-14 md:px-6">
          <ContactForm />
        </div>
      </section>
    </main>
  );
};

export default MainContent;
