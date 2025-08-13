import { Header } from "@/components/header"
import { Sidebar } from "@/components/sidebar"
import { AboutSection } from "@/components/about-section"
import { ProjectSection } from "@/components/project-section"
import { ServicesSection } from "@/components/services-section"
import { ExperienceSection } from "@/components/experience-section"
import { MENUITEMS } from "@/lib/constants"
import { SkillsSection } from "@/components/skills-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <div className="min-h-screen container max-w-[1320px] mx-auto px-5 xl:px-3">
      <Header menus={MENUITEMS} />

      <main className="space-y-6 lg:flex lg:space-x-8 lg:space-y-0 xl:space-x-12 flex-1">
        <Sidebar menus={MENUITEMS} />
        <div className="space-y-6 pb-12">
          <AboutSection />
          <ProjectSection />
          <SkillsSection />
          <ExperienceSection />
          <ServicesSection />
          <ContactSection />
        </div>


      </main>


    </div>
  )
}
