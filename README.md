# High-Performance Video Production Workflow

A comprehensive, interactive guide to an efficient video production pipeline from idea generation to social media posting, featuring DaVinci Resolve best practices.

## Overview

This website provides a detailed workflow diagram and in-depth explanations for each phase of professional video production, designed to prioritize creativity, speed, and technical excellence.

## Workflow Phases

### Phase 1: Pre-Production & On-Set Efficiency
- Idea generation through trend analysis and hook brainstorming
- Pre-planning with shoot-to-edit storyboards
- On-set execution following the "Do Less in Post" philosophy
- In-camera transitions, comprehensive B-roll, clean plates, and high-quality audio

### Phase 1.5: Footage Ingestion & Organization
- Immediate dual-drive backup protocol
- Initial review and tagging workflow
- Standardized folder structure
- Consistent naming conventions and metadata integration

### Phase 2: DaVinci Resolve Post-Production
- **Media Page**: Proxy generation and organized imports
- **Cut Page**: Speed-focused assembly editing
- **Edit Page**: Detailed timeline work with keyboard shortcuts
- **Color Page**: Professional grading with hierarchical node structure
- **Fairlight Page**: Audio mixing with EQ, compression, and bus tracks

### Phase 3: Finalization & Distribution
- Quality assurance across desktop and mobile devices
- Platform-specific export settings (YouTube, Instagram, TikTok)
- Strategic social media posting with hooks, SEO, and timing
- Post-publish monitoring and community engagement

## Features

- 📊 Interactive workflow diagrams for each phase
- 📝 Comprehensive text explanations and best practices
- 🎨 Phase-specific color-coded navigation
- 📱 Responsive design optimized for all devices
- ⬇️ Downloadable high-resolution diagrams

## Technology Stack

- **Frontend**: React 19 + TypeScript
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui
- **Routing**: Wouter
- **Diagrams**: Mermaid

## Getting Started

### Prerequisites
- Node.js 22+
- pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/calebdellinger/video-production-workflow.git

# Navigate to the project directory
cd video-production-workflow

# Install dependencies
pnpm install

# Start the development server
pnpm dev
```

The application will be available at `http://localhost:3000`

### Build for Production

```bash
pnpm build
```

## Project Structure

```
video-production-workflow/
├── client/
│   ├── public/          # Static assets and diagrams
│   ├── src/
│   │   ├── pages/       # Page components (Home, Phase1, Phase15, Phase2, Phase3)
│   │   ├── components/  # Reusable UI components
│   │   └── App.tsx      # Main application and routing
├── phase1-diagram.mmd   # Mermaid diagram source files
├── phase15-diagram.mmd
├── phase2-diagram.mmd
└── phase3-diagram.mmd
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.

## Acknowledgments

- Workflow methodology based on professional video production best practices
- DaVinci Resolve workflow optimizations from industry professionals
- UI components from [shadcn/ui](https://ui.shadcn.com/)

---

**Built with ❤️ for video creators and content producers**
