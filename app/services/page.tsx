"use client";

export default function ServicesPage() {
  const services = [
    {
      title: "Business Websites",
      desc: "Professional websites designed to build trust, showcase your brand, and convert visitors into customers.",
    },
    {
      title: "Landing Pages",
      desc: "High-converting pages focused on capturing leads, driving sales, or promoting a specific offer.",
    },
    {
      title: "Redesigns",
      desc: "Modernize your existing website with improved design, performance, and user experience.",
    },
    {
      title: "Interactive & Engaging Design",
      desc: "Smooth animations, hover effects, and dynamic UI interactions that make your website stand out.",
    },
  ];

  const pricing = [
    {
      name: "Starter",
      price: "Starting at $500",
      recommendation: "Best for small businesses or simple websites",
      features: [
        "1–3 page website",
        "Mobile responsive design",
        "Basic styling & layout",
        "Fast delivery",
      ],
    },
    {
      name: "Growth",
      price: "Starting at $900",
      recommendation: "Most popular — great for growing businesses",
      features: [
        "Up to 5 pages",
        "Custom design",
        "Animations & interactions",
        "Performance optimization",
      ],
      featured: true,
    },
    {
      name: "Premium",
      price: "Starting at $1,500+",
      recommendation: "Best for brands that want to stand out and scale",
      features: [
        "Full custom build",
        "Advanced animations",
        "SEO optimization",
        "Ongoing support",
      ],
    },
  ];

  return (
    <main className="bg-background min-h-screen px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        
        <h1 className="text-4xl font-black text-primary mb-6">
          Services
        </h1>

        <p className="text-textSub mb-12">
          Here’s what I can build for your business.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-20">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-xl border border-border bg-surface p-6 shadow-sm hover:shadow-md transition"
            >
              <h2 className="text-lg font-bold text-primary">
                {service.title}
              </h2>

              <p className="mt-2 text-textSub text-sm">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-black text-primary mb-6">
          Pricing
        </h2>

        <p className="text-textSub mb-10">
          Simple pricing based on your needs.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {pricing.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-xl border p-6 shadow-sm transition ${
                tier.featured
                  ? "border-blue-400 bg-blue-50 scale-105"
                  : "border-border bg-surface"
              }`}
            >

              <h3 className="text-xl font-bold text-primary flex items-center justify-between">
                {tier.name}

                {tier.featured && (
                  <span className="text-xs bg-blue-500 text-white px-2 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
              </h3>

              <p className="mt-2 text-2xl font-black text-blue-500">
                {tier.price}
              </p>

              <p className="mt-2 text-sm text-blue-400 font-medium">
                {tier.recommendation}
              </p>

              <ul className="mt-6 space-y-3 text-sm text-textSub">
                {tier.features.map((feature) => (
                  <li key={feature}>
                    • {feature === "SEO optimization" ? (
                      <div>
                        SEO optimization
                        <p className="text-xs text-gray-500 ml-4 mt-1">
                          Helps your website show up higher in Google search results
                        </p>
                      </div>
                    ) : (
                      feature
                    )}
                  </li>
                ))}
              </ul>

              <button className="mt-6 w-full rounded-lg bg-blue-500 px-4 py-2 text-white font-semibold hover:bg-blue-400 transition">
                Get Started
              </button>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}