import { useState } from "react";
import { Check, ChevronRight, Play } from "lucide-react";

interface TimelinePhase {
  id: string;
  title: string;
  duration: string;
  description: string;
  tasks: string[];
  color: string;
  icon: string;
}

const timelineData: TimelinePhase[] = [
  {
    id: "ingest",
    title: "Media Ingest & Organization",
    duration: "30-60 min",
    description: "Import all footage, create backup, and establish organizational structure",
    tasks: [
      "Copy media from camera cards to local storage",
      "Create immediate backup to secondary drive",
      "Verify all files transferred successfully",
      "Create bin structure in Media Page",
      "Add metadata tags and ratings"
    ],
    color: "from-blue-500 to-cyan-500",
    icon: "📥"
  },
  {
    id: "setup",
    title: "Project Setup & Proxy Generation",
    duration: "20-40 min",
    description: "Configure project settings and generate editing proxies",
    tasks: [
      "Set timeline resolution and frame rate",
      "Configure color space settings",
      "Generate H.264 proxies at 1/4 resolution",
      "Link proxies to original media",
      "Verify proxy playback performance"
    ],
    color: "from-purple-500 to-pink-500",
    icon: "⚙️"
  },
  {
    id: "assembly",
    title: "Assembly Edit (Cut Page)",
    duration: "2-4 hours",
    description: "Build rough cut and establish story structure",
    tasks: [
      "Review all footage and mark best takes",
      "Create rough assembly following script",
      "Establish story structure and flow",
      "Remove dead space and unnecessary footage",
      "Set initial pacing and rhythm"
    ],
    color: "from-green-500 to-emerald-500",
    icon: "✂️"
  },
  {
    id: "refinement",
    title: "Fine-Tuning (Edit Page)",
    duration: "3-6 hours",
    description: "Refine cuts, add transitions, and perfect timing",
    tasks: [
      "Implement J-cuts and L-cuts for smooth flow",
      "Add match cuts and cutaways",
      "Insert B-roll and supplementary footage",
      "Add transitions (mostly hard cuts)",
      "Insert graphics, titles, and lower thirds",
      "Fine-tune timing to music or narration"
    ],
    color: "from-orange-500 to-red-500",
    icon: "🎬"
  },
  {
    id: "color",
    title: "Color Grading (Color Page)",
    duration: "2-4 hours",
    description: "Balance exposure and create visual style",
    tasks: [
      "Primary corrections: exposure, contrast, white balance",
      "Secondary corrections: skin tones, sky, selective color",
      "Apply LUTs for creative look",
      "Build node structure for flexibility",
      "Match shots within scenes",
      "Create consistent look across entire project"
    ],
    color: "from-pink-500 to-rose-500",
    icon: "🎨"
  },
  {
    id: "audio",
    title: "Audio Design (Fairlight Page)",
    duration: "2-3 hours",
    description: "Mix dialogue, music, and sound effects",
    tasks: [
      "Clean up dialogue and remove noise",
      "Normalize dialogue levels (-18dB to -12dB)",
      "Add and mix background music (-24dB to -18dB)",
      "Insert sound effects for immersion (-20dB to -15dB)",
      "Apply EQ, compression, and reverb",
      "Master final mix with limiter at -1dB"
    ],
    color: "from-cyan-500 to-blue-500",
    icon: "🔊"
  },
  {
    id: "export",
    title: "Export & Quality Control",
    duration: "30-90 min",
    description: "Render final deliverables and verify quality",
    tasks: [
      "Configure platform-specific export settings",
      "Render final video files",
      "Review exports for visual quality",
      "Check audio levels and sync",
      "Verify technical specifications",
      "Create archive master (ProRes 422 HQ)"
    ],
    color: "from-yellow-500 to-orange-500",
    icon: "📤"
  }
];

export default function PostProductionTimeline() {
  const [activePhase, setActivePhase] = useState<string>("ingest");
  const [completedPhases, setCompletedPhases] = useState<Set<string>>(new Set());

  const handlePhaseClick = (phaseId: string) => {
    setActivePhase(phaseId);
  };

  const handleCompletePhase = (phaseId: string) => {
    const newCompleted = new Set(completedPhases);
    if (completedPhases.has(phaseId)) {
      newCompleted.delete(phaseId);
    } else {
      newCompleted.add(phaseId);
    }
    setCompletedPhases(newCompleted);
  };

  const activePhaseData = timelineData.find(phase => phase.id === activePhase);
  const currentIndex = timelineData.findIndex(phase => phase.id === activePhase);
  const progress = ((completedPhases.size) / timelineData.length) * 100;

  return (
    <div className="w-full">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-bold">Overall Progress</h3>
          <span className="text-sm text-muted-foreground">
            {completedPhases.size} of {timelineData.length} phases complete
          </span>
        </div>
        <div className="h-3 bg-muted rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-blue-500 to-green-500 transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Timeline Navigation */}
      <div className="relative mb-8">
        {/* Connection Line */}
        <div className="absolute top-8 left-0 right-0 h-0.5 bg-border hidden md:block" />
        
        <div className="grid grid-cols-2 md:grid-cols-7 gap-4 relative">
          {timelineData.map((phase, index) => (
            <button
              key={phase.id}
              onClick={() => handlePhaseClick(phase.id)}
              className={`relative flex flex-col items-center gap-2 p-4 rounded-2xl transition-all duration-300 ${
                activePhase === phase.id 
                  ? 'neomorph bg-background scale-105' 
                  : 'glass hover:scale-105'
              }`}
            >
              {/* Phase Icon */}
              <div className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl transition-all duration-300 ${
                completedPhases.has(phase.id)
                  ? 'bg-green-500 text-white'
                  : activePhase === phase.id
                  ? `bg-gradient-to-br ${phase.color} text-white`
                  : 'neomorph-inset bg-background'
              }`}>
                {completedPhases.has(phase.id) ? (
                  <Check className="w-8 h-8" />
                ) : (
                  <span>{phase.icon}</span>
                )}
              </div>
              
              {/* Phase Title */}
              <div className="text-center">
                <p className="text-xs font-bold mb-1">{phase.title}</p>
                <p className="text-xs text-muted-foreground">{phase.duration}</p>
              </div>

              {/* Active Indicator */}
              {activePhase === phase.id && (
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2">
                  <div className="w-2 h-2 rounded-full bg-foreground animate-pulse" />
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Phase Details */}
      {activePhaseData && (
        <div className="glass-strong rounded-3xl p-8 animate-in fade-in duration-300">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className={`w-20 h-20 rounded-2xl flex items-center justify-center text-4xl bg-gradient-to-br ${activePhaseData.color}`}>
                {activePhaseData.icon}
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-2">{activePhaseData.title}</h3>
                <p className="text-muted-foreground">{activePhaseData.description}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-muted-foreground">
                Phase {currentIndex + 1} of {timelineData.length}
              </span>
            </div>
          </div>

          {/* Duration Badge */}
          <div className="inline-flex items-center gap-2 neomorph-inset px-4 py-2 rounded-full mb-6 bg-background">
            <Play className="w-4 h-4" />
            <span className="text-sm font-medium">Estimated Duration: {activePhaseData.duration}</span>
          </div>

          {/* Task List */}
          <div className="space-y-3 mb-6">
            <h4 className="font-bold text-lg mb-4">Key Tasks:</h4>
            {activePhaseData.tasks.map((task, index) => (
              <div 
                key={index}
                className="flex items-start gap-3 p-4 rounded-xl glass hover:neomorph transition-all duration-300"
              >
                <div className="neomorph-inset w-8 h-8 rounded-lg flex items-center justify-center shrink-0 text-sm font-bold bg-background">
                  {index + 1}
                </div>
                <p className="text-sm leading-relaxed pt-1">{task}</p>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-4 pt-6 border-t border-border">
            <button
              onClick={() => handleCompletePhase(activePhaseData.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                completedPhases.has(activePhaseData.id)
                  ? 'bg-green-500 text-white hover:bg-green-600'
                  : 'neomorph hover:shadow-xl'
              }`}
            >
              <Check className="w-5 h-5" />
              {completedPhases.has(activePhaseData.id) ? 'Completed' : 'Mark as Complete'}
            </button>

            {currentIndex < timelineData.length - 1 && (
              <button
                onClick={() => handlePhaseClick(timelineData[currentIndex + 1].id)}
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-medium neomorph hover:shadow-xl transition-all duration-300"
              >
                Next Phase
                <ChevronRight className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      )}

      {/* Summary Stats */}
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        <div className="neomorph rounded-2xl p-6 text-center bg-background">
          <div className="text-3xl font-bold mb-2">
            {timelineData.reduce((acc, phase) => {
              const hours = phase.duration.split('-').map(d => parseInt(d.match(/\d+/)?.[0] || '0'));
              return acc + (hours[0] + (hours[1] || hours[0])) / 2;
            }, 0).toFixed(0)}h
          </div>
          <p className="text-sm text-muted-foreground">Total Estimated Time</p>
        </div>
        <div className="neomorph rounded-2xl p-6 text-center bg-background">
          <div className="text-3xl font-bold mb-2">{completedPhases.size}</div>
          <p className="text-sm text-muted-foreground">Phases Completed</p>
        </div>
        <div className="neomorph rounded-2xl p-6 text-center bg-background">
          <div className="text-3xl font-bold mb-2">{Math.round(progress)}%</div>
          <p className="text-sm text-muted-foreground">Overall Progress</p>
        </div>
      </div>
    </div>
  );
}

