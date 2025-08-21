import './markdown-style.css';

export function PostTitle({ title, author, date }: { title: string, author: string, date: string }) {
    return (
        <>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
                {title}
            </h1>
            <div className="text-sm text-gray-500 mb-6">
                <span>{new Date(date).toLocaleDateString()}</span> |
                <span> by <b>{author}</b></span>
            </div>

        </>

    );
}

export function PostContent({ content }: { content: string }) {
    return (
        <article className="prose lg:prose-xl">
            <div
                className={"markdown"}
                dangerouslySetInnerHTML={{ __html: content }}
            />
        </article>
    );
}