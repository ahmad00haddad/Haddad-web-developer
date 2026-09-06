import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import { supabase } from "@/integrations/supabase/client";

export const SKILLS = [
  "REACT.JS", "TYPESCRIPT", "TAILWIND CSS", "SUPABASE",
  "FRAMER MOTION", "GSAP 3", "TANSTACK QUERY", "RADIX UI", "PWA"
];

export const BUCKET = "portfolio_images";


const ESTIMATED_PRICES: Record<string, string> = {
  "memoria": "1,800 - 3,000 JOD",
  "nas-irbid": "1,500 - 2,500 JOD",
  "haddad-rate-card": "350 - 500 JOD",
  "petvan": "1,800 - 3,500 JOD",
  "fazaa-jo": "2,500 - 4,500 JOD",
  "lovable-production-hub": "2,000 - 3,500 JOD",
  "faiihouse": "1,200 - 2,000 JOD",
  "ahmadhaddad": "400 - 700 JOD",
  "ababneh-security": "450 - 800 JOD",
  "Haddad-web-developer": "400 - 700 JOD",
  "alfyaa": "1,500 - 3,000 JOD",
  "jeeran": "1,800 - 3,500 JOD",
  "mouj-studio": "800 - 1,500 JOD",
  "alen-jaber": "350 - 600 JOD"
};

export const FALLBACK_IMAGES = [work1, hero1, work2, work3, hero2];

export type Project = {
  id: string;
  slug: string | null;
  name: string;
  repo: string;
  url: string;
  desc: string;
  tech: string[];
  image_url: string | null;
  estimatedPrice?: string;
  order_index: number;
  /** Resolved, displayable image (uploaded image or a bundled fallback). */
  image: string;
};

export const initialProjectsData: Project[] = [];

/** Turn a stored image reference (storage path or absolute URL) into a usable src. */
export async function resolveImageUrl(imageUrl: string | null, fallbackIndex: number, projectUrl?: string): Promise<string> {
  const fallback = FALLBACK_IMAGES[fallbackIndex % FALLBACK_IMAGES.length]!;
  if (!imageUrl) {
    if (projectUrl) return `https://image.thum.io/get/width/1200/crop/900/${projectUrl}`;
    return fallback;
  }
  if (/^https?:\/\//.test(imageUrl) || imageUrl.startsWith("/")) return imageUrl;
  const { data } = await supabase.storage.from(BUCKET).createSignedUrl(imageUrl, 60 * 60 * 24 * 7);
  return data?.signedUrl ?? fallback;
}

/** Fetch all projects (ordered) from the database. */
export async function getProjects(): Promise<Project[]> {
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .order("order_index", { ascending: true });

  if (error || !data) return [];

  return Promise.all(
    data.map(async (row, index) => ({
      id: row.id,
      slug: row.slug,
      name: row.name,
      repo: row.repo,
      url: row.url,
      desc: row.desc,
      tech: (row.tech ?? []) as string[],
      image_url: row.image_url,
      order_index: row.order_index,
      estimatedPrice: ESTIMATED_PRICES[row.slug || ""] || "Price on request",
      image: await resolveImageUrl(row.image_url, index, row.url),
    })),
  );
}

/** Persist the full list, writing order_index from array position. */
export async function saveProjects(projects: Project[]): Promise<void> {
  const rows = projects.map((p, index) => ({
    id: p.id,
    slug: p.slug ?? null,
    name: p.name,
    repo: p.repo,
    url: p.url,
    desc: p.desc,
    tech: p.tech,
    image_url: p.image_url,
    order_index: index,
  }));

  const { error } = await supabase.from("projects").upsert(rows, { onConflict: "id" });
  if (error) throw error;
}

export async function deleteProject(id: string): Promise<void> {
  const { error } = await supabase.from("projects").delete().eq("id", id);
  if (error) throw error;
}

/** Upload a new image for a project and store its path on the row. */
export async function uploadProjectImage(projectId: string, file: File): Promise<string> {
  const ext = file.name.split(".").pop() ?? "jpg";
  const path = `${projectId}/${Date.now()}.${ext}`;

  const { error: uploadError } = await supabase.storage
    .from(BUCKET)
    .upload(path, file, { upsert: true, cacheControl: "3600" });
  if (uploadError) throw uploadError;

  const { error } = await supabase.from("projects").update({ image_url: path }).eq("id", projectId);
  if (error) throw error;

  return path;
}
