"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const menuItems = [
    { id: "about", label: "ABOUT ME", active: true },
    { id: "portfolio", label: "PORTFOLIO" },
    { id: "services", label: "SERVICES" },
    { id: "testimonial", label: "TESTIMONIAL" },
    { id: "resume", label: "RESUME" },
    { id: "blog", label: "BLOG" },
    { id: "contact", label: "CONTACT" },
]

export function Sidebar() {
    const [activeItem, setActiveItem] = useState("about")

    return (
        <div className="hidden md:block w-80 bg-black text-white p-8 min-h-[600px]">
            <nav className="mt-8">
                <ul className="space-y-6">
                    {menuItems.map((item) => (
                        <li key={item.id}>
                            <Button
                                variant="ghost"
                                className={cn(
                                    "w-full justify-start text-left font-mono text-sm tracking-wider hover:bg-gray-800 hover:text-white p-4 h-auto",
                                    activeItem === item.id ? "text-white bg-gray-800" : "text-gray-400",
                                )}
                                onClick={() => setActiveItem(item.id)}
                            >
                                {item.label}
                                {activeItem === item.id && (
                                    <div className="ml-auto">
                                        <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                                    </div>
                                )}
                            </Button>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}
