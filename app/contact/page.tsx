export default function ContactPage() {
    return (
      <main className="bg-background min-h-screen px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-2xl">
  
          <h1 className="text-4xl font-black text-primary mb-6">
            Contact
          </h1>
  
          <p className="text-textSub mb-10">
            Have a project in mind? Send me a message and I’ll get back to you.
          </p>
  
          <form
            action="https://formspree.io/f/xkopalon"
            method="POST"
            className="space-y-6"
          >
            
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full rounded-lg border border-border p-3 bg-white"
            />
  
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full rounded-lg border border-border p-3 bg-white"
            />
  
            <textarea
              name="message"
              placeholder="Tell me about your project..."
              required
              rows={5}
              className="w-full rounded-lg border border-border p-3 bg-white"
            ></textarea>
  
            <button
              type="submit"
              className="w-full rounded-full bg-primary py-3 text-white font-semibold hover:bg-blue-400 transition"
            >
              Send Message
            </button>
          </form>
  
          <p className="mt-6 text-sm text-textSub text-center">
            Or email me directly at{" "}
            <span className="text-primary font-medium">
              sharpnackmax@gmail.com
            </span>
          </p>
  
        </div>
      </main>
    );
  }