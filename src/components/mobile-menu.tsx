"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X } from "lucide-react"
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

export function MobileMenu() {
    const [activeItem, setActiveItem] = useState("about")
    const [open, setOpen] = useState(false)

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-80 bg-black text-white p-0">
                <div className="p-8">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-lg font-heading font-semibold">Menu</h2>
                        <Button variant="ghost" size="icon" onClick={() => setOpen(false)} className="text-white hover:bg-gray-800">
                            <X className="h-5 w-5" />
                        </Button>
                    </div>

                    <nav>
                        <ul className="space-y-6">
                            {menuItems.map((item) => (
                                <li key={item.id}>
                                    <Button
                                        variant="ghost"
                                        className={cn(
                                            "w-full justify-start text-left font-mono text-sm tracking-wider hover:bg-gray-800 hover:text-white p-4 h-auto",
                                            activeItem === item.id ? "text-white bg-gray-800" : "text-gray-400",
                                        )}
                                        onClick={() => {
                                            setActiveItem(item.id)
                                            setOpen(false)
                                        }}
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
            </SheetContent>
        </Sheet>
    )
}
