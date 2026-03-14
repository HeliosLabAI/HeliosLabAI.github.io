import { motion } from "framer-motion";

interface ResearchObjectiveProps {
  index: number;
  title: string;
  description: string;
  items: string[];
}

const ResearchObjective = ({ index, title, description, items }: ResearchObjectiveProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="border-l border-border pl-6 py-2"
  >
    <h4 className="font-display text-base font-semibold text-foreground mb-2">
      {title}
    </h4>
    <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
      {description}
    </p>
    <ul className="space-y-1.5">
      {items.map((item, i) => (
        <li key={i} className="font-body text-sm text-muted-foreground flex items-start gap-2">
          <span className="w-1 h-1 rounded-full bg-foreground opacity-30 mt-2 shrink-0" />
          {item}
        </li>
      ))}
    </ul>
  </motion.div>
);

export default ResearchObjective;
