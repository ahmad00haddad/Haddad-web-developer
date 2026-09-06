import { useState, useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { getProjects, SKILLS } from "../data";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ahmad Haddad - Computer Engineer & Web Developer" },
      {
        name: "description",
        content:
          "Ahmad Haddad, Computer Engineer and Web Developer building AI-powered web experiences. Selected work, projects and contact.",
      },
      { property: "og:title", content: "Ahmad Haddad - Computer Engineer & Web Developer" },
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

function Index() {
  const [projectsData, setProjectsData] = useState(() => getProjects());
  const [visibleCount, setVisibleCount] = useState(5);
  const MARQUEE_ITEMS = [...SKILLS, ...SKILLS];
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<typeof projectsData[0] | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <div className="olive-glow pointer-events-none fixed inset-0 opacity-70" aria-hidden="true" />

      {/* Floating Hover Image */}
      {hoveredImage && (
        <div 
          className="pointer-events-none fixed z-40 overflow-hidden rounded-xl shadow-2xl transition-all duration-75 ease-out"
          style={{ 
            left: mousePos.x, 
            top: mousePos.y, 
            transform: "translate(20px, -50%)",
            width: "280px",
            height: "180px"
          }}
        >
          <img src={hoveredImage} className="h-full w-full object-cover" alt="Preview" />
        </div>
      )}

      {/* Side Panel Modal */}
      {selectedProject && (
        <>
          <div 
            className="fixed inset-0 z-50 bg-background/60 backdrop-blur-sm transition-opacity" 
            onClick={() => setSelectedProject(null)} 
          />
          <div className="fixed right-0 top-0 bottom-0 z-50 flex w-full max-w-md flex-col overflow-y-auto border-l border-border/50 bg-card/95 p-8 shadow-2xl backdrop-blur-xl animate-in slide-in-from-right">
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute right-6 top-6 text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
            >
              [ Close ]
            </button>
            
            <div className="mt-8 flex-1">
              <div className="overflow-hidden rounded-lg">
                <img src={selectedProject.image} className="h-48 w-full object-cover" alt={selectedProject.name} />
              </div>
              
              <h2 className="mt-8 font-display text-4xl tracking-tight">{selectedProject.name}</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {selectedProject.tech.map((t) => (
                  <span key={t} className="glass-pill rounded-full px-3 py-1 text-[9px] uppercase tracking-[0.2em]">
                    {t}
                  </span>
                ))}
              </div>
              
              <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
                {selectedProject.desc}
              </p>
            </div>
            
            <div className="mt-12">
              <a 
                href={selectedProject.url} 
                target="_blank" 
                rel="noreferrer"
                className="block w-full rounded-full bg-foreground py-4 text-center text-xs font-bold uppercase tracking-[0.2em] text-background transition-transform hover:scale-[1.02] hover:opacity-90"
              >
                Visit Live Site ↗
              </a>
            </div>
          </div>
        </>
      )}

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
              <span className="block text-[10.5vw] lg:text-[8.6rem]">
                <ScrambleText text="Creative" />
              </span>
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
              /01 - About
            </p>
            <p className="font-display text-2xl leading-snug tracking-tight sm:text-3xl md:col-span-2">
              Engineering meets <span className="font-serif italic">taste</span> - I design and ship
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
              <div className="cursor-pointer md:absolute md:left-0 md:top-0 md:w-[54%]" onClick={() => setSelectedProject(projectsData[0])}>
                <Card
                  src={work1}
                  alt="Memoria"
                  tags={["REACT", "SUPABASE"]}
                  index="01"
                  title="Memoria"
                  ratio="aspect-[16/10]"
                />
              </div>
              <div className="mt-8 cursor-pointer md:absolute md:right-[2%] md:top-[16%] md:mt-0 md:w-[32%]" onClick={() => setSelectedProject(projectsData[1])}>
                <Card
                  src={work2}
                  alt="Nas Irbid"
                  tags={["REACT", "MAPS"]}
                  index="02"
                  title="Nas Irbid"
                  ratio="aspect-[4/5]"
                />
              </div>
              <div className="mt-8 cursor-pointer md:absolute md:bottom-0 md:left-[30%] md:mt-0 md:w-[44%]" onClick={() => setSelectedProject(projectsData[6])}>
                <Card
                  src={work3}
                  alt="Faii House"
                  tags={["GSAP", "JS"]}
                  index="03"
                  title="Faii House"
                  ratio="aspect-[16/10]"
                />
              </div>
            </div>

            {/* Repo list */}
            <div className="mt-16 rounded-xl border border-border bg-card/40 backdrop-blur-md">
              <div className="flex items-center justify-between border-b border-border px-5 py-3 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                <span>Repositories</span>
                <span>{projectsData.length}</span>
              </div>
              <ul className="relative">
                {projectsData.slice(0, visibleCount).map((project) => (
                  <li 
                    key={project.repo} 
                    className="border-b border-border last:border-b-0"
                    onMouseEnter={() => setHoveredImage(project.image)}
                    onMouseLeave={() => setHoveredImage(null)}
                  >
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="group grid w-full grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 px-5 py-4 text-left transition-colors hover:bg-foreground/5"
                    >
                      <span className="h-2 w-2 shrink-0 rounded-full bg-primary shadow-[0_0_10px_var(--primary)]" />
                      <span className="truncate font-mono text-xs text-muted-foreground transition-colors group-hover:text-foreground sm:text-sm">
                        {project.repo.replace("ahmad00haddad", "")}
                      </span>
                      <span className="shrink-0 text-[10px] uppercase tracking-[0.2em] text-muted-foreground transition-transform group-hover:translate-x-1">
                        ↗
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
              {visibleCount < projectsData.length && (
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

        {/* Skills Marquee */}
        <section className="relative overflow-hidden border-y border-border bg-card/20 py-8">
          <div className="flex w-[200%] animate-marquee items-center gap-16">
            {MARQUEE_ITEMS.map((skill, i) => (
              <span 
                key={i} 
                className="whitespace-nowrap font-display text-4xl font-extrabold uppercase tracking-tight text-foreground/10 transition-colors hover:text-foreground/40 sm:text-6xl"
              >
                {skill} <span className="mx-4 text-primary/40">✦</span>
              </span>
            ))}
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
              copyable={true}
            />
            <ContactItem
              label="WhatsApp"
              value="00962 79 925 6345"
              href="https://wa.me/962799256345"
              copyable={true}
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

function ScrambleText({ text }: { text: string }) {
  const [displayText, setDisplayText] = useState("");
  const chars = "!<>-_\\\\/[]{}—=+*^?#________";
  
  useEffect(() => {
    let iteration = 0;
    let interval: ReturnType<typeof setInterval>;
    
    interval = setInterval(() => {
      setDisplayText(
        text.split("").map((letter, index) => {
          if (index < iteration) {
            return text[index];
          }
          return chars[Math.floor(Math.random() * chars.length)];
        }).join("")
      );
      
      if (iteration >= text.length) {
        clearInterval(interval);
      }
      
      iteration += 1 / 3;
    }, 30);
    
    return () => clearInterval(interval);
  }, [text]);
  
  return <>{displayText || text}</>;
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

function ContactItem({ label, value, href, copyable = false }: { label: string; value: string; href: string; copyable?: boolean }) {
  const [copied, setCopied] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  const handleClick = (e: React.MouseEvent) => {
    if (copyable) {
      e.preventDefault();
      navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => { setIsHovered(false); setCopied(false); }}
      className="group relative bg-card/40 p-6 backdrop-blur-md transition-colors hover:bg-foreground/5 cursor-pointer"
    >
      <div className="flex items-center justify-between">
        <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{label}</p>
        {copyable && isHovered && (
          <span className="animate-in fade-in text-[9px] uppercase tracking-[0.2em] text-primary">
            {copied ? "Copied! ✔" : "Click to copy"}
          </span>
        )}
      </div>
      <p className="mt-3 truncate text-sm text-foreground transition-colors group-hover:text-primary">
        {value}
      </p>
    </a>
  );
}
