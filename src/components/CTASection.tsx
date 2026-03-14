import { motion } from "framer-motion";

const CTASection = () => (
  <section className="bg-primary text-primary-foreground py-32 px-6">
    <div className="max-w-3xl mx-auto text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-display text-4xl sm:text-5xl font-bold tracking-tight"
      >
        Join the Experiment
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="font-body text-base sm:text-lg mt-6 opacity-60 leading-relaxed max-w-lg mx-auto"
      >
        We're looking for researchers, engineers, and thinkers who refuse to accept the status quo. If you believe AI can be built differently — we want to hear from you.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-10"
      >
        <button className="font-display text-xs tracking-[0.3em] uppercase bg-primary-foreground text-primary px-10 py-4 hover:opacity-90 transition-opacity">
          Get Involved
        </button>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
