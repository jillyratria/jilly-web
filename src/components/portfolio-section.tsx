"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { Section } from '@/components/section'

const portfolioItems = [
    { id: 1, category: "branding", image: "/placeholder.svg?height=300&width=400" },
    { id: 2, category: "mockup", image: "/placeholder.svg?height=300&width=400" },
    { id: 3, category: "branding", image: "/placeholder.svg?height=300&width=400" },
    { id: 4, category: "mockup", image: "/placeholder.svg?height=300&width=400" },
    { id: 5, category: "branding", image: "/placeholder.svg?height=300&width=400" },
    { id: 6, category: "mockup", image: "/placeholder.svg?height=300&width=400" },
]

const categories = ["Show All", "Branding", "Mockup"]

export function PortfolioSection() {
    const [activeCategory, setActiveCategory] = useState("Show All")

    const filteredItems = portfolioItems.filter(
        (item) => activeCategory === "Show All" || item.category === activeCategory.toLowerCase(),
    )

    return (
        <Section id="portfolio">
            <div className="mb-6 md:mb-8">
                <p className="text-sm font-mono text-gray-500 mb-4">{'// PORTFOLIO'}</p>
                <div className="text-4xl md:text-6xl font-heading font-light text-gray-200 mb-4">PORTFOLIO</div>
            </div>

            <div className="mb-8 md:mb-12">
                <h2 className="text-2xl md:text-4xl font-heading font-semibold text-black mb-4">My Latest Works</h2>
                <p className="text-gray-600 max-w-2xl text-sm md:text-base">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                </p>
            </div>

            <div className="flex flex-wrap gap-2 md:gap-4 mb-8 md:mb-12">
                {categories.map((category) => (
                    <Button
                        key={category}
                        variant="outline"
                        className={cn(
                            "px-4 md:px-6 py-2 rounded-full font-mono text-xs md:text-sm",
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
                    <div key={item.id} className="group relative overflow-hidden rounded-lg">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={item.image || "/placeholder.svg"}
                            alt={`Portfolio item ${item.id}`}
                            className="w-full h-48 md:h-64 object-cover transition-transform group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all" />
                        <Badge
                            className={cn(
                                "absolute top-2 md:top-4 right-2 md:right-4 px-2 md:px-3 py-1 text-xs font-mono uppercase",
                                item.category === "branding" ? "bg-gray-400 text-white" : "bg-gray-600 text-white",
                            )}
                        >
                            {item.category}
                        </Badge>
                    </div>
                ))}
            </div>
        </Section>
    )
}
