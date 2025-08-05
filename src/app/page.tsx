import { Header } from "@/components/header"
import { Sidebar } from "@/components/sidebar"
import { AboutSection } from "@/components/about-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { ServicesSection } from "@/components/services-section"
import { ExperienceSection } from "@/components/experience-section"

export default function Home() {
  return (

    <div className="min-h-screen container max-w-[1320px] mx-auto px-5 xl:px-3">
      <Header />

      <main className="space-y-6 md:flex md:space-x-8 md:space-y-0 xl:space-x-12 flex-1">
        <Sidebar />
        <div className="space-y-6 pb-12">
          <AboutSection />
          <PortfolioSection />
          <ServicesSection />
          <ExperienceSection />
        </div>


      </main>


    </div>
  )
}
