import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navigation from "@/components/Navigation";

export default function Cinematography() {
  const shotAngles = [
    { name: "Eye Level", description: "Camera at subject's eye level. Natural, neutral perspective. Used in most scenes for realistic storytelling.", genre: "All genres", example: "Standard dialogue scenes" },
    { name: "High Angle", description: "Camera looks down on subject. Makes subject appear vulnerable, weak, or small. Creates power dynamic.", genre: "Drama, Thriller", example: "Character in distress or defeat" },
    { name: "Low Angle", description: "Camera looks up at subject. Makes subject appear powerful, dominant, or threatening. Emphasizes authority.", genre: "Action, Thriller", example: "Hero moments, villain introductions" },
    { name: "Bird's Eye View", description: "Extreme high angle, directly overhead. Shows scale, patterns, or isolation. Artistic and dramatic.", genre: "Drama, Documentary", example: "Establishing shots, chase sequences" },
    { name: "Dutch Angle (Tilted)", description: "Camera tilted on axis. Creates unease, disorientation, or tension. Suggests instability.", genre: "Thriller, Horror", example: "Psychological tension, chaos" },
    { name: "Over-the-Shoulder (OTS)", description: "Camera behind one subject looking at another. Establishes spatial relationship and conversation flow.", genre: "All genres", example: "Dialogue scenes, interviews" },
  ];

  const cameraMovements = [
    { name: "Pan", description: "Horizontal camera rotation on fixed axis. Reveals environment or follows action smoothly.", technique: "Keep speed consistent, use fluid head tripod", genre: "Documentary, Drama" },
    { name: "Tilt", description: "Vertical camera rotation on fixed axis. Reveals height, scale, or subject from head to toe.", technique: "Smooth acceleration and deceleration", genre: "All genres" },
    { name: "Dolly/Track", description: "Camera moves toward or away from subject on tracks or wheels. Creates depth and immersion.", technique: "Use dolly tracks or smooth wheeled platform", genre: "Drama, Romance" },
    { name: "Truck/Tracking", description: "Camera moves parallel to subject. Follows action while maintaining consistent distance.", technique: "Match subject's speed precisely", genre: "Action, Documentary" },
    { name: "Crane/Jib", description: "Camera moves vertically on crane arm. Reveals scale, transitions between scenes, or creates drama.", technique: "Requires crane equipment and operator", genre: "Epic, Action" },
    { name: "Handheld", description: "Camera held by operator without stabilization. Creates urgency, realism, or chaos.", technique: "Brace elbows, use wide lens to minimize shake", genre: "Documentary, Action" },
    { name: "Steadicam/Gimbal", description: "Stabilized camera movement. Smooth, floating motion through spaces or following subjects.", technique: "Requires gimbal or steadicam rig", genre: "All genres" },
    { name: "Dolly Zoom (Vertigo Effect)", description: "Dolly in while zooming out (or reverse). Creates disorienting, surreal effect. Background appears to shift.", technique: "Requires precise coordination of movement and zoom", genre: "Thriller, Drama" },
  ];

  const shotTypes = [
    { name: "Extreme Wide Shot (EWS)", description: "Shows entire environment. Subject is small or distant. Establishes location and scale.", usage: "Opening scenes, establishing context", framing: "Subject occupies small portion of frame" },
    { name: "Wide Shot (WS)", description: "Shows subject and surroundings. Full body visible. Establishes spatial relationships.", usage: "Action sequences, environmental context", framing: "Subject full body in frame with environment" },
    { name: "Medium Wide Shot (MWS)", description: "Subject from knees up. Balance between subject and environment. Common for group shots.", usage: "Multiple subjects, movement", framing: "Knees to head" },
    { name: "Medium Shot (MS)", description: "Subject from waist up. Standard for dialogue and interviews. Balances detail and context.", usage: "Conversations, interviews, general coverage", framing: "Waist to head" },
    { name: "Medium Close-Up (MCU)", description: "Subject from chest up. Emphasizes facial expressions while showing some body language.", usage: "Emotional dialogue, reactions", framing: "Chest to head" },
    { name: "Close-Up (CU)", description: "Subject's face fills frame. Reveals emotion and subtle expressions. Creates intimacy.", usage: "Emotional moments, important details", framing: "Shoulders to top of head" },
    { name: "Extreme Close-Up (ECU)", description: "Isolates specific detail (eyes, hands, object). Creates intensity or reveals crucial information.", usage: "Dramatic emphasis, important objects", framing: "Single feature fills frame" },
    { name: "Two-Shot", description: "Two subjects in frame. Shows relationship and interaction between characters.", usage: "Dialogue, relationship dynamics", framing: "Both subjects visible, usually medium shot" },
    { name: "Over-the-Shoulder Shot", description: "Frame includes shoulder/head of one subject while focusing on another. Establishes conversation.", usage: "Dialogue scenes, POV context", framing: "Foreground subject partially visible" },
    { name: "Point of View (POV)", description: "Camera shows what character sees. Creates subjective experience and empathy.", usage: "Subjective storytelling, immersion", framing: "First-person perspective" },
    { name: "Insert Shot", description: "Close-up of object or detail. Provides information or emphasizes importance.", usage: "Showing details, objects, text", framing: "Object fills frame" },
  ];

  const brollTypes = [
    { name: "Establishing B-Roll", description: "Wide shots of location, building exteriors, cityscapes. Sets scene and context.", purpose: "Establish location and time", examples: "Building exterior, city skyline, landscape" },
    { name: "Action B-Roll", description: "Hands working, people moving, processes happening. Shows activity and energy.", purpose: "Illustrate actions and processes", examples: "Typing, cooking, assembling, walking" },
    { name: "Detail B-Roll", description: "Close-ups of objects, textures, products. Adds visual interest and information.", purpose: "Highlight specific details", examples: "Product features, textures, small objects" },
    { name: "Environmental B-Roll", description: "Ambient shots of environment without main subject. Creates atmosphere.", purpose: "Build mood and context", examples: "Empty rooms, nature, weather, lighting" },
    { name: "Cutaway B-Roll", description: "Related shots that cut away from main action. Covers edits and adds context.", purpose: "Smooth transitions, cover jump cuts", examples: "Audience reactions, related activities" },
    { name: "Transition B-Roll", description: "Shots designed to bridge scenes or topics. Natural transition points.", purpose: "Connect different segments", examples: "Doors opening, walking through spaces, time-lapses" },
  ];

  const transitionShots = [
    { name: "Match Cut", description: "Cut between similar compositions or actions. Creates visual continuity and connection.", technique: "Match shape, color, movement, or action across cuts", example: "Bone to spaceship (2001), eye to sun" },
    { name: "J-Cut", description: "Audio from next scene starts before visual cut. Smooth audio transition.", technique: "Overlap audio before video transition", example: "Hear next scene's dialogue before seeing it" },
    { name: "L-Cut", description: "Audio from current scene continues after visual cut. Maintains audio continuity.", technique: "Extend current audio over next scene's video", example: "Character's dialogue continues over reaction shots" },
    { name: "Whip Pan", description: "Extremely fast pan creating motion blur. Energetic transition between shots or scenes.", technique: "Pan quickly between subjects, match direction", example: "Action sequences, music videos" },
    { name: "Swipe Transition", description: "Object passes in front of lens creating natural wipe. Organic transition.", technique: "Have object move across frame to obscure view", example: "Person walking past camera, door closing" },
    { name: "Fade Through Black", description: "Image fades to black, then next image fades in. Indicates time passage or scene change.", technique: "Gradual opacity reduction to black, then increase", example: "Time jumps, chapter breaks" },
    { name: "Crossfade/Dissolve", description: "One image gradually replaces another. Smooth, dreamy transition.", technique: "Overlap two clips with opacity transition", example: "Montages, time passage, memories" },
    { name: "Cutaway Transition", description: "Cut to related but different shot, then back or forward. Covers time or location jumps.", technique: "Insert relevant B-roll between main shots", example: "Clock ticking, establishing shot, reaction" },
    { name: "Match Action", description: "Continue same action across cut. Maintains momentum and flow.", technique: "Cut mid-action, continue in next shot", example: "Opening door, standing up, throwing object" },
    { name: "Graphic Match", description: "Similar shapes or compositions across cuts. Visual rhyming.", technique: "Match visual elements (circles, lines, patterns)", example: "Moon to plate, tunnel to eye" },
  ];

  const genreSpecifics = [
    { 
      genre: "Documentary", 
      approach: "Observational realism with purposeful composition",
      shots: "Handheld for immediacy, locked-off for interviews, wide for context",
      movements: "Motivated camera movement, smooth pans and tilts",
      style: "Natural lighting, authentic moments, minimal manipulation"
    },
    { 
      genre: "Drama", 
      approach: "Emotional storytelling through careful framing",
      shots: "Balanced shot variety, emphasis on close-ups for emotion",
      movements: "Smooth, motivated movements, dolly for emotional beats",
      style: "Controlled lighting, thoughtful composition, color grading"
    },
    { 
      genre: "Thriller/Horror", 
      approach: "Tension through unconventional angles and movement",
      shots: "Dutch angles, extreme close-ups, obscured framing",
      movements: "Unsettling movements, sudden whip pans, slow creeping",
      style: "High contrast, shadows, disorienting compositions"
    },
    { 
      genre: "Action", 
      approach: "Dynamic energy and clear spatial geography",
      shots: "Wide for choreography, quick cuts, varied angles",
      movements: "Handheld for chaos, smooth tracking for heroes",
      style: "High energy, clear action lines, impact frames"
    },
    { 
      genre: "Romance", 
      approach: "Intimacy and beauty through soft, close framing",
      shots: "Close-ups, two-shots, soft focus backgrounds",
      movements: "Slow dolly moves, gentle pans, floating steadicam",
      style: "Soft lighting, warm tones, shallow depth of field"
    },
    { 
      genre: "Comedy", 
      approach: "Clear staging and timing for comedic effect",
      shots: "Medium shots for physical comedy, close-ups for reactions",
      movements: "Locked-off for timing, whip pans for surprise",
      style: "Bright, even lighting, clear compositions"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50 dark:from-slate-950 dark:via-gray-950 dark:to-zinc-950">
      <Navigation />

      {/* Hero */}
      <section className="container py-12">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <Badge variant="secondary" className="px-4 py-1.5 text-sm">
            Cinematography Masterclass
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Complete Cinematography Guide
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Master shot angles, camera movements, framing techniques, and transitions across all genres. 
            From documentary realism to thriller tension, learn the visual language of professional filmmaking.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container py-8 pb-16">
        <Tabs defaultValue="angles" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 mb-8">
            <TabsTrigger value="angles">Shot Angles</TabsTrigger>
            <TabsTrigger value="movements">Camera Movements</TabsTrigger>
            <TabsTrigger value="types">Shot Types</TabsTrigger>
            <TabsTrigger value="broll">B-Roll</TabsTrigger>
            <TabsTrigger value="transitions">Transitions</TabsTrigger>
          </TabsList>

          {/* Shot Angles */}
          <TabsContent value="angles" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Shot Angles</CardTitle>
                <CardDescription>
                  Camera angles create psychological effects and power dynamics. The angle from which you shoot 
                  fundamentally changes how the audience perceives your subject.
                </CardDescription>
              </CardHeader>
            </Card>

            <div className="grid md:grid-cols-2 gap-4">
              {shotAngles.map((angle, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-lg">{angle.name}</CardTitle>
                      <Badge variant="outline" className="text-xs">{angle.genre}</Badge>
                    </div>
                    <CardDescription className="text-sm">{angle.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold">Example:</span> {angle.example}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Camera Movements */}
          <TabsContent value="movements" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Camera Movements</CardTitle>
                <CardDescription>
                  Camera movement adds dynamism, reveals information, and creates emotional impact. Each movement 
                  type serves specific storytelling purposes and requires different techniques.
                </CardDescription>
              </CardHeader>
            </Card>

            <div className="grid md:grid-cols-2 gap-4">
              {cameraMovements.map((movement, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-lg">{movement.name}</CardTitle>
                      <Badge variant="outline" className="text-xs">{movement.genre}</Badge>
                    </div>
                    <CardDescription className="text-sm">{movement.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold">Technique:</span> {movement.technique}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Shot Types */}
          <TabsContent value="types" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Shot Types & Framing</CardTitle>
                <CardDescription>
                  Shot size determines how much of the subject and environment is visible. Proper shot selection 
                  controls pacing, emotion, and information delivery.
                </CardDescription>
              </CardHeader>
            </Card>

            <div className="space-y-4">
              {shotTypes.map((shot, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{shot.name}</CardTitle>
                    <CardDescription>{shot.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-semibold">Usage:</span> {shot.usage}
                      </div>
                      <div>
                        <span className="font-semibold">Framing:</span> {shot.framing}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* B-Roll */}
          <TabsContent value="broll" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>B-Roll Types</CardTitle>
                <CardDescription>
                  B-roll provides visual variety, covers edits, and adds context to your story. Strategic B-roll 
                  collection during production saves countless hours in post and elevates production value.
                </CardDescription>
              </CardHeader>
            </Card>

            <div className="grid md:grid-cols-2 gap-4">
              {brollTypes.map((broll, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{broll.name}</CardTitle>
                    <CardDescription>{broll.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="text-sm">
                      <span className="font-semibold">Purpose:</span> {broll.purpose}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <span className="font-semibold">Examples:</span> {broll.examples}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Transitions */}
          <TabsContent value="transitions" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Transition Techniques</CardTitle>
                <CardDescription>
                  Transitions connect shots and scenes while maintaining flow and rhythm. The best transitions are 
                  often invisible, serving the story rather than calling attention to themselves.
                </CardDescription>
              </CardHeader>
            </Card>

            <div className="space-y-4">
              {transitionShots.map((transition, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{transition.name}</CardTitle>
                    <CardDescription>{transition.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="text-sm">
                      <span className="font-semibold">Technique:</span> {transition.technique}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <span className="font-semibold">Example:</span> {transition.example}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Genre-Specific Approaches */}
        <div className="max-w-6xl mx-auto mt-12">
          <Card>
            <CardHeader>
              <CardTitle>Genre-Specific Cinematography</CardTitle>
              <CardDescription>
                Different genres require different visual approaches. Understanding these conventions helps you 
                make intentional choices that support your story.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {genreSpecifics.map((genre, index) => (
                <div key={index} className="border-l-4 border-primary pl-4 py-2">
                  <h4 className="font-semibold text-lg mb-2">{genre.genre}</h4>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p><span className="font-semibold text-foreground">Approach:</span> {genre.approach}</p>
                    <p><span className="font-semibold text-foreground">Shots:</span> {genre.shots}</p>
                    <p><span className="font-semibold text-foreground">Movements:</span> {genre.movements}</p>
                    <p><span className="font-semibold text-foreground">Style:</span> {genre.style}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}

