import React from "react";
import Link from "next/link";
import { FaInstagram, FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto w-full max-w-[1280px] px-4 py-16 md:px-6">
        <div className="grid gap-10 md:grid-cols-4">
          <section className="md:col-span-1">
            <h6 className="text-xl font-black uppercase tracking-[0.14em]">
              Danielle Mani
            </h6>
            <p className="mt-4 text-sm leading-relaxed text-zinc-400">
              Coach sportif et bien-être. Programme personnalisé alliant séances
              sportives et massage.
            </p>
          </section>

          <section>
            <h6 className="text-base font-semibold">Contact</h6>
            <span className="mt-4 block h-[2px] w-8 bg-brand-crimson" />
            <a
              href="mailto:daniellemani811@gmail.com"
              className="mt-5 block text-sm text-zinc-400 hover:text-white"
            >
              daniellemani811@gmail.com
            </a>
            <p className="mt-3 text-sm text-zinc-400">06 42 87 93 73</p>
          </section>

          <section>
            <h6 className="text-base font-semibold">Siret</h6>
            <span className="mt-4 block h-[2px] w-8 bg-brand-crimson" />
            <p className="mt-5 text-sm text-zinc-400">53168632700028</p>
          </section>

          <section>
            <h6 className="text-base font-semibold">Social</h6>
            <span className="mt-4 block h-[2px] w-8 bg-brand-crimson" />
            <div className="mt-5 flex items-center gap-4">
              <Link
                href="https://www.instagram.com/dan_man_78?igsh=MTl2ZmVoZ2pyYnJ3bQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-zinc-400 transition-colors hover:text-white"
              >
                <FaInstagram size={24} />
              </Link>
              <Link
                href="https://www.facebook.com/daniela.roncin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-zinc-400 transition-colors hover:text-white"
              >
                <FaFacebookSquare size={24} />
              </Link>
            </div>
          </section>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center" />
        <p className="text-sm text-zinc-500">
          © {new Date().getFullYear()} Danielle Mani. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
