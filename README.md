# The Art of Storytelling

A comprehensive visual storytelling manual designed to teach creative thinking and mastery of visual storytelling across all mediums and genres.

## Overview

**The Art of Storytelling** is an interactive educational platform that provides in-depth guidance on visual storytelling techniques, from technical fundamentals to creative philosophy. Whether you're creating documentaries, dramas, thrillers, or corporate content, this manual provides the foundation for exceptional visual storytelling.

## Core Principles

### Story First
Every technical decision serves the narrative. Learn to make choices that enhance your story rather than distract from it.

### Visual Language
Develop your unique visual vocabulary. Understand how color, composition, and movement communicate emotion and meaning.

### Creative Thinking
Break conventional patterns. Train yourself to see possibilities where others see limitations.

## Learning Paths

### The Art of Cinematography

Master visual storytelling through camera work, composition, and technical excellence.

#### Production Workflow
- Complete video production pipeline from idea to distribution
- "Do Less in Post" philosophy for efficient workflows
- Professional production best practices

#### Shot Types & Angles
- Comprehensive guide to camera angles and their psychological effects
- Shot composition and framing techniques
- Camera movements and their storytelling purposes
- B-roll strategies and transition techniques
- Genre-specific cinematography approaches

#### Production Phases

**Phase 1: Pre-Production & On-Set**
- Idea generation through trend analysis
- Pre-planning with storyboards and shot lists
- On-set execution with in-camera transitions
- High-quality audio capture

**Phase 1.5: Footage Ingestion & Organization**
- Dual-drive backup protocol
- Initial review and tagging workflow
- Standardized folder structure
- Metadata and naming conventions

**Phase 2: DaVinci Resolve Post-Production**
- Media page: Proxy generation
- Cut page: Speed-focused assembly
- Edit page: Detailed timeline work
- Color page: Professional grading
- Fairlight page: Audio mixing

**Phase 3: Finalization & Distribution**
- Quality assurance across devices
- Platform-specific export settings
- Strategic social media posting
- Post-publish monitoring

## Features

- 📚 Comprehensive learning paths for visual storytelling
- 🎬 Detailed cinematography techniques and best practices
- 📊 Interactive workflow diagrams
- 🎨 Genre-specific approaches (Documentary, Drama, Thriller, Action, Romance, Comedy)
- 📱 Responsive design optimized for all devices
- 🔍 Organized navigation with dropdown menus
- ⬇️ Downloadable resources and diagrams

## Technology Stack

- **Frontend**: React 19 + TypeScript
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui
- **Routing**: Wouter
- **Diagrams**: Mermaid
- **Build Tool**: Vite

## Getting Started

### Prerequisites
- Node.js 22+
- pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/calebdellinger/the-art-of-storytelling.git

# Navigate to the project directory
cd the-art-of-storytelling

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
the-art-of-storytelling/
├── client/
│   ├── public/          # Static assets and diagrams
│   ├── src/
│   │   ├── pages/       # Page components
│   │   │   ├── NewHome.tsx           # Main landing page
│   │   │   ├── Home.tsx              # Production workflow overview
│   │   │   ├── Cinematography.tsx    # Shot types & techniques
│   │   │   ├── Phase1.tsx            # Pre-production guide
│   │   │   ├── Phase15.tsx           # Organization guide
│   │   │   ├── Phase2.tsx            # Post-production guide
│   │   │   └── Phase3.tsx            # Distribution guide
│   │   ├── components/  # Reusable UI components
│   │   │   └── Navigation.tsx        # Main navigation with dropdowns
│   │   └── App.tsx      # Main application and routing
├── phase1-diagram.mmd   # Mermaid diagram source files
├── phase15-diagram.mmd
├── phase2-diagram.mmd
└── phase3-diagram.mmd
```

## Navigation Structure

- **Home**: Introduction to The Art of Storytelling
- **The Art of Cinematography** (Dropdown)
  - Production Workflow
  - Shot Types & Angles
  - Phase 1: Pre-Production & On-Set
  - Phase 1.5: Organization
  - Phase 2: Post-Production
  - Phase 3: Distribution

## What You'll Learn

### Technical Mastery
- Camera angles and their psychological effects
- Shot composition and framing techniques
- Camera movements and their storytelling purposes
- Professional production workflows
- Post-production techniques in DaVinci Resolve

### Creative Development
- Genre-specific visual approaches
- Transition techniques for seamless storytelling
- B-roll strategies for visual variety
- Color grading for emotional impact
- Audio design and mixing fundamentals

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.

## Acknowledgments

- Workflow methodology based on professional video production best practices
- DaVinci Resolve workflow optimizations from industry professionals
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Cinematography principles from established filmmaking traditions

---

**Built with ❤️ for visual storytellers, filmmakers, and content creators**
