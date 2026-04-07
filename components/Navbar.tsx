import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-primary font-black">
            S
          </div>
          <div>
            <p className="text-sm font-black tracking-[0.25em] text-textMain">
              SHARP
            </p>
            <p className="-mt-1 text-sm font-black tracking-[0.25em] text-primary">
              SITES
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-textSub md:flex">
          <Link href="/services" className="hover:text-primary transition">
            Services
          </Link>
          <Link href="/work" className="hover:text-primary transition">
            Work
          </Link>
          <Link href="/contact" className="hover:text-primary transition">
            Contact
          </Link>
          <Link href="/about" className="hover:text-primary transition">
            About
            </Link>
        </nav>

        <Link
          href="/contact"
          className="hidden rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-400 md:block"
        >
          Get Started
        </Link>

      </div>
    </header>
  );
}