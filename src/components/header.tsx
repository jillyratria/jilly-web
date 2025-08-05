import { MobileMenu } from "./mobile-menu"

export function Header() {
    return (
        <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
            <div className="flex items-center justify-between px-4 md:px-8 py-4">
                <div className="flex items-center space-x-2">
                    <MobileMenu />
                    <div className="flex items-center space-x-2">
                        <h1 className="text-xl md:text-2xl font-heading font-bold text-black">JILLY</h1>
                        <span className="text-xl md:text-2xl font-heading font-light text-gray-400">RATRIA</span>
                    </div>
                </div>

                <div className="flex items-center space-x-2 md:space-x-4">
                    <div className="hidden sm:flex space-x-2 text-sm font-mono">
                        <span className="text-gray-600 hover:text-black cursor-pointer">FB</span>
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
