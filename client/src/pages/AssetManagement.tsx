import Navigation from "@/components/Navigation";

export default function AssetManagement() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container py-20">
        {/* Page Title */}
        <div className="max-w-4xl mx-auto mb-20">
          <h1 className="text-5xl font-bold mb-6">Asset Management</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Systematic organization and scalable workflows for media production.
          </p>
        </div>

        {/* Diagram */}
        <div className="max-w-6xl mx-auto mb-32">
          <img 
            src="/asset-management-diagram.png" 
            alt="Asset Management Architecture" 
            className="w-full rounded-2xl neomorph"
          />
        </div>

        {/* Content Sections */}
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="neomorph rounded-2xl p-8 bg-background">
            <h2 className="text-3xl font-bold mb-6">Folder Structure</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p><strong className="text-foreground">01_Projects:</strong> Active client work organized by date and client name.</p>
              <p><strong className="text-foreground">02_Assets:</strong> Reusable media library including graphics, music, and stock footage.</p>
              <p><strong className="text-foreground">03_Archive:</strong> Completed projects stored for future reference and reuse.</p>
              <p><strong className="text-foreground">04_Admin:</strong> Business documents, contracts, and administrative files.</p>
            </div>
          </div>

          <div className="neomorph rounded-2xl p-8 bg-background">
            <h2 className="text-3xl font-bold mb-6">File Naming Conventions</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p><strong className="text-foreground">Date Format:</strong> YYYYMMDD for chronological sorting and easy retrieval.</p>
              <p><strong className="text-foreground">Client Name:</strong> Clear client identifier for quick project recognition.</p>
              <p><strong className="text-foreground">Project Type:</strong> Descriptive category like Interview, Commercial, or Documentary.</p>
              <p><strong className="text-foreground">Version Number:</strong> Sequential versioning for revision tracking and rollback capability.</p>
            </div>
          </div>

          <div className="neomorph rounded-2xl p-8 bg-background">
            <h2 className="text-3xl font-bold mb-6">Technology Stack</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p><strong className="text-foreground">Notion:</strong> Project management, client communication, and workflow documentation.</p>
              <p><strong className="text-foreground">Google Workspace:</strong> Cloud storage, collaboration, and file sharing across team members.</p>
              <p><strong className="text-foreground">DaVinci Resolve:</strong> Primary editing platform with project library management.</p>
              <p><strong className="text-foreground">Manu.im:</strong> Asset tracking and production pipeline automation.</p>
            </div>
          </div>

          <div className="neomorph rounded-2xl p-8 bg-background">
            <h2 className="text-3xl font-bold mb-6">Permission Architecture</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p><strong className="text-foreground">Admin Level:</strong> Full access to all projects, assets, and administrative functions.</p>
              <p><strong className="text-foreground">Editor Level:</strong> Access to assigned projects and shared asset library for production work.</p>
              <p><strong className="text-foreground">Client Level:</strong> View-only access to specific project deliverables and review materials.</p>
              <p><strong className="text-foreground">Contractor Level:</strong> Limited access to specific tasks and relevant project files only.</p>
            </div>
          </div>

          <div className="neomorph rounded-2xl p-8 bg-background">
            <h2 className="text-3xl font-bold mb-6">Data Redundancy</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p><strong className="text-foreground">Primary Storage:</strong> Local NAS or high-speed SSD for active project work.</p>
              <p><strong className="text-foreground">Secondary Backup:</strong> Cloud storage with automatic sync for disaster recovery.</p>
              <p><strong className="text-foreground">Archive Storage:</strong> Long-term cold storage for completed projects and historical reference.</p>
              <p><strong className="text-foreground">Backup Schedule:</strong> Daily incremental backups and weekly full system backups.</p>
            </div>
          </div>

          <div className="neomorph rounded-2xl p-8 bg-background">
            <h2 className="text-3xl font-bold mb-6">Team Scaling</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p><strong className="text-foreground">Solo Creator:</strong> Establish consistent naming and organization from day one.</p>
              <p><strong className="text-foreground">Small Team (2-5):</strong> Implement shared drives and basic permission structure.</p>
              <p><strong className="text-foreground">Growing Studio (6-15):</strong> Deploy project management tools and formalized workflows.</p>
              <p><strong className="text-foreground">Enterprise (15+):</strong> Full automation, dedicated IT infrastructure, and specialized roles.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

