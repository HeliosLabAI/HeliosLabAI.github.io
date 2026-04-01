const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-heading font-bold text-xl tracking-tight">
          <span className="text-gradient">Helios</span>{" "}
          <span className="text-foreground">Lab</span>
        </a>
        <div className="hidden sm:flex gap-8">
          <a href="#work" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium">
            About
          </a>
          <a href="#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium">
            Projects
          </a>
          <a href="#experiments" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium">
            Experiments
          </a>
          <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
