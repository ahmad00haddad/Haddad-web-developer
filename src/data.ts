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
  order_index: number;
  /** Resolved, displayable image (uploaded image or a bundled fallback). */
  image: string;
};

export const initialProjectsData: Project[] = [];

/** Turn a stored image reference (storage path or absolute URL) into a usable src. */
export async function resolveImageUrl(imageUrl: string | null, fallbackIndex: number): Promise<string> {
  const fallback = FALLBACK_IMAGES[fallbackIndex % FALLBACK_IMAGES.length]!;
  if (!imageUrl) return fallback;
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
      image: await resolveImageUrl(row.image_url, index),
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
