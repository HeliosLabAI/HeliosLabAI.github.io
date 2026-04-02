import { Link, useLocation } from "react-router-dom";
import { FolderOpen, Home, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { to: "/", label: "Home", icon: Home },
  { to: "/projects", label: "Projects", icon: FolderOpen },
];

const AppShell = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background">
      {/* Top Nav */}
      <nav className="sticky top-0 z-50 glass">
        <div className="max-w-5xl mx-auto px-5 md:px-8 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sun className="w-5 h-5 text-primary" />
            <span className="font-semibold text-foreground tracking-tight">Helios Lab</span>
          </div>
          <div className="flex items-center gap-1 bg-secondary/70 rounded-xl p-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.to;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={cn(
                    "flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all duration-200",
                    isActive
                      ? "bg-card text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <item.icon className="w-3.5 h-3.5" />
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Content */}
      {children}
    </div>
  );
};

export default AppShell;
