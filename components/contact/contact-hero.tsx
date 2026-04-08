export function ContactHero() {
  return (
    <section className="relative">
      <div className="relative h-64 overflow-hidden">
        <img 
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-n9DyBAySwVtH7gMbolkFIm6midwPU2.png"
          alt="CBS Inter College Campus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60"></div>
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <span className="px-4 py-1 bg-accent text-foreground rounded-full text-xs font-semibold mb-4">
            INQUIRY
          </span>
          <h1 className="font-serif text-4xl lg:text-5xl font-bold italic">
            Connect with Heritage
          </h1>
        </div>
      </div>
    </section>
  )
}
