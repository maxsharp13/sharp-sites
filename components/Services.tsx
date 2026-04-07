export default function Services() {
  return (
    <section className="px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-4xl font-black mb-6">
          What I can build for you
        </h2>

        <p className="text-textSub mb-12">
          Modern websites designed to grow your business.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {["Business Sites", "Landing Pages", "Redesigns"].map((title) => (
            <div
              key={title}
              className="rounded-2xl border border-gray-700 bg-surface p-6 hover:border-primary/40"
            >
              <h3 className="text-xl font-bold text-primary">{title}</h3>
              <p className="mt-3 text-textSub">
                Clean, modern, and conversion-focused design.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}