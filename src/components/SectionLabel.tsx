import { motion } from "framer-motion";

interface SectionLabelProps {
  number: string;
  label: string;
}

const SectionLabel = ({ number, label }: SectionLabelProps) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.5 }}
    className="flex items-center gap-4 mb-12"
  >
    <span className="font-display text-xs tracking-[0.3em] uppercase text-muted-foreground">
      {number}
    </span>
    <div className="w-12 h-px bg-foreground opacity-20" />
    <span className="font-display text-xs tracking-[0.3em] uppercase text-muted-foreground">
      {label}
    </span>
  </motion.div>
);

export default SectionLabel;
