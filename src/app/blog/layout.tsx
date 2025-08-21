import type { Metadata } from "next";
import { Intro } from "@/components/blog/intro";

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
        <main className="min-h-screen bg-white">
            <div className="container max-w-4xl mx-auto px-4 py-8">
                {children}
            </div>
        </main>
    )
}
