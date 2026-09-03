export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-background">
      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-2">

          <div>
            <p className="mb-4 inline-block rounded-full bg-accent px-4 py-1 text-sm text-primary">
              Professional websites. No development cost.
            </p>

            <h1 className="text-5xl font-black leading-tight text-textMain sm:text-6xl lg:text-7xl">
              Free websites for small businesses that deserve to be seen.
            </h1>

            <p className="mt-6 max-w-xl text-lg text-textSub">
              Sharp Sites Web helps small businesses and community organizations
              build a professional online presence without letting budget stand
              in the way.
            </p>

            <p className="mt-4 max-w-xl text-base text-textSub">
              Design and development are provided at no cost. You may only need
              to cover outside expenses such as a domain or paid third-party
              services when required.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="/contact"
                className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-blue-400"
              >
                Request a Website
              </a>

              <a
                href="/work"
                className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-primary hover:border-primary hover:bg-accent"
              >
                View My Work
              </a>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">

            <div className="col-span-2 rounded-2xl border border-border bg-surface p-6 shadow-lg">
              <p className="text-xl font-bold text-primary">
                $0 Design & Development
              </p>

              <p className="mt-2 text-textSub">
                No packages, no development fees, and no catch. The goal is
                simply to help businesses build a stronger online presence.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-surface p-6 shadow-lg">
              <p className="text-lg font-bold text-primary">
                Built for Your Business
              </p>

              <p className="mt-2 text-textSub">
                Every site is designed around your goals, brand, and customers
                instead of forcing you into a generic template.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-surface p-6 shadow-lg">
              <p className="text-lg font-bold text-primary">
                Modern & Mobile Ready
              </p>

              <p className="mt-2 text-textSub">
                Clean, responsive websites built to look and work great across
                desktop, tablet, and mobile.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}