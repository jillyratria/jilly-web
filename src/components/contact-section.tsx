import { Section } from '@/components/section'
import { BookOpenText, Plane, Newspaper, PencilLine } from 'lucide-react';

export function ContactSection() {
    const contacts = [
        {
            icon: BookOpenText,
            href: "https://www.goodreads.com/user/show/50227031-jilly-ratria",
            caption: "Goodreads – Proof that I do read something other than documentation."
        },
        {
            icon: Plane,
            href: "https://instagram.com/jillyratria",
            caption: "Instagram – Travel snaps, random photos, and the occasional coffee shot."
        },
        {
            icon: Newspaper,
            href: "https://x.com/jillyratria",
            caption: "Twitter – Tech, non-tech, and the occasional hot take (I still call it Twitter)."
        },
        {
            icon: PencilLine,
            href: "/blog",
            caption: "When I have too much in my mind, I write here too"
        }
    ]
    return (
        <Section id="contact" className="pb-5">
            <h6 className="font-mono font-medium uppercase text-sm tracking-wider relative pt-4 dark:text-white before:content-['//'] before:pr-2 after:content-[attr(data-backdrop-text)] after:absolute after:top-0 after:left-0 after:font-heading after:font-bold after:uppercase after:text-4xl after:opacity-15" data-backdrop-text="Say Hello">Say Hello</h6>
            <h2 className="text-2xl md:text-4xl font-heading font-bold text-black leading-tight">
                {"Let's Collaborate"}
            </h2>
            <p className="text-gray-600 max-w-3xl text-sm md:text-base mt-4">
                Have a project in mind, or just want to say hello? Drop me a message at: <a className="font-semibold font-mono transform transition-transform duration-200 hover:scale-105" href="mailto:mail@jilly.web.id">mail@jilly.web.id</a>
            </p>

            <p className="text-gray-600 max-w-3xl text-sm md:text-base mt-6">
                Meanwhile, here’s where you can find me wandering online:
            </p>

            <ul className="list-disc space-y-3 text-gray-600 pl-5 pt-3 text-sm md:text-base">
                {contacts.map((contact) => {
                    const IconComponent = contact.icon;

                    return (
                        <li key={contact.href}>
                            <a
                                className="flex items-center gap-3 px-1 md:px-4 hover:text-black transition-colors duration-200"
                                href={contact.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Visit ${contact.caption.split('–')[0].trim()}`}
                            >
                                <IconComponent className="size-4 shrink-0" aria-hidden="true" />
                                <span>{contact.caption}</span>
                            </a>
                        </li>
                    );
                })}
            </ul>

        </Section>
    )
}
