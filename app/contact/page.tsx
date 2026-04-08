export default function ContactPage() {
    return (
      <main className="bg-background min-h-screen px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
  
          <h1 className="text-4xl font-black text-primary mb-6">
            Start Your Project
          </h1>
  
          <p className="text-textSub mb-10">
            Tell me what your vision is and lets get to work.
          </p>
  
          <div className="rounded-xl border border-border bg-surface p-10 shadow-sm">
            <p className="text-textSub mb-6">
              Click below to send me an email with your project details.
            </p>
  
            <a
              href="mailto:maxsharpnack@gmail.com?subject=Project Inquiry - Sharp Sites&body=Hi Max,%0D%0A%0D%0AI’m interested in getting a website built.%0D%0A%0D%0ABusiness Name:%0D%0AWhat I need:%0D%0ATimeline:%0D%0A%0D%0AThanks!"
              className="inline-block rounded-full bg-blue-500 px-6 py-3 text-white font-semibold shadow-md hover:shadow-lg hover:scale-[1.02] transition-all"
            >
              Email Me
            </a>
          </div>
  
        </div>
      </main>
    );
  }