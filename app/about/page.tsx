import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="bg-background min-h-screen px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-6xl">

        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-primary">
            About Sharp Sites
          </h1>

          <p className="mt-4 text-textSub max-w-2xl mx-auto">
            I build clean, modern websites that help businesses stand out,
            build trust, and turn visitors into real customers.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 items-center">

          <div className="flex justify-center">
            <div className="relative w-[220px] h-[220px] rounded-xl overflow-hidden border border-border shadow-sm">
              <Image
                src="/about.png"
                alt="About me"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Who I Am
            </h2>

            <p className="text-textSub mb-4">
              My name is Max, a certified web developer focused on building clean, modern
              websites for businesses looking to stand out online.
            </p>

            <p className="text-textSub mb-4">
            I believe your website is more than just a standard website, it is the first impression and introduction
            of your business to the everyday customer.
            </p>

            <p className="text-textSub mb-6">
              Now I focus on creating sites that not only look good, but actually
              help businesses build trust and bring in customers.
            </p>

            <div className="grid gap-3">
              <div className="rounded-lg bg-surface border border-border p-3">
                <p className="text-sm text-primary font-semibold">
                  ⚡ Fast & Responsive
                </p>
              </div>

              <div className="rounded-lg bg-surface border border-border p-3">
                <p className="text-sm text-primary font-semibold">
                   Built for Results
                </p>
              </div>

              <div className="rounded-lg bg-surface border border-border p-3">
                <p className="text-sm text-primary font-semibold">
                 Clean, Modern Design
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}