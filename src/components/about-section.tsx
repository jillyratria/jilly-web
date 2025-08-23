import { Section } from "./section"

export function AboutSection() {
    return (
        <Section id="about">
            <div className="flex flex-col md:flex-row md:gap-6 lg:gap-10">
                <picture >
                    <source type="image/webp" srcSet="/jilly.webp" />
                    <source type="image/jpeg" srcSet="/jilly.jpg" />
                    <img src="jilly.jpg" alt="Jilly Ratria" className="size-40 md:size-64" style={{
                        borderRadius: '50%',
                    }} />
                </picture>

                <div className="flex-1 space-y-3 md:space-y-4">
                    <h6 className="font-mono font-medium uppercase text-sm tracking-wider relative pt-4 dark:text-white before:content-['//'] before:pr-2 after:content-[attr(data-backdrop-text)] after:absolute after:top-0 after:left-0 after:font-heading after:font-bold after:uppercase after:text-4xl after:opacity-15" data-backdrop-text="About Me">About Me</h6>
                    <h2 className="text-2xl md:text-4xl font-heading font-bold text-black leading-tight">
                        Software Engineer
                        <br />
                        {'(Front-end)'}
                    </h2>
                    <div>
                        <p className="font-sans text-sm md:text-base text-gray-600">
                            Senior engineer with over 9 years of experience building intuitive, high-performance web applications — from scalable platforms serving millions to custom tools for niche needs. I combine deep expertise in <b>Next.js</b>, <b>React</b>, and <b>TypeScript</b> with product thinking to deliver measurable results.
                        </p>
                    </div>
                </div>


            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 mt-8">
                <div className="flex gap-2">
                    <p className="font-mono font-semibold text-6xl stroke-text">
                        9
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
