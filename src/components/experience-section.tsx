import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Section } from '@/components/section';

const experiences = [
    {
        title: "Senior UI/UX Designer",
        company: "Tech Solutions Inc.",
        period: "2022 - Present",
        description:
            "Leading design initiatives for web and mobile applications, collaborating with cross-functional teams.",
    },
    {
        title: "UI/UX Designer",
        company: "Creative Agency",
        period: "2021 - 2022",
        description: "Designed user interfaces for various client projects, focusing on user experience optimization.",
    },
    {
        title: "Junior Designer",
        company: "Startup Hub",
        period: "2020 - 2021",
        description: "Assisted in creating design systems and maintaining brand consistency across platforms.",
    },
]

const education = [
    {
        degree: "Bachelor of Fine Arts",
        school: "Design University",
        period: "2016 - 2020",
        description: "Specialized in Digital Design and User Experience",
    },
    {
        degree: "Certificate in Web Development",
        school: "Tech Institute",
        period: "2020",
        description: "Frontend development and modern web technologies",
    },
]

const skills = [
    "Figma",
    "Adobe Creative Suite",
    "Sketch",
    "InVision",
    "Principle",
    "HTML/CSS",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Photography",
    "Brand Design",
    "Prototyping",
    "User Research",
    "Wireframing",
]

export function ExperienceSection() {
    return (
        <Section id="experience">
            <h6 className="font-mono font-medium uppercase text-sm tracking-wider relative pt-4 dark:text-white before:content-['//'] before:pr-2 after:content-[attr(data-backdrop-text)] after:absolute after:top-0 after:left-0 after:font-heading after:font-bold after:uppercase after:text-4xl after:opacity-15" data-backdrop-text="Experiences">Experiences</h6>
            <h2 className="text-2xl md:text-4xl font-heading font-bold text-black leading-tight">
                My Professional Experiences
            </h2>


            <div className="mb-8 md:mb-12">
                <p className="text-gray-600 max-w-2xl text-sm md:text-base">
                    A comprehensive overview of my professional journey, education, and skills.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                <div>
                    <h3 className="text-xl md:text-2xl font-heading font-semibold text-black mb-4 md:mb-6">Experience</h3>
                    <div className="space-y-4 md:space-y-6">
                        {experiences.map((exp, index) => (
                            <Card key={index} className="border border-gray-200">
                                <CardContent className="p-4 md:p-6">
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 gap-2">
                                        <h4 className="text-base md:text-lg font-heading font-semibold text-black">{exp.title}</h4>
                                        <Badge variant="outline" className="text-xs font-mono w-fit">
                                            {exp.period}
                                        </Badge>
                                    </div>
                                    <p className="text-gray-700 font-medium mb-2 text-sm md:text-base">{exp.company}</p>
                                    <p className="text-gray-600 text-sm">{exp.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="text-xl md:text-2xl font-heading font-semibold text-black mb-4 md:mb-6">Education</h3>
                    <div className="space-y-4 md:space-y-6 mb-6 md:mb-8">
                        {education.map((edu, index) => (
                            <Card key={index} className="border border-gray-200">
                                <CardContent className="p-4 md:p-6">
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 gap-2">
                                        <h4 className="text-base md:text-lg font-heading font-semibold text-black">{edu.degree}</h4>
                                        <Badge variant="outline" className="text-xs font-mono w-fit">
                                            {edu.period}
                                        </Badge>
                                    </div>
                                    <p className="text-gray-700 font-medium mb-2 text-sm md:text-base">{edu.school}</p>
                                    <p className="text-gray-600 text-sm">{edu.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    <h3 className="text-xl md:text-2xl font-heading font-semibold text-black mb-4 md:mb-6">Skills</h3>
                    <div className="flex flex-wrap gap-2">
                        {skills.map((skill, index) => (
                            <Badge key={index} variant="outline" className="px-2 md:px-3 py-1 text-xs md:text-sm">
                                {skill}
                            </Badge>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    )
}
