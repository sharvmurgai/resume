import { motion } from "framer-motion";
import {
  Activity,
  BrainCircuit,
  Database,
  ExternalLink,
  Film,
  Layers3,
  RadioTower,
  ScanLine,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const DEMO_URL = "https://sharvmurgai.github.io/courtcast/";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const demoStats = [
  { icon: Film, value: "5", label: "Full games" },
  { icon: Target, value: "25", label: "Audited possessions" },
  { icon: ShieldCheck, value: "21 / 25", label: "Curated matches" },
  { icon: Users, value: "3 + 2", label: "NBA + NCAA games" },
];

const systemLayers = [
  {
    icon: ScanLine,
    number: "01",
    title: "Understand the film",
    description:
      "Detect the ball and all ten players, reconstruct spacing, and classify actions such as high pick-and-roll, dribble handoff, flare, pindown, split action, and drive-and-kick.",
  },
  {
    icon: Database,
    number: "02",
    title: "Build living playbooks",
    description:
      "Aggregate recurring actions by player, lineup, opponent, game state, and coach so the model learns who runs what—and when—rather than treating every possession the same.",
  },
  {
    icon: BrainCircuit,
    number: "03",
    title: "Predict the possession",
    description:
      "Rank the offense’s likely next actions alongside the expected defensive coverage and best counter before the play fully develops.",
  },
  {
    icon: Activity,
    number: "04",
    title: "Revise in real time",
    description:
      "Update probabilities as screeners arrive, corners clear, defenders switch, and passing windows open—turning one static guess into a live decision tree.",
  },
];

const filmRooms = [
  { league: "NBA", game: "Pacers vs. Thunder", context: "2025 Finals Game 7", coaches: "Rick Carlisle · Mark Daigneault" },
  { league: "NBA", game: "Celtics vs. Knicks", context: "2025 Eastern Semifinals Game 6", coaches: "Joe Mazzulla · Tom Thibodeau" },
  { league: "NBA", game: "Warriors vs. Timberwolves", context: "2025 Western Semifinals Game 5", coaches: "Steve Kerr · Chris Finch" },
  { league: "NCAA", game: "Kentucky vs. Duke", context: "2024 Champions Classic", coaches: "Mark Pope · Jon Scheyer" },
  { league: "NCAA", game: "Auburn vs. Kentucky", context: "2025 SEC regular season", coaches: "Bruce Pearl · Mark Pope" },
];

const roadmap = [
  "Replace reconstructed tracking dots with automated player and ball tracking from broadcast film.",
  "Expand the action taxonomy and train on source-diverse, independently reviewed possession clips.",
  "Learn team and coach priors across seasons while accounting for roster and scheme changes.",
  "Evaluate action recognition, probability calibration, and next-play prediction on held-out games.",
];

export const CourtCastSection = () => {
  return (
    <section className="pattern-overlay min-h-screen pb-16 pt-28">
      <div className="section-container">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={item} className="mb-12 text-center">
            <span className="badge-gold mb-4 inline-flex items-center gap-1.5">
              <RadioTower className="h-3 w-3" />
              Work in Progress · Demo Ready to Show
            </span>
            <h2 className="hero-title mb-4 text-4xl md:text-6xl">
              Court<span className="gradient-text-gold">Cast</span>
            </h2>
            <p className="mx-auto mb-3 max-w-3xl text-xl font-medium text-foreground/90">
              What if a basketball broadcast could explain—and predict—the possession while it unfolds?
            </p>
            <p className="mx-auto max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
              CourtCast is an end-to-end research concept for converting film into coach-aware playbooks, predicting the next offensive action and defensive response, and continuously revising those probabilities from player movement.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Button asChild size="lg" className="rounded-full px-6">
                <a href={DEMO_URL} target="_blank" rel="noopener noreferrer">
                  Launch live demo <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div variants={item} className="mx-auto mb-14 grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-4">
            {demoStats.map((stat) => (
              <div key={stat.label} className="glass-card p-5 text-center transition-all duration-300 hover:shadow-glow">
                <stat.icon className="mx-auto mb-2 h-6 w-6 text-primary" />
                <div className="font-display text-2xl font-bold gradient-text-gold">{stat.value}</div>
                <div className="mt-1 text-xs text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          <motion.div variants={item} className="glass-card mx-auto mb-16 max-w-4xl p-7 md:p-9">
            <h3 className="mb-5 flex items-center gap-2 text-2xl font-bold">
              <span className="h-2 w-2 rounded-full bg-primary" />
              The idea
            </h3>
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              <p>
                Traditional box scores describe what already happened. CourtCast is designed to model the hidden structure that produced it: the coach’s preferred actions, the players executing them, the opponent’s likely coverage, and the counters available when the first option disappears.
              </p>
              <p>
                The long-term product behaves like a live scouting assistant. Before a possession, it generates a probability distribution over likely plays. As the formation develops, every cut, screen angle, switch, and help rotation becomes new evidence. The system updates the forecast, estimates possession value, and explains the matchup logic in basketball language.
              </p>
            </div>
          </motion.div>

          <motion.div variants={item} className="mx-auto mb-16 max-w-6xl">
            <div className="mb-8 text-center">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">System design</p>
              <h3 className="text-2xl font-bold md:text-3xl">From broadcast film to a live possession forecast</h3>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {systemLayers.map((layer) => (
                <div key={layer.number} className="glass-card p-6 md:p-7">
                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <layer.icon className="h-5 w-5" />
                    </div>
                    <span className="font-display text-sm font-bold text-primary/50">{layer.number}</span>
                  </div>
                  <h4 className="mb-2 text-lg font-bold">{layer.title}</h4>
                  <p className="text-sm leading-relaxed text-muted-foreground">{layer.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={item} className="mb-16">
            <div className="mb-7 text-center">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">Interactive prototype</p>
              <h3 className="text-2xl font-bold md:text-3xl">Explore the possession model</h3>
              <p className="mx-auto mt-3 max-w-3xl text-muted-foreground">
                Choose a full game, move between audited possessions, play the tracking simulation, and watch the action probabilities, expected coverage, coach context, and possession-value estimates change together. The working demo is ready to show, with additional detail available on request.
              </p>
            </div>
            <div className="glass-card overflow-hidden p-2 md:p-3">
              <div className="flex items-center justify-between border-b border-border/60 px-3 py-2.5 text-xs text-muted-foreground">
                <span className="flex items-center gap-2"><span className="h-2 w-2 animate-pulse rounded-full bg-primary" /> Live GitHub Pages demo</span>
                <a href={DEMO_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 font-medium text-primary hover:underline">
                  Open full screen <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
              <div className="relative aspect-[16/11] min-h-[520px] overflow-hidden rounded-b-lg bg-foreground md:min-h-[680px]">
                <iframe
                  src={DEMO_URL}
                  title="Interactive CourtCast portfolio demo"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full border-0"
                  allowFullScreen
                />
              </div>
            </div>
          </motion.div>

          <motion.div variants={item} className="mx-auto mb-16 max-w-5xl">
            <div className="mb-7 flex items-end justify-between gap-4">
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">Current film rooms</p>
                <h3 className="text-2xl font-bold">Five games across two levels</h3>
              </div>
              <span className="hidden text-sm text-muted-foreground md:block">Working demo available on request</span>
            </div>
            <div className="space-y-3">
              {filmRooms.map((room, index) => (
                <div key={room.game} className="glass-card grid gap-3 p-5 md:grid-cols-[72px_1fr_1fr] md:items-center">
                  <span className="w-fit rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">{room.league}</span>
                  <div>
                    <p className="font-semibold text-foreground">{room.game}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{room.context}</p>
                  </div>
                  <p className="text-sm text-muted-foreground md:text-right">{room.coaches}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={item} className="mx-auto grid max-w-5xl gap-6 md:grid-cols-[1fr_0.9fr]">
            <div className="glass-card p-7 md:p-8">
              <h3 className="mb-5 flex items-center gap-2 text-xl font-bold">
                <Layers3 className="h-5 w-5 text-primary" />
                Next research gates
              </h3>
              <ol className="space-y-4">
                {roadmap.map((step, index) => (
                  <li key={step} className="flex gap-4 text-sm leading-relaxed text-muted-foreground">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">{index + 1}</span>
                    <span className="pt-1">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div className="glass-card border-t-4 border-t-accent p-7 md:p-8">
              <h3 className="mb-4 text-xl font-bold">Prototype disclosure</h3>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                The current 21-of-25 result is a curated film-audit baseline—not held-out trained-model accuracy. Tactical labels are scouting hypotheses, player positions are reconstructed from visible spacing, and EPV and win-probability figures are illustrative.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                The demo’s purpose is to make the complete product loop tangible while the automated tracking, recognition, and sequence models are developed and evaluated.
              </p>
              <p className="mt-4 border-t border-border/60 pt-4 text-sm leading-relaxed text-muted-foreground">
                Additional film is either access-restricted or still being analyzed in real time. More methodology, film-review detail, and development results are available on request.
              </p>
              <a
                href="mailto:murgai.sharv@gmail.com?subject=CourtCast%20project%20details"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
              >
                Request more details <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
