import { motion } from "framer-motion";
import AnimatedLogo from "./AnimatedLogo";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 relative">
      {/* Decorative vertical lines */}
      <div className="absolute inset-0 flex justify-between max-w-7xl mx-auto px-6 pointer-events-none">
        <div className="w-px bg-section-divider opacity-40" />
        <div className="w-px bg-section-divider opacity-40 hidden md:block" />
        <div className="w-px bg-section-divider opacity-40 hidden md:block" />
        <div className="w-px bg-section-divider opacity-40" />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center"
      >
        <p className="font-body text-xs tracking-[0.4em] uppercase text-muted-foreground mb-10">
          Independent AI Research
        </p>
        <div className="flex items-center justify-center gap-8 mb-10">
          <AnimatedLogo />
          <div className="text-center">
            <h1 className="font-display font-bold text-7xl sm:text-[8rem] md:text-[10rem] leading-[0.85] tracking-tighter text-foreground">
              HELIOS
            </h1>
            <h2 className="font-display font-light text-4xl sm:text-[4rem] md:text-[5rem] leading-[1] tracking-tighter text-foreground">
              LAB
            </h2>
          </div>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-body text-base sm:text-lg text-muted-foreground max-w-lg mx-auto mt-10 leading-relaxed text-balance"
        >
          Advancing the frontiers of long-context intelligence, autonomous systems, and rigorous AI evaluation.
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scaleY: 0 }}
        animate={{ opacity: 1, scaleY: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-12 origin-top"
      >
        <div className="w-px h-20 bg-foreground opacity-20" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
