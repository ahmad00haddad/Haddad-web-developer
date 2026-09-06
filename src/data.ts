import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";

export const SKILLS = [
  "REACT.JS", "TYPESCRIPT", "TAILWIND CSS", "SUPABASE",
  "FRAMER MOTION", "GSAP 3", "TANSTACK QUERY", "RADIX UI", "PWA"
];

export const initialProjectsData = [
  {
    id: "memoria",
    repo: "ahmad00haddad/memoria",
    name: "Memoria",
    desc: "The premier platform for booking wedding photographers seamlessly. Built with a 'Don\\'t Make Me Think' philosophy, it transforms complex booking matrices into a delightful, zero-friction experience.",
    tech: ["REACT", "SUPABASE", "TAILWIND"],
    url: "https://github.com/ahmad00haddad/memoria",
    image: work1
  },
  {
    id: "nas-irbid",
    repo: "ahmad00haddad/nas-irbid",
    name: "Nas Irbid",
    desc: "A living archive of Irbid city\\'s memory. Documenting stories of ordinary people and ancient professions through an interactive map and a cinematic documentary experience.",
    tech: ["REACT", "MAPS", "FRAMER MOTION"],
    url: "https://github.com/ahmad00haddad/nas-irbid",
    image: hero1
  },
  {
    id: "haddad-rate-card",
    repo: "ahmad00haddad/haddad-rate-card",
    name: "Haddad Rate Card",
    desc: "A minimalist digital rate card providing an elegant breakdown of web development services and pricing for prospective clients.",
    tech: ["REACT", "TAILWIND", "UI/UX"],
    url: "https://github.com/ahmad00haddad/haddad-rate-card",
    image: work2
  },
  {
    id: "petvan",
    repo: "ahmad00haddad/petvan",
    name: "PetVan",
    desc: "Revolutionizing pet care in Jordan. A premium mobile vet clinic & salon booking PWA with a cinematic glassmorphism design.",
    tech: ["PWA", "GLASSMORPHISM", "REACT"],
    url: "https://github.com/ahmad00haddad/petvan",
    image: work3
  },
  {
    id: "fazaa-jo",
    repo: "ahmad00haddad/fazaa-jo",
    name: "Fazaa-JO",
    desc: "An emergency help Progressive Web App. Instantly broadcast requests for roadside assistance, medical needs, or urgent rides to volunteers in your geo-fenced area.",
    tech: ["REACT 18", "SUPABASE", "REACT QUERY"],
    url: "https://github.com/ahmad00haddad/fazaa-jo",
    image: hero2
  },
  {
    id: "lovable-production-hub",
    repo: "ahmad00haddad/lovable-production-hub",
    name: "Lovable Production Hub",
    desc: "A centralized, real-time dashboard for film crews. Track project readiness, equipment status, and crew tasks instantly before the shoot day.",
    tech: ["REACT", "REALTIME", "VITE"],
    url: "https://github.com/ahmad00haddad/lovable-production-hub",
    image: work1
  },
  {
    id: "faiihouse",
    repo: "ahmad00haddad/faiihouse",
    name: "Faii House",
    desc: "A cinematic, highly intelligent pricing engine built for a premier video production agency, turning a complex pricing matrix into a delightful mobile-first experience.",
    tech: ["GSAP", "JS", "CSS GRID"],
    url: "https://github.com/ahmad00haddad/faiihouse",
    image: hero1
  },
  {
    id: "ahmadhaddad",
    repo: "ahmad00haddad/ahmadhaddad",
    name: "Ahmad Haddad Portfolio",
    desc: "The source code for my personal digital portfolio and creative playground.",
    tech: ["REACT", "TAILWIND"],
    url: "https://github.com/ahmad00haddad/ahmadhaddad",
    image: hero2
  },
  {
    id: "ababneh-security",
    repo: "ahmad00haddad/ababneh-security",
    name: "Ababneh Security",
    desc: "Smart home guardian and security systems landing page with modern dark aesthetics.",
    tech: ["UI/UX", "WEB"],
    url: "https://github.com/ahmad00haddad/ababneh-security",
    image: work2
  },
  {
    id: "Haddad-web-developer",
    repo: "ahmad00haddad/Haddad-web-developer",
    name: "Digital Canvas",
    desc: "AI-powered digital canvas and creative experiments repository.",
    tech: ["AI", "REACT"],
    url: "https://github.com/ahmad00haddad/Haddad-web-developer",
    image: work3
  },
  {
    id: "alfyaa",
    repo: "ahmad00haddad/alfyaa",
    name: "Alfyaa",
    desc: "E-commerce or enterprise solution interface built with modern web technologies.",
    tech: ["REACT", "TAILWIND"],
    url: "https://github.com/ahmad00haddad/alfyaa",
    image: work1
  },
  {
    id: "jeeran",
    repo: "ahmad00haddad/jeeran",
    name: "Jeeran",
    desc: "Community neighborhood application designed for hyper-local connectivity.",
    tech: ["WEB", "UI/UX"],
    url: "https://github.com/ahmad00haddad/jeeran",
    image: hero1
  },
  {
    id: "mouj-studio",
    repo: "ahmad00haddad/mouj-studio",
    name: "Mouj Studio",
    desc: "Creative agency portfolio showcasing brand identities, digital products, and cinematic experiences.",
    tech: ["BRANDING", "WEB"],
    url: "https://github.com/ahmad00haddad/mouj-studio",
    image: work2
  },
  {
    id: "alen-jaber",
    repo: "ahmad00haddad/alen-jaber",
    name: "Alen Jaber",
    desc: "Personal brand portfolio for a creative professional, featuring minimalist typography.",
    tech: ["REACT", "DESIGN"],
    url: "https://github.com/ahmad00haddad/alen-jaber",
    image: hero2
  }
];

export const getProjects = () => {
  if (typeof window === 'undefined') return initialProjectsData;
  const stored = localStorage.getItem('ahmad_projects');
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch (e) {
      return initialProjectsData;
    }
  }
  return initialProjectsData;
};

export const saveProjects = (projects: any) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('ahmad_projects', JSON.stringify(projects));
  }
};
