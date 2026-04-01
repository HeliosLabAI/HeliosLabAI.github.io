import { motion } from "framer-motion";
import { Zap, Atom, FlaskConical } from "lucide-react";

const pillars = [
  {
    icon: Zap,
    title: "Energy Systems",
    description: "Developing sustainable energy architectures that push the boundaries of efficiency and scalability.",
  },
  {
    icon: Atom,
    title: "Advanced Materials",
    description: "Engineering novel materials with extraordinary properties for next-generation applications.",
  },
  {
    icon: FlaskConical,
    title: "Applied Research",
    description: "Translating fundamental discoveries into real-world solutions that drive measurable impact.",
  },
];

const About = () => {
  return (
    <section id="work" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
            What We <span className="text-gradient">Build</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Three pillars driving our mission to reshape the future.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-card border border-border rounded-2xl p-8 hover:border-primary/30 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:glow transition-shadow">
                <pillar.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3 text-foreground">
                {pillar.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
