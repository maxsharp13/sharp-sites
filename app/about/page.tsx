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
            Sharp Sites exists to help small businesses and community organizations
            build a strong online presence without letting cost get in the way.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 items-center">

          <div className="flex justify-center">
            <div className="relative w-[220px] h-[220px] rounded-xl overflow-hidden border border-border shadow-sm">
              <Image
                src="/about.png"
                alt="Max Sharpnack"
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
              I&apos;m Max, a software engineer and web developer with experience
              building business websites, e-commerce projects, and custom web
              applications. I created Sharp Sites to use those skills in a way
              that can genuinely help people and businesses in my community.
            </p>

            <p className="text-textSub mb-4">
              I believe a website is more than just a page on the internet.
              For many customers, it is their first introduction to a business,
              and every business deserves the opportunity to make that first
              impression a good one.
            </p>

            <p className="text-textSub mb-6">
              My goal is to build websites that are clean, modern, responsive,
              and useful — without making cost the barrier that keeps a small
              business from having a professional online presence.
            </p>
          </div>

        </div>

        <div className="mt-16 rounded-2xl border border-blue-400 bg-blue-50 p-8 md:p-10">
          <p className="text-sm font-bold uppercase tracking-wider text-blue-500 mb-3">
            So What&apos;s the Catch?
          </p>

          <h2 className="text-2xl font-bold text-primary mb-4">
            There isn&apos;t one.
          </h2>

          <p className="text-textSub text-lg leading-8 max-w-4xl">
            I know what you&apos;re thinking: free websites — what&apos;s the catch?
            There is none. I&apos;m blessed with the tools and ability to build
            websites, along with the gift and desire to help anyone I can.
            Sharp Sites is simply my way of putting those things to use and
            helping businesses that could benefit from a professional website.
          </p>
        </div>
        <div className="mt-8 rounded-xl border border-border bg-surface p-6">
          <p className="text-textSub leading-7">
            Sharp Sites isn&apos;t here to compete with local agencies or take business
            away from professional developers. The goal is simply to help small
            businesses and community organizations that may not otherwise have the
            budget or access to get a professional website.
          </p>
        </div>
        <div className="mt-10 text-center">
          <p className="text-xl font-semibold text-primary">
            Good businesses deserve good websites — regardless of budget.
          </p>
        </div>

      </div>
    </main>
  );
}