import { motion } from "framer-motion";
import { FlaskConical, TrendingUp, Clock, CheckCircle2 } from "lucide-react";

const experiments = [
  {
    id: "EXP-041",
    title: "Quantum Dot Sensitization",
    hypothesis: "CdSe quantum dots can extend absorption spectrum beyond 1100nm in tandem cells.",
    metric: "Efficiency +8.3%",
    status: "completed",
    progress: 100,
  },
  {
    id: "EXP-057",
    title: "Electrolyte Viscosity Optimization",
    hypothesis: "Reducing ionic liquid viscosity by 40% will double proton exchange rate.",
    metric: "Rate ×2.1",
    status: "completed",
    progress: 100,
  },
  {
    id: "EXP-063",
    title: "Graphene Oxide Membrane Filtration",
    hypothesis: "GO membranes with 0.8nm pore spacing will achieve 99.7% ion selectivity.",
    metric: "Selectivity 99.4%",
    status: "running",
    progress: 72,
  },
  {
    id: "EXP-068",
    title: "Thermal Cycling Stress Test",
    hypothesis: "New ceramic coating survives 10,000 thermal cycles without micro-fracture.",
    metric: "7,200 / 10,000 cycles",
    status: "running",
    progress: 72,
  },
  {
    id: "EXP-074",
    title: "Bio-Inspired Catalyst Geometry",
    hypothesis: "Fractal surface patterns increase catalytic surface area by 300%.",
    metric: "Pending",
    status: "queued",
    progress: 0,
  },
];

const statusConfig: Record<string, { icon: typeof FlaskConical; label: string; color: string }> = {
  completed: { icon: CheckCircle2, label: "Completed", color: "text-primary" },
  running: { icon: Clock, label: "Running", color: "text-accent" },
  queued: { icon: FlaskConical, label: "Queued", color: "text-muted-foreground" },
};

const Experiments = () => {
  return (
    <section id="experiments" className="py-32 px-6 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-primary uppercase tracking-[0.25em] text-sm font-heading mb-3">Lab Log</p>
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
            Research <span className="text-gradient">Experiments</span>
          </h2>
          <p className="text-muted-foreground max-w-xl text-lg">
            Live experiment tracker — from hypothesis to validated results.
          </p>
        </motion.div>

        <div className="space-y-4">
          {experiments.map((exp, i) => {
            const StatusIcon = statusConfig[exp.status].icon;
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary/20 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex items-center gap-3 md:w-48 shrink-0">
                    <StatusIcon className={`w-5 h-5 ${statusConfig[exp.status].color}`} />
                    <div>
                      <span className="text-xs text-muted-foreground font-mono">{exp.id}</span>
                      <p className={`text-xs font-medium ${statusConfig[exp.status].color}`}>
                        {statusConfig[exp.status].label}
                      </p>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-heading font-semibold text-foreground mb-1">{exp.title}</h3>
                    <p className="text-sm text-muted-foreground truncate">{exp.hypothesis}</p>
                  </div>

                  <div className="flex items-center gap-4 md:w-56 shrink-0">
                    <div className="flex-1">
                      <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${exp.progress}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.3 + i * 0.1 }}
                          className="h-full bg-primary rounded-full"
                        />
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-sm font-heading font-medium text-foreground whitespace-nowrap">
                      <TrendingUp className="w-3.5 h-3.5 text-primary" />
                      {exp.metric}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experiments;
