import { ArrowRight, Sparkles, Calendar, CreditCard, Download } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const sidebarLinks = [
  // { icon: Sparkles, label: "Latest Notices", href: "/notices" },
  // { icon: Calendar, label: "Academic Calendar", href: "/calendar" },
  { icon: ArrowRight, label: "Admission Portal", href: "/admissions", highlight: true },
  // { icon: CreditCard, label: "Fee Structure", href: "/fees" },
  // { icon: Download, label: "Downloads", href: "/downloads" },
]

export function LegacySection() {
  return (
    <section className="py-8 md:py-12 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Image with Years Badge */}
          <div className="lg:col-span-1">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <Image 
                  src="/images/about.png" 
                  alt="CBS Inter College Heritage Building"
                  width={400}
                  height={320}
                  className="w-full h-56 md:h-72 lg:h-80 object-cover"
                />
              </div>
              
              {/* Years Badge */}
              <div className="absolute -bottom-4 md:-bottom-6 left-4 md:left-6 bg-primary text-primary-foreground px-4 md:px-6 py-3 md:py-4 rounded-xl shadow-lg">
                <p className="text-2xl md:text-3xl font-bold">20+</p>
                <p className="text-[10px] md:text-xs uppercase tracking-wider opacity-80">Years of Legacy</p>
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="lg:col-span-1 space-y-4 md:space-y-6 mt-4 lg:mt-0">
            <h2 className="font-serif text-2xl md:text-3xl italic">A Legacy of Learning</h2>
            
            <div className="space-y-3 md:space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed">
              <p>
                Established with the vision of delivering quality education, CBS Inter College has been nurturing young minds with discipline, values, and academic excellence.
              </p>
              
              <p>
               Our institution continues to grow as a trusted center of learning and student development.”
              </p>
            </div>
            
            {/* <Link 
              href="/history"
              className="inline-flex items-center gap-2 font-medium text-sm md:text-base hover:text-primary transition-colors group"
            >
              Read Detailed History
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link> */}
          </div>
          
          {/* Notice Board */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-2xl p-4 md:p-6 shadow-lg border border-border/50">
              <div className="mb-3 md:mb-4">
                <h3 className="font-semibold">Notice Board</h3>
                <p className="text-xs text-accent uppercase tracking-wider">Institutional Updates</p>
              </div>
              
              <nav className="space-y-2">
                {sidebarLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`flex items-center gap-2 md:gap-3 px-3 md:px-4 py-2 md:py-3 rounded-lg text-xs md:text-sm font-medium transition-all duration-300 ${
                      item.highlight
                        ? "bg-accent text-foreground shadow-md hover:shadow-lg hover:scale-[1.02]"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    }`}
                  >
                    <item.icon className="w-4 h-4 flex-shrink-0" />
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
