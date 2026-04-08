import { Button } from "@/components/ui/button"

export function AdmissionsHero() {
  return (
    <section className="py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h1 className="font-serif text-4xl lg:text-5xl font-bold leading-tight">
              Begin Your{" "}
              <span className="text-primary">Academic Journey.</span>
            </h1>
            
            <p className="text-muted-foreground leading-relaxed">
              Where traditional values meet modern admission process is designed to identify the brilliant minds of tomorrow.
            </p>
            
            <Button 
              variant="outline"
              className="rounded-lg px-6 border-foreground/20 hover:bg-card transition-all duration-300"
            >
              View Prospectus
            </Button>
            
            <div className="pt-4 border-t border-border">
              <p className="text-sm text-muted-foreground italic">
                &ldquo;Excellence in education since 198XX.&rdquo;
              </p>
            </div>
          </div>
          
          {/* Image */}
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-jbRMPqZpsJ29cI9ql4VJBNO3Lm0If7.png"
              alt="CBS Inter College Campus"
              className="w-full h-80 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
