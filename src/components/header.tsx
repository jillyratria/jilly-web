import { type Menu } from "@/lib/types";
import { MobileMenu } from "./mobile-menu"

type Props = {
    menus: Menu[];
}



export function Header(props: Props) {
    return (
        <header className="w-full">
            <div className="flex items-center justify-between py-4">
                <div className="flex items-center space-x-2">
                    <MobileMenu menus={props.menus} />
                    <div className="flex items-center space-x-2 py-2 md:py-7 lg:order-1">
                        <h1 className="text-2xl md:text-5xl lg:text-7xl font-heading font-bold md:font-extrabold text-black tracking-wide">Jilly <span className="stroke-text font-sans tracking-normal">Ratria</span></h1>
                    </div>
                </div>

                <div className="flex items-center space-x-2 md:space-x-4">
                    <div className="hidden sm:flex space-x-2 text-sm font-mono">
                        <span className="text-gray-600 hover:text-black cursor-pointer">GH</span>
                        <span className="text-gray-600 hover:text-black cursor-pointer">TW</span>
                        <span className="text-gray-600 hover:text-black cursor-pointer">IG</span>
                        <span className="text-gray-600 hover:text-black cursor-pointer">IN</span>
                    </div>
                    <div className="w-6 h-6 md:w-8 md:h-8 bg-black rounded flex items-center justify-center">
                        <div className="grid grid-cols-3 gap-0.5">
                            {Array.from({ length: 9 }).map((_, i) => (
                                <div key={i} className="w-0.5 h-0.5 bg-white rounded-full" />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
