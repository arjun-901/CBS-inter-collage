import { PageLayout } from "@/components/page-layout"
import { LeadershipHero } from "@/components/leadership/leadership-hero"
import { PrincipalSection } from "@/components/leadership/principal-section"
import { DirectorSection } from "@/components/leadership/director-section"
import { BoardOfTrustees } from "@/components/leadership/board-of-trustees"

export default function LeadershipPage() {
  return (
    <PageLayout>
      <LeadershipHero />
      <DirectorSection />
      <PrincipalSection />
      <BoardOfTrustees />
    </PageLayout>
  )
}
