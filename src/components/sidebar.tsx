"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"

const menuItems = [
    { id: "about", label: "ABOUT ME", active: true, href: "#about" },
    { id: "portfolio", label: "PORTFOLIO", href: "#portfolio" },
    { id: "services", label: "SERVICES", href: "#services" },
    { id: "testimonial", label: "TESTIMONIAL", href: "#" },
    { id: "experience", label: "EXPERIENCE", href: "#experience" },
    { id: "blog", label: "BLOG", href: "#blog" },
    { id: "contact", label: "CONTACT", href: "#about" },
]

export function Sidebar() {
    const [activeItem, setActiveItem] = useState("about")

    return (
        <div className="z-10 sticky top-2 lg:top-6 lg:h-fit">
            <nav className="bg-black/90 backdrop-blur-[5px] rounded-lg px-4 py-3 lg:bg-black lg:px-4 lg:py-6 xl:px-10 xl:py-7 lg:backdrop-blur-none max-w-full md:w-[280px]">
                <ul className="font-mono font-normal uppercase text-sm tracking-wider text-center lg:text-left space-x-4 lg:space-x-0">
                    {menuItems.map((item) => (
                        <li key={item.id} className="list-none inline-block lg:block">
                            <Link href={item.href}>
                                <Button
                                    variant="ghost"
                                    className={cn(
                                        "w-full justify-start text-left font-mono text-sm tracking-wider hover:text-white h-auto py-3 px-0 hover:bg-transparent cursor-pointer",
                                        activeItem === item.id ? "text-white" : "text-gray-400",
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
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}
