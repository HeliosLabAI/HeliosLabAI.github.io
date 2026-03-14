import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6">
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-8"
      >
        An Independent AI Research Lab
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="font-display font-bold text-6xl sm:text-8xl md:text-9xl tracking-tight text-foreground"
      >
        HELIOSLAB
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.25 }}
        className="font-body text-lg sm:text-xl text-muted-foreground max-w-xl text-center mt-8 leading-relaxed"
      >
        Pushing the boundaries of artificial intelligence through relentless experimentation and open inquiry.
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-16"
      >
        <div className="w-[1px] h-16 bg-border mx-auto" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
