import Navigation from "@/components/Navigation";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container py-20">
        {/* Page Title */}
        <div className="max-w-4xl mx-auto mb-20">
          <h1 className="text-5xl font-bold mb-6">Production Workflow</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            A systematic approach to video production from concept to delivery.
          </p>
        </div>

        {/* Workflow Diagram */}
        <div className="max-w-6xl mx-auto mb-32">
          <img 
            src="/workflow-diagram.png" 
            alt="Production Workflow Diagram" 
            className="w-full rounded-2xl neomorph"
          />
        </div>

        {/* Phase Links */}
        <div className="max-w-4xl mx-auto space-y-8">
          <Link href="/cinematography/phase1">
            <div className="neomorph rounded-2xl p-8 cursor-pointer hover:shadow-xl transition-all duration-300 bg-background">
              <h2 className="text-2xl font-bold mb-3">Phase 1: Pre-Production & On-Set</h2>
              <p className="text-muted-foreground leading-relaxed">
                Idea generation, pre-planning, and critical on-set shots following the "Do Less in Post" philosophy.
              </p>
            </div>
          </Link>

          <Link href="/cinematography/phase15">
            <div className="neomorph rounded-2xl p-8 cursor-pointer hover:shadow-xl transition-all duration-300 bg-background">
              <h2 className="text-2xl font-bold mb-3">Phase 1.5: Footage Ingestion & Organization</h2>
              <p className="text-muted-foreground leading-relaxed">
                Immediate backup, review & tagging, standardized folder structure, and metadata integration.
              </p>
            </div>
          </Link>

          <Link href="/cinematography/phase2">
            <div className="neomorph rounded-2xl p-8 cursor-pointer hover:shadow-xl transition-all duration-300 bg-background">
              <h2 className="text-2xl font-bold mb-3">Phase 2: DaVinci Resolve Post-Production</h2>
              <p className="text-muted-foreground leading-relaxed">
                Complete walkthrough of Media, Cut, Edit, Color, and Fairlight pages with best practices.
              </p>
            </div>
          </Link>

          <Link href="/cinematography/phase3">
            <div className="neomorph rounded-2xl p-8 cursor-pointer hover:shadow-xl transition-all duration-300 bg-background">
              <h2 className="text-2xl font-bold mb-3">Phase 3: Finalization & Distribution</h2>
              <p className="text-muted-foreground leading-relaxed">
                Final review, optimal export settings, and strategic social media posting.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

