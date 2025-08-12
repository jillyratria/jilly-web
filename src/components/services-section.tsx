import { Card, CardContent } from "@/components/ui/card"
import { Section } from '@/components/section'
const services = [
    {
        title: "Web & Mobile Development",
        description: "From MVPs to production-ready apps, built to your needs",
        icon: "🎨",
    },
    {
        title: "Web Performance Optimization",
        description: "Reduce load times and improve Core Web Vitals",
        icon: "💻",
    },
    {
        title: "UI/UX Implementation",
        description: "Transform designs into responsive, accessible, and pixel-perfect interfaces",
        icon: "📸",
    },
    {
        title: "Technical Consulting",
        description: "Help you make smart tech decisions and avoid costly mistakes",
        icon: "🎯",
    },
    {
        title: "Project Collaboration",
        description: "Bring me in to solve hard problems and push innovative ideas forward",
        icon: "💡",
    },
]

export function ServicesSection() {
    return (
        <Section id="services">
            <h6 className="font-mono font-medium uppercase text-sm tracking-wider relative pt-4 dark:text-white before:content-['//'] before:pr-2 after:content-[attr(data-backdrop-text)] after:absolute after:top-0 after:left-0 after:font-heading after:font-bold after:uppercase after:text-4xl after:opacity-15" data-backdrop-text="Services">Services</h6>
            <h2 className="text-2xl md:text-4xl font-heading font-bold text-black leading-tight">
                What I Do
            </h2>
            <p className="text-gray-600 max-w-3xl text-sm md:text-base mt-4 mb-8 md:mb-12">
                I partner with individuals, startups, and businesses to build modern, scalable web solutions. I’m not looking for a full-time role but am open to <b>collaborating on exciting, challenging projects.</b>
            </p>



            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {services.map((service, index) => (
                    <Card key={index} className="border border-gray-200 hover:shadow-lg transition-shadow">
                        <CardContent className="p-4 md:p-6">
                            <div className="text-2xl md:text-3xl mb-3 md:mb-4">{service.icon}</div>
                            <h3 className="text-lg md:text-xl font-heading font-semibold text-black mb-2 md:mb-3">{service.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </Section>
    )
}
