import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/calculator")({
  component: CalculatorPage,
});

function CalculatorPage() {
  const [projectType, setProjectType] = useState("landing");
  const [pages, setPages] = useState<number>(1);
  const [designNeeded, setDesignNeeded] = useState(false);
  const [isRush, setIsRush] = useState(false);
  const [maintenance, setMaintenance] = useState("none");

  const calculatePrice = () => {
    let baseMin = 0;
    let baseMax = 0;

    switch (projectType) {
      case "landing":
        baseMin = 350;
        baseMax = 600;
        break;
      case "corporate":
        baseMin = 700;
        baseMax = 1200;
        break;
      case "ecommerce":
        baseMin = 800;
        baseMax = 1500;
        break;
      case "webapp":
        baseMin = 1500;
        baseMax = 3500;
        break;
    }

    // Add for extra pages
    if (pages > 5 && projectType !== "landing") {
      baseMin += (pages - 5) * 25;
      baseMax += (pages - 5) * 40;
    } else if (pages > 1 && projectType === "landing") {
      baseMin += (pages - 1) * 35;
      baseMax += (pages - 1) * 50;
    }

    // Multipliers
    if (designNeeded) {
      baseMin *= 1.2;
      baseMax *= 1.2;
    }

    if (isRush) {
      baseMin *= 1.3;
      baseMax *= 1.3;
    }

    return { min: Math.round(baseMin), max: Math.round(baseMax) };
  };

  const { min, max } = calculatePrice();

  let monthly = 0;
  if (maintenance === "standard") monthly = 30;
  if (maintenance === "premium") monthly = 100;

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30">
      <div className="olive-glow pointer-events-none fixed inset-0 opacity-40" aria-hidden="true" />
      
      <div className="relative mx-auto max-w-4xl p-6 pt-12 sm:p-12">
        <header className="mb-12 border-b border-border pb-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl">Project Estimator</h1>
              <p className="mt-2 text-sm text-muted-foreground uppercase tracking-[0.2em]">Intelligent Pricing Calculator</p>
            </div>
            <Link to="/" className="text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors">
              [ Back to Home ]
            </Link>
          </div>
        </header>

        <div className="grid gap-12 md:grid-cols-[1fr_350px]">
          {/* Controls */}
          <div className="space-y-10">
            {/* Project Type */}
            <section className="space-y-4">
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">1. Project Type</h2>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-2">
                {[
                  { id: "landing", label: "Landing Page", desc: "Single page overview" },
                  { id: "corporate", label: "Corporate Site", desc: "Multi-page business site" },
                  { id: "ecommerce", label: "E-Commerce", desc: "Online store (Cart, Checkout)" },
                  { id: "webapp", label: "Web Application", desc: "Complex logic, auth, database" },
                ].map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setProjectType(type.id)}
                    className={`flex flex-col items-start gap-1 rounded-xl border p-4 text-left transition-all ${
                      projectType === type.id
                        ? "border-primary bg-primary/10 shadow-[0_0_15px_var(--primary)_inset]"
                        : "border-border bg-card/20 hover:border-border/80 hover:bg-card/40"
                    }`}
                  >
                    <span className="font-mono text-sm font-semibold">{type.label}</span>
                    <span className="text-[10px] text-muted-foreground">{type.desc}</span>
                  </button>
                ))}
              </div>
            </section>

            {/* Scope */}
            <section className="space-y-4">
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">2. Scope & Complexity</h2>
              <div className="rounded-xl border border-border bg-card/20 p-5 backdrop-blur-sm">
                <label className="flex items-center justify-between text-sm">
                  <span className="font-mono">Number of Pages / Views</span>
                  <span className="text-primary font-bold">{pages}</span>
                </label>
                <input
                  type="range"
                  min="1"
                  max="30"
                  value={pages}
                  onChange={(e) => setPages(parseInt(e.target.value))}
                  className="mt-4 w-full accent-primary"
                />
              </div>
            </section>

            {/* Add-ons */}
            <section className="space-y-4">
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">3. Requirements</h2>
              <div className="space-y-3">
                <label className="flex cursor-pointer items-center justify-between rounded-xl border border-border bg-card/20 p-4 transition-colors hover:bg-card/40">
                  <div className="flex flex-col">
                    <span className="font-mono text-sm">UI/UX Concept Creation</span>
                    <span className="text-[10px] text-muted-foreground">Design from scratch (+20%)</span>
                  </div>
                  <input
                    type="checkbox"
                    checked={designNeeded}
                    onChange={(e) => setDesignNeeded(e.target.checked)}
                    className="h-5 w-5 rounded border-border bg-background accent-primary"
                  />
                </label>

                <label className="flex cursor-pointer items-center justify-between rounded-xl border border-border bg-card/20 p-4 transition-colors hover:bg-card/40">
                  <div className="flex flex-col">
                    <span className="font-mono text-sm">Rush Delivery</span>
                    <span className="text-[10px] text-muted-foreground">Expedited timeline (+30%)</span>
                  </div>
                  <input
                    type="checkbox"
                    checked={isRush}
                    onChange={(e) => setIsRush(e.target.checked)}
                    className="h-5 w-5 rounded border-border bg-background accent-primary"
                  />
                </label>
              </div>
            </section>

            {/* Retainer */}
            <section className="space-y-4">
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">4. Maintenance Retainer</h2>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: "none", label: "None" },
                  { id: "standard", label: "Standard" },
                  { id: "premium", label: "Premium" },
                ].map((plan) => (
                  <button
                    key={plan.id}
                    onClick={() => setMaintenance(plan.id)}
                    className={`rounded-lg border p-3 text-center text-xs font-mono transition-all ${
                      maintenance === plan.id
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-border bg-card/20 text-muted-foreground hover:bg-card/40"
                    }`}
                  >
                    {plan.label}
                  </button>
                ))}
              </div>
            </section>
          </div>

          {/* Results Panel */}
          <div className="relative">
            <div className="sticky top-12 overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-2xl backdrop-blur-xl">
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/20 blur-3xl" />
              
              <h3 className="mb-2 text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground">Estimated Investment</h3>
              
              <div className="my-6">
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-4xl font-extrabold text-foreground sm:text-5xl">{min}</span>
                  <span className="text-xl text-muted-foreground">-</span>
                  <span className="font-display text-4xl font-extrabold text-foreground sm:text-5xl">{max}</span>
                </div>
                <div className="mt-1 text-sm font-mono text-primary">JOD</div>
              </div>

              {monthly > 0 && (
                <div className="mb-8 rounded-lg border border-border/50 bg-background/50 p-4">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Ongoing Retainer</div>
                  <div className="mt-1 flex items-baseline gap-1">
                    <span className="font-mono text-xl font-bold">{monthly}</span>
                    <span className="text-xs text-muted-foreground">JOD / month</span>
                  </div>
                </div>
              )}

              <div className="space-y-4 border-t border-border pt-6">
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Base Type:</span>
                  <span className="font-mono text-foreground capitalize">{projectType}</span>
                </div>
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Pages:</span>
                  <span className="font-mono text-foreground">{pages}</span>
                </div>
                {designNeeded && (
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Custom UI/UX:</span>
                    <span className="font-mono text-primary">Included</span>
                  </div>
                )}
                {isRush && (
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Timeline:</span>
                    <span className="font-mono text-primary">Expedited</span>
                  </div>
                )}
              </div>

              <button className="mt-8 w-full rounded-full bg-foreground py-4 text-xs font-bold uppercase tracking-[0.2em] text-background transition-transform hover:scale-[1.02]">
                Copy Estimate
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
