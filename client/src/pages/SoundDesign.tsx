import Navigation from "@/components/Navigation";

export default function SoundDesign() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container py-20">
        {/* Page Title */}
        <div className="max-w-4xl mx-auto mb-20">
          <h1 className="text-5xl font-bold mb-6">The Art of Sound Design</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Master audio mixing fundamentals and scoring principles for immersive sonic storytelling.
          </p>
        </div>

        {/* Content Sections */}
        <div className="max-w-4xl mx-auto space-y-16">
          
          {/* Audio Mixing Fundamentals */}
          <div className="neomorph rounded-2xl p-8 bg-background">
            <h2 className="text-3xl font-bold mb-6">Audio Mixing Fundamentals</h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <div>
                <h3 className="text-xl font-bold text-foreground mb-3">The Three Pillars of Audio</h3>
                <p>Every professional mix balances three core elements: dialogue (the story), music (the emotion), and sound effects (the world). Understanding their hierarchy and interaction creates immersive, professional soundscapes.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-3">Frequency Spectrum Management</h3>
                <p>Low frequencies (20-250 Hz) provide power and weight. Midrange (250 Hz-4 kHz) carries dialogue clarity and musical body. High frequencies (4-20 kHz) add air, sparkle, and detail. Balance across spectrum prevents muddiness and fatigue.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-3">Dynamic Range</h3>
                <p>The difference between quietest and loudest moments creates emotional impact. Compress dialogue for consistency, preserve music dynamics for expression, and use sound effects for dramatic punctuation.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-3">Stereo Field and Panning</h3>
                <p>Place dialogue center for focus. Spread music across stereo field for width. Position sound effects spatially to create realistic environment and direct viewer attention.</p>
              </div>
            </div>
          </div>

          {/* Dialogue Mixing */}
          <div className="neomorph rounded-2xl p-8 bg-background">
            <h2 className="text-3xl font-bold mb-6">Dialogue Mixing</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p><strong className="text-foreground">Target Levels:</strong> Normalize dialogue to -18dB to -12dB LUFS for broadcast standards. Peaks should not exceed -6dB to prevent distortion.</p>
              <p><strong className="text-foreground">EQ for Clarity:</strong> Apply high-pass filter at 80-100 Hz to remove rumble. Boost 2-5 kHz range slightly for presence and intelligibility. Cut harsh frequencies around 3-4 kHz if sibilant.</p>
              <p><strong className="text-foreground">Compression:</strong> Use 3:1 to 4:1 ratio with medium attack and release. Reduces dynamic range for consistent, professional sound without obvious pumping.</p>
              <p><strong className="text-foreground">De-Essing:</strong> Control harsh "s" and "t" sounds with dedicated de-esser plugin. Target 5-8 kHz range with gentle reduction.</p>
              <p><strong className="text-foreground">Noise Reduction:</strong> Remove background hiss, hum, or room tone with spectral noise reduction. Apply subtly to avoid artifacts and maintain natural character.</p>
              <p><strong className="text-foreground">Room Tone:</strong> Fill gaps between dialogue with consistent room tone. Prevents jarring silence and maintains acoustic continuity.</p>
            </div>
          </div>

          {/* Music Mixing */}
          <div className="neomorph rounded-2xl p-8 bg-background">
            <h2 className="text-3xl font-bold mb-6">Music Mixing</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p><strong className="text-foreground">Target Levels:</strong> Background music should sit at -24dB to -18dB, supporting dialogue without competing. Feature music (montages, credits) can reach -12dB to -6dB.</p>
              <p><strong className="text-foreground">EQ for Space:</strong> Cut low-mids (200-500 Hz) to make room for dialogue clarity. Reduce competing frequencies where voice sits to prevent masking.</p>
              <p><strong className="text-foreground">Ducking:</strong> Automatically lower music volume when dialogue plays using sidechain compression. Creates clean separation and maintains intelligibility.</p>
              <p><strong className="text-foreground">Fade In/Out:</strong> Smooth musical transitions with 1-3 second fades. Prevents abrupt starts and stops that break immersion.</p>
              <p><strong className="text-foreground">Emotional Pacing:</strong> Match music intensity to scene energy. Build tension with rising dynamics, release with softer passages. Use silence strategically for maximum impact.</p>
              <p><strong className="text-foreground">Stereo Width:</strong> Keep bass frequencies mono for power and focus. Spread mid and high frequencies for spacious, cinematic feel.</p>
            </div>
          </div>

          {/* Sound Effects Design */}
          <div className="neomorph rounded-2xl p-8 bg-background">
            <h2 className="text-3xl font-bold mb-6">Sound Effects Design</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p><strong className="text-foreground">Target Levels:</strong> Sound effects typically sit at -20dB to -15dB. Impactful moments (explosions, hits) can peak at -6dB for dramatic emphasis.</p>
              <p><strong className="text-foreground">Layering:</strong> Combine multiple sounds to create rich, unique effects. Layer impact, body, and tail elements for complex, realistic results.</p>
              <p><strong className="text-foreground">Foley:</strong> Record custom footsteps, cloth movement, and object handling for authentic, synchronized sound. Adds realism and production value.</p>
              <p><strong className="text-foreground">Ambience:</strong> Build environmental layers with room tone, distant traffic, birds, wind. Creates believable world and prevents sterile silence.</p>
              <p><strong className="text-foreground">Spatial Placement:</strong> Pan effects to match on-screen position. Use reverb to place sounds in acoustic space. Creates dimensional, immersive soundscape.</p>
              <p><strong className="text-foreground">Sync Precision:</strong> Align sound effects frame-accurately with visual action. Even 1-2 frame offset destroys believability and professional polish.</p>
            </div>
          </div>

          {/* Scoring Principles */}
          <div className="neomorph rounded-2xl p-8 bg-background">
            <h2 className="text-3xl font-bold mb-6">Scoring Principles</h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <div>
                <h3 className="text-xl font-bold text-foreground mb-3">Thematic Development</h3>
                <p>Create memorable melodic themes for characters, locations, or emotions. Repeat and vary themes throughout narrative to build recognition and emotional connection.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-3">Instrumentation and Palette</h3>
                <p>Orchestral scores convey epic scale and emotion. Electronic sounds suggest futuristic or technological themes. Acoustic instruments create intimacy and authenticity. Choose palette that reinforces story world.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-3">Tempo and Rhythm</h3>
                <p>Fast tempos increase energy and urgency. Slow tempos create contemplation or sadness. Match rhythmic pulse to scene pacing and cutting rhythm for cohesive feel.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-3">Harmonic Tension and Release</h3>
                <p>Dissonant harmonies create unease and suspense. Consonant resolutions provide satisfaction and closure. Manipulate harmonic progression to guide emotional journey.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-3">Dynamic Contour</h3>
                <p>Build intensity through crescendos and layering. Create space with diminuendos and sparse arrangements. Shape dynamics to mirror narrative arc and emotional beats.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-3">Silence as Tool</h3>
                <p>Strategic silence creates powerful contrast and focus. Absence of score heightens realism and allows dialogue or sound effects to dominate. Use sparingly for maximum impact.</p>
              </div>
            </div>
          </div>

          {/* Audio Processing Chain */}
          <div className="neomorph rounded-2xl p-8 bg-background">
            <h2 className="text-3xl font-bold mb-6">Standard Audio Processing Chain</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Apply effects in this order for optimal results. Each stage builds upon the previous for clean, professional sound.
            </p>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p><strong className="text-foreground">1. Noise Reduction:</strong> Remove unwanted background noise first before other processing amplifies it.</p>
              <p><strong className="text-foreground">2. EQ (Corrective):</strong> Cut problematic frequencies, remove rumble with high-pass filter, reduce harshness.</p>
              <p><strong className="text-foreground">3. De-Esser:</strong> Control sibilance after EQ but before compression to prevent harsh "s" sounds from triggering compressor.</p>
              <p><strong className="text-foreground">4. Compression:</strong> Control dynamic range and create consistent levels. Apply after corrective EQ for transparent results.</p>
              <p><strong className="text-foreground">5. EQ (Creative):</strong> Boost presence, add warmth, or shape tone after compression for final character.</p>
              <p><strong className="text-foreground">6. Reverb/Delay:</strong> Add spatial effects last to place sound in acoustic environment without muddying earlier processing.</p>
              <p><strong className="text-foreground">7. Limiter:</strong> Final safety net on master bus to prevent clipping. Set ceiling at -1dB for headroom.</p>
            </div>
          </div>

          {/* Mixing for Different Platforms */}
          <div className="neomorph rounded-2xl p-8 bg-background">
            <h2 className="text-3xl font-bold mb-6">Platform-Specific Mixing</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p><strong className="text-foreground">Cinema/Theater:</strong> Wide dynamic range, deep bass, immersive surround. Master at -20 LUFS integrated with peaks at -6dB true peak.</p>
              <p><strong className="text-foreground">Broadcast TV:</strong> Compressed dynamic range for consistent home viewing. Target -24 LUFS integrated, -2dB true peak for broadcast standards.</p>
              <p><strong className="text-foreground">Streaming (YouTube, Netflix):</strong> -14 LUFS integrated for YouTube, -27 LUFS for Netflix. Platforms normalize loudness automatically.</p>
              <p><strong className="text-foreground">Social Media (Instagram, TikTok):</strong> Limited dynamic range for mobile playback. Target -14 to -16 LUFS with heavy compression for phone speakers.</p>
              <p><strong className="text-foreground">Podcast/Voice:</strong> Dialogue-focused with minimal music. Target -16 LUFS integrated with consistent, compressed delivery for various listening environments.</p>
            </div>
          </div>

          {/* Critical Listening Environment */}
          <div className="neomorph rounded-2xl p-8 bg-background">
            <h2 className="text-3xl font-bold mb-6">Critical Listening Best Practices</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p><strong className="text-foreground">Monitor Calibration:</strong> Use studio monitors or quality headphones. Calibrate to 85dB SPL for accurate frequency response and dynamic perception.</p>
              <p><strong className="text-foreground">Room Treatment:</strong> Add acoustic panels to reduce reflections and standing waves. Improves accuracy and prevents false EQ decisions.</p>
              <p><strong className="text-foreground">Reference Tracks:</strong> Compare your mix to professionally mixed content in similar genre. Identifies frequency imbalances and level issues.</p>
              <p><strong className="text-foreground">Take Breaks:</strong> Ear fatigue occurs after 45-60 minutes. Rest ears regularly to maintain objective judgment and prevent poor decisions.</p>
              <p><strong className="text-foreground">Multiple Playback Systems:</strong> Test mix on studio monitors, headphones, laptop speakers, phone, and car stereo. Ensures translation across listening environments.</p>
              <p><strong className="text-foreground">Mono Compatibility:</strong> Check mix in mono to ensure phase coherence and identify frequency masking. Critical for broadcast and mobile playback.</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

