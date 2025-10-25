import Navigation from "@/components/Navigation";
import PostProductionTimeline from "@/components/PostProductionTimeline";

export default function Editing() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container py-20">
        {/* Page Title */}
        <div className="max-w-4xl mx-auto mb-20">
          <h1 className="text-5xl font-bold mb-6">The Art of Editing</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Complete post-production workflow from media ingest to final delivery.
          </p>
        </div>

        {/* Interactive Timeline */}
        <div className="max-w-7xl mx-auto mb-32">
          <PostProductionTimeline />
        </div>

        {/* Workflow Diagram */}
        <div className="max-w-6xl mx-auto mb-32">
          <img 
            src="/editing-workflow-diagram.png" 
            alt="Post-Production Workflow" 
            className="w-full rounded-2xl neomorph"
          />
        </div>

        {/* Content Sections */}
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="neomorph rounded-2xl p-8 bg-background">
            <h2 className="text-3xl font-bold mb-6">DaVinci Resolve Workflow</h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <div>
                <h3 className="text-xl font-bold text-foreground mb-3">Media Page</h3>
                <p>Import and organize all footage. Create bin structure, add metadata tags, and generate proxies for smooth editing performance.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-3">Cut Page</h3>
                <p>Build rough assembly quickly. Review footage, mark best takes, and establish initial story structure with fast-paced editing tools.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-3">Edit Page</h3>
                <p>Refine cuts and perfect timing. Add transitions, graphics, and B-roll. Implement J-cuts and L-cuts for smooth audio-visual flow.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-3">Color Page</h3>
                <p>Balance exposure and create visual style. Apply primary corrections, secondary adjustments, and LUTs for consistent cinematic look.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-3">Fairlight Page</h3>
                <p>Mix dialogue, music, and sound effects. Clean up audio, normalize levels, and master final mix with professional audio tools.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-3">Deliver Page</h3>
                <p>Export final video with platform-specific settings. Configure codec, resolution, and bitrate for optimal quality and compatibility.</p>
              </div>
            </div>
          </div>

          <div className="neomorph rounded-2xl p-8 bg-background">
            <h2 className="text-3xl font-bold mb-6">Essential Editing Techniques</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p><strong className="text-foreground">J-Cut:</strong> Audio from next scene starts before the visual cut. Creates smooth transitions and maintains viewer engagement.</p>
              <p><strong className="text-foreground">L-Cut:</strong> Audio from current scene continues after visual cut. Maintains audio continuity and natural flow.</p>
              <p><strong className="text-foreground">Match Cut:</strong> Cut between similar compositions or actions. Creates visual continuity and thematic connections.</p>
              <p><strong className="text-foreground">Montage:</strong> Series of short shots edited together. Compresses time and conveys information efficiently.</p>
              <p><strong className="text-foreground">Cutaway:</strong> Brief shot of related subject. Covers jump cuts and adds context to main action.</p>
            </div>
          </div>

          <div className="neomorph rounded-2xl p-8 bg-background">
            <h2 className="text-3xl font-bold mb-6">Color Grading Workflow</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p><strong className="text-foreground">Primary Corrections:</strong> Balance exposure, contrast, and white balance across all footage for consistent base look.</p>
              <p><strong className="text-foreground">Secondary Corrections:</strong> Adjust specific elements like skin tones, skies, or selective color areas for refined control.</p>
              <p><strong className="text-foreground">LUT Application:</strong> Apply Look-Up Tables for creative color grading and consistent cinematic aesthetic.</p>
              <p><strong className="text-foreground">Shot Matching:</strong> Ensure visual consistency between shots within scenes for seamless viewing experience.</p>
            </div>
          </div>

          <div className="neomorph rounded-2xl p-8 bg-background">
            <h2 className="text-3xl font-bold mb-6">Audio Design</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p><strong className="text-foreground">Dialogue Levels:</strong> Normalize dialogue to -18dB to -12dB for clear, consistent vocal presence.</p>
              <p><strong className="text-foreground">Music Levels:</strong> Mix background music at -24dB to -18dB to support without overwhelming dialogue.</p>
              <p><strong className="text-foreground">Sound Effects:</strong> Place effects at -20dB to -15dB for immersive environmental audio.</p>
              <p><strong className="text-foreground">Master Output:</strong> Apply limiter at -1dB to prevent clipping and ensure broadcast-safe audio levels.</p>
            </div>
          </div>

          <div className="neomorph rounded-2xl p-8 bg-background">
            <h2 className="text-3xl font-bold mb-6">Export Settings</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p><strong className="text-foreground">YouTube:</strong> H.264, 1080p or 4K, 8-12 Mbps bitrate, AAC audio at 320 kbps.</p>
              <p><strong className="text-foreground">Instagram/TikTok:</strong> H.264, 1080x1920 (9:16), 5-8 Mbps bitrate, AAC audio.</p>
              <p><strong className="text-foreground">Archive Master:</strong> ProRes 422 HQ or DNxHR HQ for maximum quality preservation.</p>
              <p><strong className="text-foreground">Web Delivery:</strong> H.264 or H.265, appropriate resolution, optimized bitrate for streaming.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

