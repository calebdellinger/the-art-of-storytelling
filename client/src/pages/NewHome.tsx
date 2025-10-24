import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Camera, BookOpen, Palette, Lightbulb, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";

export default function NewHome() {
  const sections = [
    {
      title: "The Art of Cinematography",
      description: "Master visual storytelling through camera work, composition, and technical excellence",
      icon: Camera,
      color: "from-blue-600 to-indigo-600",
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
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 dark:from-purple-950 dark:via-pink-950 dark:to-rose-950">
      <Navigation />

      {/* Hero Section */}
      <section className="container py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <Badge variant="secondary" className="px-4 py-1.5 text-sm">
            Visual Storytelling Manual
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent">
            The Art of Storytelling
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive guide to thinking creatively and mastering visual storytelling across all mediums and genres
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/cinematography/workflow">
              <Button size="lg" className="gap-2">
                Start Learning
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/cinematography/shots">
              <Button size="lg" variant="outline" className="gap-2">
                <Camera className="w-4 h-4" />
                Explore Cinematography
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="container py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Core Principles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {principles.map((principle, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                    <principle.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>{principle.title}</CardTitle>
                  <CardDescription className="text-base">{principle.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Sections */}
      <section className="container py-16">
        <div className="max-w-5xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold text-center mb-12">Learning Paths</h2>
          
          {sections.map((section, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className={`h-2 bg-gradient-to-r ${section.color}`} />
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 bg-gradient-to-br ${section.color} rounded-lg flex items-center justify-center shrink-0`}>
                    <section.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl mb-2">{section.title}</CardTitle>
                    <CardDescription className="text-base">{section.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-3">
                  {section.links.map((link, linkIndex) => (
                    <Link key={linkIndex} href={link.href}>
                      <Button variant="outline" className="w-full justify-between group">
                        {link.label}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="container py-16">
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-purple-200 dark:border-purple-800">
            <CardHeader>
              <CardTitle className="text-2xl">What You'll Learn</CardTitle>
              <CardDescription className="text-base">
                This comprehensive manual covers everything from technical fundamentals to creative philosophy
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-lg">Technical Mastery</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 mt-1">•</span>
                      <span>Camera angles and their psychological effects</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 mt-1">•</span>
                      <span>Shot composition and framing techniques</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 mt-1">•</span>
                      <span>Camera movements and their storytelling purposes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 mt-1">•</span>
                      <span>Professional production workflows</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 mt-1">•</span>
                      <span>Post-production techniques in DaVinci Resolve</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-lg">Creative Development</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 mt-1">•</span>
                      <span>Genre-specific visual approaches</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 mt-1">•</span>
                      <span>Transition techniques for seamless storytelling</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 mt-1">•</span>
                      <span>B-roll strategies for visual variety</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 mt-1">•</span>
                      <span>Color grading for emotional impact</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 mt-1">•</span>
                      <span>Audio design and mixing fundamentals</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="container py-16">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold">Begin Your Journey</h2>
          <p className="text-lg text-muted-foreground">
            Whether you're creating documentaries, dramas, thrillers, or corporate content, 
            this manual provides the foundation for exceptional visual storytelling.
          </p>
          <Link href="/cinematography/workflow">
            <Button size="lg" className="gap-2">
              Start with The Art of Cinematography
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

