import { PageLayout } from "@/components/page-layout"
import { AboutHero } from "@/components/about/about-hero"
import { LegacySection } from "@/components/about/legacy-section"
import { PhilosophicalCore } from "@/components/about/philosophical-core"
import { Milestones } from "@/components/about/milestones"

export default function AboutPage() {
  return (
    <PageLayout>
      <AboutHero />
      <LegacySection />
      <PhilosophicalCore />
      <Milestones />
    </PageLayout>
  )
}
