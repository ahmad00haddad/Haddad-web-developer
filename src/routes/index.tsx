import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ahmad Haddad — Computer Engineer & Web Developer" },
      {
        name: "description",
        content:
          "Ahmad Haddad, Computer Engineer and Web Developer building AI-powered web experiences. Selected work, projects and contact.",
      },
      { property: "og:title", content: "Ahmad Haddad — Computer Engineer & Web Developer" },
      {
        property: "og:description",
        content: "Computer Engineer & Web Developer utilizing AI to build web experiences.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const repos = [
  "ahmad00haddad/memoria",
  "ahmad00haddad/nas-irbid",
  "ahmad00haddad/haddad-rate-card",
  "ahmad00haddad/petvan",
  "ahmad00haddad/fazaa-jo",
  "ahmad00haddad/lovable-production-hub",
  "ahmad00haddad/faiihouse",
  "ahmad00haddad/ahmadhaddad",
  "ahmad00haddad/ababneh-security",
  "ahmad00haddad/Haddad-web-developer",
  "ahmad00haddad/alfyaa",
  "ahmad00haddad/jeeran",
  "ahmad00haddad/mouj-studio",
  "ahmad00haddad/alen-jaber",
];

function Index() {
  const [visibleCount, setVisibleCount] = useState(5);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <div className="olive-glow pointer-events-none fixed inset-0 opacity-70" aria-hidden="true" />

      <div className="relative z-10">
        {/* Nav */}
        <header className="mx-auto flex max-w-7xl items-center justify-between px-5 py-6 sm:px-8">
          <a
            href="#top"
            className="font-display text-sm font-bold tracking-[0.25em] text-foreground"
          >
            || Ahmad ||
          </a>
          <nav className="flex items-center gap-5 text-[11px] uppercase tracking-[0.18em] text-muted-foreground sm:gap-8 sm:text-xs">
            <a className="transition-colors hover:text-foreground" href="#work">
              Projects
            </a>
            <a className="transition-colors hover:text-foreground" href="#about">
              About Me
            </a>
            <a className="transition-colors hover:text-foreground" href="#contact">
              Contact
            </a>
          </nav>
        </header>

        {/* Hero */}
        <section id="top" className="mx-auto max-w-7xl px-5 pb-14 pt-10 sm:px-8 sm:pt-16">
          <div className="relative">
            <div className="pointer-events-none absolute inset-0 hidden md:block">
              <img
                src={hero1}
                alt="Dark architectural glass detail"
                width={900}
                height={1200}
                className="absolute left-[6%] top-[8%] h-56 w-40 rounded-sm object-cover opacity-90 shadow-2xl lg:h-72 lg:w-52"
              />
              <img
                src={hero2}
                alt="Circuit board glowing in the dark"
                width={1200}
                height={800}
                className="absolute right-[4%] top-[28%] h-40 w-64 rounded-sm object-cover opacity-90 shadow-2xl lg:h-52 lg:w-80"
              />
              <img
                src={work2}
                alt="Abstract dark green sculpture"
                loading="lazy"
                width={900}
                height={1100}
                className="absolute bottom-[2%] left-[38%] h-40 w-32 rounded-sm object-cover opacity-80 shadow-2xl lg:h-52 lg:w-40"
              />
            </div>

            <h1 className="relative z-20 text-center font-display font-extrabold uppercase leading-[0.82] tracking-tighter">
              <span className="block text-[10.5vw] lg:text-[8.6rem]">Creative</span>
              <span className="block text-[10.5vw] italic lg:text-[8.6rem]">
                <span className="font-serif normal-case">Dev</span>
              </span>
            </h1>

            <div className="mt-10 grid gap-8 md:mt-16 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
              <p className="relative z-20 max-w-md text-sm leading-relaxed text-muted-foreground">
                <span className="mr-2 font-serif text-5xl leading-none text-foreground/40 align-middle">
                  (
                </span>
                HELLO! I&apos;m Ahmad Haddad, a Computer Engineer &amp; Web Developer utilizing AI
                to build web experiences.
                <span className="ml-2 font-serif text-5xl leading-none text-foreground/40 align-middle">
                  )
                </span>
              </p>
              <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground md:text-right">
                Amman, Jordan
                <span className="mx-2 text-primary">/</span>
                Available
              </div>
            </div>

            {/* Mobile image column */}
            <div className="mt-10 grid grid-cols-2 gap-3 md:hidden">
              <img
                src={hero1}
                alt="Dark architectural glass detail"
                width={900}
                height={1200}
                className="h-44 w-full rounded-sm object-cover opacity-80"
              />
              <img
                src={hero2}
                alt="Circuit board glowing in the dark"
                width={1200}
                height={800}
                className="h-44 w-full rounded-sm object-cover opacity-80"
              />
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <div className="grid gap-6 border-y border-border py-10 md:grid-cols-3">
            <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              /01 — About
            </p>
            <p className="font-display text-2xl leading-snug tracking-tight sm:text-3xl md:col-span-2">
              Engineering meets <span className="font-serif italic">taste</span> — I design and ship
              fast, modern products with AI in the loop.
            </p>
          </div>
        </section>

        {/* Work */}
        <section id="work" className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-6 select-none text-center font-display text-[15vw] font-extrabold uppercase leading-none tracking-[0.18em] text-foreground/[0.05]"
          >
            Work
          </div>

          <span className="pointer-events-none absolute -left-6 top-1/3 hidden rotate-90 origin-left text-[10px] uppercase tracking-[0.35em] text-muted-foreground lg:block">
            UX / UI
          </span>
          <span className="pointer-events-none absolute -right-6 top-1/2 hidden -rotate-90 origin-right text-[10px] uppercase tracking-[0.35em] text-muted-foreground lg:block">
            Since 2024
          </span>

          <div className="relative z-10 pt-24">
            <div className="md:relative md:h-[860px]">
              <Card
                src={work1}
                alt="Memoria App"
                tags={["REACT", "SUPABASE"]}
                index="01"
                title="Memoria"
                className="md:absolute md:left-0 md:top-0 md:w-[54%]"
                ratio="aspect-[16/10]"
              />
              <Card
                src={work2}
                alt="Nas Irbid Map"
                tags={["REACT", "MAPS"]}
                index="02"
                title="Nas Irbid"
                className="mt-8 md:absolute md:right-[2%] md:top-[16%] md:mt-0 md:w-[32%]"
                ratio="aspect-[4/5]"
              />
              <Card
                src={work3}
                alt="Faii House Pricing"
                tags={["GSAP", "JS"]}
                index="03"
                title="Faii House"
                className="mt-8 md:absolute md:bottom-0 md:left-[30%] md:mt-0 md:w-[44%]"
                ratio="aspect-[16/10]"
              />
            </div>

            {/* Repo list */}
            <div className="mt-16 rounded-xl border border-border bg-card/40 backdrop-blur-md">
              <div className="flex items-center justify-between border-b border-border px-5 py-3 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                <span>Repositories</span>
                <span>{repos.length}</span>
              </div>
              <ul>
                {repos.slice(0, visibleCount).map((repo) => (
                  <li key={repo} className="border-b border-border last:border-b-0">
                    <a
                      href={`https://github.com/${repo}`}
                      target="_blank"
                      rel="noreferrer"
                      className="group grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 px-5 py-4 transition-colors hover:bg-foreground/5"
                    >
                      <span className="h-2 w-2 shrink-0 rounded-full bg-primary shadow-[0_0_10px_var(--primary)]" />
                      <span className="truncate font-mono text-xs text-muted-foreground transition-colors group-hover:text-foreground sm:text-sm">
                        {repo}
                      </span>
                      <span className="shrink-0 text-[10px] uppercase tracking-[0.2em] text-muted-foreground transition-transform group-hover:translate-x-1">
                        ↗
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
              {visibleCount < repos.length && (
                <div className="border-t border-border p-4 text-center">
                  <button
                    onClick={() => setVisibleCount((prev) => prev + 5)}
                    className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground transition-colors hover:text-foreground"
                  >
                    View More +
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Contact */}
        <footer id="contact" className="mx-auto max-w-7xl px-5 pb-16 pt-24 sm:px-8">
          <h2 className="font-display text-[18vw] font-extrabold uppercase leading-[0.82] tracking-tighter sm:text-[14vw]">
            Let&apos;s <span className="font-serif italic normal-case">Talk</span>
          </h2>

          <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border sm:grid-cols-3">
            <ContactItem
              label="LinkedIn"
              value="/in/ahmad00haddad"
              href="https://www.linkedin.com/in/ahmad00haddad/"
            />
            <ContactItem
              label="Email"
              value="ahmad000haddad@gmail.com"
              href="mailto:ahmad000haddad@gmail.com"
            />
            <ContactItem
              label="WhatsApp"
              value="00962 79 925 6345"
              href="https://wa.me/962799256345"
            />
          </div>

          <p className="mt-10 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            © {new Date().getFullYear()} Ahmad Haddad
          </p>
        </footer>
      </div>
    </div>
  );
}

function Card({
  src,
  alt,
  tags,
  index,
  title,
  className,
  ratio,
}: {
  src: string;
  alt: string;
  tags: string[];
  index: string;
  title: string;
  className?: string;
  ratio: string;
}) {
  return (
    <figure className={`group relative ${className ?? ""}`}>
      <div className={`relative overflow-hidden rounded-sm ${ratio}`}>
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute left-4 top-4 flex gap-2">
          {tags.map((t) => (
            <span
              key={t}
              className="glass-pill rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.2em]"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
      <figcaption className="mt-3 flex items-baseline justify-between text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
        <span className="truncate font-display text-xs tracking-tight text-foreground">
          {title}
        </span>
        <span>/{index}</span>
      </figcaption>
    </figure>
  );
}

function ContactItem({ label, value, href }: { label: string; value: string; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group bg-card/40 p-6 backdrop-blur-md transition-colors hover:bg-foreground/5"
    >
      <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{label}</p>
      <p className="mt-3 truncate text-sm text-foreground transition-colors group-hover:text-primary">
        {value}
      </p>
    </a>
  );
}
