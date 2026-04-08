export function AboutHero() {
  return (
    <section className="py-10 md:py-16 px-4 md:px-6">
      <div className="max-w-4xl mx-auto text-center lg:text-left">
        <p className="text-[10px] md:text-xs uppercase tracking-widest text-muted-foreground mb-3 md:mb-4">
          Founded in XXXX
        </p>
        
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4 md:mb-6 text-balance">
          An Institution for {" "}
          <span className="block">Learning, Discipline, and Growth.</span>
        </h1>
        
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0 text-pretty">
          <span className="font-bold">CBS Inter College</span> is committed to academic excellence and character development, combining strong values with a modern approach to education.
        </p>
      </div>
    </section>
  )
}
