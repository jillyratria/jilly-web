import type { Metadata } from "next";
import { Header } from "@/components/header";
import { MENUITEMS } from "@/lib/constants"


export const metadata: Metadata = {
    title: `Blog | Jilly Ratria`,
    description: `A statically generated blog by Jilly Ratria`,
};

export default function BlogLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <main className="min-h-screen container max-w-[1320px] mx-auto px-5 xl:px-3">
            <Header menus={MENUITEMS} />
            <div className="space-y-6 pb-12">
                {children}
            </div>
        </main>
    )
}
