import { Trophy, Star, Users } from "lucide-react"

const achievements = [
  {
    tag: "Top Performer (Intermediate)",
    tagColor: "bg-primary",
    title: "District Rank Holder – Intermediate",
    description: "Vandana Maurya secured District Rank 10 with an outstanding score of 90.6%, bringing pride to the institution.",
    student: {
      name: "Vandana Maurya",
      role: "Intermediate Topper",
    },
  },
  {
    tag: "Top Performer (High School)",
    tagColor: "bg-accent",
    title: "District Rank Holder – High School",
    description: "Mahi Pandey achieved District Rank 9 with 93.5%, showcasing academic excellence and dedication.",
    student: {
      name: "Mahi Pandey",
      role: "High School Topper",
    },
    icon: Star,
  },
]

export function StudentAchievements() {
  return (
    <section className="py-10 md:py-16 px-4 md:px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-2xl md:text-3xl font-bold mb-6 md:mb-10 text-center">
          Student Achievements
        </h2>
        
        <div className="grid sm:grid-cols-2 gap-4 md:gap-6 max-w-3xl mx-auto">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-500 border border-border/50 group hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-3 md:mb-4">
                <span className={`px-2 md:px-3 py-1 ${achievement.tagColor} text-white text-[10px] md:text-xs font-semibold rounded-full uppercase tracking-wider`}>
                  {achievement.tag}
                </span>
                {achievement.icon && (
                  <achievement.icon className="w-5 h-5 md:w-6 md:h-6 text-accent" />
                )}
                {!achievement.icon && (
                  <Trophy className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                )}
              </div>
              
              <h3 className="font-semibold text-base md:text-lg mb-2 group-hover:text-primary transition-colors">
                {achievement.title}
              </h3>
              
              <p className="text-xs md:text-sm text-muted-foreground mb-3 md:mb-4">
                {achievement.description}
              </p>
              
              <div className="flex items-center gap-2 md:gap-3 pt-3 md:pt-4 border-t border-border">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-muted flex items-center justify-center">
                  <Users className="w-4 h-4 md:w-5 md:h-5 text-foreground/50" />
                </div>
                <div>
                  <p className="font-medium text-xs md:text-sm">{achievement.student.name}</p>
                  <p className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-wider">{achievement.student.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
