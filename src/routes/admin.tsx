import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { getProjects, saveProjects } from "../data";

export const Route = createFileRoute("/admin")({
  component: AdminPage,
});

function AdminPage() {
  const [projects, setProjects] = useState<any[]>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setProjects(getProjects());
    setIsClient(true);
  }, []);

  const handleSave = () => {
    saveProjects(projects);
    alert("Saved locally! Return to the homepage to see changes. Note: Requires Supabase for permanent storage.");
  };

  const handleProjectChange = (index: number, field: string, value: string) => {
    const updated = [...projects];
    updated[index] = { ...updated[index], [field]: value };
    setProjects(updated);
  };

  const handleTechChange = (index: number, value: string) => {
    const updated = [...projects];
    updated[index] = { ...updated[index], tech: value.split(",").map(t => t.trim()) };
    setProjects(updated);
  };

  const moveUp = (index: number) => {
    if (index === 0) return;
    const updated = [...projects];
    const temp = updated[index - 1];
    updated[index - 1] = updated[index];
    updated[index] = temp;
    setProjects(updated);
  };

  const moveDown = (index: number) => {
    if (index === projects.length - 1) return;
    const updated = [...projects];
    const temp = updated[index + 1];
    updated[index + 1] = updated[index];
    updated[index] = temp;
    setProjects(updated);
  };

  const addNewProject = () => {
    setProjects([{
      id: "new-" + Date.now(),
      repo: "username/new-repo",
      name: "New Project",
      desc: "Project description goes here.",
      tech: ["REACT"],
      url: "https://github.com",
      image: ""
    }, ...projects]);
  };

  const removeProject = (index: number) => {
    if(confirm("Are you sure you want to remove this project?")) {
      const updated = projects.filter((_, i) => i !== index);
      setProjects(updated);
    }
  };

  if (!isClient) return null;

  return (
    <div className="min-h-screen bg-background p-8 text-foreground font-sans">
      <div className="mx-auto max-w-5xl">
        
        <header className="mb-12 flex items-center justify-between border-b border-border pb-6">
          <div>
            <h1 className="font-display text-4xl font-extrabold tracking-tight">System Dashboard</h1>
            <p className="mt-2 text-sm text-muted-foreground uppercase tracking-[0.2em]">Manage Portfolio Data</p>
          </div>
          <div className="flex gap-4">
            <button
              onClick={addNewProject}
              className="rounded-full border border-border bg-card/40 px-6 py-3 text-xs uppercase tracking-[0.2em] transition-colors hover:bg-foreground/5"
            >
              + Add Project
            </button>
            <button
              onClick={handleSave}
              className="rounded-full bg-primary px-8 py-3 text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground transition-all hover:scale-105 hover:bg-primary/90"
            >
              Save Changes
            </button>
          </div>
        </header>
        
        <div className="mb-10 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-6 backdrop-blur-md">
          <p className="text-sm leading-relaxed text-yellow-200/80">
            <strong className="text-yellow-400">Local Environment:</strong> Changes made here are saved to your browser's local storage for instant previewing on the main page. 
            To make these changes permanent across all devices, we need to wire this dashboard to a <strong className="text-yellow-400">Supabase</strong> database.
          </p>
        </div>

        <div className="space-y-6">
          {projects.map((proj: any, idx: number) => (
            <div key={proj.id} className="group relative rounded-2xl border border-border bg-card/40 p-8 backdrop-blur-sm transition-colors hover:border-border/80">
              <div className="absolute right-6 top-6 flex gap-2 opacity-0 transition-opacity group-hover:opacity-100">
                <button onClick={() => moveUp(idx)} className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-background transition-colors hover:bg-foreground/10">↑</button>
                <button onClick={() => moveDown(idx)} className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-background transition-colors hover:bg-foreground/10">↓</button>
                <button onClick={() => removeProject(idx)} className="flex h-8 w-8 items-center justify-center rounded-full border border-destructive/50 bg-destructive/10 text-destructive transition-colors hover:bg-destructive/20">✕</button>
              </div>
              
              <div className="mb-6 flex items-center gap-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground/5 font-mono text-xs text-muted-foreground">
                  {(idx + 1).toString().padStart(2, '0')}
                </span>
                <input
                  type="text"
                  value={proj.name}
                  onChange={(e) => handleProjectChange(idx, "name", e.target.value)}
                  className="bg-transparent font-display text-2xl font-bold focus:outline-none"
                  placeholder="Project Name"
                />
              </div>
              
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">GitHub Repo Slug</label>
                  <input
                    type="text"
                    value={proj.repo}
                    onChange={(e) => handleProjectChange(idx, "repo", e.target.value)}
                    className="w-full rounded-lg border border-border bg-background/50 p-3 text-sm font-mono focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Live URL</label>
                  <input
                    type="text"
                    value={proj.url}
                    onChange={(e) => handleProjectChange(idx, "url", e.target.value)}
                    className="w-full rounded-lg border border-border bg-background/50 p-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Tech Stack (comma separated)</label>
                  <input
                    type="text"
                    value={(proj.tech || []).join(", ")}
                    onChange={(e) => handleTechChange(idx, e.target.value)}
                    className="w-full rounded-lg border border-border bg-background/50 p-3 text-sm font-mono focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Description</label>
                  <textarea
                    value={proj.desc}
                    onChange={(e) => handleProjectChange(idx, "desc", e.target.value)}
                    rows={3}
                    className="w-full rounded-lg border border-border bg-background/50 p-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
