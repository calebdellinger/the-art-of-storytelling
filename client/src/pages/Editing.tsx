import { Button } from "@/components/ui/button";
import { Download, ArrowLeft, Film, Palette, Volume2, Upload, Scissors, Layers, Wand2 } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import PostProductionTimeline from "@/components/PostProductionTimeline";

export default function Editing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50 dark:from-slate-950 dark:via-gray-950 dark:to-zinc-950">
      <Navigation />

      <div className="container py-12">
        <Link href="/">
          <Button variant="ghost" className="mb-6 gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Button>
        </Link>

        {/* Header */}
        <div className="max-w-5xl mx-auto mb-16 text-center">
          <div className="inline-block neomorph px-6 py-2 rounded-full bg-background mb-4">
            <p className="text-sm font-medium text-muted-foreground">Complete Post-Production Mastery</p>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">The Art of Editing</h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Master the complete post-production workflow from media ingest to final delivery. 
            Transform raw footage into compelling stories through systematic editing, color grading, and audio design.
          </p>
        </div>

        {/* Interactive Timeline */}
        <div className="max-w-7xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Interactive Post-Production Timeline</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Follow this interactive timeline to navigate through each phase of post-production. 
              Click on any phase to see detailed tasks and mark your progress.
            </p>
          </div>
          <PostProductionTimeline />
        </div>

        {/* Main Workflow Diagram */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="glass rounded-3xl p-8 md:p-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Complete Post-Production Workflow</h2>
              <a href="/editing-workflow-diagram.png" download>
                <Button variant="outline" size="sm" className="gap-2 neomorph">
                  <Download className="w-4 h-4" />
                  Download
                </Button>
              </a>
            </div>
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 overflow-auto">
              <img 
                src="/editing-workflow-diagram.png" 
                alt="Post-Production Workflow Diagram" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* DaVinci Resolve Pages Overview */}
        <div className="max-w-6xl mx-auto mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">DaVinci Resolve Workflow</h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            DaVinci Resolve organizes post-production into specialized pages, each designed for specific tasks. 
            Master each page to achieve professional results efficiently.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Upload,
                title: "Media Page",
                subtitle: "Import & Organize",
                description: "Import footage, create bin structure, generate proxies, and organize all project assets systematically.",
                keyTasks: ["Import media files", "Create bin structure", "Generate proxies", "Add metadata tags"]
              },
              {
                icon: Scissors,
                title: "Cut Page",
                subtitle: "Assembly Edit",
                description: "Rapid assembly editing with streamlined tools. Build rough cut, establish story structure, and set pacing.",
                keyTasks: ["Rough cut assembly", "Story structure", "Remove dead space", "Establish pacing"]
              },
              {
                icon: Film,
                title: "Edit Page",
                subtitle: "Fine-Tuning",
                description: "Precision editing with full timeline control. Refine cuts, add transitions, graphics, and perfect timing.",
                keyTasks: ["J-cuts & L-cuts", "Match cuts", "Add transitions", "Insert graphics"]
              },
              {
                icon: Palette,
                title: "Color Page",
                subtitle: "Color Grading",
                description: "Professional color correction and grading. Balance exposure, create mood, and establish visual style.",
                keyTasks: ["Primary corrections", "Secondary adjustments", "LUT application", "Node workflow"]
              },
              {
                icon: Volume2,
                title: "Fairlight Page",
                subtitle: "Audio Design",
                description: "Complete audio post-production. Edit dialogue, mix music, add sound effects, and master final audio.",
                keyTasks: ["Dialogue editing", "Music mixing", "Sound effects", "Audio mastering"]
              },
              {
                icon: Upload,
                title: "Deliver Page",
                subtitle: "Export & Delivery",
                description: "Platform-specific export settings. Optimize for YouTube, Instagram, TikTok, or archive masters.",
                keyTasks: ["Export presets", "Quality control", "Platform optimization", "Archive masters"]
              }
            ].map((page, index) => (
              <div key={index} className="glass rounded-3xl p-8 hover:shadow-xl transition-all duration-300">
                <div className="neomorph-inset w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-background">
                  <page.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-1">{page.title}</h3>
                <p className="text-sm text-muted-foreground font-medium mb-4">{page.subtitle}</p>
                <p className="text-muted-foreground leading-relaxed mb-6">{page.description}</p>
                <div className="space-y-2">
                  {page.keyTasks.map((task, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm">
                      <span className="text-foreground/40 mt-1">•</span>
                      <span>{task}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Project Setup */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="neomorph rounded-3xl p-10 bg-background">
            <div className="flex items-start gap-6 mb-8">
              <div className="neomorph-inset w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 bg-background">
                <Layers className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4">Project Setup & Configuration</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Proper project setup is critical for smooth editing and prevents technical issues. 
                  Configure settings before importing any media to ensure consistency throughout the workflow.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="glass rounded-2xl p-6">
                <h4 className="font-bold text-xl mb-4">Timeline Settings</h4>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-medium mb-1">Frame Rate</p>
                    <p className="text-muted-foreground">24fps: Cinematic look</p>
                    <p className="text-muted-foreground">30fps: Standard video</p>
                    <p className="text-muted-foreground">60fps: Smooth motion, slow-mo</p>
                  </div>
                  <div>
                    <p className="font-medium mb-1">Resolution</p>
                    <p className="text-muted-foreground">1080p: Standard HD delivery</p>
                    <p className="text-muted-foreground">4K: High-quality, future-proof</p>
                  </div>
                </div>
              </div>

              <div className="glass rounded-2xl p-6">
                <h4 className="font-bold text-xl mb-4">Proxy Workflow</h4>
                <div className="space-y-3 text-sm">
                  <p className="text-muted-foreground">Generate lower-resolution proxies for smooth editing performance, especially with 4K footage.</p>
                  <div>
                    <p className="font-medium mb-1">Recommended Settings</p>
                    <p className="text-muted-foreground">Codec: H.264</p>
                    <p className="text-muted-foreground">Resolution: 1/4 original</p>
                    <p className="text-muted-foreground">Quality: High for preview</p>
                  </div>
                </div>
              </div>

              <div className="glass rounded-2xl p-6">
                <h4 className="font-bold text-xl mb-4">Color Space</h4>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-medium mb-1">Rec.709</p>
                    <p className="text-muted-foreground">Standard video color space for web and broadcast delivery</p>
                  </div>
                  <div>
                    <p className="font-medium mb-1">Log Profiles</p>
                    <p className="text-muted-foreground">S-Log, V-Log, C-Log for maximum dynamic range and grading flexibility</p>
                  </div>
                </div>
              </div>

              <div className="glass rounded-2xl p-6">
                <h4 className="font-bold text-xl mb-4">Bin Organization</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <span className="text-foreground/40 mt-1">•</span>
                    <span>A-Roll: Main footage, interviews</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-foreground/40 mt-1">•</span>
                    <span>B-Roll: Supplementary footage</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-foreground/40 mt-1">•</span>
                    <span>Graphics: Titles, lower thirds, logos</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-foreground/40 mt-1">•</span>
                    <span>Audio: Music, SFX, dialogue</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Editing Techniques */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="glass-strong rounded-3xl p-10">
            <h2 className="text-3xl font-bold mb-8 text-center">Essential Editing Techniques</h2>
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
              Master these fundamental techniques to create professional, engaging edits that maintain viewer attention and enhance storytelling.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "J-Cuts & L-Cuts",
                  description: "Audio leads or trails the visual cut, creating smooth transitions and maintaining flow.",
                  technique: "J-Cut: Audio starts before the visual cut. L-Cut: Audio continues after the visual cut.",
                  usage: "Dialogue scenes, interviews, maintaining conversational flow"
                },
                {
                  title: "Match Cuts",
                  description: "Cut between similar compositions, movements, or subjects to create visual continuity.",
                  technique: "Match action, shape, color, or concept between two shots for seamless transition.",
                  usage: "Time transitions, location changes, thematic connections"
                },
                {
                  title: "Cutaways & Inserts",
                  description: "Cut to related footage to provide context, hide jump cuts, or add visual interest.",
                  technique: "Insert B-roll that supports the narrative while maintaining audio continuity.",
                  usage: "Covering edits, adding context, visual variety"
                },
                {
                  title: "Montage Sequences",
                  description: "Rapid succession of shots to compress time, show progression, or build energy.",
                  technique: "Short clips edited to music, gradually increasing pace for emotional impact.",
                  usage: "Training sequences, passage of time, building momentum"
                },
                {
                  title: "Pacing & Rhythm",
                  description: "Control the tempo of your edit to match the emotional tone and maintain engagement.",
                  technique: "Vary shot lengths: longer for contemplation, shorter for tension or action.",
                  usage: "Emotional control, genre conventions, audience engagement"
                },
                {
                  title: "Transition Selection",
                  description: "Choose appropriate transitions to enhance storytelling without distracting from content.",
                  technique: "Hard cuts 95% of the time. Cross dissolve for time/location. Creative for style.",
                  usage: "Maintaining professionalism while supporting narrative flow"
                }
              ].map((technique, index) => (
                <div key={index} className="neomorph rounded-2xl p-6 bg-background">
                  <h4 className="font-bold text-xl mb-3">{technique.title}</h4>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{technique.description}</p>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-medium mb-1">Technique:</p>
                      <p className="text-muted-foreground">{technique.technique}</p>
                    </div>
                    <div>
                      <p className="font-medium mb-1">Best Used For:</p>
                      <p className="text-muted-foreground">{technique.usage}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Color Grading */}
        <div className="max-w-6xl mx-auto mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">Color Grading Mastery</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Color Workflow */}
            <div className="neomorph rounded-3xl p-8 bg-background">
              <div className="neomorph-inset w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-background">
                <Palette className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-6">Color Workflow</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold mb-3">1. Primary Corrections</h4>
                  <p className="text-sm text-muted-foreground mb-3">Foundation of color grading. Fix technical issues first.</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <span className="text-foreground/40 mt-1">•</span>
                      <span>Exposure: Proper brightness levels</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-foreground/40 mt-1">•</span>
                      <span>Contrast: Blacks and whites balance</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-foreground/40 mt-1">•</span>
                      <span>White Balance: Neutral color temperature</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold mb-3">2. Secondary Corrections</h4>
                  <p className="text-sm text-muted-foreground mb-3">Targeted adjustments for specific elements.</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <span className="text-foreground/40 mt-1">•</span>
                      <span>Skin Tones: Natural, flattering color</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-foreground/40 mt-1">•</span>
                      <span>Sky: Rich blues, dramatic clouds</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-foreground/40 mt-1">•</span>
                      <span>Selective Color: Emphasis and mood</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold mb-3">3. Creative Look</h4>
                  <p className="text-sm text-muted-foreground mb-3">Apply LUTs and stylistic choices.</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <span className="text-foreground/40 mt-1">•</span>
                      <span>LUT Application: Creative starting point</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-foreground/40 mt-1">•</span>
                      <span>Film Emulation: Vintage or cinematic</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-foreground/40 mt-1">•</span>
                      <span>Stylization: Genre-specific looks</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Color Theory */}
            <div className="glass rounded-3xl p-8">
              <div className="neomorph-inset w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-background">
                <Wand2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-6">Color Theory Application</h3>
              
              <div className="space-y-6">
                <div className="glass rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 to-red-500"></div>
                    <h4 className="font-bold">Warm Tones</h4>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">Evoke happiness, energy, passion, and comfort.</p>
                  <div className="space-y-1 text-sm">
                    <p className="text-muted-foreground">• Orange: Enthusiasm, creativity</p>
                    <p className="text-muted-foreground">• Yellow: Joy, optimism</p>
                    <p className="text-muted-foreground">• Red: Passion, urgency</p>
                  </div>
                </div>

                <div className="glass rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500"></div>
                    <h4 className="font-bold">Cool Tones</h4>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">Convey calm, sadness, professionalism, and mystery.</p>
                  <div className="space-y-1 text-sm">
                    <p className="text-muted-foreground">• Blue: Trust, stability, sadness</p>
                    <p className="text-muted-foreground">• Cyan: Technology, clarity</p>
                    <p className="text-muted-foreground">• Teal: Balance, sophistication</p>
                  </div>
                </div>

                <div className="glass rounded-2xl p-6">
                  <h4 className="font-bold mb-3">Contrast & Saturation</h4>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-medium mb-1">High Contrast</p>
                      <p className="text-muted-foreground">Drama, tension, bold visuals</p>
                    </div>
                    <div>
                      <p className="font-medium mb-1">Low Contrast</p>
                      <p className="text-muted-foreground">Dreamy, soft, nostalgic mood</p>
                    </div>
                    <div>
                      <p className="font-medium mb-1">Saturation</p>
                      <p className="text-muted-foreground">High for vibrancy, low for realism</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Audio Design */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="neomorph rounded-3xl p-10 bg-background">
            <div className="flex items-start gap-6 mb-8">
              <div className="neomorph-inset w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 bg-background">
                <Volume2 className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4">Audio Design & Mixing</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Professional audio is 50% of the viewing experience. Poor audio will ruin even the best visuals. 
                  Master these fundamentals to create immersive, professional soundscapes.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="glass rounded-2xl p-6">
                <h4 className="font-bold text-lg mb-3">Dialogue Levels</h4>
                <div className="text-3xl font-bold mb-2">-18dB to -12dB</div>
                <p className="text-sm text-muted-foreground">Primary audio should be clear and prominent without clipping</p>
              </div>
              <div className="glass rounded-2xl p-6">
                <h4 className="font-bold text-lg mb-3">Music Background</h4>
                <div className="text-3xl font-bold mb-2">-24dB to -18dB</div>
                <p className="text-sm text-muted-foreground">Support the narrative without overpowering dialogue</p>
              </div>
              <div className="glass rounded-2xl p-6">
                <h4 className="font-bold text-lg mb-3">Sound Effects</h4>
                <div className="text-3xl font-bold mb-2">-20dB to -15dB</div>
                <p className="text-sm text-muted-foreground">Accent moments and add immersion without distraction</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "EQ: Frequency Balance",
                  description: "Shape the tonal character of audio by adjusting frequency ranges.",
                  tips: ["Cut muddy low-mids 200-500Hz", "Boost presence 2-5kHz for clarity", "Remove harsh frequencies 6-8kHz", "High-pass filter below 80Hz"]
                },
                {
                  title: "Compression: Dynamic Control",
                  description: "Reduce dynamic range for consistent levels and professional sound.",
                  tips: ["Ratio: 3:1 to 6:1 for dialogue", "Threshold: -20dB to -15dB", "Attack: 10-30ms for natural", "Release: 50-100ms for smooth"]
                },
                {
                  title: "Reverb & Delay: Space & Depth",
                  description: "Add spatial dimension and create sense of environment.",
                  tips: ["Small room reverb for intimacy", "Large hall for grandeur", "Delay for rhythmic interest", "Subtle for natural, heavy for effect"]
                },
                {
                  title: "Limiter: Peak Control",
                  description: "Prevent clipping and ensure consistent maximum output level.",
                  tips: ["Set ceiling to -1dB", "Prevents digital distortion", "Final stage in chain", "Transparent limiting for broadcast"]
                }
              ].map((technique, index) => (
                <div key={index} className="glass rounded-2xl p-6">
                  <h4 className="font-bold text-xl mb-3">{technique.title}</h4>
                  <p className="text-sm text-muted-foreground mb-4">{technique.description}</p>
                  <div className="space-y-2">
                    {technique.tips.map((tip, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm">
                        <span className="text-foreground/40 mt-1">•</span>
                        <span>{tip}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Export Settings */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="glass-strong rounded-3xl p-10">
            <h2 className="text-3xl font-bold mb-8 text-center">Platform-Specific Export Settings</h2>
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
              Optimize your exports for each platform to ensure maximum quality and compatibility. 
              Different platforms have different requirements and compression algorithms.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  platform: "YouTube",
                  specs: {
                    codec: "H.264",
                    resolution: "1080p or 4K",
                    bitrate: "20-50 Mbps",
                    frameRate: "24, 30, or 60 fps",
                    aspectRatio: "16:9"
                  },
                  notes: "Upload highest quality possible. YouTube will compress. Use VBR 2-pass for best quality."
                },
                {
                  platform: "Instagram Reels",
                  specs: {
                    codec: "H.264",
                    resolution: "1080x1920",
                    bitrate: "15-25 Mbps",
                    frameRate: "30 fps",
                    aspectRatio: "9:16 Vertical"
                  },
                  notes: "Vertical format required. Keep under 90 seconds. High bitrate for quality retention."
                },
                {
                  platform: "TikTok",
                  specs: {
                    codec: "H.264",
                    resolution: "1080x1920",
                    bitrate: "20-30 Mbps",
                    frameRate: "30 fps",
                    aspectRatio: "9:16 Vertical"
                  },
                  notes: "Similar to Instagram. Optimize for mobile viewing. Strong hook in first 3 seconds."
                },
                {
                  platform: "Archive Master",
                  specs: {
                    codec: "ProRes 422 HQ",
                    resolution: "Original",
                    bitrate: "High Quality",
                    frameRate: "Original",
                    aspectRatio: "Original"
                  },
                  notes: "Maximum quality preservation. Large file size. Future-proof for re-edits and re-exports."
                }
              ].map((platform, index) => (
                <div key={index} className="neomorph rounded-2xl p-6 bg-background">
                  <h4 className="font-bold text-2xl mb-6">{platform.platform}</h4>
                  <div className="space-y-3 mb-6">
                    {Object.entries(platform.specs).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-center text-sm">
                        <span className="font-medium capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}:</span>
                        <span className="text-muted-foreground">{value}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground">{platform.notes}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quality Control */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="neomorph rounded-3xl p-10 bg-background">
            <h2 className="text-3xl font-bold mb-8 text-center">Final Quality Control Checklist</h2>
            <p className="text-lg text-muted-foreground text-center mb-8">
              Before delivering your final video, perform these critical checks to ensure professional quality.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  category: "Visual Quality",
                  checks: [
                    "Color consistency across clips",
                    "Proper exposure throughout",
                    "No compression artifacts",
                    "Smooth transitions",
                    "Graphics properly aligned",
                    "No flickering or strobing"
                  ]
                },
                {
                  category: "Audio Quality",
                  checks: [
                    "Dialogue clear and audible",
                    "No audio clipping or distortion",
                    "Music levels balanced",
                    "Audio sync with video",
                    "No background noise",
                    "Consistent volume levels"
                  ]
                },
                {
                  category: "Technical Specs",
                  checks: [
                    "Correct resolution",
                    "Proper frame rate",
                    "Right aspect ratio",
                    "Appropriate codec",
                    "File size reasonable",
                    "Metadata included"
                  ]
                }
              ].map((section, index) => (
                <div key={index} className="glass rounded-2xl p-6">
                  <h4 className="font-bold text-xl mb-4">{section.category}</h4>
                  <div className="space-y-2">
                    {section.checks.map((check, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm">
                        <input type="checkbox" className="mt-1" />
                        <span>{check}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Best Practices */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="glass-strong rounded-3xl p-10">
            <h2 className="text-3xl font-bold mb-8 text-center">Post-Production Best Practices</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Work Non-Destructively",
                  description: "Use adjustment layers, nodes, and effects that can be modified or removed without affecting original media."
                },
                {
                  title: "Save Versions Frequently",
                  description: "Create project versions at major milestones. Easy to revert if needed and track progress over time."
                },
                {
                  title: "Use Keyboard Shortcuts",
                  description: "Master shortcuts for common actions. Dramatically increases editing speed and efficiency."
                },
                {
                  title: "Edit with Fresh Eyes",
                  description: "Take breaks between editing sessions. Return with fresh perspective to catch mistakes and improve flow."
                },
                {
                  title: "Watch on Different Devices",
                  description: "Preview on phone, tablet, TV, and computer. Ensure quality translates across viewing platforms."
                },
                {
                  title: "Get Feedback Early",
                  description: "Show rough cuts to trusted viewers. Identify issues before investing time in polish and effects."
                }
              ].map((practice, index) => (
                <div key={index} className="neomorph rounded-2xl p-6 bg-background">
                  <h4 className="font-bold text-lg mb-3">{practice.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{practice.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-strong rounded-3xl p-12">
            <h2 className="text-3xl font-bold mb-4">Master Post-Production</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Transform raw footage into compelling stories through systematic editing, professional color grading, 
              and immersive audio design. Practice these techniques to achieve cinematic results.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/cinematography/workflow">
                <Button size="lg" className="gap-2 neomorph hover:shadow-xl">
                  Explore Production Workflow
                </Button>
              </Link>
              <Link href="/asset-management">
                <Button size="lg" variant="outline" className="gap-2 neomorph hover:shadow-xl">
                  Asset Management
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

