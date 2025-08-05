import { Header } from "@/components/header"
import { Sidebar } from "@/components/sidebar"
import { AboutSection } from "@/components/about-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { ServicesSection } from "@/components/services-section"
import { ResumeSection } from "@/components/resume-section"

export default function Home() {
  return (

    <div className="min-h-screen container max-w-[1320px] mx-auto px-5 xl:px-3">
      <Header />

      <div className="flex">
        <Sidebar />

        <main className="flex-1 w-full md:w-auto">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <AboutSection />
            <PortfolioSection />
            <ServicesSection />
            <ResumeSection />
          </div>
        </main>
      </div>
    </div>
  )
}
