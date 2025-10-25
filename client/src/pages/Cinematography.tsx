import Navigation from "@/components/Navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Cinematography() {
  const shotAngles = [
    { name: "Eye Level", description: "Camera at subject's eye level. Natural, neutral perspective for realistic storytelling." },
    { name: "High Angle", description: "Camera looks down on subject. Makes subject appear vulnerable or weak." },
    { name: "Low Angle", description: "Camera looks up at subject. Makes subject appear powerful or dominant." },
    { name: "Bird's Eye View", description: "Extreme high angle, directly overhead. Shows scale, patterns, or isolation." },
    { name: "Dutch Angle", description: "Camera tilted on axis. Creates unease, disorientation, or tension." },
    { name: "Over-the-Shoulder", description: "Camera behind one subject looking at another. Establishes spatial relationship." },
  ];

  const cameraMovements = [
    { name: "Pan", description: "Horizontal camera rotation on fixed axis. Reveals environment or follows action smoothly." },
    { name: "Tilt", description: "Vertical camera rotation on fixed axis. Reveals height, scale, or subject from head to toe." },
    { name: "Dolly/Track", description: "Camera moves toward or away from subject. Creates depth and immersion." },
    { name: "Truck/Tracking", description: "Camera moves parallel to subject. Follows action while maintaining distance." },
    { name: "Crane/Jib", description: "Camera moves vertically on crane arm. Reveals scale or creates drama." },
    { name: "Handheld", description: "Camera held by operator. Creates urgency, realism, or chaos." },
    { name: "Steadicam/Gimbal", description: "Stabilized camera movement. Smooth, floating motion through spaces." },
    { name: "Dolly Zoom", description: "Dolly in while zooming out. Creates disorienting, surreal effect." },
  ];

  const shotTypes = [
    { name: "Extreme Wide Shot", description: "Shows entire environment. Establishes location and scale." },
    { name: "Wide Shot", description: "Shows subject and surroundings. Full body visible with spatial context." },
    { name: "Medium Shot", description: "Subject from waist up. Standard for dialogue and interviews." },
    { name: "Close-Up", description: "Subject's face fills frame. Reveals emotion and creates intimacy." },
    { name: "Extreme Close-Up", description: "Isolates specific detail. Creates intensity or reveals crucial information." },
    { name: "Two-Shot", description: "Two subjects in frame. Shows relationship and interaction." },
    { name: "Over-the-Shoulder Shot", description: "Frame includes shoulder of one subject while focusing on another." },
    { name: "Point of View", description: "Camera shows what character sees. Creates subjective experience." },
  ];

  const brollTypes = [
    { name: "Establishing B-Roll", description: "Wide shots of location. Sets scene and context." },
    { name: "Action B-Roll", description: "Hands working, people moving. Shows activity and energy." },
    { name: "Detail B-Roll", description: "Close-ups of objects and textures. Adds visual interest." },
    { name: "Environmental B-Roll", description: "Ambient shots without main subject. Creates atmosphere." },
    { name: "Cutaway B-Roll", description: "Related shots that cut away from main action. Covers edits." },
    { name: "Transition B-Roll", description: "Shots designed to bridge scenes or topics." },
  ];

  const transitionShots = [
    { name: "Match Cut", description: "Cut between similar compositions or actions. Creates visual continuity." },
    { name: "J-Cut", description: "Audio from next scene starts before visual cut. Smooth audio transition." },
    { name: "L-Cut", description: "Audio from current scene continues after visual cut. Maintains continuity." },
    { name: "Whip Pan", description: "Extremely fast pan creating motion blur. Energetic transition." },
    { name: "Swipe Transition", description: "Object passes in front of lens. Organic transition." },
    { name: "Match Action", description: "Continue same action across cut. Maintains momentum and flow." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container py-20">
        {/* Page Title */}
        <div className="max-w-4xl mx-auto mb-20">
          <h1 className="text-5xl font-bold mb-6">Shot Types & Angles</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Comprehensive guide to camera angles, movements, and shot composition techniques.
          </p>
        </div>

        {/* Tabs Content */}
        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="angles" className="w-full">
            <TabsList className="grid w-full grid-cols-5 mb-12 neomorph bg-background">
              <TabsTrigger value="angles">Angles</TabsTrigger>
              <TabsTrigger value="movements">Movements</TabsTrigger>
              <TabsTrigger value="shots">Shot Types</TabsTrigger>
              <TabsTrigger value="broll">B-Roll</TabsTrigger>
              <TabsTrigger value="transitions">Transitions</TabsTrigger>
            </TabsList>

            <TabsContent value="angles" className="space-y-6">
              {shotAngles.map((angle, index) => (
                <div key={index} className="neomorph rounded-2xl p-8 bg-background">
                  <h3 className="text-2xl font-bold mb-3">{angle.name}</h3>
                  <p className="text-muted-foreground leading-relaxed">{angle.description}</p>
                </div>
              ))}
            </TabsContent>

            <TabsContent value="movements" className="space-y-6">
              {cameraMovements.map((movement, index) => (
                <div key={index} className="neomorph rounded-2xl p-8 bg-background">
                  <h3 className="text-2xl font-bold mb-3">{movement.name}</h3>
                  <p className="text-muted-foreground leading-relaxed">{movement.description}</p>
                </div>
              ))}
            </TabsContent>

            <TabsContent value="shots" className="space-y-6">
              {shotTypes.map((shot, index) => (
                <div key={index} className="neomorph rounded-2xl p-8 bg-background">
                  <h3 className="text-2xl font-bold mb-3">{shot.name}</h3>
                  <p className="text-muted-foreground leading-relaxed">{shot.description}</p>
                </div>
              ))}
            </TabsContent>

            <TabsContent value="broll" className="space-y-6">
              {brollTypes.map((broll, index) => (
                <div key={index} className="neomorph rounded-2xl p-8 bg-background">
                  <h3 className="text-2xl font-bold mb-3">{broll.name}</h3>
                  <p className="text-muted-foreground leading-relaxed">{broll.description}</p>
                </div>
              ))}
            </TabsContent>

            <TabsContent value="transitions" className="space-y-6">
              {transitionShots.map((transition, index) => (
                <div key={index} className="neomorph rounded-2xl p-8 bg-background">
                  <h3 className="text-2xl font-bold mb-3">{transition.name}</h3>
                  <p className="text-muted-foreground leading-relaxed">{transition.description}</p>
                </div>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

