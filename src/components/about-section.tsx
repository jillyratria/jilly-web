// import { Badge } from "@/components/ui/badge"
import { Section } from "./section"

export function AboutSection() {
    return (
        <Section id="about">
            <div className="flex flex-col md:flex-row md:gap-6 lg:gap-10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src="/jilly.jpg?height=256&width=256"
                    alt="Jilly Ratria Profile"
                    style={{
                        height: '256px',
                        width: '256px',
                        borderRadius: '50%'
                    }}
                />
                <div className="flex-1 space-y-3 md:space-y-4">
                    <h6 className="font-mono font-medium uppercase text-sm tracking-wider relative pt-4 dark:text-white before:content-['//'] before:pr-2 after:content-[attr(data-backdrop-text)] after:absolute after:top-0 after:left-0 after:font-heading after:font-bold after:uppercase after:text-4xl after:opacity-15" data-backdrop-text="About Me">About Me</h6>
                    <h2 className="text-2xl md:text-4xl font-heading font-bold text-black leading-tight">
                        Software Engineer
                        <br />
                        {'(Front-end)'}
                    </h2>
                    {/* <div className="flex flex-wrap gap-2 md:gap-3">
                        <Badge variant="outline" className="px-3 md:px-4 py-1 md:py-2 text-xs md:text-sm font-mono">
                            📷 Photoshoot(8%)
                        </Badge>
                        <Badge variant="outline" className="px-3 md:px-4 py-1 md:py-2 text-xs md:text-sm font-mono">
                            🎨 Tailwind(9%)
                        </Badge>
                        <Badge variant="outline" className="px-3 md:px-4 py-1 md:py-2 text-xs md:text-sm font-mono">
                            🔍 SEO(8%)
                        </Badge>
                    </div> */}
                    <div>
                        <p className="font-sans text-sm md:text-base text-gray-600">
                            Senior engineer with 9+ years building scalable edtech platforms for millions of users. Combines deep technical expertise (React, TypeScript, WordPress) with product thinking to deliver 30%+ efficiency gains and 25% traffic growth. Passionate about mentoring teams, optimizing UX, and bridging engineering-product gaps.
                        </p>
                    </div>
                </div>


            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 mt-8">
                <div className="flex gap-2">
                    <p className="font-mono font-semibold text-6xl stroke-text">
                        10
                    </p>
                    <div>
                        <p className="block text-2xl font-sans">+</p>
                        <p className="font-mono font-medium text-sm uppercase tracking-[0.5px]">Years of Experience</p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <p className="font-mono font-semibold text-6xl stroke-text">
                        20
                    </p>
                    <div>
                        <p className="block text-2xl font-sans">k</p>
                        <p className="font-mono font-medium text-sm uppercase tracking-[0.5px]">Hours of Working</p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <p className="font-mono font-semibold text-6xl stroke-text">
                        20
                    </p>
                    <div>
                        <p className="block text-2xl font-sans">+</p>
                        <p className="font-mono font-medium text-sm uppercase tracking-[0.5px]">Projects Done</p>
                    </div>
                </div>

            </div>
        </Section>
    )
}
