import { type Menu } from "@/lib/types";
import { SOCIALS } from "@/lib/constants";
import { MobileMenu } from "./mobile-menu"
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"

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
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold md:font-extrabold text-black tracking-wide">Jilly <span className="stroke-text font-sans tracking-normal">Ratria</span></h1>
                    </div>
                </div>

                <div className="flex items-center space-x-2 md:space-x-4 pr-8">
                    <div className="hidden sm:flex space-x-2 text-sm font-mono">
                        {
                            SOCIALS.map((social) => (
                                <Tooltip key={social.label}>
                                    <TooltipTrigger asChild>
                                        <a href={social.href} target="_blank">
                                            <span className="text-gray-600 hover:text-black cursor-pointer">{social.label}</span>
                                        </a>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>{social.desc}</p>
                                    </TooltipContent>
                                </Tooltip>

                            ))
                        }


                    </div>

                </div>
            </div>
        </header>
    )
}
