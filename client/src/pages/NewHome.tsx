import Navigation from "@/components/Navigation";

export default function NewHome() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section - Centered with Massive White Space */}
      <div className="container">
        <div className="min-h-[80vh] flex items-center justify-center">
          <div className="text-center max-w-4xl mx-auto px-8">
            {/* Large Neumorphic Badge */}
            <div className="inline-block neomorph px-16 py-8 rounded-3xl bg-background">
              <p className="text-4xl font-medium text-muted-foreground tracking-wide">
                Visual Storytelling Manual
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

