import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Download } from "lucide-react";
import { Link } from "wouter";

export default function Phase1() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/phase1-diagram.png';
    link.download = 'phase1-pre-production-onset.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-slate-50 dark:from-blue-950 dark:via-indigo-950 dark:to-slate-950">
      {/* Header */}
      <header className="border-b bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container py-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <Button variant="ghost" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Overview
              </Button>
            </Link>
            <Button onClick={handleDownload} className="gap-2">
              <Download className="w-4 h-4" />
              Download Diagram
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="container py-12">
        <div className="max-w-4xl mx-auto">
          <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 mb-4">
            Phase 1
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Pre-Production & On-Set Efficiency</h1>
          <p className="text-xl text-muted-foreground mb-8">
            The foundation of a successful video production lies in meticulous planning and smart on-set execution. 
            This phase embodies the "Do Less in Post" philosophy, where strategic decisions made upfront dramatically 
            reduce post-production workload and accelerate the entire workflow.
          </p>
        </div>
      </section>

      {/* Diagram */}
      <section className="container py-8">
        <Card className="max-w-6xl mx-auto overflow-hidden shadow-xl">
          <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
            <CardTitle>Phase 1 Workflow Diagram</CardTitle>
            <CardDescription className="text-blue-100">
              Click to view full resolution
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <div className="bg-white dark:bg-slate-900 overflow-auto">
              <img 
                src="/phase1-diagram.png" 
                alt="Phase 1: Pre-Production & On-Set Workflow"
                className="w-full h-auto cursor-zoom-in hover:opacity-95 transition-opacity"
                onClick={() => window.open('/phase1-diagram.png', '_blank')}
              />
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Content Sections */}
      <section className="container py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Idea Generation */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">💡</span>
                Idea Generation: The Rapid-Fire Ideation Loop
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Every successful video begins with a compelling idea. The ideation phase is not about waiting for 
                inspiration to strike—it is a systematic process of analyzing trends, brainstorming hooks, and 
                defining clear value propositions. This rapid-fire loop ensures that your content is both timely 
                and valuable to your target audience.
              </p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">📊 Trend Analysis</h4>
                  <p className="text-sm text-muted-foreground">
                    Research current viral formats across platforms. Analyze competitor content to identify what 
                    resonates with audiences. Study platform algorithms to understand content distribution patterns. 
                    Identify audience preferences through comments, shares, and engagement metrics.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">🎣 Hook Brainstorming</h4>
                  <p className="text-sm text-muted-foreground">
                    The first three seconds determine whether viewers stay or scroll. Develop pattern interrupt 
                    techniques that break the viewer's scrolling rhythm. Consider visual surprises, unexpected 
                    audio cues, compelling questions, or bold statements that demand attention.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">⭐ Value Proposition</h4>
                  <p className="text-sm text-muted-foreground">
                    Clearly define what the viewer will gain from watching. This could be educational value, 
                    entertainment, emotional connection, or actionable takeaways. A strong value proposition 
                    keeps viewers engaged through the entire video.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Pre-Planning */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">📋</span>
                Pre-Planning: The Shoot-to-Edit Strategy
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Pre-planning transforms abstract ideas into concrete action plans. The goal is to create a 
                detailed blueprint that maps directly to your final timeline, ensuring every shot has a purpose 
                and every moment on set is productive.
              </p>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">📝 Storyboard Creation</h4>
                  <p className="text-sm text-muted-foreground">
                    Visual sequence planning allows you to see the entire video before shooting a single frame. 
                    Break down the narrative shot-by-shot, estimate timing for each sequence, and note specific 
                    camera angles. This visualization prevents costly reshoots and ensures narrative coherence.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">📸 Shot List Development</h4>
                  <p className="text-sm text-muted-foreground">
                    A comprehensive shot list prioritizes shots in order of importance and logistical efficiency. 
                    Include equipment requirements, location notes, and lighting considerations. This document 
                    becomes your roadmap on set, ensuring nothing is forgotten.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">📄 Script and Outline</h4>
                  <p className="text-sm text-muted-foreground">
                    Write dialogue or narration with B-roll callouts integrated directly into the script. Mark 
                    transition points and note music or sound effects cues. This integration ensures audio and 
                    visual elements work in harmony from the start.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* On-Set Execution */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">🎥</span>
                On-Set Execution: The "Do Less in Post" Philosophy
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                The on-set phase is where planning meets execution. By capturing specific types of footage during 
                production, you dramatically reduce the time spent in post-production while increasing the 
                professional quality of the final product.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="space-y-2">
                  <h4 className="font-semibold">🌀 In-Camera Transitions</h4>
                  <p className="text-sm text-muted-foreground">
                    Film transitions like whip pans, swipe transitions, match cuts, and crash zooms directly 
                    in-camera. These organic transitions feel more natural than digital effects and save hours 
                    of editing time.
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold">📷 Comprehensive B-Roll</h4>
                  <p className="text-sm text-muted-foreground">
                    Capture varied focal lengths from wide establishing shots to macro details. Shoot from 
                    multiple angles including high, low, eye-level, and dutch angles. Cover all key actions 
                    and environmental context thoroughly.
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold">🖼️ Clean Plates for VFX</h4>
                  <p className="text-sm text-muted-foreground">
                    Record 5-10 seconds of empty background with locked camera position and same lighting. 
                    These clean plates are invaluable for object removal, background replacement, and error 
                    correction in post.
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold">🎙️ High-Quality Audio</h4>
                  <p className="text-sm text-muted-foreground">
                    Use external microphones positioned 6-8 inches from source at 45-degree angle. Monitor 
                    levels to peak between -6dB and -3dB. Record room tone and use windscreens outdoors. 
                    Always capture backup audio tracks.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Key Takeaways */}
          <Card className="border-2 border-blue-200 dark:border-blue-800">
            <CardHeader>
              <CardTitle>Key Takeaways</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Systematic ideation through trend analysis, hook brainstorming, and value proposition definition ensures content relevance and engagement.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Detailed pre-planning with storyboards, shot lists, and integrated scripts creates a clear roadmap that prevents costly mistakes.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Capturing in-camera transitions, comprehensive B-roll, clean plates, and high-quality audio on set dramatically reduces post-production time.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>The "Do Less in Post" philosophy shifts creative decisions to pre-production and production, where changes are easier and faster to implement.</span>
                </li>
              </ul>
            </CardContent>
          </Card>

        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm mt-12">
        <div className="container py-8">
          <div className="text-center">
            <Link href="/">
              <Button variant="outline">Return to Overview</Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

