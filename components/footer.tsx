"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const [email, setEmail] = React.useState("");
  const [subscribed, setSubscribed] = React.useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="bg-slate-950 text-slate-300 border-t border-white/5 pt-20 pb-10 relative overflow-hidden"
      id="contact"
    >
      {/* Decorative background light */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Upper Footer section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="flex flex-col gap-4 text-left">
            <Link
              href="/"
              className="flex items-center gap-2 group focus:outline-none"
            >
              <Image
                src="/logo_white.png"
                alt="Khan Builders Logo"
                width={80}
                height={80}
                className="w-20 h-20 object-contain group-hover:scale-110 transition-transform"
              />
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed mt-2">
              Khan Builders Ltd. delivers reliable real estate solutions through
              quality construction, modern planning, transparent documentation,
              and timely handover.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-2">
              {[
                {
                  name: "Facebook",
                  href: "https://facebook.com",
                  svg: (
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
                    </svg>
                  ),
                },
                {
                  name: "Instagram",
                  href: "https://instagram.com",
                  svg: (
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  ),
                },
                {
                  name: "LinkedIn",
                  href: "https://linkedin.com",
                  svg: (
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  ),
                },
                {
                  name: "Twitter",
                  href: "https://twitter.com",
                  svg: (
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  ),
                },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-slate-950 transition-all duration-300 text-slate-400"
                  aria-label={social.name}
                >
                  {social.svg}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="text-left">
            <h3 className="text-sm font-bold tracking-widest text-white uppercase mb-6 border-l-2 border-accent pl-3">
              Developments
            </h3>
            <ul className="flex flex-col gap-3.5 text-sm font-semibold">
              <li>
                <Link
                  href="/properties?type=residential"
                  className="hover:text-accent transition-colors"
                >
                  Residential Apartments
                </Link>
              </li>
              <li>
                <Link
                  href="/properties?type=commercial"
                  className="hover:text-accent transition-colors"
                >
                  Commercial Spaces
                </Link>
              </li>
              <li>
                <Link
                  href="/properties"
                  className="hover:text-accent transition-colors"
                >
                  Flat Booking & Sales
                </Link>
              </li>
              <li>
                <Link
                  href="/properties"
                  className="hover:text-accent transition-colors"
                >
                  Real Estate Investment
                </Link>
              </li>
              <li>
                <Link
                  href="/land-share"
                  className="hover:text-accent transition-colors"
                >
                  Land Share Development
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="text-left">
            <h3 className="text-sm font-bold tracking-widest text-white uppercase mb-6 border-l-2 border-accent pl-3">
              Corporate Office
            </h3>
            <ul className="flex flex-col gap-4 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span>
                  Kalapani Bridge Adjacent Area,
                  <br />
                  Balughat - Mastertek Road,
                  <br />
                  Near Pallabi Thana, ECB - Kalshi 200 Feet Road adjacent area,
                  <br />
                  Dhaka-1216
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <span>01712-117965, 01567-874806</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                <span></span>khanbuildersltd22@gmail.com
              </li>
            </ul>
          </div>

          {/* Newsletter subscription */}
          <div className="text-left">
            <h3 className="text-sm font-bold tracking-widest text-white uppercase mb-6 border-l-2 border-accent pl-3">
              Newsletter
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              Subscribe for updates on new projects, land share opportunities,
              and booking openings.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 font-semibold focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
              />
              <Button
                type="submit"
                className="w-full bg-accent text-accent-foreground hover:bg-gold-dark hover:text-white font-bold rounded-xl py-3 text-xs cursor-pointer shadow-md transition-all"
              >
                {subscribed ? "Subscribed Successfully ✓" : "Subscribe Now"}
              </Button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-xs text-slate-500 font-semibold">
            © 2026 Khan Builders Ltd. Building Trust. Creating Better Living.
          </div>

          <div className="flex items-center gap-6 text-xs text-slate-500 font-semibold">
            <Link href="/" className="hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <Link href="/" className="hover:text-accent transition-colors">
              Terms of Service
            </Link>
            <button
              onClick={handleScrollTop}
              className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-accent hover:text-slate-950 transition-all cursor-pointer"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
