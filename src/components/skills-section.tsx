import { Section } from '@/components/section'
import { Badge } from "@/components/ui/badge"

type Skill = { [key: string]: string[] }
const skills: Skill = {
    "Javascript Libraries": [
        "React", "Angular",
    ],
    "Metaframeworks": ["Next.js", "React native", "Gatsby", "ReasonML"],
    "State Management": ["React Context", "Redux", "Zustand"],
    "Data fetching": ["TanStack Query", "swr", "GraphQL"],
    "Styling": ["CSS Modules", "Styled Components", "Sass", "Tamagui", "Shadcn"],
    "CSS frameworks": ["Tailwind CSS", "Bootstrap", "MUI"],
    "Core Strengths": ["Performance optimization", "Responsive design", "Accessibility best practices"],
    "Backend & Database": ["Supabase", "Node.js", "REST APIs", "GraphQL"],
    "Workflow & Tools": ["Git", "Vercel", "Figma", "Postman", "Jira"],

}

export function SkillsSection() {
    return (
        <Section id="skills">
            <h6 className="font-mono font-medium uppercase text-sm tracking-wider relative pt-4 dark:text-white before:content-['//'] before:pr-2 after:content-[attr(data-backdrop-text)] after:absolute after:top-0 after:left-0 after:font-heading after:font-bold after:uppercase after:text-4xl after:opacity-15" data-backdrop-text="Skills">Skills</h6>
            <h2 className="text-2xl md:text-4xl font-heading font-bold text-black leading-tight">
                Skills & Tools
            </h2>
            <p className="text-gray-600 max-w-3xl text-sm md:text-base mt-4 mb-8 md:mb-12">
                Technologies and practices I use to turn ideas into fast, reliable, and scalable web applications.
            </p>

            <div className='flex flex-col gap-3'>

                {
                    Object.keys(skills).map((cat) => {
                        return <div className='flex items-center gap-3 transition-transform duration-200 hover:scale-105' key={cat}>
                            <h3 className="text-base font-sans font-semibold text-black min-w-[200px]">{cat}</h3>
                            <div className="flex flex-wrap gap-2">
                                {
                                    Array.isArray(skills[cat]) && skills[cat].map((skill, idx) => (
                                        <Badge key={idx + skill} variant="outline" className="px-2 md:px-3 py-1 text-xs md:text-sm">
                                            {skill}
                                        </Badge>
                                    ))
                                }
                            </div>
                        </div >
                    })
                }
            </div>


        </Section>
    )
}
