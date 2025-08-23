import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Section } from '@/components/section';

const experiences = [
    {
        title: "Tech Lead (Front-end)",
        company: "Altatech by Ruangguru",
        period: "2024 - 2025",
        description:
            "Led end-to-end development of an internal PaaS platform for CRM & HRIS, accelerating cross-team workflow development by 60% and reducing internal tooling costs by 40%. \nArchitected and delivered a comprehensive HRIS SaaS solution, featuring multi-role dashboards (company, HR admin, employee) and a downloadable mobile app for iOS and Android. \nSpearheaded the rapid development of a new payroll system from concept to launch in under two months. Collaborated closely with HR and product teams to ensure a smooth, error-free release for thousands of employees.",
    },
    {
        title: "Senior Software Engineer (Front-end)",
        company: "Ruangguru",
        period: "2020 - 2024",
        description: "Migrated 2,000+ pages from HubSpot to self-hosted WordPress with zero downtime, improving CMS flexibility and cost effectiveness. Developed a custom WP theme with reusable UI components, cutting content publishing time by 30% and reducing development cost by 50%.\nLed the launch of an SEO-optimized pre-recorded education platform with 100K+ indexed pages, contributing to 20% user growth across multiple countries (Indonesia, Thailand, Vietnam) with 4 junior contributors\nArchitected a tryout platform as a shared service, enabling its adoption by 2+ other product teams and eliminating redundant development work.\nCHIEF of the quarter winner in 2021",
    },
    {
        title: "Software Engineer (Front-end)",
        company: "Ruangguru",
        period: "2017 - 2020",
        description: "Development of ruangkelas (Google Classroom for Indonesia) using  ReasonML, and  launched in 4 weeks (0 runtime errors), scaling DAU from 0K → 5K\nPioneered the adoption of React Native for the RuangKerja app, establishing a new cross-platform development standard that reduced mobile development costs by 50%.\nSolely engineered the payment dashboard using React/Redux, designing a reliable interface that processed 1M+ transactions.\nLed development of Ruangpengajar (teacher app) with 50K+ Android downloads, collaborating with back-end and QA teams\nCHIEF of the year in 2018",
    },
    {
        title: "Junior Front-end Engineer",
        company: "Ruangguru",
        period: "2015 - 2017",
        description: "Developed a high-traffic exam system (3M+ users) with LINE API integration.\nBuilt reusable UI components for using AngularJS.",
    },
    {
        title: "Web Developer",
        company: "Javasigna Intermedia",
        period: "2014 - 2015",
        description: "Built responsive UIs with HTML3, jQuery, and CSS3 for media clients",
    },
]

const education = [
    {
        degree: "Bachelor of Education",
        school: "Universitas Negeri Yogyakarta",
    },
]


export function ExperienceSection() {
    return (
        <Section id="experience">
            <h6 className="font-mono font-medium uppercase text-sm tracking-wider relative pt-4 dark:text-white before:content-['//'] before:pr-2 after:content-[attr(data-backdrop-text)] after:absolute after:top-0 after:left-0 after:font-heading after:font-bold after:uppercase after:text-4xl after:opacity-15" data-backdrop-text="Experiences">Experiences</h6>
            <h2 className="text-2xl md:text-4xl font-heading font-bold text-black leading-tight">
                My Professional Experiences
            </h2>
            <p className="text-gray-600 max-w-3xl text-sm md:text-base mt-4 mb-4 md:mb-8">
                Highlights from my career journey and academic background.
            </p>

            <div className="grid grid-cols-1">
                <div>
                    <h3 className="text-xl md:text-2xl font-heading font-semibold text-black">Experiences</h3>
                    <div className="">
                        {experiences.map((exp, index) => (
                            <Card key={index} className="border-0 border-b border-dashed border-b-gray-200 shadow-none rounded-none px-0" >
                                <CardContent className="px-0">
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 gap-2">
                                        <h4 className="text-base md:text-lg font-sans font-semibold text-black">{exp.title} <span>- {exp.company}</span></h4>
                                        <Badge variant="outline" className="text-xs font-mono w-fit">
                                            {exp.period}
                                        </Badge>
                                    </div>
                                    <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                                        {exp.description.split('\n').map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>


            </div>
            <div className="grid grid-cols-1">
                <div>
                    <h3 className="text-xl md:text-2xl font-heading font-semibold text-black mt-6">Education(s)</h3>

                    <div className="">
                        {education.map((exp, index) => (
                            <Card key={index} className="border-0 border-b last:border-b-0 border-dashed border-b-gray-200 shadow-none rounded-none px-0" >
                                <CardContent className="px-0">
                                    <h4 className="text-base md:text-lg font-sans font-semibold text-black">Bachelor of Education</h4>
                                    <p className="text-gray-700 text-sm">Graduated at 2018 from Yogyakarta State University</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>


            </div>
        </Section>
    )
}
