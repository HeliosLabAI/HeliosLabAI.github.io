import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-10">
            Interested in collaborating or learning more about our research?
          </p>
          <a
            href="mailto:hello@helioslab.io"
            className="inline-block px-10 py-4 rounded-lg bg-primary text-primary-foreground font-heading font-semibold text-lg hover:brightness-110 transition-all glow"
          >
            hello@helioslab.io
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
