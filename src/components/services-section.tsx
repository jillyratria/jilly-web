import { Card, CardContent } from "@/components/ui/card"
import { Section } from '@/components/section'
const services = [
    {
        title: "UI/UX Design",
        description: "Creating intuitive and engaging user interfaces with modern design principles",
        icon: "🎨",
    },
    {
        title: "Web Development",
        description: "Building responsive and performant websites using latest technologies",
        icon: "💻",
    },
    {
        title: "Photography",
        description: "Professional photography services for portraits, events, and commercial projects",
        icon: "📸",
    },
    {
        title: "Branding",
        description: "Complete brand identity design including logos, color schemes, and guidelines",
        icon: "🎯",
    },
    {
        title: "Consultation",
        description: "Strategic design consultation to help improve your digital presence",
        icon: "💡",
    },
    {
        title: "Prototyping",
        description: "Interactive prototypes to validate design concepts before development",
        icon: "🔧",
    },
]

export function ServicesSection() {
    return (
        <Section id="services">
            <div className="mb-6 md:mb-8">
                <p className="text-sm font-mono text-gray-500 mb-4">{'// SERVICES'}</p>
                <div className="text-4xl md:text-6xl font-heading font-light text-gray-200 mb-4">SERVICES</div>
            </div>

            <div className="mb-8 md:mb-12">
                <h2 className="text-2xl md:text-4xl font-heading font-semibold text-black mb-4">What I Do</h2>
                <p className="text-gray-600 max-w-2xl text-sm md:text-base">
                    I offer a comprehensive range of design and development services to help bring your vision to life.
                </p>
            </div>

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
