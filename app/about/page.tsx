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
            I’m Max, a web developer focused on building clean, modern websites for businesses that want to stand out online.
            I’ve built multiple real-world projects including e-commerce sites, business websites, and custom builds, 
            and completed professional training in frontend development.
            </p>

            <p className="text-textSub mb-4">
            I believe your website is more than just a standard website, it is the first impression and introduction
            of your business to the everyday customer.
            </p>

            <p className="text-textSub mb-6">
              Now I focus on creating sites that not only look good, but actually
              help businesses build trust and bring in customers.
            </p>

          </div>

        </div>
      </div>
    </main>
  );
}