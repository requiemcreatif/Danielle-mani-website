import React from "react";
import Link from "next/link";
import { FaInstagram, FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t bg-card">
      <div className="mx-auto w-full max-w-6xl px-4 py-10 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <section>
            <h6 className="mb-3 text-lg font-bold">Contact</h6>
            <a
              href="mailto:daniellemani811@gmail.com"
              className="block text-sm text-muted-foreground hover:text-foreground"
            >
              daniellemani811@gmail.com
            </a>
            <p className="mt-1 text-sm text-muted-foreground">0642879373</p>
          </section>

          <section>
            <h6 className="mb-3 text-lg font-bold">Siret</h6>
            <p className="text-sm text-muted-foreground">53168632700028</p>
          </section>

          <section>
            <h6 className="mb-3 text-lg font-bold">Social</h6>
            <div className="flex items-center gap-4">
              <Link
                href="https://www.instagram.com/dan_man_78?igsh=MTl2ZmVoZ2pyYnJ3bQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <FaInstagram size={24} />
              </Link>
              <Link
                href="https://www.facebook.com/daniela.roncin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <FaFacebookSquare size={24} />
              </Link>
            </div>
          </section>
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Danielle Mani. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
