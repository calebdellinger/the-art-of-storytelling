import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, Clapperboard, Workflow, Sparkles } from "lucide-react";

export default function Home() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/workflow-diagram.png';
    link.download = 'video-production-workflow.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const phases = [
    {
      title: "Pre-Production & On-Set",
      color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
      description: "Idea generation, pre-planning, and critical on-set shots following the 'Do Less in Post' philosophy"
    },
    {
      title: "Footage Ingestion & Organization",
      color: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
      description: "Immediate backup, review & tagging, standardized folder structure, and metadata integration"
    },
    {
      title: "DaVinci Resolve Post-Production",
      color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
      description: "Complete walkthrough of Media, Cut, Edit, Color, and Fairlight pages with best practices"
    },
    {
      title: "Finalization & Distribution",
      color: "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200",
      description: "Final review, optimal export settings, and strategic social media posting"
    }
  ];

  const features = [
    {
      icon: <Workflow className="w-5 h-5" />,
      title: "Complete Pipeline",
      description: "From idea generation to social media posting"
    },
    {
      icon: <Clapperboard className="w-5 h-5" />,
      title: "DaVinci Resolve Focus",
      description: "Detailed best practices for all five pages"
    },
    {
      icon: <Sparkles className="w-5 h-5" />,
      title: "Efficiency First",
      description: "Minimize post-production work with smart planning"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950 dark:via-blue-950 dark:to-indigo-950">
      {/* Header */}
      <header className="border-b bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <Clapperboard className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">Video Production Workflow</h1>
                <p className="text-xs text-muted-foreground">High-Performance Pipeline Guide</p>
              </div>
            </div>
            <Button onClick={handleDownload} className="gap-2">
              <Download className="w-4 h-4" />
              Download Diagram
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container py-12 md:py-16">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <Badge variant="secondary" className="px-4 py-1.5 text-sm">
            Professional Workflow Guide
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            The Ultimate Video Production Pipeline
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive workflow diagram designed to prioritize creativity, speed, and technical excellence 
            from the spark of an idea to strategic placement on social media.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12">
          {features.map((feature, index) => (
            <Card key={index} className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-2">
                  {feature.icon}
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* Workflow Phases */}
      <section className="container py-12">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">Workflow Phases</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {phases.map((phase, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <Badge className={`${phase.color} px-3 py-1 text-xs font-semibold shrink-0`}>
                      Phase {index === 1 ? '1.5' : index < 1 ? '1' : index < 2 ? '2' : '3'}
                    </Badge>
                    <div>
                      <CardTitle className="text-lg mb-2">{phase.title}</CardTitle>
                      <CardDescription className="text-sm">{phase.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Diagram Section */}
      <section className="container py-12">
        <Card className="max-w-7xl mx-auto overflow-hidden shadow-2xl">
          <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
            <CardTitle className="text-2xl">Complete Workflow Diagram</CardTitle>
            <CardDescription className="text-blue-100">
              Click to view full resolution • Right-click to save image
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <div className="bg-white dark:bg-slate-900 overflow-auto">
              <img 
                src="/workflow-diagram.png" 
                alt="High-Performance Video Production Workflow Diagram"
                className="w-full h-auto cursor-zoom-in hover:opacity-95 transition-opacity"
                onClick={() => window.open('/workflow-diagram.png', '_blank')}
              />
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Key Highlights */}
      <section className="container py-12 mb-12">
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-primary/20 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 dark:from-blue-950/20 dark:to-indigo-950/20">
            <CardHeader>
              <CardTitle className="text-xl">Key Workflow Principles</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                    Pre-Production Excellence
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                    <li>• In-camera transitions for organic feel</li>
                    <li>• Comprehensive B-roll coverage</li>
                    <li>• Clean plates for VFX flexibility</li>
                    <li>• High-quality audio capture</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-600"></span>
                    DaVinci Resolve Mastery
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                    <li>• Proxy generation for smooth editing</li>
                    <li>• Hierarchical node tree for color</li>
                    <li>• Bus tracks for audio mixing</li>
                    <li>• Keyboard shortcuts for speed</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-orange-600"></span>
                    Organization Foundation
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                    <li>• Immediate dual-drive backup</li>
                    <li>• Standardized folder structure</li>
                    <li>• Consistent naming conventions</li>
                    <li>• Initial review and tagging</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-pink-600"></span>
                    Strategic Distribution
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                    <li>• Mobile device quality checks</li>
                    <li>• Platform-optimized exports</li>
                    <li>• Strong 3-second hooks</li>
                    <li>• SEO-optimized captions</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
        <div className="container py-8">
          <div className="text-center text-sm text-muted-foreground">
            <p>High-Performance Video Production Workflow • Designed for Efficiency & Excellence</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

