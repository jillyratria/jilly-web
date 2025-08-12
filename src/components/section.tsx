type SectionProps = {
    id: string;
    children: React.ReactNode;
    className?: string;
}
export function Section(props: SectionProps) {
    return <section id={props.id} className={"bg-white p-6 md:px-8 md:py-10 lg:px-12 rounded-2xl " + props.className} style={{
        boxShadow: '0 8px 26px 0 rgba(22,24,26,.07)',
    }}>
        {props.children}
    </section>
}