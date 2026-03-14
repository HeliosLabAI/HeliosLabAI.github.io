const Footer = () => (
  <footer className="py-10 px-6 border-t border-border">
    <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
      <span className="font-display text-xs font-semibold tracking-[0.2em] text-foreground">
        HELIOSLAB
      </span>
      <span className="font-body text-[11px] text-muted-foreground">
        © {new Date().getFullYear()} Helios Lab. All rights reserved.
      </span>
    </div>
  </footer>
);

export default Footer;
