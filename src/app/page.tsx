import { Header } from "@/components/header"
import { Sidebar } from "@/components/sidebar"
import { AboutSection } from "@/components/about-section"
import { ProjectSection } from "@/components/project-section"
import { ServicesSection } from "@/components/services-section"
import { ExperienceSection } from "@/components/experience-section"
import { Menu } from "@/lib/types"

const menuItems: Menu[] = [
  { id: "about", label: "ABOUT ME", active: true, href: "#about" },
  { id: "project", label: "projects", href: "#project" },
  { id: "experience", label: "EXPERIENCEs", href: "#experience" },
  { id: "services", label: "SERVICES", href: "#services" },
  // { id: "testimonial", label: "TESTIMONIAL", href: "#" },
  // { id: "blog", label: "BLOG", href: "#blog" },
  // { id: "contact", label: "CONTACT", href: "#about" },
]
export default function Home() {
  return (

    <div className="min-h-screen container max-w-[1320px] mx-auto px-5 xl:px-3">
      <Header menus={menuItems} />

      <main className="space-y-6 md:flex md:space-x-8 md:space-y-0 xl:space-x-12 flex-1">
        <Sidebar menus={menuItems} />
        <div className="space-y-6 pb-12">
          <AboutSection />
          <ProjectSection />
          <ExperienceSection />
          <ServicesSection />
        </div>


      </main>


    </div>
  )
}
