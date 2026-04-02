import { motion } from "framer-motion";
import { FolderOpen, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import adaptiveArithmetic from "@/assets/adaptive-arithmetic.jpg";

const projects = [
  {
    image: adaptiveArithmetic,
    title: "Adaptive Arithmetic Agent",
    category: "AI & Reinforcement Learning",
    description: "An RL agent that learns addition through Q-Learning and state representation breakthrough.",
    status: "published" as const,
    link: "/projects/adaptive-arithmetic",
  },
];

const statusConfig = {
  published: { label: "Published", icon: CheckCircle2, style: "bg-emerald-50 text-emerald-700" },
};

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="section-padding pb-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-accent/10 flex items-center justify-center">
                <FolderOpen className="w-5 h-5 text-accent" />
              </div>
              <h1 className="text-2xl font-semibold text-foreground tracking-tight">Projects</h1>
            </div>
            <p className="text-muted-foreground text-base max-w-lg leading-relaxed">
              Active research programs and breakthrough experiments across our core disciplines.
            </p>
          </motion.div>
        </div>
      </header>

      {/* Project Grid */}
      <section className="px-5 md:px-8 pb-20">
        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, i) => {
            const { label, icon: StatusIcon, style } = statusConfig[project.status];
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="card-elevated overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow duration-300"
              >
                {project.link ? (
                  <Link to={project.link} className="block">
                    <div className="relative aspect-[3/2] overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        width={800}
                        height={600}
                        className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3">
                        <span className={`inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full backdrop-blur-sm ${style}`}>
                          <StatusIcon className="w-3 h-3" />
                          {label}
                        </span>
                      </div>
                    </div>

                    <div className="p-5">
                      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1.5">
                        {project.category}
                      </p>
                      <h3 className="font-semibold text-foreground tracking-tight mb-1.5 group-hover:text-primary transition-colors flex items-center gap-1.5">
                        {project.title}
                        <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </Link>
                ) : (
                  <>
                    <div className="relative aspect-[3/2] overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        width={800}
                        height={600}
                        className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3">
                        <span className={`inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full backdrop-blur-sm ${style}`}>
                          <StatusIcon className="w-3 h-3" />
                          {label}
                        </span>
                      </div>
                    </div>

                    <div className="p-5">
                      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1.5">
                        {project.category}
                      </p>
                      <h3 className="font-semibold text-foreground tracking-tight mb-1.5 group-hover:text-primary transition-colors flex items-center gap-1.5">
                        {project.title}
                        <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </>
                )}
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
