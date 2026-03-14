import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import AnimatedLogo from "@/components/AnimatedLogo";
import { useEffect, useRef } from "react";

const HomePage = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const blueCount = 100;
    const redCount = 20;
    const blackCount = 5;
    const totalCount = blueCount + redCount + blackCount;
    
    const particles: { x: number; y: number; vx: number; vy: number; size: number; color: string; originalY: number }[] = [];

    const blueColors = [
      'rgba(59, 130, 246, 0.9)',
      'rgba(37, 99, 235, 0.85)',
      'rgba(96, 165, 250, 0.8)',
      'rgba(29, 78, 216, 0.85)',
      'rgba(147, 197, 253, 0.7)',
    ];

    const redColors = [
      'rgba(239, 68, 68, 0.9)',
      'rgba(220, 38, 38, 0.85)',
      'rgba(248, 113, 113, 0.8)',
      'rgba(185, 28, 28, 0.85)',
      'rgba(252, 165, 165, 0.7)',
    ];

    const blackColors = [
      'rgba(0, 0, 0, 0.8)',
      'rgba(31, 41, 55, 0.75)',
      'rgba(17, 24, 39, 0.85)',
      'rgba(55, 65, 81, 0.7)',
      'rgba(75, 85, 99, 0.6)',
    ];

    // Initialize particles scattered across full screen
    for (let i = 0; i < totalCount; i++) {
      let color;
      if (i < blueCount) {
        color = blueColors[Math.floor(Math.random() * blueColors.length)];
      } else if (i < blueCount + redCount) {
        color = redColors[Math.floor(Math.random() * redColors.length)];
      } else {
        color = blackColors[Math.floor(Math.random() * blackColors.length)];
      }
      
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: -0.3 - Math.random() * 0.5, // Float upward slowly
        size: 1 + Math.round(Math.random()), // Either 1 or 2px
        color: color,
        originalY: 0,
      });
    }

    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    let animationId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((p, index) => {
        // Natural upward float with slight drift
        p.x += p.vx;
        p.y += p.vy;
        
        // Wrap around when going off screen
        if (p.y < -10) {
          p.y = canvas.height + 10;
          p.x = Math.random() * canvas.width;
        }
        if (p.x < -10) p.x = canvas.width + 10;
        if (p.x > canvas.width + 10) p.x = -10;

        // Mouse interaction - water ripple effect (repel from cursor)
        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < 150) {
          const force = (150 - dist) / 150;
          const angle = Math.atan2(dy, dx);
          // Push away from cursor like water displacement
          p.vx -= Math.cos(angle) * force * 2;
          p.vy -= Math.sin(angle) * force * 2;
        }

        // Damping to stabilize
        p.vx *= 0.98;
        p.vy *= 0.98;
        
        // Maintain gentle upward drift
        p.vy = p.vy * 0.95 + (-0.3 - Math.random() * 0.2) * 0.05;

        // Draw elongated dot that changes shape
        const length = 0.3 + (Math.sin(Date.now() * 0.002 + index) * 0.15 + 0.15);
        
        ctx.beginPath();
        ctx.ellipse(p.x, p.y, length, 0.3, 0, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();

        // Soft glow
        ctx.beginPath();
        ctx.ellipse(p.x, p.y, length * 3, 0.9, 0, 0, Math.PI * 2);
        ctx.fillStyle = p.color.replace(/[\d.]+\)$/, '0.08)');
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <main className="bg-background relative">
      {/* Interactive Water Wave Canvas - Full Screen */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-auto z-0"
        style={{ width: '100%', height: '100%' }}
      />

      {/* Top Navigation Buttons */}
      <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 flex gap-4">
        <Link
          to="/feedback"
          className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-200"
        >
          Feedback
        </Link>
        <Link
          to="/team"
          className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-200"
        >
          Team
        </Link>
        <Link
          to="/research"
          className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-200"
        >
          Research
        </Link>
      </div>

      {/* Remove bottom Research Link */}

            {/* Particle Stream Canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0"
        style={{ width: '100%', height: '100%' }}
      />

      {/* Futuristic Horizontal Lines Design */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Main horizontal lines spanning full width */}
        <div className="absolute inset-0 flex flex-col justify-between py-20">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-section-divider/60 to-transparent" />
          <div className="w-full h-px bg-gradient-to-r from-transparent via-section-divider/40 to-transparent hidden md:block" />
          <div className="w-full h-px bg-gradient-to-r from-transparent via-section-divider/40 to-transparent hidden md:block" />
          <div className="w-full h-px bg-gradient-to-r from-transparent via-section-divider/60 to-transparent" />
        </div>
        
        {/* Vertical accent lines - shorter */}
        <div className="absolute inset-0 flex justify-between max-w-5xl mx-auto px-6">
          <div className="w-px h-1/2 bg-gradient-to-b from-section-divider/30 to-transparent mt-20" />
          <div className="w-px h-1/2 bg-gradient-to-b from-section-divider/20 to-transparent mt-32 hidden md:block" />
          <div className="w-px h-1/2 bg-gradient-to-b from-section-divider/20 to-transparent mt-32 hidden md:block" />
          <div className="w-px h-1/2 bg-gradient-to-b from-section-divider/30 to-transparent mt-20" />
        </div>
        
        {/* Horizontal line segments at various positions */}
        <div className="absolute top-1/4 left-0 w-1/3 h-px bg-section-divider/40" />
        <div className="absolute top-1/4 right-0 w-1/3 h-px bg-section-divider/40" />
        <div className="absolute top-3/4 left-0 w-1/4 h-px bg-section-divider/35" />
        <div className="absolute top-3/4 right-0 w-1/4 h-px bg-section-divider/35" />
        
        {/* Horizontal dashed lines effect */}
        <div className="absolute top-1/2 left-10 w-32 h-px bg-section-divider/50" />
        <div className="absolute top-1/2 right-10 w-32 h-px bg-section-divider/50" />
        <div className="absolute top-1/3 left-20 w-24 h-px bg-section-divider/40" />
        <div className="absolute bottom-1/3 right-20 w-24 h-px bg-section-divider/40" />
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center max-w-4xl"
        >
          {/* Logo at top */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center gap-8 mb-8"
          >
            <AnimatedLogo />
            <div className="text-center">
              <h2 className="font-display font-bold text-4xl sm:text-[5rem] md:text-[6rem] leading-[0.85] tracking-tighter text-foreground">
                HELIOS
              </h2>
              <h3 className="font-display font-light text-2xl sm:text-[2.5rem] md:text-[3rem] leading-[1] tracking-tighter text-foreground">
                LAB
              </h3>
            </div>
          </motion.div>
          
          {/* Helios Lab description */}
          <div className="space-y-4 text-left max-w-3xl mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-body text-sm sm:text-base text-muted-foreground leading-relaxed"
            >
              Helios Lab is an experimental research initiative focused on advancing the foundations of artificial intelligence.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="font-body text-sm sm:text-base text-foreground leading-relaxed font-semibold"
            >
              Our mission is to push AI to its limits by building the infrastructure, evaluation systems, and data foundations that enable more capable intelligent systems.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="font-body text-sm sm:text-base text-muted-foreground leading-relaxed"
            >
              We research new methods for evaluating reasoning, improving data quality, designing long-running autonomous models, and enabling collaboration between multiple AI systems.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="font-body text-sm sm:text-base text-muted-foreground leading-relaxed"
            >
              By improving the systems around AI models—not just the models themselves—we aim to unlock capabilities that today's technology cannot yet achieve.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="font-body text-sm sm:text-base text-foreground leading-relaxed font-semibold"
            >
              In the long term, we aim to apply AI systems to robotics, autonomous machines, and exploration technologies designed for extreme environments such as space or hazardous industrial settings.
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="font-body text-lg leading-relaxed text-foreground">
              From autonomous vehicles navigating complex environments to robots operating in extreme conditions, the foundation of these systems is data. High-quality data is what allows intelligent machines to learn, adapt, and perform reliably.
            </p>
            <p className="font-body text-lg leading-relaxed text-foreground">
              Our mission is to build infrastructure that makes this possible.
            </p>
          </motion.div>

          {/* Data Infrastructure Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground">
              Data Infrastructure for Autonomous Systems
            </h2>
            <p className="font-body text-lg leading-relaxed text-foreground">
              We are developing a platform that helps companies collect, organize, and label large-scale datasets required to train modern artificial intelligence systems. Many of the most transformative technologies—such as autonomous driving, robotics, and advanced perception systems—depend on enormous volumes of labeled data. However, obtaining and managing this data remains one of the biggest challenges in building real-world AI.
            </p>
            <p className="font-body text-lg leading-relaxed text-foreground">
              HeliosLab is focused on solving this problem.
            </p>
            <p className="font-body text-lg leading-relaxed text-foreground">
              Autonomous vehicles, robotics platforms, and intelligent machines rely on a combination of sensors such as cameras, LiDAR, radar, and other environmental sensors. These sensors generate massive streams of raw information. Before machine learning models can use this information, it must be structured and labeled in ways that allow algorithms to recognize objects, understand environments, and make decisions.
            </p>
            <p className="font-body text-lg leading-relaxed text-foreground">
              Our platform is designed to support this process at scale.
            </p>
            <p className="font-body text-lg leading-relaxed text-foreground">
              We are building tools that allow organizations to efficiently manage large datasets, annotate complex sensor inputs, and ensure the quality of labeled data used in training advanced AI models. The goal is to create a system where companies developing autonomous technologies can easily process the data required to train reliable perception and decision-making models.
            </p>
            <div className="bg-muted/50 p-6 rounded-lg">
              <p className="font-body text-lg leading-relaxed text-foreground font-semibold mb-4">
                This includes labeling tasks such as:
              </p>
              <ul className="list-disc list-inside space-y-2 font-body text-lg text-foreground">
                <li>Object detection in images and video</li>
                <li>Scene segmentation</li>
                <li>3D environment annotation</li>
                <li>Motion tracking and trajectory labeling</li>
                <li>Multi-sensor data alignment</li>
              </ul>
            </div>
            <p className="font-body text-lg leading-relaxed text-foreground">
              By building robust data labeling infrastructure, we enable AI developers to train systems that can safely operate in the physical world.
            </p>
          </motion.div>

          {/* Autonomous Vehicles Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground">
              Powering Next Generation of Autonomous Vehicles
            </h2>
            <p className="font-body text-lg leading-relaxed text-foreground">
              One of the most immediate applications of high-quality labeled data is autonomous transportation. Self-driving vehicles must understand roads, pedestrians, vehicles, traffic signals, and countless edge cases that occur in real-world environments.
            </p>
            <p className="font-body text-lg leading-relaxed text-foreground">
              Training such systems requires billions of annotated data points across diverse conditions such as different weather, lighting, cities, and traffic scenarios.
            </p>
            <p className="font-body text-lg leading-relaxed text-foreground">
              HeliosLab aims to provide the data infrastructure that powers this learning process. By enabling efficient data labeling pipelines, we help accelerate the development of safer and more capable autonomous vehicles.
            </p>
            <p className="font-body text-lg leading-relaxed text-foreground">
              Our long-term vision is to support the global ecosystem of companies building autonomous mobility solutions—from research labs and startups to large automotive manufacturers.
            </p>
          </motion.div>

          {/* Robotics Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground">
              Beyond Vehicles: Robotics for Dangerous and Extreme Environments
            </h2>
            <p className="font-body text-lg leading-relaxed text-foreground">
              While autonomous vehicles represent a major focus area, our mission goes beyond transportation. Many industries involve environments that are dangerous, hazardous, or inaccessible for humans. These include disaster zones, deep mining operations, nuclear facilities, offshore infrastructure, and space exploration.
            </p>
            <p className="font-body text-lg leading-relaxed text-foreground">
              Robotics can play a transformative role in these environments.
            </p>
            <p className="font-body text-lg leading-relaxed text-foreground">
              However, robots operating in complex real-world conditions require sophisticated perception systems and training data that allows them to recognize objects, navigate terrain, and perform tasks autonomously.
            </p>
            <p className="font-body text-lg leading-relaxed text-foreground">
              HeliosLab's data infrastructure aims to support the development of these robotic systems by enabling large-scale training datasets for real-world interaction.
            </p>
          </motion.div>

          {/* Humanoid Robots Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground">
              The Long-Term Vision: Humanoid Robots for Space and High-Risk Work
            </h2>
            <p className="font-body text-lg leading-relaxed text-foreground">
              Our ultimate long-term goal is even more ambitious.
            </p>
            <p className="font-body text-lg leading-relaxed text-foreground">
              We envision a future where advanced humanoid robots can perform work that is currently too dangerous, difficult, or impossible for humans. These robots could operate in extreme environments such as deep space missions, planetary exploration, disaster response zones, or hazardous industrial sites.
            </p>
            <p className="font-body text-lg leading-relaxed text-foreground">
              Human-like robotic systems offer unique advantages because they can interact with tools, infrastructure, and environments that were originally designed for humans. A humanoid robot can climb ladders, operate machinery, manipulate tools, and navigate spaces built for people.
            </p>
            <p className="font-body text-lg leading-relaxed text-foreground">
              But building such robots requires enormous progress in multiple areas:
            </p>
            <div className="bg-muted/50 p-6 rounded-lg">
              <ul className="list-disc list-inside space-y-2 font-body text-lg text-foreground">
                <li>Perception and vision systems</li>
                <li>Motion control and manipulation</li>
                <li>Decision-making AI</li>
                <li>Large-scale training data</li>
              </ul>
            </div>
            <p className="font-body text-lg leading-relaxed text-foreground">
              HeliosLab is contributing to this future by focusing on one of the most critical components: data that allows intelligent systems to learn how the world works.
            </p>
            <p className="font-body text-lg leading-relaxed text-foreground">
              By building large-scale data infrastructure today, we are laying the groundwork for intelligent robotic systems of tomorrow.
            </p>
          </motion.div>

          {/* Open Technology Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground">
              Open Technology and Collaboration
            </h2>
            <p className="font-body text-lg leading-relaxed text-foreground">
              The development of advanced AI and robotics will require collaboration across many disciplines and organizations. Researchers, engineers, and companies around the world are working on different aspects of the same challenge: creating machines that can safely and effectively operate in the real world.
            </p>
            <p className="font-body text-lg leading-relaxed text-foreground">
              At HeliosLab, we believe in building technology that can support this broader ecosystem.
            </p>
            <p className="font-body text-lg leading-relaxed text-foreground">
              Our goal is to create systems that help researchers and companies accelerate progress by giving them better tools for managing and training large datasets. The faster we can improve the data pipelines behind AI systems, the faster the entire field can move forward.
            </p>
          </motion.div>

          {/* Future Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground">
              A Future Built with Intelligent Machines
            </h2>
            <p className="font-body text-lg leading-relaxed text-foreground">
              The technologies we are working toward may take years or decades to fully mature, but the direction is clear. Autonomous systems and robotics will play an increasingly important role in how humanity explores, builds, and solves large-scale problems.
            </p>
            <p className="font-body text-lg leading-relaxed text-foreground">
              From safer transportation systems to robots operating in environments that humans cannot reach, intelligent machines will expand the boundaries of what is possible.
            </p>
            <p className="font-body text-lg leading-relaxed text-foreground">
              HeliosLab is focused on building the foundational infrastructure that helps make this future real.
            </p>
            <p className="font-body text-lg leading-relaxed text-foreground">
              Our work begins with data, but the impact extends much further—toward autonomous vehicles that navigate the world safely, robotic systems that assist in hazardous environments, and eventually humanoid robots that can support humanity in missions far beyond Earth.
            </p>
            <p className="font-body text-lg leading-relaxed text-foreground font-semibold">
              We are building technology not only for today's AI systems, but for the intelligent machines that will define the next century.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
