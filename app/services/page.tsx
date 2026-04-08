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
  
    return (
      <main className="bg-background min-h-screen px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-4xl font-black text-primary mb-6">
            Services
          </h1>
  
          <p className="text-textSub mb-12">
            Here’s what I can build for your business.
          </p>
  
          <div className="grid gap-6 md:grid-cols-4">
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
        </div>
      </main>
    );
  }