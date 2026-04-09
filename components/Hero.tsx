export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-background">

      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-2">

          <div>
            <p className="mb-4 inline-block rounded-full bg-accent px-4 py-1 text-sm text-primary">
              Websites built for growth
            </p>

            <h1 className="text-5xl font-black leading-tight sm:text-6xl lg:text-7xl text-textMain">
              Clean, efficient websites custom made to match your vision
            </h1>

            <p className="mt-6 max-w-xl text-lg text-textSub">
              Sharp Sites builds high-performing websites designed to build
              trust, stand out, and convert visitors into customers.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="/contact"
                className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-blue-400"
              >
                Start Your Project
              </a>

              <a
                href="/work"
                className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-primary hover:border-primary hover:bg-accent"
              >
                View Work
              </a>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">

            <div className="col-span-2 rounded-2xl border border-border bg-surface p-6 shadow-lg">
              <p className="text-xl font-bold text-primary">Fast Performance</p>
              <p className="mt-2 text-textSub">
                Your site will load quickly and run smoothly, keeping visitors engaged.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-surface p-6 shadow-lg">
              <p className="text-lg font-bold text-primary">Modern Design</p>
              <p className="mt-2 text-textSub">
                Clean, professional layouts that build trust instantly.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-surface p-6 shadow-lg">
              <p className="text-lg font-bold text-primary">Mobile Ready</p>
              <p className="mt-2 text-textSub">
                Fully responsive and optimized for all devices.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}