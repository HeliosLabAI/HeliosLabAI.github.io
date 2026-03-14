import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";
import ResearchObjective from "./ResearchObjective";

const problems = [
  { title: "Attention Scaling", text: "In standard transformer architectures, attention computation grows with the square of the number of tokens. This makes extremely long contexts computationally expensive." },
  { title: "Signal Dilution", text: "When the number of tokens becomes very large, the attention mechanism must distribute focus across many tokens. Important signals become diluted among large amounts of irrelevant information." },
  { title: "Lost-in-the-Middle Effect", text: "Large language models tend to prioritize information at the beginning and end of long contexts while often missing information located in the middle of the sequence." },
  { title: "Training Distribution Mismatch", text: "Most models are trained on sequences that are much shorter than their maximum inference context. As a result, models may not generalize effectively when operating near their maximum context limits." },
];

const objectives = [
  {
    title: "Efficient Attention Architectures",
    description: "Develop new mechanisms that allow models to scale to extremely large contexts without quadratic compute costs.",
    items: ["Sparse attention architectures", "Linear attention methods", "Structured attention patterns", "Block and hierarchical attention mechanisms"],
  },
  {
    title: "Hierarchical Memory Systems",
    description: "Instead of treating the entire context as a flat sequence, hierarchical memory systems organize information into multiple levels of memory.",
    items: ["Working Memory — small high-speed reasoning window", "Episodic Memory — summaries of previous reasoning steps", "Long-Term Memory — large knowledge store accessed through retrieval"],
  },
  {
    title: "Context Compression",
    description: "Large contexts may be compressed into more efficient representations, allowing models to retain useful information while reducing token counts.",
    items: ["Semantic summarization", "Token compression", "Learned memory representations", "Latent knowledge storage"],
  },
  {
    title: "Retrieval-Enhanced Context Systems",
    description: "Instead of processing all tokens simultaneously, models may dynamically retrieve relevant information from large knowledge stores.",
    items: ["Retrieval-augmented generation systems", "Hybrid retrieval-reasoning architectures", "Adaptive context loading mechanisms"],
  },
];

const benchmarks = [
  { label: "Long-context retrieval accuracy", desc: "Ability to locate relevant information within extremely large contexts." },
  { label: "Multi-document reasoning", desc: "Reasoning across multiple large documents simultaneously." },
  { label: "Context utilization efficiency", desc: "Measuring how effectively models use available context." },
  { label: "Long-horizon reasoning", desc: "Evaluating reasoning chains that span very large contexts." },
];

const PillarOne = () => (
  <section className="px-6 py-32 max-w-4xl mx-auto">
    <SectionLabel number="01" label="Research Pillar" />

    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="font-display text-4xl sm:text-5xl font-bold text-foreground tracking-tight mb-8"
    >
      Long-Context
      <br />
      Intelligence
    </motion.h2>

    <motion.p
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="font-body text-base text-muted-foreground leading-relaxed max-w-2xl mb-6"
    >
      One of the most important limitations of modern AI systems is their difficulty in effectively reasoning over extremely large amounts of information. While many modern models can technically process hundreds of thousands or even millions of tokens, their ability to accurately retrieve and reason over information within that context often degrades as the input length increases.
    </motion.p>
    <motion.p
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.15 }}
      className="font-body text-base text-muted-foreground leading-relaxed max-w-2xl mb-16"
    >
      Helios Lab aims to develop new architectures, evaluation systems, and training techniques that allow AI models to process massive contexts — millions or potentially tens of millions of tokens — while maintaining reliable reasoning performance. Our goal is to move beyond simple context window scaling and build systems capable of true long-context intelligence.
    </motion.p>

    {/* Problem Statement */}
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-16"
    >
      <h3 className="font-display text-sm tracking-[0.2em] uppercase text-foreground mb-8">
        Problem Statement
      </h3>
      <p className="font-body text-sm text-muted-foreground leading-relaxed max-w-2xl mb-8">
        Most modern language models are built on the transformer architecture. These models rely on attention mechanisms that scale poorly with increasing sequence length. As the context grows larger, several fundamental problems emerge:
      </p>
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
    </motion.div>

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

    {/* Evaluation */}
    <div className="mb-16">
      <h3 className="font-display text-sm tracking-[0.2em] uppercase text-foreground mb-8">
        Evaluation & Benchmarking
      </h3>
      <div className="space-y-4">
        {benchmarks.map((b, i) => (
          <motion.div
            key={b.label}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="flex gap-4 items-start"
          >
            <span className="w-6 h-px bg-foreground opacity-20 mt-3 shrink-0" />
            <div>
              <span className="font-display text-sm font-medium text-foreground">{b.label}</span>
              <p className="font-body text-xs text-muted-foreground mt-0.5">{b.desc}</p>
            </div>
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
      <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
        The long-term goal of this research is to enable AI systems capable of reasoning over extremely large knowledge spaces.
      </p>
      <ul className="space-y-2">
        {["Analyzing entire scientific libraries", "Reasoning over full software repositories", "Maintaining long-running autonomous agents", "Processing large organizational knowledge bases"].map((item) => (
          <li key={item} className="font-body text-sm text-foreground flex items-start gap-3">
            <span className="w-1.5 h-px bg-foreground mt-2.5 shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  </section>
);

export default PillarOne;
