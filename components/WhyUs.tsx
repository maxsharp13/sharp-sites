export default function WhyUs() {
    return (
      <section className="bg-background px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-3xl font-black text-primary mb-4">
            Why Choose Sharp Sites
          </h2>
  
          <p className="mx-auto mb-12 max-w-2xl text-textSub">
            I help small businesses stand out online with clean, high-performing websites
            built to convert visitors into real customers.
          </p>
  
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-border bg-surface p-6 shadow-sm">
              <h3 className="text-lg font-bold text-primary mb-2">
                Fast Turnaround
              </h3>
              <p className="text-sm text-textSub">
                Get your website live quickly without sacrificing quality.
              </p>
            </div>
  
            <div className="rounded-xl border border-border bg-surface p-6 shadow-sm">
              <h3 className="text-lg font-bold text-primary mb-2">
                Built to Convert
              </h3>
              <p className="text-sm text-textSub">
                Designed to turn visitors into paying customers.
              </p>
            </div>
  
            <div className="rounded-xl border border-border bg-surface p-6 shadow-sm">
              <h3 className="text-lg font-bold text-primary mb-2">
                Mobile First
              </h3>
              <p className="text-sm text-textSub">
                Optimized for phones, tablets, and desktops.
              </p>
            </div>
  
            <div className="rounded-xl border border-border bg-surface p-6 shadow-sm">
              <h3 className="text-lg font-bold text-primary mb-2">
                Tulsa Based
              </h3>
              <p className="text-sm text-textSub">
                Local developer focused on helping Tulsa businesses grow.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }