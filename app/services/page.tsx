export default function ServicesPage() {
    const services = [
      {
        title: "Business Websites",
        desc: "Professional websites designed to build trust and convert visitors into real customers.",
      },
      {
        title: "Landing Pages",
        desc: "High-converting pages built for ads, promotions, and capturing leads.",
      },
      {
        title: "Website Redesigns",
        desc: "Upgrade outdated websites into modern, clean, and high-performing designs.",
      },
      {
        title: "Interactive & Engaging Design",
        desc: "Animations, hover effects, and smooth interactions that make your site feel premium.",
        bullets: [
          "Hover effects & transitions",
          "Click animations (zoom, expand)",
          "Smooth UI interactions",
        ],
      },
    ];
  
    const pricing = [
      {
        name: "Starter",
        price: "Starting at $500",
        recommendation: "Best for small businesses or simple websites",
      },
      {
        name: "Growth",
        price: "Starting at $900",
        recommendation: "Most popular — great for growing businesses",
        featured: true,
      },
      {
        name: "Premium",
        price: "Starting at $1,500+",
        recommendation: "Best for brands that want to stand out and scale",
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
  
          <div className="grid gap-6 md:grid-cols-4 mb-20">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-xl border border-border bg-surface p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200"
              >
                <h2 className="text-xl font-bold text-primary">
                  {service.title}
                </h2>
  
                <p className="mt-2 text-textSub">
                  {service.desc}
                </p>
  
                {service.bullets && (
                  <ul className="mt-4 text-sm text-textSub space-y-1">
                    {service.bullets.map((b) => (
                      <li key={b}>• {b}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-black text-primary mb-6">
            Pricing
          </h2>
  
          <div className="grid gap-6 md:grid-cols-3 mb-20">
            {pricing.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-xl border p-6 shadow-sm ${
                  tier.featured
                    ? "border-blue-400 bg-blue-50 scale-105"
                    : "border-border bg-surface"
                }`}
              >
                <h3 className="text-xl font-bold text-primary">
                  {tier.name}
                </h3>
  
                <p className="mt-2 text-2xl font-black text-blue-500">
                  {tier.price}
                </p>
  
                <p className="mt-2 text-sm text-blue-400 font-medium">
                  {tier.recommendation}
                </p>
              </div>
            ))}
          </div>
  
          <div className="mt-24">
            <h2 className="text-3xl font-black text-primary mb-6">
              Maintenance Plans
            </h2>
  
            <p className="text-textSub mb-10">
              Keep your website running smoothly with ongoing support and updates.
            </p>
  
            <div className="grid gap-6 md:grid-cols-3">
  
              <div className="rounded-xl border border-border bg-surface p-6 shadow-sm">
                <h3 className="text-xl font-bold text-primary">
                  Basic
                </h3>
  
                <p className="mt-2 text-2xl font-black text-blue-500">
                  $50/mo
                </p>
  
                <ul className="mt-6 space-y-2 text-sm text-textSub">
                  <li>• Site monitoring</li>
                  <li>• Minor updates</li>
                  <li>• Basic support</li>
                </ul>
              </div>
  
              <div className="rounded-xl border border-blue-400 bg-blue-50 p-6 shadow-sm scale-105">
                <h3 className="text-xl font-bold text-primary flex justify-between">
                  Standard
                  <span className="text-xs bg-blue-500 text-white px-2 py-1 rounded-full">
                    Most Popular
                  </span>
                </h3>
  
                <p className="mt-2 text-2xl font-black text-blue-500">
                  $75/mo
                </p>
  
                <ul className="mt-6 space-y-2 text-sm text-textSub">
                  <li>• Everything in Basic</li>
                  <li>• Content updates</li>
                  <li>• Performance checks</li>
                  <li>• Priority support</li>
                </ul>
              </div>
  
              <div className="rounded-xl border border-border bg-surface p-6 shadow-sm">
                <h3 className="text-xl font-bold text-primary">
                  Premium
                </h3>
  
                <p className="mt-2 text-2xl font-black text-blue-500">
                  $100/mo
                </p>
  
                <ul className="mt-6 space-y-2 text-sm text-textSub">
                  <li>• Everything in Standard</li>
                  <li>• Ongoing improvements</li>
                  <li>• SEO adjustments</li>
                  <li>• Fast response time</li>
                </ul>
              </div>
  
            </div>
          </div>
  
        </div>
      </main>
    );
  }