import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu, BookOpen, Home, Camera, Workflow, Film, Database, Scissors, Palette, Volume2 } from "lucide-react";
import { Link, useLocation } from "wouter";

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [location] = useLocation();

  const navigationLinks = [
    { href: "/", label: "Home", icon: Home },
    { href: "/cinematography/workflow", label: "Production Workflow", icon: Workflow },
    { href: "/cinematography/shots", label: "Shot Types & Angles", icon: Camera },
    { href: "/cinematography/phase1", label: "Phase 1: Pre-Production", icon: Film },
    { href: "/cinematography/phase15", label: "Phase 1.5: Organization", icon: Film },
    { href: "/cinematography/phase2", label: "Phase 2: Post-Production", icon: Film },
    { href: "/cinematography/phase3", label: "Phase 3: Distribution", icon: Film },
    { href: "/asset-management", label: "Asset Management", icon: Database },
    { href: "/editing", label: "The Art of Editing", icon: Scissors },
    { href: "/color-grading", label: "The Art of Color Grading", icon: Palette },
    { href: "/sound-design", label: "The Art of Sound Design", icon: Volume2 },
  ];

  const isActive = (href: string) => location === href;

  return (
    <header className="border-b bg-background sticky top-0 z-50 backdrop-blur-sm bg-background/95">
      <div className="container py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-3 cursor-pointer group">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold group-hover:text-primary transition-colors">
                The Art of Storytelling
              </span>
            </div>
          </Link>

          {/* Hamburger Menu - All Screen Sizes */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  Navigation
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-2 mt-6">
                {navigationLinks.map((item) => (
                  <Link key={item.href} href={item.href}>
                    <Button
                      variant={isActive(item.href) ? "default" : "ghost"}
                      className="w-full justify-start gap-3"
                      onClick={() => setOpen(false)}
                    >
                      <item.icon className="w-4 h-4" />
                      {item.label}
                    </Button>
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

