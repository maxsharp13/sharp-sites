export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-background">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(96,165,250,0.15),_transparent_60%)]"></div>

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


            <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-border bg-surface p-4 shadow-sm">
                <p className="font-bold text-primary">Fast</p>
                <p className="text-sm text-textSub">
                  Optimized performance
                </p>
              </div>

              <div className="rounded-xl border border-border bg-surface p-4 shadow-sm">
                <p className="font-bold text-primary">Modern</p>
                <p className="text-sm text-textSub">
                  Clean UI/UX design
                </p>
              </div>

              <div className="rounded-xl border border-border bg-surface p-4 shadow-sm">
                <p className="font-bold text-primary">Mobile</p>
                <p className="text-sm text-textSub">
                  Fully responsive
                </p>
              </div>
            </div>
          </div>


          <div className="relative">
            <div className="absolute -inset-6 rounded-3xl bg-blue-200/40 blur-3xl"></div>

            <div className="relative rounded-3xl border border-border bg-white p-6 shadow-xl">
              <div className="rounded-2xl border border-border p-6">
                <p className="text-sm text-primary">Example Layout</p>

                <div className="mt-4 space-y-3">
                  <div className="h-3 w-32 rounded-full bg-blue-400"></div>
                  <div className="h-2 w-full rounded-full bg-gray-200"></div>
                  <div className="h-2 w-5/6 rounded-full bg-gray-200"></div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="h-24 rounded-xl border border-border bg-gray-100"></div>
                  <div className="h-24 rounded-xl border border-border bg-gray-100"></div>
                </div>

                <div className="mt-6 h-10 rounded-full bg-blue-200"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}