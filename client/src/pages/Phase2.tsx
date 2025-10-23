import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Download } from "lucide-react";
import { Link } from "wouter";

export default function Phase2() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/phase2-diagram.png';
    link.download = 'phase2-davinci-resolve-post-production.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 dark:from-green-950 dark:via-emerald-950 dark:to-teal-950">
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
          <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 mb-4">
            Phase 2
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">DaVinci Resolve Post-Production</h1>
          <p className="text-xl text-muted-foreground mb-8">
            This is the heart of the workflow, where raw footage transforms into polished content. DaVinci Resolve's 
            page-based architecture organizes the post-production process into specialized workspaces, each optimized 
            for specific tasks. Mastering this phase dramatically accelerates delivery while maintaining professional quality.
          </p>
        </div>
      </section>

      {/* Diagram */}
      <section className="container py-8">
        <Card className="max-w-6xl mx-auto overflow-hidden shadow-xl">
          <CardHeader className="bg-gradient-to-r from-green-600 to-emerald-600 text-white">
            <CardTitle>Phase 2 Workflow Diagram</CardTitle>
            <CardDescription className="text-green-100">
              Click to view full resolution
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <div className="bg-white dark:bg-slate-900 overflow-auto">
              <img 
                src="/phase2-diagram.png" 
                alt="Phase 2: DaVinci Resolve Post-Production Workflow"
                className="w-full h-auto cursor-zoom-in hover:opacity-95 transition-opacity"
                onClick={() => window.open('/phase2-diagram.png', '_blank')}
              />
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Content Sections */}
      <section className="container py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Media Page */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">📂</span>
                Media Page: Foundation and Proxy Generation
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                The Media Page is your entry point into DaVinci Resolve. Here you import organized footage and 
                generate proxies for smooth editing performance. Proper setup at this stage prevents technical 
                issues throughout the entire post-production process.
              </p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">⚡ Proxy Generation</h4>
                  <p className="text-sm text-muted-foreground">
                    Use the Blackmagic Proxy Generator to create lower-resolution versions of your footage. Choose 
                    H.264 or ProRes Proxy codec at half or quarter resolution. Proxies enable smooth playback and 
                    responsive editing even with 4K or 6K source files, while automatically linking back to originals 
                    for final export.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">📥 Import Organized Folders</h4>
                  <p className="text-sm text-muted-foreground">
                    Import your pre-organized folder structure directly into the Media Pool. Maintain the hierarchy 
                    by creating bins per category. Set up smart bins based on keywords for dynamic organization. 
                    Color-code different clip types for instant visual identification.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Cut Page */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">✂️</span>
                Cut Page: Speed-Focused Assembly
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                The Cut Page is designed for rapid assembly editing. Its streamlined interface removes unnecessary 
                options, allowing you to focus purely on story flow. This is where you build your rough cut quickly, 
                without getting bogged down in details.
              </p>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">🚀 Quick Assembly Workflow</h4>
                  <p className="text-sm text-muted-foreground">
                    The source tape workflow presents all footage in a continuous timeline. Mark in and out points, 
                    then append or insert clips directly. The dual timeline view shows both source and program 
                    simultaneously, enabling fast decision-making without switching views.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">⚡ Optimized for Speed</h4>
                  <p className="text-sm text-muted-foreground">
                    The Cut Page prioritizes speed over precision. Use it for initial assembly and rough trimming only. 
                    Once the basic structure is in place, move to the Edit Page for detailed refinement. This two-stage 
                    approach prevents perfectionism from slowing down the creative process.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Edit Page */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">🎬</span>
                Edit Page: The Workhorse
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                The Edit Page is where you spend most of your time. This is the traditional timeline editor with 
                full control over every aspect of your edit. Proper timeline organization and keyboard shortcuts 
                are essential for efficiency at this stage.
              </p>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">📊 Timeline Structure</h4>
                  <p className="text-sm text-muted-foreground">
                    Organize tracks in a consistent hierarchy: V3 for text and titles, V2 for B-roll and overlays, 
                    V1 for main footage. On the audio side: A3 for sound effects, A2 for music, A1 for dialogue and 
                    primary audio. This standardization makes navigation intuitive and prevents mistakes.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">🎨 Adjustment Layers</h4>
                  <p className="text-sm text-muted-foreground">
                    Use adjustment layers to apply effects, color corrections, vignettes, or title animations across 
                    multiple clips simultaneously. This non-destructive approach enables global changes without 
                    modifying individual clips, dramatically speeding up experimentation and revisions.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">⌨️ Essential Keyboard Shortcuts</h4>
                  <div className="grid grid-cols-2 gap-2 mt-2 text-sm">
                    <div className="bg-muted/50 p-2 rounded"><span className="font-mono">A</span> - Select Arrow tool</div>
                    <div className="bg-muted/50 p-2 rounded"><span className="font-mono">T</span> - Trim tool</div>
                    <div className="bg-muted/50 p-2 rounded"><span className="font-mono">B</span> - Blade tool</div>
                    <div className="bg-muted/50 p-2 rounded"><span className="font-mono">I/O</span> - Mark In/Out</div>
                    <div className="bg-muted/50 p-2 rounded"><span className="font-mono">Q/W</span> - Ripple trim</div>
                    <div className="bg-muted/50 p-2 rounded"><span className="font-mono">Cmd+B</span> - Add marker</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Color Page */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">🎨</span>
                Color Page: Professional Color Grading
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                The Color Page transforms the technical look of your footage into a polished cinematic aesthetic. 
                The node-based workflow allows for complex, layered color corrections that remain fully adjustable 
                throughout the project.
              </p>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">🌳 Node Tree Hierarchy</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    A systematic three-node approach ensures consistent, professional results:
                  </p>
                  <div className="space-y-3">
                    <div className="bg-green-50 dark:bg-green-950/30 p-3 rounded-lg">
                      <p className="font-semibold text-sm mb-1">Node 1: Primary Correction</p>
                      <p className="text-xs text-muted-foreground">
                        Apply LUT for log conversion, balance exposure, set white balance, and normalize contrast. 
                        This foundation ensures all footage starts from a consistent baseline.
                      </p>
                    </div>
                    <div className="bg-green-50 dark:bg-green-950/30 p-3 rounded-lg">
                      <p className="font-semibold text-sm mb-1">Node 2: Secondary Adjustments</p>
                      <p className="text-xs text-muted-foreground">
                        Refine skin tones, adjust sky and background elements, apply selective color grading using 
                        HSL qualifiers and power windows. This targeted work addresses specific problem areas.
                      </p>
                    </div>
                    <div className="bg-green-50 dark:bg-green-950/30 p-3 rounded-lg">
                      <p className="font-semibold text-sm mb-1">Node 3: Creative Grade</p>
                      <p className="text-xs text-muted-foreground">
                        Apply PowerGrade or creative LUT to establish visual style, create color harmony, set mood 
                        and atmosphere, and add final polish. This is where your unique aesthetic emerges.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Fairlight Page */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">🔊</span>
                Fairlight Page: Professional Audio Post-Production
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                The Fairlight Page provides professional-grade audio tools within DaVinci Resolve. Proper audio 
                mixing is often what separates amateur from professional content. Clean, balanced audio keeps 
                viewers engaged and conveys professionalism.
              </p>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">🎚️ Core Audio Tools</h4>
                  <div className="grid md:grid-cols-2 gap-4 mt-3">
                    <div className="bg-muted/50 p-3 rounded-lg">
                      <p className="font-semibold text-sm mb-2">Equalizer (EQ)</p>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        <li>• Remove low rumble with 80Hz high-pass filter</li>
                        <li>• Boost presence in 3-5kHz range</li>
                        <li>• Reduce harshness around 6-8kHz</li>
                        <li>• Clean up mud in 200-400Hz range</li>
                      </ul>
                    </div>
                    <div className="bg-muted/50 p-3 rounded-lg">
                      <p className="font-semibold text-sm mb-2">Compressor</p>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        <li>• Even out volume levels for consistency</li>
                        <li>• Ratio: 3:1 to 4:1 for dialogue</li>
                        <li>• Threshold: -18dB to -12dB</li>
                        <li>• Fast attack, medium release</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">🎵 Bus Track Mixing</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Group similar tracks into buses for cohesive mixing. Create a Dialogue Bus for all dialogue tracks, 
                    Music Bus for all music, SFX Bus for sound effects, and route everything to a Master Bus for final 
                    output. Apply bus-level processing for consistent treatment across grouped tracks.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">🎧 Final Mix Standards</h4>
                  <div className="bg-blue-50 dark:bg-blue-950/30 p-3 rounded-lg text-sm">
                    <p className="mb-2">Target levels for professional delivery:</p>
                    <ul className="space-y-1 text-xs text-muted-foreground">
                      <li>• Dialogue: -12dB to -6dB (most prominent)</li>
                      <li>• Music: -18dB to -12dB (supporting)</li>
                      <li>• SFX: -20dB to -12dB (contextual)</li>
                      <li>• Master peak: -3dB maximum (prevents clipping)</li>
                      <li>• Use limiters on master bus to prevent clipping</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Key Takeaways */}
          <Card className="border-2 border-green-200 dark:border-green-800">
            <CardHeader>
              <CardTitle>Key Takeaways</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Proxy generation on the Media Page enables smooth editing performance regardless of source resolution.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>The Cut Page accelerates rough assembly, while the Edit Page provides detailed control for refinement.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Hierarchical node structure on the Color Page (Primary → Secondary → Creative) ensures consistent, professional grading.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Professional audio mixing on the Fairlight Page with EQ, compression, and bus tracks elevates production quality.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Keyboard shortcuts and standardized workflows dramatically increase editing speed and reduce errors.</span>
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

