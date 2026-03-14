const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-display text-sm font-semibold tracking-wider text-foreground">
          HELIOSLAB
        </span>
        <span className="font-body text-xs text-muted-foreground">
          © {new Date().getFullYear()} HeliosLab. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
