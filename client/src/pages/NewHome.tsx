import { Button } from "@/components/ui/button";
import { Camera, BookOpen, Palette, Lightbulb, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";

export default function NewHome() {
  const sections = [
    {
      title: "The Art of Cinematography",
      description: "Master visual storytelling through camera work, composition, and technical excellence",
      icon: Camera,
      links: [
        { href: "/cinematography/workflow", label: "Production Workflow" },
        { href: "/cinematography/shots", label: "Shot Types & Angles" },
        { href: "/cinematography/phase1", label: "Pre-Production & On-Set" },
        { href: "/cinematography/phase2", label: "Post-Production" },
      ]
    },
  ];

  const principles = [
    {
      icon: BookOpen,
      title: "Story First",
      description: "Every technical decision serves the narrative. Learn to make choices that enhance your story rather than distract from it."
    },
    {
      icon: Palette,
      title: "Visual Language",
      description: "Develop your unique visual vocabulary. Understand how color, composition, and movement communicate emotion and meaning."
    },
    {
      icon: Lightbulb,
      title: "Creative Thinking",
      description: "Break conventional patterns. Train yourself to see possibilities where others see limitations."
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50 dark:from-slate-950 dark:via-gray-950 dark:to-zinc-950">
      <Navigation />

      {/* Hero Section */}
      <section className="container py-20 md:py-32">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <div className="inline-block neomorph px-6 py-2 rounded-full bg-background mb-4">
            <p className="text-sm font-medium text-muted-foreground">Visual Storytelling Manual</p>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight bg-gradient-to-r from-slate-900 via-gray-800 to-zinc-900 dark:from-slate-100 dark:via-gray-200 dark:to-zinc-100 bg-clip-text text-transparent mb-8">
            The Art of Storytelling
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A comprehensive guide to thinking creatively and mastering visual storytelling across all mediums and genres
          </p>
          <div className="flex flex-wrap gap-6 justify-center pt-8">
            <Link href="/cinematography/workflow">
              <Button size="lg" className="gap-2 px-8 py-6 text-lg neomorph hover:shadow-xl">
                Start Learning
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link href="/cinematography/shots">
              <Button size="lg" variant="outline" className="gap-2 px-8 py-6 text-lg neomorph hover:shadow-xl">
                <Camera className="w-5 h-5" />
                Explore Cinematography
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="container py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Core Principles</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {principles.map((principle, index) => (
              <div key={index} className="neomorph rounded-3xl p-8 bg-background hover:shadow-xl transition-all duration-300">
                <div className="neomorph-inset w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-background">
                  <principle.icon className="w-8 h-8 text-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{principle.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Sections */}
      <section className="container py-24">
        <div className="max-w-6xl mx-auto space-y-12">
          <h2 className="text-4xl font-bold text-center mb-16">Learning Paths</h2>
          
          {sections.map((section, index) => (
            <div key={index} className="glass rounded-3xl p-10 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-start gap-6 mb-8">
                <div className="neomorph-inset w-20 h-20 rounded-2xl flex items-center justify-center shrink-0 bg-background">
                  <section.icon className="w-10 h-10 text-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold mb-3">{section.title}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">{section.description}</p>
                </div>
              </div>
              <div>
                <div className="grid md:grid-cols-2 gap-4">
                  {section.links.map((link, linkIndex) => (
                    <Link key={linkIndex} href={link.href}>
                      <button className="neomorph w-full px-6 py-4 rounded-2xl bg-background hover:shadow-xl transition-all duration-300 flex items-center justify-between group">
                        <span className="font-medium">{link.label}</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="container py-24">
        <div className="max-w-5xl mx-auto">
          <div className="glass-strong rounded-3xl p-12">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-4">What You'll Learn</h2>
              <p className="text-lg text-muted-foreground">
                This comprehensive manual covers everything from technical fundamentals to creative philosophy
              </p>
            </div>
            <div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="font-bold text-xl">Technical Mastery</h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-foreground/40 mt-1.5 text-lg">•</span>
                      <span>Camera angles and their psychological effects</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-foreground/40 mt-1.5 text-lg">•</span>
                      <span>Shot composition and framing techniques</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-foreground/40 mt-1.5 text-lg">•</span>
                      <span>Camera movements and their storytelling purposes</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-foreground/40 mt-1.5 text-lg">•</span>
                      <span>Professional production workflows</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-foreground/40 mt-1.5 text-lg">•</span>
                      <span>Post-production techniques in DaVinci Resolve</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="font-bold text-xl">Creative Development</h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-foreground/40 mt-1.5 text-lg">•</span>
                      <span>Genre-specific visual approaches</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-foreground/40 mt-1.5 text-lg">•</span>
                      <span>Transition techniques for seamless storytelling</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-foreground/40 mt-1.5 text-lg">•</span>
                      <span>B-roll strategies for visual variety</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-foreground/40 mt-1.5 text-lg">•</span>
                      <span>Color grading for emotional impact</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-foreground/40 mt-1.5 text-lg">•</span>
                      <span>Audio design and mixing fundamentals</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="container py-24 pb-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">Begin Your Journey</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Whether you're creating documentaries, dramas, thrillers, or corporate content, 
            this manual provides the foundation for exceptional visual storytelling.
          </p>
          <Link href="/cinematography/workflow">
            <Button size="lg" className="gap-2 px-8 py-6 text-lg neomorph hover:shadow-xl">
              Start with The Art of Cinematography
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

