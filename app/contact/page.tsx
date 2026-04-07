export default function ContactPage() {
    return (
      <main className="bg-background min-h-screen px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-black text-primary mb-6">
            Contact
          </h1>
  
          <p className="text-textSub mb-10">
            Let’s build something great together.
          </p>
  
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-lg border border-border p-3 bg-surface"
            />
  
            <input
              type="email"
              placeholder="Your Email"
              className="w-full rounded-lg border border-border p-3 bg-surface"
            />
  
            <textarea
              placeholder="Your Message"
              className="w-full rounded-lg border border-border p-3 bg-surface"
              rows={5}
            />
  
            <button
              type="submit"
              className="w-full rounded-full bg-primary py-3 font-semibold text-white hover:bg-blue-400"
            >
              Send Message
            </button>
          </form>
        </div>
      </main>
    );
  }