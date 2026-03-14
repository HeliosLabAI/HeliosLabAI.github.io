import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";
import ResearchObjective from "./ResearchObjective";

const problems = [
  { title: "Lack of Transparency", text: "Most large neural networks operate as black boxes. Researchers can observe inputs and outputs, but the internal decision-making processes are difficult to analyze, making it hard to diagnose errors or predict unexpected behavior." },
  { title: "Unknown Representation Structures", text: "We still do not fully understand how models internally represent facts, concepts, reasoning steps, and abstract relationships. Different neurons may encode information in ways that are not directly interpretable." },
  { title: "Emergent Behavior", text: "As models scale, new capabilities sometimes emerge that were not explicitly programmed — complex reasoning patterns, tool use behaviors, and unexpected problem-solving strategies. Understanding these is critical for designing future systems." },
  { title: "Safety & Reliability Concerns", text: "Without understanding how models internally process information, it is difficult to guarantee reliability or detect hidden failure modes, biases, or misleading reasoning patterns." },
];

const objectives = [
  {
    title: "Neuron Behavior Analysis",
    description: "Investigate how individual neurons and neuron groups contribute to model behavior.",
    items: ["Identifying neurons responsible for specific concepts", "Analyzing activation patterns across layers", "Mapping neuron functions across architectures"],
  },
  {
    title: "Representation Mapping",
    description: "Study how models represent complex information internally.",
    items: ["Concept representations", "Semantic clusters within hidden layers", "Relationships between tokens and internal states"],
  },
  {
    title: "Mechanistic Circuit Discovery",
    description: "Analyze circuits of interacting neurons that collectively perform specific computations.",
    items: ["Reasoning circuits", "Pattern recognition circuits", "Memory retrieval circuits"],
  },
  {
    title: "Visualization Tools",
    description: "Develop tools to visualize internal neural network activity and make complex systems more interpretable.",
    items: ["Track neuron activations during inference", "Visualize reasoning pathways", "Analyze model responses across different inputs"],
  },
  {
    title: "Controlled Experiments on Small Models",
    description: "Train smaller experimental models and carefully analyze their internal behavior to gain transferable insights.",
    items: ["Observe how representations evolve during training", "Analyze neuron specialization", "Study how reasoning capabilities develop"],
  },
];

const infrastructure = [
  { label: "Model instrumentation frameworks", desc: "Tools for extracting and analyzing internal states." },
  { label: "Activation analysis platforms", desc: "Systems for recording and analyzing neuron activations during inference." },
  { label: "Visualization environments", desc: "Interactive systems that allow researchers to explore neural network activity." },
];

const PillarFive = () => (
  <section className="px-6 py-32 max-w-4xl mx-auto">
    <SectionLabel number="05" label="Research Pillar" />

    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="font-display text-4xl sm:text-5xl font-bold text-foreground tracking-tight mb-8"
    >
      AI Interpretability &
      <br />
      Mechanistic Understanding
    </motion.h2>

    <motion.p
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="font-body text-base text-muted-foreground leading-relaxed max-w-2xl mb-6"
    >
      Modern AI models contain billions or even trillions of parameters, yet our understanding of how these systems internally represent knowledge and perform reasoning remains extremely limited. While models can demonstrate impressive capabilities, they often behave as complex black boxes.
    </motion.p>
    <motion.p
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.15 }}
      className="font-body text-base text-muted-foreground leading-relaxed max-w-2xl mb-16"
    >
      Helios Lab will focus on advancing the field of AI interpretability and mechanistic understanding — uncovering how neural networks represent concepts, how reasoning emerges within model architectures, and how internal structures influence behavior. This is essential for improving reliability, designing better architectures, and ensuring predictable AI systems.
    </motion.p>

    {/* Problem Statement */}
    <div className="mb-16">
      <h3 className="font-display text-sm tracking-[0.2em] uppercase text-foreground mb-8">Problem Statement</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {problems.map((problem, i) => (
          <motion.div key={problem.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }} className="border border-border p-6">
            <span className="font-display text-[10px] tracking-[0.3em] uppercase text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
            <h4 className="font-display text-sm font-semibold text-foreground mt-2 mb-3">{problem.title}</h4>
            <p className="font-body text-xs text-muted-foreground leading-relaxed">{problem.text}</p>
          </motion.div>
        ))}
      </div>
    </div>

    {/* Research Objectives */}
    <div className="mb-16">
      <h3 className="font-display text-sm tracking-[0.2em] uppercase text-foreground mb-8">Research Objectives</h3>
      <div className="space-y-8">
        {objectives.map((obj, i) => (
          <ResearchObjective key={obj.title} index={i} title={obj.title} description={obj.description} items={obj.items} />
        ))}
      </div>
    </div>

    {/* Infrastructure */}
    <div className="mb-16">
      <h3 className="font-display text-sm tracking-[0.2em] uppercase text-foreground mb-8">Research Infrastructure</h3>
      <div className="space-y-4">
        {infrastructure.map((b, i) => (
          <motion.div key={b.label} initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }} className="flex gap-4 items-start">
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
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-subtle-bg border border-border p-8 sm:p-12">
      <h3 className="font-display text-sm tracking-[0.2em] uppercase text-foreground mb-4">Long-Term Vision</h3>
      <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
        The long-term goal is to move beyond treating AI models as opaque systems and toward deep scientific understanding of how intelligent computation emerges from neural networks.
      </p>
      <ul className="space-y-2">
        {["Design more efficient architectures", "Improve reasoning reliability", "Detect failure modes early", "Build safer and more predictable AI systems"].map((item) => (
          <li key={item} className="font-body text-sm text-foreground flex items-start gap-3">
            <span className="w-1.5 h-px bg-foreground mt-2.5 shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  </section>
);

export default PillarFive;
