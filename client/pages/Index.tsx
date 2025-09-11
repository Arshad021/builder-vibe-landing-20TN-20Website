import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-accent/30">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60rem_30rem_at_50%_-10%,hsl(var(--primary)/0.25),transparent_40%)]" />
        <div className="container mx-auto grid items-center gap-10 py-24 lg:grid-cols-2 lg:py-32">
          <div>
            <h1 className="max-w-xl text-4xl font-extrabold tracking-tight sm:text-5xl">
              Ship stunning apps, faster than ever
            </h1>
            <p className="mt-4 max-w-xl text-lg text-muted-foreground">
              TecNext is a production‑ready starter with a modern design system, delightful UX, and batteries‑included tooling so you can focus on your product.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link to="/p/contact" className="rounded-md bg-primary px-5 py-3 font-semibold text-primary-foreground shadow hover:opacity-90">
                Start building
              </Link>
              <Link to="/p/docs" className="rounded-md border px-5 py-3 font-semibold text-foreground hover:bg-accent">
                Read the docs
              </Link>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-muted-foreground">
              <span>TypeScript • React Router • Vite • Express</span>
            </div>
          </div>
          <div className="relative">
            <div className="mx-auto aspect-[16/10] w-full max-w-[620px] overflow-hidden rounded-xl border bg-card shadow-xl">
              <div className="h-full w-full bg-gradient-to-br from-primary/20 via-transparent to-primary/10" />
            </div>
            <div className="pointer-events-none absolute -inset-10 -z-10 blur-3xl [mask-image:radial-gradient(50%_50%_at_50%_50%,black,transparent)]" aria-hidden="true" />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Beautiful by default",
              desc: "Polished typography, spacing, and components that feel premium out of the box.",
            },
            { title: "Production‑ready", desc: "Built‑in routing, API layer, testing, and sensible configs." },
            { title: "Accessible", desc: "Keyboard‑friendly interactions and WCAG‑aware colors." },
            { title: "Performant", desc: "Vite + code‑splitting + best‑in‑class libraries." },
            { title: "Flexible", desc: "Customize tokens, components, and pages to your brand." },
            { title: "Type‑safe", desc: "End‑to‑end TypeScript for confidence and speed." },
          ].map((f) => (
            <div key={f.title} className="rounded-xl border bg-card p-6 shadow-sm">
              <div className="h-9 w-9 rounded-md bg-primary/10" />
              <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto pb-24">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-primary/70 p-8 text-primary-foreground shadow-lg sm:p-12">
          <div className="grid items-center gap-6 sm:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold">Ready to launch faster?</h2>
              <p className="mt-2 text-sm/6 opacity-90">Get started with a beautiful foundation and focus on what makes your product unique.</p>
            </div>
            <div className="flex justify-end gap-3">
              <Link to="/p/pricing" className="rounded-md bg-white/10 px-5 py-3 font-semibold text-white backdrop-blur hover:bg-white/15">
                See pricing
              </Link>
              <Link to="/p/contact" className="rounded-md bg-white px-5 py-3 font-semibold text-foreground">
                Talk to us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
