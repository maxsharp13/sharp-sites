import React from "react";

export default function Work() {
  return (
    <section className="min-h-screen bg-gray-100 px-6 py-20">
      <div className="mx-auto max-w-6xl">

       
        <h1 className="mb-12 text-4xl font-bold text-blue-400">
          My Work
        </h1>

       
        <div className="grid gap-10 md:grid-cols-2">

     
          <div className="rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            
            
            <div className="h-[320px] w-full overflow-hidden rounded-t-2xl bg-gray-200">
              <img
                src="/clothing.png"
                alt="Clothing Brand"
                className="h-full w-full object-cover"
              />
            </div>

          
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

     
          <div className="rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            
          
            <div className="h-[320px] w-full overflow-hidden rounded-t-2xl bg-gray-200">
            <img
              src="/tdr.jpg"
              alt="TDR Tree Service website"
              className="h-full w-full object-cover"
            />
            </div>

            <div className="p-6">
              <h2 className="text-xl font-semibold text-blue-400">
                TDR Tree Service
              </h2>

              <p className="mt-2 text-gray-600">
                Custom-built website for a local tree service business focused on generating leads, showcasing services, and improving mobile user experience.
              </p>

              <a
                href="https://tdr-tree-service.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block font-medium text-blue-400 hover:underline"
              >
                View Live →
              </a>
            </div>
          </div>

        <div className="rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">

          <div className="h-[320px] w-full overflow-hidden rounded-t-2xl bg-gray-200">
            <img
              src="/ej-sharp.jpg"
              alt="EJ Sharp Entertainment website"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="p-6">
            <h2 className="text-xl font-semibold text-blue-400">
              EJ Sharp Entertainment
            </h2>

            <p className="mt-2 text-gray-600">
              Custom-built website for a professional tribute artist featuring show information, photo galleries, event booking, and a mobile-friendly experience designed to help generate performance bookings.
            </p>

            <a
              href="https://ej-sharp.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
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