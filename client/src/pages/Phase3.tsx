import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Download } from "lucide-react";
import { Link } from "wouter";

export default function Phase3() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/phase3-diagram.png';
    link.download = 'phase3-finalization-distribution.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-red-50 dark:from-pink-950 dark:via-rose-950 dark:to-red-950">
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
          <Badge className="bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200 mb-4">
            Phase 3
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Finalization & Distribution</h1>
          <p className="text-xl text-muted-foreground mb-8">
            The final phase transforms your polished edit into platform-optimized deliverables and implements 
            strategic distribution tactics. Technical precision in export settings combined with smart social 
            media strategy determines whether your content reaches its full potential audience.
          </p>
        </div>
      </section>

      {/* Diagram */}
      <section className="container py-8">
        <Card className="max-w-6xl mx-auto overflow-hidden shadow-xl">
          <CardHeader className="bg-gradient-to-r from-pink-600 to-rose-600 text-white">
            <CardTitle>Phase 3 Workflow Diagram</CardTitle>
            <CardDescription className="text-pink-100">
              Click to view full resolution
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <div className="bg-white dark:bg-slate-900 overflow-auto">
              <img 
                src="/phase3-diagram.png" 
                alt="Phase 3: Finalization & Distribution Workflow"
                className="w-full h-auto cursor-zoom-in hover:opacity-95 transition-opacity"
                onClick={() => window.open('/phase3-diagram.png', '_blank')}
              />
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Content Sections */}
      <section className="container py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Final Review */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">📱</span>
                Final Review: Quality Assurance Checklist
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Before exporting, conduct a comprehensive quality assurance review across multiple devices and 
                contexts. This final check catches errors that might be invisible during editing but glaring to 
                viewers on different platforms.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">🖥️ Desktop Review</h4>
                  <p className="text-sm text-muted-foreground">
                    Watch the full video at full-screen resolution. Check all transitions for smoothness, verify 
                    audio sync throughout, review color consistency across scenes, and spot-check all effects and 
                    graphics for proper rendering.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">📱 Mobile Device Check</h4>
                  <p className="text-sm text-muted-foreground">
                    Test on an actual phone, not just a simulator. Review vertical format content in portrait mode. 
                    Check audio levels through phone speakers and earbuds. Verify text readability at small sizes. 
                    Confirm thumbnail visibility in feed view.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">⚙️ Technical QC</h4>
                  <p className="text-sm text-muted-foreground">
                    Ensure no audio clipping or distortion. Verify no dropped frames or stuttering. Confirm proper 
                    aspect ratio for target platform. Check color space settings match delivery requirements. Verify 
                    file format compatibility.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">🎨 Creative Review</h4>
                  <p className="text-sm text-muted-foreground">
                    Evaluate story flow and pacing. Confirm the hook is compelling in the first three seconds. 
                    Verify call-to-action is clear and actionable. Check brand consistency across all elements. 
                    Get fresh eyes feedback if possible.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Export Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">⚙️</span>
                Optimal Export Settings by Platform
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Each social media platform has specific technical requirements and recommendations. Using optimal 
                settings ensures your content displays correctly and maintains quality through platform compression.
              </p>

              <div className="space-y-4">
                <div className="bg-red-50 dark:bg-red-950/30 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    📺 YouTube
                  </h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div><span className="font-medium">Format:</span> MP4</div>
                    <div><span className="font-medium">Codec:</span> H.264</div>
                    <div><span className="font-medium">Aspect:</span> 16:9</div>
                    <div><span className="font-medium">Resolution:</span> 1920×1080 or 3840×2160</div>
                    <div><span className="font-medium">Frame Rate:</span> 24/30/60fps</div>
                    <div><span className="font-medium">Bitrate:</span> 8-15 Mbps (1080p)</div>
                  </div>
                </div>

                <div className="bg-purple-50 dark:bg-purple-950/30 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    📸 Instagram Feed & Reels
                  </h4>
                  <div className="space-y-3">
                    <div>
                      <p className="font-medium text-sm mb-1">Feed Posts</p>
                      <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                        <div>Aspect: 1:1 or 4:5</div>
                        <div>Resolution: 1080×1080 or 1080×1350</div>
                        <div>Max Length: 60s</div>
                        <div>Bitrate: 5-8 Mbps</div>
                      </div>
                    </div>
                    <div>
                      <p className="font-medium text-sm mb-1">Reels</p>
                      <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                        <div>Aspect: 9:16</div>
                        <div>Resolution: 1080×1920</div>
                        <div>Max Length: 90s</div>
                        <div>Bitrate: 5-8 Mbps</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-cyan-50 dark:bg-cyan-950/30 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    🎵 TikTok
                  </h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div><span className="font-medium">Format:</span> MP4</div>
                    <div><span className="font-medium">Codec:</span> H.264</div>
                    <div><span className="font-medium">Aspect:</span> 9:16</div>
                    <div><span className="font-medium">Resolution:</span> 1080×1920</div>
                    <div><span className="font-medium">Frame Rate:</span> 30fps</div>
                    <div><span className="font-medium">Max Length:</span> 10 minutes</div>
                  </div>
                </div>

                <div className="bg-muted/50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">🔧 Advanced Export Options</h4>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p><span className="font-medium">Codec Selection:</span> H.264 for universal compatibility, 
                    H.265 for better compression (newer devices), ProRes for archival, DNxHD for professional delivery.</p>
                    <p><span className="font-medium">Audio Settings:</span> AAC codec, 48kHz sample rate, 16-bit depth, 
                    192-320 kbps bitrate, stereo channels.</p>
                    <p><span className="font-medium">Metadata:</span> Embed title, description, keywords, copyright 
                    information, and creation date for professional asset management.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Social Strategy */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">🌐</span>
                Social Posting Strategy
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Technical quality means nothing if your content never reaches its audience. Strategic posting 
                combines platform-specific best practices with audience insights to maximize reach and engagement.
              </p>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">🎣 Strong Hook (First 3 Seconds)</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    The hook determines whether viewers stop scrolling. Employ visual pattern interrupts that break 
                    the feed rhythm. Ask compelling questions that create curiosity gaps. Make bold statements that 
                    challenge assumptions. Show unexpected action that demands attention. Use text overlays to 
                    reinforce the hook for sound-off viewing.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">✍️ Engaging Caption</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Clearly state the value proposition in the first line. Use relevant emojis to add visual interest 
                    and break up text. Add line breaks for readability on mobile devices. Include a clear call-to-action 
                    that tells viewers what to do next. Maintain consistent brand voice across all captions.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">🔍 SEO Optimization</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Place primary keyword in the title for search visibility. Use 5-10 relevant hashtags that balance 
                    popularity and specificity. Select appropriate tags and categories for platform algorithms. Write 
                    descriptions with natural keyword integration. Add closed captions or subtitles for accessibility 
                    and SEO.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">⏰ Best Posting Time</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Analyze audience insights to identify when followers are most active. Consider multiple time zones 
                    if your audience is geographically distributed. Test different posting times and track performance. 
                    Use scheduling tools to maintain consistency even when you are unavailable.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">🖼️ Custom Thumbnail</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Design thumbnails with high contrast for visibility in feeds. Establish a clear focal point that 
                    draws the eye. Ensure any text is readable at small sizes. Use brand colors for recognition. 
                    Choose compelling imagery that accurately represents content.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Post-Publish */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">📊</span>
                Post-Publish Monitoring
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Publishing is not the end—it is the beginning of engagement. Active monitoring and community 
                interaction in the first hours after posting significantly impacts algorithmic distribution.
              </p>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">📈 Key Metrics</h4>
                  <p className="text-sm text-muted-foreground">
                    Track views and impressions to measure reach. Monitor watch time and retention to understand 
                    engagement quality. Calculate engagement rate (likes, comments, shares divided by views). 
                    Measure click-through rate on calls-to-action. Count shares and saves as indicators of value.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">💬 Community Engagement</h4>
                  <p className="text-sm text-muted-foreground">
                    Respond to comments within the first hour to boost algorithmic visibility. Pin a top comment 
                    to set the tone or add context. Heart or like thoughtful comments to encourage discussion. 
                    Answer questions to provide value and build authority. Build genuine relationships with your 
                    community for long-term growth.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">🔄 Learn and Iterate</h4>
                  <p className="text-sm text-muted-foreground">
                    Analyze what worked—which hooks, topics, or formats performed best. Identify what did not work 
                    and hypothesize why. Gather audience feedback through comments and direct messages. A/B test 
                    specific elements like thumbnails or posting times. Apply learnings to refine your next video 
                    for continuous improvement.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Key Takeaways */}
          <Card className="border-2 border-pink-200 dark:border-pink-800">
            <CardHeader>
              <CardTitle>Key Takeaways</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-pink-600 mt-1">•</span>
                  <span>Comprehensive quality assurance across desktop and mobile devices prevents embarrassing errors and ensures professional presentation.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-600 mt-1">•</span>
                  <span>Platform-specific export settings optimize quality and compatibility while working within each platform's technical constraints.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-600 mt-1">•</span>
                  <span>Strategic posting with strong hooks, optimized captions, SEO, timing, and thumbnails maximizes reach and engagement potential.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-600 mt-1">•</span>
                  <span>Active post-publish monitoring and community engagement in the first hours significantly impacts algorithmic distribution.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-600 mt-1">•</span>
                  <span>Continuous learning from metrics and audience feedback creates a virtuous cycle of improvement for future content.</span>
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

