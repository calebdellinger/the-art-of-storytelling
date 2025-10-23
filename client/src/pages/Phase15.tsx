import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Download } from "lucide-react";
import { Link } from "wouter";

export default function Phase15() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/phase15-diagram.png';
    link.download = 'phase15-footage-ingestion-organization.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 dark:from-orange-950 dark:via-amber-950 dark:to-yellow-950">
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
          <Badge className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200 mb-4">
            Phase 1.5
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Footage Ingestion & Organization</h1>
          <p className="text-xl text-muted-foreground mb-8">
            This critical bridge phase between production and post-production establishes the foundation for 
            editing efficiency. Proper organization at this stage prevents countless hours of searching for 
            files, reduces errors, and ensures project scalability as complexity grows.
          </p>
        </div>
      </section>

      {/* Diagram */}
      <section className="container py-8">
        <Card className="max-w-6xl mx-auto overflow-hidden shadow-xl">
          <CardHeader className="bg-gradient-to-r from-orange-600 to-amber-600 text-white">
            <CardTitle>Phase 1.5 Workflow Diagram</CardTitle>
            <CardDescription className="text-orange-100">
              Click to view full resolution
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <div className="bg-white dark:bg-slate-900 overflow-auto">
              <img 
                src="/phase15-diagram.png" 
                alt="Phase 1.5: Footage Ingestion & Organization Workflow"
                className="w-full h-auto cursor-zoom-in hover:opacity-95 transition-opacity"
                onClick={() => window.open('/phase15-diagram.png', '_blank')}
              />
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Content Sections */}
      <section className="container py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Immediate Backup */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">💾</span>
                Immediate Backup Protocol
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Data loss is catastrophic in video production. The moment shooting concludes, implementing a 
                robust backup strategy becomes the highest priority. The dual-drive system provides redundancy 
                while optimizing for both speed and long-term storage.
              </p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">🚀 Primary SSD</h4>
                  <p className="text-sm text-muted-foreground">
                    A solid-state drive serves as your active editing workspace. Fast read and write speeds 
                    enable smooth playback of high-resolution footage and responsive editing. Recommended 
                    capacity is 1-2TB depending on project size and shooting format.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">🗄️ Archival HDD</h4>
                  <p className="text-sm text-muted-foreground">
                    A traditional hard disk drive provides cost-effective long-term storage. This backup 
                    protects against SSD failure and preserves project files after completion. Recommended 
                    capacity is 4TB or larger to accommodate multiple projects.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">☁️ Optional Cloud Backup</h4>
                  <p className="text-sm text-muted-foreground">
                    Cloud storage adds off-site redundancy for disaster recovery and enables remote collaboration. 
                    Services like Frame.io, Dropbox, or Google Drive provide secure access from any location. 
                    Consider this for high-value projects or distributed teams.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Initial Review */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">👁️</span>
                Initial Review and Tagging
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Before importing into your editing software, conduct a quick pass-through of all footage. This 
                initial review saves time later by identifying the best takes and flagging problematic clips 
                before they enter your timeline.
              </p>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">🚩 Flag Clips</h4>
                  <p className="text-sm text-muted-foreground">
                    Mark selects as usable takes, rejects as unusable, favorites as best takes, and questionable 
                    clips for later review. This simple categorization dramatically speeds up the editing process 
                    by surfacing the best content immediately.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">🏷️ Keyword Tagging</h4>
                  <p className="text-sm text-muted-foreground">
                    Apply descriptive keywords like "Good B-Roll," "Interview A," "Problem Shot," "Best Take," 
                    or "Backup Option." These tags enable powerful search and filtering capabilities within your 
                    editing software, making it easy to find specific shots.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">📝 Quick Notes</h4>
                  <p className="text-sm text-muted-foreground">
                    Document technical issues, performance notes, continuity concerns, or creative ideas while 
                    they are fresh in your mind. These notes provide valuable context during editing and prevent 
                    confusion weeks later.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Folder Structure */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">📁</span>
                Standardized Folder Structure
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                A consistent folder hierarchy is the backbone of project organization. This structure should be 
                established on your hard drive before importing anything into DaVinci Resolve, creating a single 
                source of truth for all project assets.
              </p>

              <div className="bg-muted/50 p-4 rounded-lg font-mono text-sm space-y-1">
                <div>📂 PROJECT_NAME/</div>
                <div className="ml-4">📂 01_Footage/</div>
                <div className="ml-8">📂 Camera_A/</div>
                <div className="ml-8">📂 Camera_B/</div>
                <div className="ml-8">📂 Drone/</div>
                <div className="ml-8">📂 B-Roll/</div>
                <div className="ml-4">📂 02_Audio/</div>
                <div className="ml-8">📂 External_Mic/</div>
                <div className="ml-8">📂 Music/</div>
                <div className="ml-8">📂 SFX/</div>
                <div className="ml-4">📂 03_Graphics/</div>
                <div className="ml-8">📂 Titles/</div>
                <div className="ml-8">📂 Logos/</div>
                <div className="ml-4">📂 04_Exports/</div>
                <div className="ml-8">📂 Drafts/</div>
                <div className="ml-8">📂 Finals/</div>
                <div className="ml-8">📂 Platform_Specific/</div>
                <div className="ml-4">📂 05_ProjectFiles/</div>
                <div className="ml-8">📄 project.drp</div>
                <div className="ml-4">📂 06_Documents/</div>
                <div className="ml-8">📄 Scripts/</div>
                <div className="ml-8">📄 Storyboards/</div>
              </div>

              <p className="text-sm text-muted-foreground mt-4">
                This hierarchical structure scales from simple projects to complex multi-camera productions. 
                The numbered prefixes ensure folders appear in logical order, while clear naming makes navigation 
                intuitive for anyone accessing the project.
              </p>
            </CardContent>
          </Card>

          {/* Naming Conventions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">🔤</span>
                Metadata and Naming Conventions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Consistent file naming is not merely organizational—it is essential for collaboration, archival, 
                and future project retrieval. A well-designed naming convention embeds critical information 
                directly into the filename.
              </p>

              <div className="space-y-4">
                <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">📏 Recommended Convention</h4>
                  <p className="text-sm mb-2">Format: YYYYMMDD_ProjectName_CameraID_ClipNumber</p>
                  <p className="text-sm text-muted-foreground">Example: 20250123_ProductLaunch_CamA_001.mp4</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">✅ Best Practices</h4>
                  <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                    <li>• No spaces—use underscores for compatibility across all systems</li>
                    <li>• Include date stamps for chronological sorting and version control</li>
                    <li>• Use sequential numbering with leading zeros for proper sorting</li>
                    <li>• Keep names descriptive but concise to avoid truncation</li>
                    <li>• Maintain consistency across the entire project and team</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">📊 Metadata Embedding</h4>
                  <p className="text-sm text-muted-foreground">
                    Beyond filenames, embed metadata including scene and take information, camera settings, 
                    location data, talent names, and copyright information. This metadata becomes searchable 
                    within professional asset management systems.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Key Takeaways */}
          <Card className="border-2 border-orange-200 dark:border-orange-800">
            <CardHeader>
              <CardTitle>Key Takeaways</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 mt-1">•</span>
                  <span>Immediate dual-drive backup to SSD and HDD protects against data loss while optimizing for speed and cost.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 mt-1">•</span>
                  <span>Initial review with flagging, tagging, and notes accelerates editing by surfacing the best content and documenting issues early.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 mt-1">•</span>
                  <span>Standardized folder structure creates a scalable, intuitive system that works for projects of any complexity.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 mt-1">•</span>
                  <span>Consistent naming conventions and embedded metadata enable powerful search, collaboration, and long-term archival.</span>
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

