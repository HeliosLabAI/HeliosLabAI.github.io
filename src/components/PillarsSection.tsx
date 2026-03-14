import { motion } from "framer-motion";

const pillars = [
  {
    number: "01",
    title: "Experimenting",
    description:
      "Your detailed paragraph about experimentation goes here. We explore uncharted territories in machine learning, neural architectures, and cognitive computing.",
  },
  {
    number: "02",
    title: "Working On",
    description:
      "Your detailed paragraph about current work goes here. Building systems that learn, adapt, and reason — from foundational models to applied intelligence.",
  },
  {
    number: "03",
    title: "Challenges in AI",
    description:
      "Your detailed paragraph about challenges goes here. Confronting alignment, scalability, and the fundamental limits of what machines can understand.",
  },
];

const PillarsSection = () => {
  return (
    <section className="px-6 py-24 max-w-6xl mx-auto">
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-display text-sm tracking-[0.3em] uppercase text-muted-foreground mb-16"
      >
        What Drives Us
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
        {pillars.map((pillar, index) => (
          <motion.div
            key={pillar.number}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="py-8 md:py-0 md:px-8 first:md:pl-0 last:md:pr-0"
          >
            <span className="font-display text-5xl font-light text-border">
              {pillar.number}
            </span>
            <h3 className="font-display text-xl font-semibold text-foreground mt-4 mb-4">
              {pillar.title}
            </h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              {pillar.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PillarsSection;
