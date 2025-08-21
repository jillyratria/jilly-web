"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { RectangleEllipsis, X } from "lucide-react"
import { cn } from "@/lib/utils"
import type { Menu } from "@/lib/types"

type Props = {
    menus: Menu[];
}

export function MobileMenu(props: Props) {
    const [activeItem, setActiveItem] = useState("about")
    const [open, setOpen] = useState(false)

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                    <RectangleEllipsis className="h-6 w-6" />
                    <span className="sr-only">Toggle menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-80 bg-black text-white p-0" aria-describedby="Menus" title="Menus">
                <SheetTitle>Menus</SheetTitle>
                <div className="p-8 flex flex-col justify-between flex-1">
                    <div>
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-lg font-heading font-semibold">Menu</h2>
                            <Button variant="ghost" size="icon" onClick={() => setOpen(false)} className="text-white hover:bg-gray-800">
                                <X className="h-5 w-5" />
                            </Button>
                        </div>

                        <nav>
                            <ul className="space-y-6">
                                {Array.isArray(props.menus) && props.menus.length > 0 && props.menus.map((item) => (
                                    <li key={item.id}>
                                        <Button
                                            variant="ghost"
                                            className={cn(
                                                "w-full justify-start text-left font-mono text-sm tracking-wider hover:bg-gray-800 hover:text-white p-4 h-auto uppercase",
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
                    <div className="flex items-center space-x-2 md:space-x-4">
                        <div className="flex space-x-2 text-sm font-mono">
                            <span className="text-gray-600 hover:text-black cursor-pointer">GH</span>
                            <span className="text-gray-600 hover:text-black cursor-pointer">TW</span>
                            <span className="text-gray-600 hover:text-black cursor-pointer">IG</span>
                            <span className="text-gray-600 hover:text-black cursor-pointer">IN</span>
                        </div>

                    </div>


                </div>
            </SheetContent>
        </Sheet>
    )
}
