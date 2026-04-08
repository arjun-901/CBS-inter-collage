import { Eye, Sparkles } from "lucide-react"

export function PhilosophicalCore() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-3xl font-bold text-center mb-12">
          Our Philosophical Core
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {/* Vision Card */}
          <div className="bg-muted rounded-2xl p-8 hover:shadow-lg transition-all duration-500 group">
            <div className="w-12 h-12 bg-card rounded-full flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform">
              <Eye className="w-6 h-6 text-foreground" />
            </div>
            
            <h3 className="font-semibold text-xl mb-4">Our Vision</h3>
            
            <p className="text-muted-foreground leading-relaxed">
              To be a globally recognized center of academic distinction that nurtures inquisitive minds, fosters creative expression, and cultivates ethical leaders prepared for the complexities of the 21st century.
            </p>
          </div>
          
          {/* Mission Card */}
          <div className="bg-primary text-primary-foreground rounded-2xl p-8 hover:shadow-lg transition-all duration-500 group">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Sparkles className="w-6 h-6" />
            </div>
            
            <h3 className="font-semibold text-xl mb-4 text-accent">Our Mission</h3>
            
            <p className="text-primary-foreground/90 leading-relaxed">
              To provide a rigorous yet inclusive educational environment where traditional values meet modern innovation, empowering every student to achieve their full potential through personalized mentorship.
            </p>
          </div>
          
          {/* Principal&apos;s Desk */}
          <div className="bg-card rounded-2xl p-8 border border-border/50 hover:shadow-lg transition-all duration-500">
            <p className="text-xs uppercase tracking-wider text-muted-foreground mb-4">
              Principal&apos;s Desk
            </p>
            
            <p className="font-serif italic text-foreground/80 leading-relaxed">
              &ldquo;Education is not the filling of a pail, but the lighting of a fire.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
