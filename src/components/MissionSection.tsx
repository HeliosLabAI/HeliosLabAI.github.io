import { motion } from "framer-motion";

const goals = [
  "Reason across extremely large knowledge spaces",
  "Operate autonomously over long periods",
  "Learn from experience and improve over time",
  "Assist humans in solving complex scientific, engineering, and societal challenges",
];

const MissionSection = () => (
  <section className="px-6 py-32 bg-subtle-bg">
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="font-display text-xs tracking-[0.3em] uppercase text-muted-foreground mb-8">
          Overarching Mission
        </p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-8 max-w-2xl text-balance">
          Developing advanced AI systems capable of large-scale reasoning, persistent operation, and reliable interaction with the world.
        </h2>
        <p className="font-body text-base text-muted-foreground leading-relaxed max-w-2xl mb-10">
          By advancing research in long-context intelligence, autonomous agents, and scalable AI infrastructure, Helios Lab aims to help move the field toward more capable and reliable artificial intelligence systems.
        </p>
        <div className="space-y-3">
          {goals.map((goal, i) => (
            <motion.div
              key={goal}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex items-start gap-4"
            >
              <span className="font-display text-xs text-muted-foreground mt-1 shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="font-body text-sm text-foreground">{goal}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default MissionSection;
