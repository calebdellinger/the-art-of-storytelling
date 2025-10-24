import { Button } from "@/components/ui/button";
import { Download, ArrowLeft, Database, FolderTree, FileText, Shield, Users, Workflow } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";

export default function AssetManagement() {
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
            <p className="text-sm font-medium text-muted-foreground">Scalable Production Systems</p>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">The Art of Asset Management</h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Transform from solo creator to scalable media enterprise through systematic organization, 
            strict naming conventions, and repeatable workflows designed for delegation and growth.
          </p>
        </div>

        {/* Main Diagram */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="glass rounded-3xl p-8 md:p-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Complete Asset Management Architecture</h2>
              <a href="/asset-management-diagram.png" download>
                <Button variant="outline" size="sm" className="gap-2 neomorph">
                  <Download className="w-4 h-4" />
                  Download
                </Button>
              </a>
            </div>
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 overflow-auto">
              <img 
                src="/asset-management-diagram.png" 
                alt="Asset Management Architecture Diagram" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Executive Summary */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="neomorph rounded-3xl p-10 bg-background">
            <div className="flex items-start gap-6 mb-6">
              <div className="neomorph-inset w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 bg-background">
                <Database className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4">The Scalability Mandate</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Asset Management is the most critical technical discipline underpinning a scalable video workflow. 
                  The lack of standardized management and organization is the primary cause of project failure, 
                  broken media links, and wasted hours in post-production.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  This Standard Operating Procedure establishes the definitive framework for transitioning a solo 
                  creator operation into a sophisticated, scalable media enterprise. Every procedural step detailed 
                  herein is engineered to be readily delegated to specialized roles without compromising efficiency 
                  or creative quality.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Technology Stack */}
        <div className="max-w-6xl mx-auto mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">The Connected Workspace</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: FileText,
                title: "Notion: The Command Center",
                description: "Single Source of Truth for all project management, planning, and documentation. Central hub where high-level creative ideas transform into actionable project milestones and trackable tasks.",
                features: ["Content Calendar & Idea Log", "Project Dashboards", "Task Management", "Script Versions & Milestones"]
              },
              {
                icon: Database,
                title: "Google Workspace: The Infrastructure",
                description: "Utilized strictly for low-volume, critical data including project documentation, scripts, and exportable DaVinci Resolve Project Files, ensuring efficient use of the 2TB cloud quota.",
                features: ["Project Documentation", "Collaborative Scripts", "Shot Lists & Planning", "Final Deliverables Backup"]
              },
              {
                icon: Workflow,
                title: "DaVinci Resolve: The Engine",
                description: "Mandated Non-Linear Editor operating on Windows OS. Operational velocity depends entirely on meticulous project setup and required implementation of Proxy Workflow.",
                features: ["Proxy Workflow Implementation", "Color Grading & Effects", "Audio Post-Production", "Final Export & Delivery"]
              },
              {
                icon: Users,
                title: "manu.im: The Development Director",
                description: "Autonomous AI agent serving to radically accelerate the creative development phase. Functions as a digital employee for rapid ideation, research, and script outlining.",
                features: ["Content Discovery", "Research Automation", "Script Outlining", "Creative Concept Generation"]
              }
            ].map((platform, index) => (
              <div key={index} className="glass rounded-3xl p-8 hover:shadow-xl transition-all duration-300">
                <div className="neomorph-inset w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-background">
                  <platform.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{platform.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{platform.description}</p>
                <div className="space-y-2">
                  {platform.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <span className="text-foreground/40 mt-1">•</span>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Folder Structure */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="glass-strong rounded-3xl p-10">
            <div className="flex items-start gap-6 mb-8">
              <div className="neomorph-inset w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 bg-background">
                <FolderTree className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4">Systematic Folder Structure</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  All high-volume media must reside on a dedicated Local High-Speed Storage Drive for maximum performance. 
                  Google Drive is reserved for project files and essential documents only, strictly conserving the 2TB cloud quota.
                </p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 px-4 font-bold">Level</th>
                    <th className="text-left py-4 px-4 font-bold">Folder Name</th>
                    <th className="text-left py-4 px-4 font-bold">Naming Convention</th>
                    <th className="text-left py-4 px-4 font-bold">Purpose</th>
                    <th className="text-left py-4 px-4 font-bold">Storage</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b border-border/50">
                    <td className="py-4 px-4 font-medium">L0: Master</td>
                    <td className="py-4 px-4">PRODUCTION_VAULT</td>
                    <td className="py-4 px-4 text-muted-foreground">N/A</td>
                    <td className="py-4 px-4 text-muted-foreground">Central Cloud Root Directory</td>
                    <td className="py-4 px-4"><span className="neomorph-inset px-3 py-1 rounded-lg text-xs bg-background">Google Drive</span></td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-4 px-4 font-medium">L1: Project</td>
                    <td className="py-4 px-4">YYYYMMDD-ProjectTitle</td>
                    <td className="py-4 px-4 text-muted-foreground">20240901-TheScalableSOP</td>
                    <td className="py-4 px-4 text-muted-foreground">Master folder containing all L2 folders</td>
                    <td className="py-4 px-4"><span className="neomorph-inset px-3 py-1 rounded-lg text-xs bg-background">Local HDD/SSD</span></td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-4 px-4 font-medium">L2: Footage</td>
                    <td className="py-4 px-4">01_RAW_FOOTAGE</td>
                    <td className="py-4 px-4 text-muted-foreground">YYYYMMDD-PROJ-CAM-0001</td>
                    <td className="py-4 px-4 text-muted-foreground">Original camera media. Read-Only access for team.</td>
                    <td className="py-4 px-4"><span className="neomorph-inset px-3 py-1 rounded-lg text-xs bg-background">Local HDD/SSD</span></td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-4 px-4 font-medium">L2: Proxies</td>
                    <td className="py-4 px-4">02_PROXY_MEDIA</td>
                    <td className="py-4 px-4 text-muted-foreground">Matches Raw FNC</td>
                    <td className="py-4 px-4 text-muted-foreground">Lower-res files for editing performance</td>
                    <td className="py-4 px-4"><span className="neomorph-inset px-3 py-1 rounded-lg text-xs bg-background">Local HDD/SSD</span></td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-4 px-4 font-medium">L2: Assets</td>
                    <td className="py-4 px-4">03_ASSETS</td>
                    <td className="py-4 px-4 text-muted-foreground">AssetType_Description_V01</td>
                    <td className="py-4 px-4 text-muted-foreground">Graphics, Music, SFX, Logos, B-Roll</td>
                    <td className="py-4 px-4"><span className="neomorph-inset px-3 py-1 rounded-lg text-xs bg-background">Google Drive</span></td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-4 px-4 font-medium">L2: Projects</td>
                    <td className="py-4 px-4">04_NLE_PROJECTS</td>
                    <td className="py-4 px-4 text-muted-foreground">ProjectTitle_Resolve_VXX.drp</td>
                    <td className="py-4 px-4 text-muted-foreground">Exported DaVinci Resolve Project Backups</td>
                    <td className="py-4 px-4"><span className="neomorph-inset px-3 py-1 rounded-lg text-xs bg-background">Google Drive</span></td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-4 px-4 font-medium">L2: Exports</td>
                    <td className="py-4 px-4">05_DELIVERABLES</td>
                    <td className="py-4 px-4 text-muted-foreground">YYYYMMDD_Title_Platform_VXX</td>
                    <td className="py-4 px-4 text-muted-foreground">Final rendered videos and masters</td>
                    <td className="py-4 px-4"><span className="neomorph-inset px-3 py-1 rounded-lg text-xs bg-background">Google Drive</span></td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-medium">L1: Archive</td>
                    <td className="py-4 px-4">ARCHIVE_VAULT</td>
                    <td className="py-4 px-4 text-muted-foreground">YYYYMMDD-ProjectTitle-ARCHIVE</td>
                    <td className="py-4 px-4 text-muted-foreground">Completed projects ready for NAS transfer</td>
                    <td className="py-4 px-4"><span className="neomorph-inset px-3 py-1 rounded-lg text-xs bg-background">Local/NAS</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* File Naming Conventions */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="neomorph rounded-3xl p-10 bg-background">
            <div className="flex items-start gap-6 mb-6">
              <div className="neomorph-inset w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 bg-background">
                <FileText className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4">File Naming Conventions</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Consistency in file naming is a non-negotiable operational standard. The file name must carry 
                  all essential descriptive metadata, acting as a crucial low-cost substitute for a full Digital 
                  Asset Management system.
                </p>
                <div className="space-y-4">
                  <div className="glass rounded-2xl p-6">
                    <h4 className="font-bold text-lg mb-2">Raw Footage Format</h4>
                    <code className="text-sm bg-muted px-3 py-1 rounded">YYYYMMDD-PROJ-CAM-0001</code>
                    <p className="text-sm text-muted-foreground mt-2">Date - Project Abbreviation - Camera - Sequence Number</p>
                  </div>
                  <div className="glass rounded-2xl p-6">
                    <h4 className="font-bold text-lg mb-2">Asset Format</h4>
                    <code className="text-sm bg-muted px-3 py-1 rounded">AssetType_Description_V01</code>
                    <p className="text-sm text-muted-foreground mt-2">Type - Descriptive Name - Version Number</p>
                  </div>
                  <div className="glass rounded-2xl p-6">
                    <h4 className="font-bold text-lg mb-2">Deliverable Format</h4>
                    <code className="text-sm bg-muted px-3 py-1 rounded">YYYYMMDD_Title_Platform_VXX</code>
                    <p className="text-sm text-muted-foreground mt-2">Date - Video Title - Target Platform - Version</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Permission Architecture */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="glass-strong rounded-3xl p-10">
            <div className="flex items-start gap-6 mb-8">
              <div className="neomorph-inset w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 bg-background">
                <Shield className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4">Permission Architecture for Scaling</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Security and compliance are established immediately through a rigid permissions structure, 
                  preventing accidental deletion or modification of irreplaceable source material.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="neomorph rounded-2xl p-6 bg-background">
                <h4 className="font-bold text-xl mb-4">Raw Footage Protection</h4>
                <p className="text-muted-foreground mb-4">
                  The Raw Footage folder on Local HDD/SSD must be strictly configured with <strong>Read-Only</strong> access 
                  for all future team roles except the designated Media Manager.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                    <span>Media Manager: Full Access</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
                    <span>Editor: Read-Only</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
                    <span>Writer: Read-Only</span>
                  </div>
                </div>
              </div>

              <div className="neomorph rounded-2xl p-6 bg-background">
                <h4 className="font-bold text-xl mb-4">Notion Filtered Views</h4>
                <p className="text-muted-foreground mb-4">
                  Permissions utilize filtered database views to provide each team member with a segmented, 
                  personalized workload ensuring clarity of responsibility.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <span className="text-foreground/40 mt-1">•</span>
                    <span>Editor sees "Post-Production" tasks</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-foreground/40 mt-1">•</span>
                    <span>Writer sees "Idea Generation" and "Scripting"</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-foreground/40 mt-1">•</span>
                    <span>Media Manager sees "Asset Organization"</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Production Workflow Integration */}
        <div className="max-w-6xl mx-auto mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">Production Workflow Integration</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                phase: "Phase 1",
                title: "Idea Generation",
                description: "Leverage Manus AI for rapid research and content discovery. Capture ideas in Notion Content Calendar database.",
                color: "from-blue-500 to-cyan-500"
              },
              {
                phase: "Phase 2",
                title: "Pre-Production",
                description: "Notion Project Dashboard links tasks, documents, and assets. Collaborative scripting via Google Docs.",
                color: "from-purple-500 to-pink-500"
              },
              {
                phase: "Phase 3",
                title: "Production",
                description: "Systematic ingest protocol with immediate backup. On-set efficiency shooting for the edit.",
                color: "from-orange-500 to-red-500"
              },
              {
                phase: "Phase 4",
                title: "Post-Production",
                description: "DaVinci Resolve with proxy workflow. Rapid editing techniques and platform-specific exports.",
                color: "from-green-500 to-emerald-500"
              }
            ].map((item, index) => (
              <div key={index} className="glass rounded-3xl p-6 hover:shadow-xl transition-all duration-300">
                <div className={`h-2 w-full bg-gradient-to-r ${item.color} rounded-full mb-4`}></div>
                <p className="text-sm font-medium text-muted-foreground mb-2">{item.phase}</p>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Data Redundancy */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="neomorph rounded-3xl p-10 bg-background">
            <h2 className="text-3xl font-bold mb-6">Data Redundancy Strategy</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              A comprehensive backup strategy ensures that no project is ever lost due to hardware failure or 
              accidental deletion. The three-tier approach provides multiple layers of protection.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="glass rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold mb-2">1°</div>
                <h4 className="font-bold mb-2">Primary Storage</h4>
                <p className="text-sm text-muted-foreground">Local HDD/SSD for active projects and high-performance editing</p>
              </div>
              <div className="glass rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold mb-2">2°</div>
                <h4 className="font-bold mb-2">Cloud Backup</h4>
                <p className="text-sm text-muted-foreground">Google Drive 2TB for project files and final deliverables</p>
              </div>
              <div className="glass rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold mb-2">3°</div>
                <h4 className="font-bold mb-2">Deep Archive</h4>
                <p className="text-sm text-muted-foreground">Future NAS system for completed project archives</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scaling to Teams */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="glass-strong rounded-3xl p-10">
            <h2 className="text-3xl font-bold mb-6 text-center">From Solo Creator to Scalable Enterprise</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 text-center max-w-3xl mx-auto">
              The strategic move from a "solo creator" mindset to an Ambitious Content CEO requires absolute 
              commitment to documentation. Time spent refining this SOP is a direct investment in future capacity and efficiency.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  role: "Writer",
                  responsibilities: ["Idea Generation", "Script Development", "Research & Outlining", "Content Planning"],
                  access: "Notion: Idea Generation & Scripting views"
                },
                {
                  role: "Editor",
                  responsibilities: ["Post-Production Editing", "Color Grading", "Audio Mixing", "Export Management"],
                  access: "Notion: Post-Production tasks, Read-Only footage"
                },
                {
                  role: "Media Manager",
                  responsibilities: ["Asset Organization", "File Management", "Backup Verification", "Archive Maintenance"],
                  access: "Full access to all folders and systems"
                }
              ].map((role, index) => (
                <div key={index} className="neomorph rounded-2xl p-6 bg-background">
                  <h4 className="font-bold text-xl mb-4">{role.role}</h4>
                  <p className="text-sm font-medium text-muted-foreground mb-3">Responsibilities:</p>
                  <div className="space-y-2 mb-4">
                    {role.responsibilities.map((resp, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm">
                        <span className="text-foreground/40 mt-1">•</span>
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-border">
                    <p className="text-xs text-muted-foreground">{role.access}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Key Principles */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="neomorph rounded-3xl p-10 bg-background">
            <h2 className="text-3xl font-bold mb-8 text-center">Key Principles for Success</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Systematic Organization",
                  description: "Every file has a designated location. Every project follows the same structure. Consistency eliminates confusion and wasted time."
                },
                {
                  title: "Predictable & Repeatable",
                  description: "Workflows are documented and formalized. When growth necessitates new hires, tasks can be instantly decoupled and delegated."
                },
                {
                  title: "Future-Proof Naming",
                  description: "File names carry all essential metadata. No special characters, clear conventions, and version control built into every filename."
                },
                {
                  title: "Permission Architecture",
                  description: "Read-only access prevents accidental deletion. Filtered views ensure clarity of responsibility and minimize distraction."
                },
                {
                  title: "Data Redundancy",
                  description: "Three-tier backup strategy protects against hardware failure. Primary, secondary, and tertiary storage ensure nothing is ever lost."
                },
                {
                  title: "Integrated Ecosystem",
                  description: "Notion, Google Workspace, DaVinci Resolve, and Manus AI work together as a cohesive system with single source of truth."
                }
              ].map((principle, index) => (
                <div key={index} className="glass rounded-2xl p-6">
                  <h4 className="font-bold text-lg mb-3">{principle.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{principle.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-strong rounded-3xl p-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Scale Your Production?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Implement this asset management architecture to transform your workflow from chaotic to systematic, 
              from solo to scalable, and from reactive to proactive.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/cinematography/workflow">
                <Button size="lg" className="gap-2 neomorph hover:shadow-xl">
                  Explore Production Workflow
                </Button>
              </Link>
              <Link href="/">
                <Button size="lg" variant="outline" className="gap-2 neomorph hover:shadow-xl">
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

