import { HeroSection } from "@/components/hero-section"
import { AppShowcaseSection } from "@/components/app-showcase-section"
import { ClientManagementSection } from "@/components/client-management-section"

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AppShowcaseSection />
      <ClientManagementSection />
    </main>
  )
}
