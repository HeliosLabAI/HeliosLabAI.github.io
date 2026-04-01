import { motion } from "framer-motion";
import { Beaker, Calendar, ArrowRight, Tag } from "lucide-react";

const experiments = [
  {
    id: "EXP-041",
    title: "Quantum Dot Sensitization",
    description: "CdSe quantum dots extending absorption spectrum beyond 1100nm in tandem solar cells.",
    result: "Efficiency +8.3%",
    status: "completed" as const,
    date: "Mar 2026",
    tags: ["Photovoltaics", "Nanomaterials"],
  },
  {
    id: "EXP-057",
    title: "Electrolyte Viscosity Optimization",
    description: "Reducing ionic liquid viscosity by 40% to double proton exchange membrane rate.",
    result: "Rate ×2.1",
    status: "completed" as const,
    date: "Feb 2026",
    tags: ["Fuel Cells", "Chemistry"],
  },
  {
    id: "EXP-063",
    title: "Graphene Oxide Membrane Filtration",
    description: "GO membranes with 0.8nm pore spacing targeting 99.7% ion selectivity for water purification.",
    result: "99.4% selectivity",
    status: "running" as const,
    date: "Started Jan 2026",
    tags: ["Filtration", "Graphene"],
  },
  {
    id: "EXP-068",
    title: "Thermal Cycling Stress Test",
    description: "Testing new ceramic coating survival across 10,000 thermal cycles without micro-fracture.",
    result: "7,200 / 10,000 cycles",
    status: "running" as const,
    date: "Started Dec 2025",
    tags: ["Materials", "Durability"],
  },
  {
    id: "EXP-074",
    title: "Bio-Inspired Catalyst Geometry",
    description: "Fractal surface patterns to increase catalytic surface area by 300% for green hydrogen production.",
    result: "Pending",
    status: "queued" as const,
    date: "Apr 2026",
    tags: ["Catalysis", "Biomimicry"],
  },
];

const statusStyles = {
  completed: "bg-emerald-50 text-emerald-700",
  running: "bg-blue-50 text-blue-700",
  queued: "bg-muted text-muted-foreground",
};

const statusLabels = {
  completed: "Completed",
  running: "Running",
  queued: "Queued",
};

const ResearchPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="section-padding pb-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
                <Beaker className="w-5 h-5 text-primary" />
              </div>
              <h1 className="text-2xl font-semibold text-foreground tracking-tight">Research</h1>
            </div>
            <p className="text-muted-foreground text-base max-w-lg leading-relaxed">
              Live experiment tracker — from hypothesis through validation to published results.
            </p>
          </motion.div>
        </div>
      </header>

      {/* Experiments */}
      <section className="px-5 md:px-8 pb-20">
        <div className="max-w-4xl mx-auto space-y-3">
          {experiments.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: i * 0.06 }}
              className="card-elevated p-5 hover:shadow-lg transition-shadow duration-300 cursor-pointer group"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2.5 mb-1">
                    <span className="text-xs font-mono text-muted-foreground">{exp.id}</span>
                    <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${statusStyles[exp.status]}`}>
                      {statusLabels[exp.status]}
                    </span>
                  </div>
                  <h3 className="font-semibold text-foreground text-lg tracking-tight group-hover:text-primary transition-colors">
                    {exp.title}
                  </h3>
                </div>
                <ArrowRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity mt-2 shrink-0" />
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {exp.description}
              </p>

              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2 flex-wrap">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="inline-flex items-center gap-1 text-xs font-medium text-secondary-foreground bg-secondary rounded-lg px-2.5 py-1">
                      <Tag className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {exp.date}
                  </span>
                  {exp.result !== "Pending" && (
                    <span className="font-semibold text-foreground bg-secondary rounded-lg px-2.5 py-1">
                      {exp.result}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ResearchPage;
