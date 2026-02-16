"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Mail, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsModalOpen(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error("Echec de l'envoi du message");
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <section id="contact" className="border-t bg-[#f4f4f4] py-16 md:py-24">
      <div className="mx-auto grid w-full max-w-[1280px] gap-10 px-4 md:grid-cols-2 md:items-center md:px-6">
        <div>
          <div className="mb-6 flex items-center gap-4">
            <span className="h-[2px] w-10 bg-brand-crimson" />
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-crimson">
              Contact
            </p>
          </div>

          <h5 className="max-w-md text-4xl font-bold leading-tight tracking-tight text-black">
            Prenons contact ensemble.
          </h5>

          <p className="mt-8 max-w-xl text-base leading-relaxed text-zinc-600">
            N&apos;hésitez pas à me contacter pour discuter de vos objectifs et
            définir ensemble un programme adapté à vos besoins.
          </p>

          <div className="mt-8 space-y-4 text-zinc-700">
            <a
              href="mailto:daniellemani811@gmail.com"
              className="flex items-center gap-3 text-base hover:text-black"
            >
              <Mail className="h-5 w-5 text-brand-crimson" />
              daniellemani811@gmail.com
            </a>
            <p className="flex items-center gap-3 text-base">
              <Phone className="h-5 w-5 text-brand-crimson" />
              06 42 87 93 73
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-black/10 bg-[#f4f4f4] p-6 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-base font-medium text-zinc-800"
                >
                  Nom
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Votre nom"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="h-12 rounded-xl border-black/15 bg-transparent text-sm"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-base font-medium text-zinc-800"
                >
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Votre email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="h-12 rounded-xl border-black/15 bg-transparent text-sm"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="subject"
                className="text-base font-medium text-zinc-800"
              >
                Sujet
              </label>
              <Input
                id="subject"
                name="subject"
                placeholder="Objet de votre message"
                value={formData.subject}
                onChange={handleChange}
                required
                className="h-12 rounded-xl border-black/15 bg-transparent text-sm"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="message"
                className="text-base font-medium text-zinc-800"
              >
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Votre message..."
                value={formData.message}
                onChange={handleChange}
                required
                className="rounded-xl border-black/15 bg-transparent text-sm"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="h-12 rounded-full bg-primary px-10 text-base text-white hover:bg-primary/90"
            >
              Envoyer
            </Button>
          </form>
        </div>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <>
            <motion.button
              className="fixed inset-0 z-50 bg-black/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              aria-label="Close confirmation overlay"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed left-1/2 top-1/2 z-50 w-[92%] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-xl border bg-background p-6 shadow-2xl"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                aria-label="Close dialog"
                className="absolute right-3 top-3 rounded-md p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="flex flex-col items-center text-center">
                <CheckCircle2 className="mb-4 h-16 w-16 text-green-600" />
                <h6 className="text-base font-bold">Message envoye</h6>
                <p className="mt-2 text-sm text-muted-foreground">
                  Votre message a ete envoye avec succes. Je vous repondrai dans
                  les plus brefs delais.
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ContactForm;
