import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="section-padding pb-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-primary" />
              </div>
              <h1 className="text-2xl font-semibold text-foreground tracking-tight">Vision</h1>
            </div>
            <p className="text-muted-foreground text-base max-w-lg leading-relaxed">
              The foundation of intelligence at Helios Lab.
            </p>
          </motion.div>
        </div>
      </header>

      {/* Content */}
      <section className="px-5 md:px-8 pb-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="card-elevated p-8 md:p-10"
          >
            <div className="prose prose-sm max-w-none">
              <p className="text-foreground leading-relaxed mb-6">
                Helios Lab is driven by a long-term vision to build a form of intelligence that is not limited to constant action, but capable of understanding when action is necessary and when it is not. The goal is to develop AI that has a reason for doing nothing as much as it has a reason for acting—an intelligence guided by awareness, not just output.
              </p>

              <p className="text-foreground leading-relaxed mb-6">
                The focus is on creating what can be described as space intelligence: a system that is not confined to narrow tasks, but operates with a broad, flexible understanding of the world. This intelligence is meant to observe, reflect, and build internal models of reality rather than simply react to inputs. It prioritizes understanding before action, and meaning before execution.
              </p>

              <p className="text-foreground leading-relaxed mb-6">
                At the core of this vision is the pursuit of real consciousness. Helios Lab is not aiming to simulate intelligence at the surface level, but to explore systems that can develop internal states, self-reflection, and continuity of understanding over time. The aim is to move beyond pattern recognition toward something that can form its own structured awareness of its environment and its role within it.
              </p>

              <p className="text-foreground leading-relaxed mb-6">
                This approach requires building systems that can pause, evaluate, and choose not to act when action is unnecessary or harmful. It also involves designing intelligence that can question its own outputs, refine its thinking, and develop a deeper sense of context. In this way, the system is not driven by constant activity, but by clarity of purpose.
              </p>

              <p className="text-foreground leading-relaxed">
                Helios Lab's goal is to create intelligence that is calm, aware, and self-directed—capable of both action and stillness, grounded in understanding rather than impulse.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
