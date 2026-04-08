"use client";

import { useState } from "react";
import Link from "next/link";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full border-b border-border bg-background relative">
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
          className="md:hidden text-2xl text-primary"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      <div
        className={`md:hidden absolute w-full bg-background border-b border-border shadow-md transition-all duration-300 ease-in-out overflow-hidden ${
          open ? "max-h-[400px] py-6" : "max-h-0"
        }`}
      >
        <div className="flex flex-col items-center gap-6 text-lg font-medium text-textSub">
          
          <Link href="/services" onClick={() => setOpen(false)} className="hover:text-blue-500">
            Services
          </Link>

          <Link href="/work" onClick={() => setOpen(false)} className="hover:text-blue-500">
            Work
          </Link>

          <Link href="/contact" onClick={() => setOpen(false)} className="hover:text-blue-500">
            Contact
          </Link>

          <Link href="/about" onClick={() => setOpen(false)} className="hover:text-blue-500">
            About
          </Link>

          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 w-[80%] text-center rounded-full bg-blue-500 px-6 py-3 text-white font-semibold hover:bg-blue-600 transition"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}