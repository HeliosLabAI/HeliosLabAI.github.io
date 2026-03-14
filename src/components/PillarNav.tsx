import { motion } from "framer-motion";

const pillars = [
  { number: "01", title: "Long-Context Intelligence", id: "pillar-1" },
  { number: "02", title: "Autonomous AI Systems", id: "pillar-2" },
  { number: "03", title: "AI Evaluation & Measurement", id: "pillar-3" },
];

const PillarNav = () => (
  <section className="px-6 py-24 border-t border-border">
    <div className="max-w-4xl mx-auto">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="font-display text-xs tracking-[0.3em] uppercase text-muted-foreground mb-12"
      >
        Research Focus Areas
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
        {pillars.map((pillar, i) => (
          <motion.a
            key={pillar.id}
            href={`#${pillar.id}`}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="bg-background p-8 group cursor-pointer"
          >
            <span className="font-display text-6xl font-light text-pillar-number group-hover:text-foreground transition-colors duration-300">
              {pillar.number}
            </span>
            <h3 className="font-display text-lg font-semibold text-foreground mt-4 group-hover:translate-x-1 transition-transform duration-300">
              {pillar.title}
            </h3>
            <span className="font-body text-xs text-muted-foreground mt-2 inline-block">
              Read more ↓
            </span>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

export default PillarNav;
