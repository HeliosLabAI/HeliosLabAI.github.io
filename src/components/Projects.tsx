import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import projectSolar from "@/assets/project-solar.jpg";
import projectPlasma from "@/assets/project-plasma.jpg";
import projectNano from "@/assets/project-nano.jpg";
import projectThermal from "@/assets/project-thermal.jpg";
import projectHydrogen from "@/assets/project-hydrogen.jpg";
import projectAi from "@/assets/project-ai.jpg";

const projects = [
  {
    image: projectSolar,
    title: "Perovskite Solar Arrays",
    category: "Energy Systems",
    description: "Achieving 34.2% efficiency with next-gen perovskite-silicon tandem cells, surpassing conventional photovoltaic limits.",
    status: "Active",
    year: "2024–Present",
  },
  {
    image: projectPlasma,
    title: "Plasma Confinement Reactor",
    category: "Fusion Research",
    description: "Compact magnetic confinement system sustaining plasma at 150 million °C for record-breaking durations.",
    status: "Active",
    year: "2023–Present",
  },
  {
    image: projectNano,
    title: "Nanostructured Catalysts",
    category: "Advanced Materials",
    description: "Self-assembling nanomaterial lattices that accelerate chemical reactions by 400% with zero degradation.",
    status: "Published",
    year: "2022–2025",
  },
  {
    image: projectThermal,
    title: "Molten Salt Storage",
    category: "Energy Storage",
    description: "Grid-scale thermal storage system capable of delivering 500 MWh with 98% round-trip efficiency.",
    status: "Active",
    year: "2024–Present",
  },
  {
    image: projectHydrogen,
    title: "Green Hydrogen Electrolysis",
    category: "Clean Fuels",
    description: "Membrane electrode assembly producing hydrogen at $1.50/kg — the lowest cost ever demonstrated at scale.",
    status: "Pilot",
    year: "2025–Present",
  },
  {
    image: projectAi,
    title: "Neural Material Discovery",
    category: "AI & Simulation",
    description: "Deep learning pipeline that screens 10M+ candidate compounds per day for optimal energy material properties.",
    status: "Active",
    year: "2024–Present",
  },
];

const statusColor: Record<string, string> = {
  Active: "bg-primary/20 text-primary",
  Published: "bg-accent/20 text-accent",
  Pilot: "bg-primary/15 text-primary",
};

const Projects = () => {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <p className="text-primary uppercase tracking-[0.25em] text-sm font-heading mb-3">Portfolio</p>
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
            Projects & <span className="text-gradient">Research</span>
          </h2>
          <p className="text-muted-foreground max-w-xl text-lg">
            A selection of active research programs and breakthrough experiments across our core disciplines.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className={`text-xs font-heading font-medium px-3 py-1 rounded-full ${statusColor[project.status] || "bg-secondary text-secondary-foreground"}`}>
                    {project.status}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2 font-heading">
                  {project.category} · {project.year}
                </p>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-2 group-hover:text-primary transition-colors flex items-center gap-2">
                  {project.title}
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
