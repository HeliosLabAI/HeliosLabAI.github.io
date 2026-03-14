import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";
import ResearchObjective from "./ResearchObjective";

const problems = [
  { title: "Lack of Persistent Memory", text: "Most AI systems do not maintain reliable long-term memory. Once a session ends, the system forgets its previous context. For complex tasks that require extended reasoning across hours, days, or weeks, this becomes a major limitation." },
  { title: "Limited Planning Ability", text: "While current models can perform short reasoning chains, they often struggle with long-horizon planning — tasks requiring dozens or hundreds of steps, such as multi-stage research or complex engineering workflows." },
  { title: "Fragile Tool Use", text: "AI models can interact with tools such as code interpreters, APIs, and databases. However, their ability to reliably use tools across long workflows remains limited — problems include incorrect tool selection, inconsistent execution, and failure to recover from errors." },
  { title: "Lack of Continuous Operation", text: "Most models are designed for short interactions rather than continuous operation. Future AI systems may need to run for hours, days, weeks, or even longer — requiring stability, persistence, and self-managed internal state." },
];

const objectives = [
  {
    title: "Long-Horizon Planning Architectures",
    description: "Research methods that allow AI systems to break complex objectives into structured plans.",
    items: ["Goal decomposition", "Task sequencing", "Dynamic replanning", "Long reasoning chains"],
  },
  {
    title: "Persistent Memory Systems",
    description: "Autonomous agents must maintain memory over long periods, combining multiple memory types.",
    items: ["Working memory — short-term reasoning context", "Episodic memory — records of previous actions and experiences", "Long-term knowledge memory — persistent storage of facts and strategies"],
  },
  {
    title: "Tool Integration Frameworks",
    description: "Future AI systems must interact with external tools in reliable ways across long workflows.",
    items: ["Software development tools", "Databases and search systems", "Scientific simulators", "Robotics interfaces"],
  },
  {
    title: "Self-Monitoring & Error Correction",
    description: "Autonomous systems must detect when something has gone wrong and adjust their behavior accordingly.",
    items: ["Self-evaluation systems", "Verification models", "Reasoning validation pipelines", "Automated debugging loops"],
  },
  {
    title: "Continuous Operation Infrastructure",
    description: "Infrastructure that supports persistent, fault-tolerant operation of AI agents.",
    items: ["Long-running agent processes", "Fault-tolerant execution", "Automated checkpointing", "Task scheduling systems"],
  },
];

const benchmarks = [
  { label: "Task completion reliability", desc: "Ability to complete multi-step tasks without human intervention." },
  { label: "Planning depth", desc: "Ability to generate and execute long sequences of actions." },
  { label: "Tool interaction success", desc: "Reliability when interacting with external systems." },
  { label: "Long-horizon reasoning", desc: "Performance on tasks requiring extended reasoning across many steps." },
];

const PillarTwo = () => (
  <section className="px-6 py-32 max-w-4xl mx-auto">
    <SectionLabel number="02" label="Research Pillar" />

    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="font-display text-4xl sm:text-5xl font-bold text-foreground tracking-tight mb-8"
    >
      Autonomous
      <br />
      AI Systems
    </motion.h2>

    <motion.p
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="font-body text-base text-muted-foreground leading-relaxed max-w-2xl mb-6"
    >
      Current AI systems are mostly reactive tools. They respond to prompts, generate outputs, and then stop. However, many real-world problems require systems that can plan, reason, and operate continuously over long periods of time.
    </motion.p>
    <motion.p
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.15 }}
      className="font-body text-base text-muted-foreground leading-relaxed max-w-2xl mb-16"
    >
      Helios Lab will research and develop autonomous AI systems capable of executing complex tasks without constant human supervision. These systems should be able to gather information, reason about objectives, use external tools, and maintain persistent memory while operating over extended time horizons. The goal is to move beyond single-response models toward AI systems that can operate as intelligent agents.
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
        The long-term vision is to build AI systems capable of performing complex intellectual and operational tasks with minimal supervision.
      </p>
      <ul className="space-y-2">
        {["Autonomous scientific research assistants", "Engineering design systems", "Large-scale software development agents", "Scientific discovery systems", "Autonomous data analysis systems"].map((item) => (
          <li key={item} className="font-body text-sm text-foreground flex items-start gap-3">
            <span className="w-1.5 h-px bg-foreground mt-2.5 shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  </section>
);

export default PillarTwo;
