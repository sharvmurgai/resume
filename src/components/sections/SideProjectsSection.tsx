import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, BrainCircuit, RadioTower } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CourtCastSection } from "./CourtCastSection";

export const SideProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<"courtcast" | null>(null);

  if (selectedProject === "courtcast") {
    return (
      <div className="relative">
        <div className="fixed left-4 top-20 z-40 md:left-8">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setSelectedProject(null)}
            className="gap-2 border-primary/20 bg-background/80 shadow-sm backdrop-blur-sm hover:bg-primary/10"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Side Projects
          </Button>
        </div>
        <CourtCastSection />
      </div>
    );
  }

  return (
    <section className="pattern-overlay min-h-screen pb-16 pt-32">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <span className="badge-gold mb-4 inline-flex items-center gap-1.5">
            <BrainCircuit className="h-3 w-3" />
            Independent Builds
          </span>
          <h2 className="hero-title mb-6 text-4xl md:text-5xl">
            My <span className="gradient-text-gold">Side Projects</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Explorations where machine learning, domain knowledge, and product design meet.
          </p>
        </motion.div>

        <motion.button
          type="button"
          onClick={() => setSelectedProject("courtcast")}
          className="glass-card group mx-auto block w-full max-w-4xl cursor-pointer overflow-hidden text-left"
          whileHover={{ scale: 1.01 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="grid md:grid-cols-[1.15fr_0.85fr]">
            <div className="relative min-h-64 overflow-hidden bg-foreground">
              <img
                src="https://sharvmurgai.github.io/courtcast/courtcast-social.png"
                alt="CourtCast live possession intelligence dashboard"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />
            </div>
            <div className="flex flex-col justify-center p-8 md:p-10">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <RadioTower className="h-6 w-6" />
              </div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                Sports intelligence · Demo ready to show
              </p>
              <h3 className="mb-3 text-3xl font-bold transition-colors group-hover:text-primary">
                CourtCast
              </h3>
              <p className="mb-6 text-base leading-relaxed text-muted-foreground">
                A coach-aware basketball project that turns game film into playbooks, predicts the next action, and updates its read as all ten players move. A working demo is ready to show.
              </p>
              <span className="flex items-center gap-2 font-medium text-primary transition-transform group-hover:translate-x-2">
                Explore the project <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </div>
        </motion.button>
      </div>
    </section>
  );
};
