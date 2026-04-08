"use client";

import { useState } from "react";
import Link from "next/link";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-blue-200 flex items-center justify-center font-bold text-blue-600">
            S
          </div>
          <div className="text-primary font-bold tracking-wide">
            SHARP <span className="text-blue-500">SITES</span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-textSub">
          <Link href="/services">Services</Link>
          <Link href="/work">Work</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/about">About</Link>
        </div>


        <div className="hidden md:block">
          <Link
            href="/contact"
            className="rounded-full bg-blue-500 px-5 py-2 text-white font-semibold hover:bg-blue-600 transition"
          >
            Get Started
          </Link>
        </div>

        <button
          className="md:hidden text-primary"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-4 space-y-4 text-textSub">
          <Link href="/services" onClick={() => setOpen(false)}>Services</Link>
          <Link href="/work" onClick={() => setOpen(false)}>Work</Link>
          <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
          <Link href="/about" onClick={() => setOpen(false)}>About</Link>

          <Link
            href="/contact"
            className="block rounded-full bg-blue-500 px-5 py-2 text-white text-center font-semibold"
            onClick={() => setOpen(false)}
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
}