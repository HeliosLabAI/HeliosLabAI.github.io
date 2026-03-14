import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";
import ResearchObjective from "./ResearchObjective";

const problems = [
  { title: "Noisy Internet Data", text: "Most training datasets contain significant amounts of duplicated content, low-quality text, incorrect information, and synthetic noise. This reduces training efficiency and introduces biases." },
  { title: "Lack of High-Quality Labels", text: "Advanced tasks require carefully labeled data, but large-scale labeling remains expensive and difficult — especially for reasoning, scientific knowledge, and multi-step task datasets." },
  { title: "Dataset Staleness", text: "Static datasets quickly become outdated as scientific discoveries, software libraries, economic data, and policies evolve. Models trained on static data struggle to remain accurate over time." },
  { title: "Data Contamination", text: "When benchmark datasets appear in training data, evaluation results become unreliable. This makes it difficult to measure genuine model progress and capabilities." },
];

const objectives = [
  {
    title: "Automated Data Quality Filtering",
    description: "Develop automated systems to evaluate and filter large-scale datasets using ML models.",
    items: ["Duplicated content detection", "Low-information text filtering", "Misleading or incorrect information removal", "Spam and generated noise detection"],
  },
  {
    title: "Large-Scale Data Labeling Pipelines",
    description: "Design systems that enable efficient large-scale labeling of complex datasets.",
    items: ["Expert human labeling workflows", "AI-assisted labeling systems", "Multi-stage validation pipelines", "Active learning strategies"],
  },
  {
    title: "Synthetic Data Generation",
    description: "Synthetic data can complement real-world datasets when used carefully to produce specialized training examples.",
    items: ["Model-generated reasoning datasets", "Simulated environments for agent training", "Structured problem generation systems"],
  },
  {
    title: "Continuous Data Updating Systems",
    description: "Future AI models may require continuously evolving datasets that stay aligned with current knowledge.",
    items: ["Automatic dataset updates", "Regular revalidation pipelines", "Expansion with new information sources"],
  },
  {
    title: "Data Provenance & Transparency",
    description: "Understanding where training data originates is important for research and ethical considerations.",
    items: ["Dataset source tracking", "Data transformation logging", "Labeling process documentation", "Quality evaluation metrics"],
  },
];

const infrastructure = [
  { label: "Data ingestion systems", desc: "Tools for collecting data from diverse sources." },
  { label: "Processing pipelines", desc: "Systems for cleaning, filtering, and structuring datasets." },
  { label: "Labeling platforms", desc: "Interfaces for distributed teams to contribute high-quality annotations." },
  { label: "Data versioning systems", desc: "Mechanisms to track dataset evolution over time." },
];

const PillarFour = () => (
  <section className="px-6 py-32 max-w-4xl mx-auto">
    <SectionLabel number="04" label="Research Pillar" />

    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="font-display text-4xl sm:text-5xl font-bold text-foreground tracking-tight mb-8"
    >
      Scalable Data Systems
      <br />
      & Data Infrastructure
    </motion.h2>

    <motion.p
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="font-body text-base text-muted-foreground leading-relaxed max-w-2xl mb-6"
    >
      High-quality data is one of the most important factors determining the performance of modern AI systems. While large datasets have enabled significant progress, the majority of publicly available data suffers from noise, duplication, misinformation, and inconsistent labeling.
    </motion.p>
    <motion.p
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.15 }}
      className="font-body text-base text-muted-foreground leading-relaxed max-w-2xl mb-16"
    >
      Helios Lab will research and build scalable data systems designed to produce high-quality datasets for training advanced AI models. The objective is to move beyond raw internet-scale data and toward structured, verified, and continuously improving data pipelines.
    </motion.p>

    {/* Problem Statement */}
    <div className="mb-16">
      <h3 className="font-display text-sm tracking-[0.2em] uppercase text-foreground mb-8">Problem Statement</h3>
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
        The long-term vision is to establish robust data ecosystems capable of supporting the next generation of AI systems. Future AI training may depend on carefully curated knowledge systems that combine human expertise, automated filtering, and dynamic data generation.
      </p>
      <p className="font-body text-sm text-muted-foreground leading-relaxed">
        Many major advances in AI have come not only from new model architectures, but also from better data pipelines and higher-quality training datasets. Improving data infrastructure may significantly accelerate progress in AI reasoning, reliability, and real-world performance.
      </p>
    </motion.div>
  </section>
);

export default PillarFour;
