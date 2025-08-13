import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Section } from '@/components/section';

const experiences = [
    {
        title: "Tech Lead (Front-end)",
        company: "Altatech by Ruangguru",
        period: "2024 - 2025",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
    },
    {
        title: "Senior Software Engineer (Front-end)",
        company: "Ruangguru",
        period: "2020 - 2024",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
    },
    {
        title: "Software Engineer (Front-end)",
        company: "Ruangguru",
        period: "2017 - 2020",
        description: "AssisLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
    },
    {
        title: "Junior Front-end Engineer",
        company: "Ruangguru",
        period: "2015 - 2017",
        description: "AssisLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
    },
    {
        title: "Web Developer",
        company: "Javasigna Intermedia",
        period: "2013 - 2015",
        description: "AssisLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
    },
]

// const education = [
//     {
//         degree: "Bachelor of Education",
//         school: "Universitas Negeri Yogyakarta",
//     },
// ]


export function ExperienceSection() {
    return (
        <Section id="experience">
            <h6 className="font-mono font-medium uppercase text-sm tracking-wider relative pt-4 dark:text-white before:content-['//'] before:pr-2 after:content-[attr(data-backdrop-text)] after:absolute after:top-0 after:left-0 after:font-heading after:font-bold after:uppercase after:text-4xl after:opacity-15" data-backdrop-text="Experiences">Experiences</h6>
            <h2 className="text-2xl md:text-4xl font-heading font-bold text-black leading-tight">
                My Professional Experiences
            </h2>
            <p className="text-gray-600 max-w-3xl text-sm md:text-base mt-4 mb-8 md:mb-12">
                Highlights from my career journey and academic background.
            </p>

            <div className="grid grid-cols-1">
                <div>
                    {/* <h3 className="text-xl md:text-2xl font-heading font-semibold text-black mb-4 md:mb-6">Experience</h3> */}
                    <div className="space-y-4 md:space-y-6">
                        {experiences.map((exp, index) => (
                            <Card key={index} className="border border-gray-200 shadow-none">
                                <CardContent>
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 gap-2">
                                        <h4 className="text-base md:text-lg font-sans font-semibold text-black">{exp.title} <span>- {exp.company}</span></h4>
                                        <Badge variant="outline" className="text-xs font-mono w-fit">
                                            {exp.period}
                                        </Badge>
                                    </div>
                                    <p className="text-gray-700 text-sm">{exp.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>


            </div>
        </Section>
    )
}
