import Navigation from "@/components/Navigation";

export default function ColorGrading() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container py-20">
        {/* Page Title */}
        <div className="max-w-4xl mx-auto mb-20">
          <h1 className="text-5xl font-bold mb-6">The Art of Color Grading</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Master color theory fundamentals and systematic DaVinci Resolve workflows for cinematic visual storytelling.
          </p>
        </div>

        {/* Content Sections */}
        <div className="max-w-4xl mx-auto space-y-16">
          
          {/* Color Theory Fundamentals */}
          <div className="neomorph rounded-2xl p-8 bg-background">
            <h2 className="text-3xl font-bold mb-6">Color Theory in Film</h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <div>
                <h3 className="text-xl font-bold text-foreground mb-3">Primary Colors</h3>
                <p>Red, green, and blue form the foundation of digital color. Understanding their relationships enables precise color manipulation and creative grading decisions.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-3">Complementary Colors</h3>
                <p>Colors opposite on the color wheel create maximum contrast and visual interest. Orange and teal, red and cyan are popular cinematic combinations that draw viewer attention.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-3">Color Temperature</h3>
                <p>Warm colors (orange, yellow) evoke comfort and energy. Cool colors (blue, cyan) suggest calmness or isolation. Temperature shifts guide emotional responses throughout your narrative.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-3">Saturation and Vibrancy</h3>
                <p>Saturation controls color intensity. High saturation creates vibrant, energetic visuals. Low saturation produces muted, realistic, or melancholic tones. Balance saturation to match story mood.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-3">Color Psychology</h3>
                <p>Red signals danger, passion, or urgency. Blue conveys trust, sadness, or technology. Green represents nature, growth, or sickness. Yellow suggests happiness, caution, or optimism. Use color psychology to reinforce narrative themes.</p>
              </div>
            </div>
          </div>

          {/* DaVinci Resolve Step-by-Step Workflow */}
          <div className="neomorph rounded-2xl p-8 bg-background">
            <h2 className="text-3xl font-bold mb-6">DaVinci Resolve Color Grading Workflow</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Follow this systematic node-based workflow for consistent, professional results. Each step builds upon the previous, creating a flexible and non-destructive grading pipeline.
            </p>

            <div className="space-y-8">
              {/* Step 1 */}
              <div className="neomorph-inset rounded-xl p-6 bg-background">
                <div className="flex items-start gap-4">
                  <div className="neomorph w-12 h-12 rounded-lg flex items-center justify-center shrink-0 bg-primary text-primary-foreground font-bold text-xl">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3">Node 1: Balance & Exposure</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      <strong className="text-foreground">Purpose:</strong> Establish proper exposure and neutral white balance as your foundation.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Adjust <strong className="text-foreground">Lift, Gamma, Gain</strong> to correct overall exposure</li>
                      <li>• Use <strong className="text-foreground">Color Temperature</strong> slider to neutralize color cast</li>
                      <li>• Check <strong className="text-foreground">Waveform</strong> to ensure proper black and white levels</li>
                      <li>• Aim for skin tones around <strong className="text-foreground">70 IRE</strong> on waveform</li>
                      <li>• Keep highlights below <strong className="text-foreground">100 IRE</strong> to avoid clipping</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="neomorph-inset rounded-xl p-6 bg-background">
                <div className="flex items-start gap-4">
                  <div className="neomorph w-12 h-12 rounded-lg flex items-center justify-center shrink-0 bg-primary text-primary-foreground font-bold text-xl">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3">Node 2: Contrast</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      <strong className="text-foreground">Purpose:</strong> Add depth and dimension before applying color. Contrast must come before creative grading.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Use <strong className="text-foreground">Contrast</strong> slider or custom curve for control</li>
                      <li>• Adjust <strong className="text-foreground">Pivot Point</strong> to protect skin tones while adding punch</li>
                      <li>• Create S-curve in <strong className="text-foreground">Custom Curves</strong> for film-like contrast</li>
                      <li>• Darken shadows slightly to add depth without crushing blacks</li>
                      <li>• Brighten highlights subtly to create separation and dimension</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="neomorph-inset rounded-xl p-6 bg-background">
                <div className="flex items-start gap-4">
                  <div className="neomorph w-12 h-12 rounded-lg flex items-center justify-center shrink-0 bg-primary text-primary-foreground font-bold text-xl">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3">Node 3: Saturation</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      <strong className="text-foreground">Purpose:</strong> Control overall color intensity before applying creative look.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Adjust <strong className="text-foreground">Saturation</strong> slider in Color Wheels panel</li>
                      <li>• Reduce saturation for muted, realistic documentary look</li>
                      <li>• Increase saturation for vibrant, commercial aesthetic</li>
                      <li>• Use <strong className="text-foreground">Hue vs Sat</strong> curve for selective color control</li>
                      <li>• Protect skin tones from over-saturation using qualifiers</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="neomorph-inset rounded-xl p-6 bg-background">
                <div className="flex items-start gap-4">
                  <div className="neomorph w-12 h-12 rounded-lg flex items-center justify-center shrink-0 bg-primary text-primary-foreground font-bold text-xl">
                    4
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3">Node 4: Creative Grade (LUT or Look)</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      <strong className="text-foreground">Purpose:</strong> Apply your creative vision and establish the visual style.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Apply <strong className="text-foreground">LUT</strong> (Look-Up Table) for instant cinematic look</li>
                      <li>• Or manually push <strong className="text-foreground">shadows toward blue/teal</strong> and <strong className="text-foreground">highlights toward orange/warm</strong> for popular cinematic grade</li>
                      <li>• Use <strong className="text-foreground">Color Wheels</strong> to shift shadow, midtone, and highlight hues</li>
                      <li>• Experiment with complementary color schemes for visual interest</li>
                      <li>• Keep adjustments subtle—less is often more for professional results</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Step 5 */}
              <div className="neomorph-inset rounded-xl p-6 bg-background">
                <div className="flex items-start gap-4">
                  <div className="neomorph w-12 h-12 rounded-lg flex items-center justify-center shrink-0 bg-primary text-primary-foreground font-bold text-xl">
                    5
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3">Node 5: Secondary Corrections (Skin Tones)</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      <strong className="text-foreground">Purpose:</strong> Isolate and perfect skin tones for natural, flattering appearance.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Use <strong className="text-foreground">HSL Qualifier</strong> to select skin tone range</li>
                      <li>• Refine selection with <strong className="text-foreground">Luma</strong> and <strong className="text-foreground">Saturation</strong> qualifiers</li>
                      <li>• Soften edges with <strong className="text-foreground">Blur Radius</strong> for natural blending</li>
                      <li>• Slightly warm skin tones if they appear too cool or green</li>
                      <li>• Reduce saturation slightly if skin appears too orange or red</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Step 6 */}
              <div className="neomorph-inset rounded-xl p-6 bg-background">
                <div className="flex items-start gap-4">
                  <div className="neomorph w-12 h-12 rounded-lg flex items-center justify-center shrink-0 bg-primary text-primary-foreground font-bold text-xl">
                    6
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3">Node 6: Secondary Corrections (Sky/Environment)</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      <strong className="text-foreground">Purpose:</strong> Enhance specific elements like skies, foliage, or products.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Use <strong className="text-foreground">HSL Qualifier</strong> to isolate blue skies or green foliage</li>
                      <li>• Increase saturation and contrast for more dramatic skies</li>
                      <li>• Adjust hue to shift color direction (bluer sky, greener grass)</li>
                      <li>• Use <strong className="text-foreground">Power Windows</strong> for geometric selections</li>
                      <li>• Track windows with <strong className="text-foreground">Tracker</strong> for moving subjects</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Step 7 */}
              <div className="neomorph-inset rounded-xl p-6 bg-background">
                <div className="flex items-start gap-4">
                  <div className="neomorph w-12 h-12 rounded-lg flex items-center justify-center shrink-0 bg-primary text-primary-foreground font-bold text-xl">
                    7
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3">Node 7: Vignette & Finishing</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      <strong className="text-foreground">Purpose:</strong> Add final polish and draw attention to subject.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Create <strong className="text-foreground">circular Power Window</strong> and invert selection</li>
                      <li>• Slightly darken edges to create subtle vignette effect</li>
                      <li>• Add gentle <strong className="text-foreground">film grain</strong> for organic texture (2-5%)</li>
                      <li>• Apply subtle <strong className="text-foreground">sharpening</strong> if needed for clarity</li>
                      <li>• Final check: ensure consistent look across all shots in scene</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Node Structure Best Practices */}
          <div className="neomorph rounded-2xl p-8 bg-background">
            <h2 className="text-3xl font-bold mb-6">Node Structure Best Practices</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p><strong className="text-foreground">Serial Nodes:</strong> Default node structure where each node processes sequentially. Use for standard grading workflow.</p>
              <p><strong className="text-foreground">Parallel Nodes:</strong> Multiple nodes process simultaneously and combine. Useful for blending different looks or isolating corrections.</p>
              <p><strong className="text-foreground">Layer Nodes:</strong> Stack corrections like Photoshop layers. Ideal for complex compositing and selective adjustments.</p>
              <p><strong className="text-foreground">Outside Node:</strong> Apply correction outside Power Window selection. Perfect for background adjustments while protecting subject.</p>
              <p><strong className="text-foreground">Label Your Nodes:</strong> Right-click and rename each node for easy navigation in complex grades.</p>
              <p><strong className="text-foreground">Save Node Graphs:</strong> Store successful node structures as templates for consistent workflow across projects.</p>
            </div>
          </div>

          {/* Common Cinematic Looks */}
          <div className="neomorph rounded-2xl p-8 bg-background">
            <h2 className="text-3xl font-bold mb-6">Common Cinematic Color Grades</h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <div>
                <h3 className="text-xl font-bold text-foreground mb-3">Teal & Orange</h3>
                <p>Push shadows toward teal/cyan and highlights toward orange/warm. Creates separation between subject and background. Popular in action and blockbuster films.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-3">Bleach Bypass</h3>
                <p>Desaturated with enhanced contrast. Creates gritty, intense atmosphere. Common in war films and thrillers.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-3">Film Emulation</h3>
                <p>Soft highlights, rich shadows, gentle saturation. Mimics classic film stocks. Ideal for period pieces and romantic dramas.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-3">High Contrast</h3>
                <p>Deep blacks, bright highlights, punchy midtones. Creates bold, graphic look. Effective for music videos and commercials.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-3">Muted/Desaturated</h3>
                <p>Low saturation with subtle color shifts. Realistic, documentary aesthetic. Perfect for authentic storytelling.</p>
              </div>
            </div>
          </div>

          {/* Scopes and Technical Monitoring */}
          <div className="neomorph rounded-2xl p-8 bg-background">
            <h2 className="text-3xl font-bold mb-6">Using Scopes for Precision</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p><strong className="text-foreground">Waveform:</strong> Shows luminance distribution. Ensure blacks sit at 0 IRE and whites below 100 IRE. Skin tones typically fall around 50-70 IRE.</p>
              <p><strong className="text-foreground">Parade (RGB):</strong> Displays red, green, blue channels separately. Use to identify color casts and ensure balanced white point.</p>
              <p><strong className="text-foreground">Vectorscope:</strong> Shows color distribution and saturation. Skin tones should fall along the "skin tone line" between yellow and red.</p>
              <p><strong className="text-foreground">Histogram:</strong> Displays tonal distribution. Avoid clipping on either end unless creatively intentional.</p>
              <p><strong className="text-foreground">Trust Your Scopes:</strong> Monitors vary in calibration. Scopes provide objective technical reference for broadcast-safe, consistent results.</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

