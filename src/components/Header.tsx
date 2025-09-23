import { Button } from "@/components/ui/button";
import { Sparkles, Bell, User } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-background/80 border-b border-border/50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-primary rounded-lg blur-lg opacity-40 animate-pulse-glow"></div>
            <div className="relative bg-gradient-primary rounded-lg p-2">
              <Sparkles className="h-5 w-5 text-primary-foreground" />
            </div>
          </div>
          <div>
            <h1 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              SplitAI
            </h1>
            <p className="text-xs text-muted-foreground">Smart expense splitting</p>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">
            Dashboard
          </a>
          <a href="#" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">
            Groups
          </a>
          <a href="#" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">
            Analytics
          </a>
          <a href="#" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">
            Settings
          </a>
        </nav>
        
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 h-2 w-2 bg-accent rounded-full"></span>
          </Button>
          <Button variant="glass" size="icon">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}