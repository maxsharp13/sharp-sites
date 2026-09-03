export default function WhyUs() {
  return (
    <section className="bg-background px-6 py-20 lg:px-10">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="mb-4 text-3xl font-black text-primary">
          Why Sharp Sites Web
        </h2>

        <p className="mx-auto mb-12 max-w-2xl text-textSub">
          Sharp Sites exists to make professional web design more accessible
          to small businesses and community organizations without sacrificing
          quality, usability, or care.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border border-border bg-surface p-6 shadow-sm">
            <h3 className="mb-2 text-lg font-bold text-primary">
              No Development Cost
            </h3>

            <p className="text-sm text-textSub">
              Design and development are provided at no cost. The goal is to
              remove budget as a barrier to having a professional website.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-surface p-6 shadow-sm">
            <h3 className="mb-2 text-lg font-bold text-primary">
              Built Around You
            </h3>

            <p className="text-sm text-textSub">
              Every website is designed around the needs, goals, and identity
              of the business instead of relying on a one-size-fits-all approach.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-surface p-6 shadow-sm">
            <h3 className="mb-2 text-lg font-bold text-primary">
              Modern & Mobile Ready
            </h3>

            <p className="text-sm text-textSub">
              Sites are built to look professional and work smoothly across
              phones, tablets, and desktop devices.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-surface p-6 shadow-sm">
            <h3 className="mb-2 text-lg font-bold text-primary">
              Tulsa Roots
            </h3>

            <p className="text-sm text-textSub">
              I was born and raised in Tulsa and have a genuine desire to help
              local businesses and organizations strengthen their presence in
              the community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}