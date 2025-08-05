import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function AboutSection() {
    return (
        <section className="py-8 md:py-16">
            <div className="mb-6 md:mb-8">
                <p className="text-sm font-mono text-gray-500 mb-4">{'// ABOUT ME'}</p>
                <div className="text-4xl md:text-6xl font-heading font-light text-gray-200 mb-4">ABOUT ME</div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                <div>
                    <h2 className="text-2xl md:text-4xl font-heading font-semibold text-black mb-4 md:mb-6 leading-tight">
                        UI & UX Designer.
                        <br />
                        Photographer
                    </h2>

                    <div className="flex flex-wrap gap-2 md:gap-3 mb-4 md:mb-6">
                        <Badge variant="outline" className="px-3 md:px-4 py-1 md:py-2 text-xs md:text-sm font-mono">
                            📷 Photoshoot(8%)
                        </Badge>
                        <Badge variant="outline" className="px-3 md:px-4 py-1 md:py-2 text-xs md:text-sm font-mono">
                            🎨 Tailwind(9%)
                        </Badge>
                        <Badge variant="outline" className="px-3 md:px-4 py-1 md:py-2 text-xs md:text-sm font-mono">
                            🔍 SEO(8%)
                        </Badge>
                    </div>

                    <Button className="bg-gray-400 hover:bg-gray-500 text-white px-4 md:px-6 py-2 rounded-full mb-6 md:mb-8">
                        Hi
                    </Button>

                    <p className="text-gray-600 leading-relaxed mb-6 md:mb-8 text-sm md:text-base">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
                        <div className="text-center sm:text-left">
                            <div className="text-3xl md:text-4xl font-heading font-bold text-black mb-2">1+</div>
                            <p className="text-xs font-mono text-gray-500 uppercase tracking-wider">YEARS OF EXPERIENCE</p>
                        </div>
                        <div className="text-center sm:text-left">
                            <div className="text-3xl md:text-4xl font-heading font-bold text-black mb-2">2k</div>
                            <p className="text-xs font-mono text-gray-500 uppercase tracking-wider">HOURS OF WORKING</p>
                        </div>
                        <div className="text-center sm:text-left">
                            <div className="text-3xl md:text-4xl font-heading font-bold text-black mb-2">8+</div>
                            <p className="text-xs font-mono text-gray-500 uppercase tracking-wider">PROJECTS DONE</p>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src="/placeholder.svg?height=256&width=256"
                        alt="Christina Gray Profile"
                        className="w-full max-w-[200px] sm:max-w-[256px] h-auto rounded-lg object-cover"
                    />
                </div>
            </div>
        </section>
    )
}
