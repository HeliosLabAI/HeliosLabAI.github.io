import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";
import ResearchObjective from "./ResearchObjective";

const problems = [
  { title: "Benchmark Saturation", text: "Many popular benchmarks quickly become saturated as models improve. Once models achieve high scores, the benchmark no longer provides meaningful differentiation between systems, slowing scientific progress." },
  { title: "Memorization vs Reasoning", text: "Some models achieve strong benchmark results by memorizing patterns in training data rather than demonstrating genuine reasoning ability. This creates the illusion of progress without actual improvements in intelligence." },
  { title: "Static Benchmarks", text: "Most evaluation datasets remain static. As models are trained on large internet-scale datasets, they may encounter benchmark questions during training, which reduces the validity of the evaluation." },
  { title: "Limited Real-World Measurement", text: "Many benchmarks measure narrow abilities such as question answering. However, real-world AI applications require multi-step reasoning, long-horizon planning, tool usage, and interaction with dynamic environments." },
];

const objectives = [
  {
    title: "Long-Context Reasoning Benchmarks",
    description: "Develop benchmarks that evaluate how effectively models can reason across extremely large contexts.",
    items: ["Retrieving critical information from very large documents", "Connecting information across multiple sources", "Reasoning across large knowledge bases"],
  },
  {
    title: "Multi-Step Reasoning Evaluation",
    description: "Create benchmarks that measure the ability of AI systems to perform extended reasoning processes.",
    items: ["Planning multiple steps ahead", "Solving multi-stage problems", "Integrating information across many reasoning steps"],
  },
  {
    title: "Autonomous Agent Evaluation",
    description: "Design evaluation environments that measure autonomous systems across extended operation.",
    items: ["Long-term task completion", "Planning reliability", "Tool usage effectiveness", "Adaptation to unexpected situations"],
  },
  {
    title: "Dynamic & Adaptive Benchmarks",
    description: "Instead of static test datasets, investigate evaluation systems that generate new tasks dynamically.",
    items: ["Procedurally generated reasoning tasks", "Evolving benchmark datasets", "Adversarial evaluation frameworks"],
  },
  {
    title: "Model Reliability & Failure Analysis",
    description: "Understanding when and why models fail is essential for improving AI systems.",
    items: ["Hallucination frequency measurement", "Reasoning error analysis", "Confidence calibration", "Failure pattern identification in complex tasks"],
  },
];

const PillarThree = () => (
  <section className="px-6 py-32 max-w-4xl mx-auto">
    <SectionLabel number="03" label="Research Pillar" />

    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="font-display text-4xl sm:text-5xl font-bold text-foreground tracking-tight mb-8"
    >
      AI Evaluation &
      <br />
      Measurement Science
    </motion.h2>

    <motion.p
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="font-body text-base text-muted-foreground leading-relaxed max-w-2xl mb-6"
    >
      One of the most critical challenges in modern artificial intelligence is the lack of reliable evaluation systems. While many AI models achieve impressive benchmark scores, these scores often fail to reflect real-world performance, reasoning ability, or reliability.
    </motion.p>
    <motion.p
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.15 }}
      className="font-body text-base text-muted-foreground leading-relaxed max-w-2xl mb-16"
    >
      Helios Lab will focus on building a new discipline around AI evaluation and measurement science. The goal is to create rigorous methods for measuring the true capabilities, limitations, and behavior of advanced AI systems. Better evaluation frameworks are essential for guiding research progress, improving model reliability, and ensuring that future AI systems operate safely and effectively.
    </motion.p>

    {/* Problem Statement */}
    <div className="mb-16">
      <h3 className="font-display text-sm tracking-[0.2em] uppercase text-foreground mb-8">
        Problem Statement
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {problems.map((problem, i) => (
          <motion.div
            key={problem.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="border border-border p-6"
          >
            <span className="font-display text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h4 className="font-display text-sm font-semibold text-foreground mt-2 mb-3">
              {problem.title}
            </h4>
            <p className="font-body text-xs text-muted-foreground leading-relaxed">
              {problem.text}
            </p>
          </motion.div>
        ))}
      </div>
    </div>

    {/* Research Objectives */}
    <div className="mb-16">
      <h3 className="font-display text-sm tracking-[0.2em] uppercase text-foreground mb-8">
        Research Objectives
      </h3>
      <div className="space-y-8">
        {objectives.map((obj, i) => (
          <ResearchObjective
            key={obj.title}
            index={i}
            title={obj.title}
            description={obj.description}
            items={obj.items}
          />
        ))}
      </div>
    </div>

    {/* Evaluation Infrastructure */}
    <div className="mb-16">
      <h3 className="font-display text-sm tracking-[0.2em] uppercase text-foreground mb-6">
        Evaluation Infrastructure
      </h3>
      <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4 max-w-2xl">
        Helios Lab will develop infrastructure to support large-scale evaluation of AI models.
      </p>
      <div className="grid grid-cols-2 gap-4">
        {["Automated benchmarking platforms", "Large evaluation datasets", "Continuous model testing pipelines", "Distributed evaluation systems"].map((item, i) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="border border-border p-4"
          >
            <p className="font-body text-xs text-foreground">{item}</p>
          </motion.div>
        ))}
      </div>
    </div>

    {/* Vision */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-subtle-bg border border-border p-8 sm:p-12"
    >
      <h3 className="font-display text-sm tracking-[0.2em] uppercase text-foreground mb-4">
        Long-Term Vision
      </h3>
      <p className="font-body text-sm text-muted-foreground leading-relaxed mb-3">
        The long-term vision is to establish scientific measurement standards for artificial intelligence. Just as fields such as physics and engineering rely on precise measurement systems, AI research requires reliable methods to evaluate progress.
      </p>
      <p className="font-body text-sm text-muted-foreground leading-relaxed">
        By developing rigorous evaluation frameworks, Helios Lab aims to help the field move toward more transparent, measurable, and trustworthy AI development. Better evaluation will accelerate progress in model architecture, training methods, and real-world AI applications.
      </p>
    </motion.div>
  </section>
);

export default PillarThree;
