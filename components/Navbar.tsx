"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
  <nav className="w-full border-b border-gray-200 bg-gray-100 relative">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        
      <Link href="/" className="flex items-center">
          <Image
        src="/logo.png"
        alt="Sharp Sites Logo"
        width={180}
        height={50}
        className="object-contain"
        priority
        />
            </Link>
        <div className="hidden md:flex items-center gap-8 text-textSub">
          <Link href="/services">Services</Link>
          <Link href="/work">Work</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/about">About</Link>
        </div>

        <div className="hidden md:block">
          <Link
            href="mailto:maxsharpnack@gmail.com?subject=Project Inquiry - Sharp Sites"
            className="rounded-full bg-blue-500 px-5 py-2 text-white font-semibold shadow-md hover:shadow-lg hover:scale-[1.02] transition-all"
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
        className={`md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-md border-b border-border shadow-md transition-all duration-300 ease-in-out overflow-hidden z-50 ${
          open ? "max-h-[400px] py-6" : "max-h-0"
        }`}
      >
        <div className="flex flex-col items-center gap-6 text-lg font-medium text-textSub">
          <Link href="/services" onClick={() => setOpen(false)}>Services</Link>
          <Link href="/work" onClick={() => setOpen(false)}>Work</Link>
          <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
          <Link href="/about" onClick={() => setOpen(false)}>About</Link>

          <Link
            href="mailto:maxsharpnack@gmail.com?subject=Project Inquiry - Sharp Sites"
            onClick={() => setOpen(false)}
            className="mt-2 w-[80%] text-center rounded-full bg-blue-500 px-6 py-3 text-white font-semibold shadow-md hover:shadow-lg transition"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}