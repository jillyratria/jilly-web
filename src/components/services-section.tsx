import { Card, CardContent } from "@/components/ui/card"
import { Section } from '@/components/section';
import { Code, TrendingUp, Monitor, BrainCircuit, Handshake } from 'lucide-react'
const services = [
    {
        id: "01",
        title: "Web & Mobile Development",
        description: "From MVPs to production-ready apps, built to your needs",
        icon: <Code />
    },
    {
        id: "02",
        title: "Performance Optimization",
        description: "Reduce load times and improve Core Web Vitals",
        icon: <TrendingUp />
    },
    {
        id: "03",
        title: "UI/UX Implementation",
        description: "Transform designs into responsive, accessible, and pixel-perfect interfaces",
        icon: <Monitor />
    },
    {
        id: "04",
        title: "Technical Consulting",
        description: "Help you make smart tech decisions and avoid costly mistakes",
        icon: <BrainCircuit />
    },
    {
        id: "05",
        title: "Project Collaboration",
        description: "Bring me in to solve hard problems and push innovative ideas forward",
        icon: <Handshake />
    },
]


export function ServicesSection() {
    return (
        <Section id="services" className="pb-5">
            <h6 className="font-mono font-medium uppercase text-sm tracking-wider relative pt-4 dark:text-white before:content-['//'] before:pr-2 after:content-[attr(data-backdrop-text)] after:absolute after:top-0 after:left-0 after:font-heading after:font-bold after:uppercase after:text-4xl after:opacity-15" data-backdrop-text="Services">Services</h6>
            <h2 className="text-2xl md:text-4xl font-heading font-bold text-black leading-tight">
                What I Do
            </h2>
            <p className="text-gray-600 max-w-3xl text-sm md:text-base mt-4 mb-8 md:mb-12">
                I partner with individuals, startups, and businesses to build modern, scalable web solutions, focusing on project-based and collaborative work that challenges me creatively and technically.
            </p>

            <div className="flex flex-col space-y-4">
                {
                    services.map((service) => {
                        return <div key={service.id} className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 border-b border-gray-300 pb-4 last:border-0 border-dashed">
                            <p className="font-mono font-semibold text-3xl md:text-4xl stroke-text">{service.id}</p>
                            <div className="flex md:pl-4 md:flex-col items-center md:items-start gap-4 md:gap-1 md:min-w-[280px]">
                                {service.icon}
                                <p className="font-mono font-semibold">{service.title}</p>

                            </div>
                            <p className="text-gray-600 text-sm md:text-base">
                                {service.description}
                            </p>

                        </div>
                    })
                }
            </div>
        </Section>
    )
}
