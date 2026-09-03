export default function ServicesPage() {
  const services = [
    {
      title: "Business Websites",
      desc: "Professional websites designed to build trust and help businesses connect with customers.",
    },
    {
      title: "Landing Pages",
      desc: "Focused pages built for promotions, campaigns, events, and lead generation.",
    },
    {
      title: "Website Redesigns",
      desc: "Upgrade outdated websites into modern, clean, responsive, and easy-to-use experiences.",
    },
    {
      title: "Interactive & Engaging Design",
      desc: "Animations, hover effects, and smooth interactions that make your site feel polished and modern.",
      bullets: [
        "Hover effects & transitions",
        "Click animations",
        "Smooth UI interactions",
      ],
    },
  ];

  const included = [
    {
      title: "Website Design",
      desc: "Custom layouts designed around your business, goals, and brand.",
    },
    {
      title: "Development",
      desc: "Responsive, modern websites built for desktop, tablet, and mobile.",
    },
    {
      title: "Launch Support",
      desc: "Help getting your website deployed and ready for people to use.",
    },
  ];

  return (
    <main className="bg-background min-h-screen px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">

        <h1 className="mb-6 text-4xl font-black text-primary">
          Services
        </h1>

        <p className="mb-12 max-w-2xl text-textSub">
          Professional web development should not be out of reach because of
          budget. Sharp Sites Web provides website design and development at no
          cost to qualifying small businesses and community organizations.
        </p>

        <div className="mb-20 grid gap-6 md:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-xl border border-border bg-surface p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              <h2 className="text-xl font-bold text-primary">
                {service.title}
              </h2>

              <p className="mt-2 text-textSub">
                {service.desc}
              </p>

              {service.bullets && (
                <ul className="mt-4 space-y-1 text-sm text-textSub">
                  {service.bullets.map((bullet) => (
                    <li key={bullet}>• {bullet}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <section className="mb-20">
          <p className="mb-3 text-sm font-bold uppercase tracking-wider text-blue-500">
            No-Cost Website Development
          </p>

          <h2 className="mb-6 text-3xl font-black text-primary">
            Every website I build is free.
          </h2>

          <p className="mb-10 max-w-3xl text-textSub">
            There are no design packages or development tiers. Whether you need
            a simple landing page, a full business website, or a redesign of an
            existing site, the design and development work is provided at no
            cost.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            {included.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-blue-400 bg-blue-50 p-6 shadow-sm"
              >
                <h3 className="text-xl font-bold text-primary">
                  {item.title}
                </h3>

                <p className="mt-3 text-textSub">
                  {item.desc}
                </p>

                <p className="mt-5 text-lg font-black text-blue-500">
                  $0 Development Cost
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-xl border border-border bg-surface p-6">
            <h3 className="text-lg font-bold text-primary">
              What you may still need to cover
            </h3>

            <p className="mt-3 max-w-3xl text-textSub">
              Sharp Sites Web does not charge for design or development.
              Businesses may still be responsible for outside costs such as
              domain registration, paid third-party services, or premium
              hosting when those services are required.
            </p>
          </div>
        </section>

        <section className="mt-24">
          <h2 className="mb-6 text-3xl font-black text-primary">
            Ongoing Support
          </h2>

          <p className="mb-10 max-w-3xl text-textSub">
            Launching the website is not the end of the process. I also provide
            reasonable ongoing support to help keep the sites I build useful,
            updated, and running smoothly.
          </p>

          <div className="grid gap-6 md:grid-cols-3">

            <div className="rounded-xl border border-border bg-surface p-6 shadow-sm">
              <h3 className="text-xl font-bold text-primary">
                Updates
              </h3>

              <ul className="mt-6 space-y-2 text-sm text-textSub">
                <li>• Minor content changes</li>
                <li>• Business information updates</li>
                <li>• Image and text updates</li>
              </ul>
            </div>

            <div className="rounded-xl border border-blue-400 bg-blue-50 p-6 shadow-sm">
              <h3 className="text-xl font-bold text-primary">
                Maintenance
              </h3>

              <ul className="mt-6 space-y-2 text-sm text-textSub">
                <li>• Site monitoring</li>
                <li>• Performance checks</li>
                <li>• Basic troubleshooting</li>
              </ul>
            </div>

            <div className="rounded-xl border border-border bg-surface p-6 shadow-sm">
              <h3 className="text-xl font-bold text-primary">
                Improvements
              </h3>

              <ul className="mt-6 space-y-2 text-sm text-textSub">
                <li>• Reasonable ongoing improvements</li>
                <li>• Responsive design adjustments</li>
                <li>• Basic SEO improvements</li>
              </ul>
            </div>

          </div>

          <p className="mt-8 max-w-3xl text-sm text-textSub">
            Ongoing support is provided based on availability and the needs of
            each organization.
          </p>
        </section>

      </div>
    </main>
  );
}