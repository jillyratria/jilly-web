"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { Section } from '@/components/section'

const portfolioItems = [
    { id: 1, category: "professional", image: "/placeholder.svg?height=300&width=400", name: 'ruangbelajar', desc: 'Pre-recorded Edu Platform', href: 'https://app.ruangguru.com/ruangbelajar' },
    { id: 3, category: "professional", image: "/placeholder.svg?height=300&width=400", name: 'ruangkelas', desc: 'Google Classroom for Indonesia', href: "https://kelas.ruangguru.com/" },
    { id: 5, category: "professional", image: "/placeholder.svg?height=300&width=400", name: 'drill-soal', desc: 'Tryout Platform with custome setting', href: 'https://app.ruangguru.com/drill-soal' },
    { id: 2, category: "personal", image: "/placeholder.svg?height=300&width=400", name: "Poly Indonesia", desc: "Poly Indonesia information & blog page", href: 'https://poly-english.id' },
    { id: 4, category: "personal", image: "/placeholder.svg?height=300&width=400", name: 'Spring Talents', desc: "CV Builder & HR Platform", href: "https://springtalents.com/" },
    { id: 6, category: "personal", image: "/placeholder.svg?height=300&width=400", name: 'Kadoin', desc: 'Gift Registry Platform', href: 'https://kadoin-five.vercel.app/' },
]

const categories = ["All", "professional", "personal"]

export function ProjectSection() {
    const [activeCategory, setActiveCategory] = useState("All")

    const filteredItems = portfolioItems.filter(
        (item) => activeCategory === "All" || item.category === activeCategory.toLowerCase(),
    )

    return (
        <Section id="project">
            <h6 className="font-mono font-medium uppercase text-sm tracking-wider relative pt-4 dark:text-white before:content-['//'] before:pr-2 after:content-[attr(data-backdrop-text)] after:absolute after:top-0 after:left-0 after:font-heading after:font-bold after:uppercase after:text-4xl after:opacity-15" data-backdrop-text="Projects">projects</h6>
            <h2 className="text-2xl md:text-4xl font-heading font-bold text-black leading-tight">
                My Latest Works
            </h2>

            <p className="text-gray-600 max-w-3xl text-sm md:text-base mt-4 mb-8 md:mb-12">
                A showcase of my work in two categories: <b>Professional</b> — projects built within organizations, and <b>Personal</b> — freelance and self-initiated projects where I owned the process end-to-end.
            </p>

            <div className="flex flex-wrap gap-2 md:gap-4 mb-4 md:mb-8">
                {categories.map((category) => (
                    <Button
                        key={category}
                        variant="outline"
                        className={cn(
                            "px-4 md:px-6 py-2 rounded-full font-mono text-xs md:text-sm uppercase",
                            activeCategory === category
                                ? "bg-black text-white border-black"
                                : "bg-white text-gray-600 border-gray-300 hover:border-gray-400",
                        )}
                        onClick={() => setActiveCategory(category)}
                    >
                        {category}
                    </Button>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filteredItems.map((item) => (
                    <a key={item.id} href={item.href} target="_blank" className="flex rounded-lg group items-center justify-center relative bg-gray-300 h-48 md:h-64 group hover:bg-black">
                        <div className="flex flex-col px-3">
                            <p className="text-black uppercase bold font-mono group-hover:text-gray-300 text-center" style={{ letterSpacing: '2px' }}>{item.name}</p>
                            <p className="hidden group-hover:block text-gray-300 text-sm text-center">{item.desc}</p>
                        </div>

                        <Badge
                            className={cn(
                                "absolute top-2 md:top-4 right-2 md:right-4 px-2 md:px-3 py-1 text-xs font-mono uppercase",
                                item.category === "professional" ? "bg-gray-400 text-white" : "bg-gray-600 text-white",
                            )}
                        >
                            {item.category}
                        </Badge>

                    </a>
                ))}
            </div>
        </Section>
    )
}
