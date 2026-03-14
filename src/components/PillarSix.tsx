import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";
import ResearchObjective from "./ResearchObjective";

const problems = [
  { title: "Training Instability", text: "As models grow larger, training can become unstable — gradient explosions, numerical instability, and inefficient optimization can disrupt long training runs across thousands of GPUs." },
  { title: "Compute Efficiency", text: "Training large models requires enormous computational resources. Inefficient processes result in extremely high energy consumption, long training times, and unnecessary compute costs." },
  { title: "Infrastructure Reliability", text: "Large-scale training across distributed clusters faces hardware interruptions, network instability, and software errors. Systems must detect failures and recover automatically." },
  { title: "Limited Continuous Learning", text: "Most AI models are trained once and deployed. Updating with new information often requires restarting the entire training process. Future systems need continuous learning capabilities." },
];

const objectives = [
  {
    title: "Distributed Training Architectures",
    description: "Design systems that allow models to train efficiently across large clusters of GPUs or other accelerators.",
    items: ["Data parallel training", "Model parallel training", "Pipeline parallel training", "Efficient inter-node communication"],
  },
  {
    title: "Fault-Tolerant Training Systems",
    description: "Training systems that recover from interruptions without losing progress.",
    items: ["Automatic checkpointing", "Distributed state recovery", "Training job monitoring systems"],
  },
  {
    title: "Training Efficiency Optimization",
    description: "Research methods that improve the efficiency of model training with limited compute resources.",
    items: ["Improved optimization algorithms", "Adaptive learning schedules", "Efficient gradient computation", "Hardware-aware training techniques"],
  },
  {
    title: "Continuous Learning Systems",
    description: "Enable models to update their knowledge continuously as new data becomes available.",
    items: ["Incremental training methods", "Streaming data training", "Continual learning architectures", "Mechanisms to prevent catastrophic forgetting"],
  },
  {
    title: "Experimentation Platforms",
    description: "Develop platforms that allow researchers to run many controlled experiments at scale.",
    items: ["Large numbers of training experiments", "Architecture comparison tools", "Performance metric tracking", "Reliable result reproduction"],
  },
];

const infrastructure = [
  { label: "Distributed compute clusters", desc: "Large-scale computing environments for training advanced AI models." },
  { label: "Experiment management systems", desc: "Platforms that organize and track large numbers of training experiments." },
  { label: "Model monitoring tools", desc: "Systems that observe training progress and detect anomalies." },
  { label: "Automated evaluation pipelines", desc: "Tools that continuously evaluate models during training." },
];

const PillarSix = () => (
  <section className="px-6 py-32 max-w-4xl mx-auto">
    <SectionLabel number="06" label="Research Pillar" />

    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="font-display text-4xl sm:text-5xl font-bold text-foreground tracking-tight mb-8"
    >
      Scalable AI Training
      <br />
      & Continuous Learning
    </motion.h2>

    <motion.p
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="font-body text-base text-muted-foreground leading-relaxed max-w-2xl mb-6"
    >
      One of the most fundamental challenges in modern AI is the ability to train and improve models continuously at scale. Training frontier AI systems requires enormous computational resources, complex infrastructure, and highly reliable training pipelines.
    </motion.p>
    <motion.p
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.15 }}
      className="font-body text-base text-muted-foreground leading-relaxed max-w-2xl mb-16"
    >
      Helios Lab will focus on building scalable AI training systems that allow models to train efficiently across large compute clusters and operate over extended periods without interruption. The objective is to create infrastructure supporting the next generation of AI models capable of learning from vast amounts of data while maintaining stability, efficiency, and reliability.
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
      <h3 className="font-display text-sm tracking-[0.2em] uppercase text-foreground mb-8">Infrastructure Development</h3>
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
      <p className="font-body text-sm text-muted-foreground leading-relaxed mb-3">
        The long-term vision is to enable AI systems that can learn, improve, and adapt continuously over time. Instead of static models trained once and deployed, future AI systems may evolve through ongoing learning processes incorporating new information and capabilities.
      </p>
      <p className="font-body text-sm text-muted-foreground leading-relaxed">
        By developing scalable training infrastructure and continuous learning systems, Helios Lab aims to help enable the next generation of AI research and development.
      </p>
    </motion.div>
  </section>
);

export default PillarSix;
