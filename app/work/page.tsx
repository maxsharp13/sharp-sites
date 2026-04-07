import React from "react";

export default function Work() {
  return (
    <section className="min-h-screen bg-gray-100 px-6 py-20">
      <div className="mx-auto max-w-6xl">

        {/* Title */}
        <h1 className="mb-12 text-4xl font-bold text-blue-400">
          My Work
        </h1>

        {/* Projects */}
        <div className="grid gap-10 md:grid-cols-2">

          {/* Clothing Project */}
          <div className="rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            
            {/* Image */}
            <div className="h-[320px] w-full overflow-hidden rounded-t-2xl bg-gray-200">
              <img
                src="/clothing.png"
                alt="Clothing Brand"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h2 className="text-xl font-semibold text-blue-400">
                Den of Thorns
              </h2>

              <p className="mt-2 text-gray-600">
                E-commerce style clothing brand site with clean layout and strong identity.
              </p>

              <a
                href="https://den-of-thorns.vercel.app/"
                target="_blank"
                className="mt-4 inline-block font-medium text-blue-400 hover:underline"
              >
                View Live →
              </a>
            </div>
          </div>

          {/* Coffee Project */}
          <div className="rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            
            {/* Image */}
            <div className="h-[320px] w-full overflow-hidden rounded-t-2xl bg-gray-200">
              <img
                src="/coffee.png"
                alt="Coffee Shop"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h2 className="text-xl font-semibold text-blue-400">
                Coffee Shop Website
              </h2>

              <p className="mt-2 text-gray-600">
                Responsive website showcasing a coffee shop’s menu, layout, and branding.
              </p>

              <a
                href="https://maxsharp13.github.io/se_project_coffeeshop/"
                target="_blank"
                className="mt-4 inline-block font-medium text-blue-400 hover:underline"
              >
                View Live →
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}