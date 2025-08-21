import type { Post } from "@/lib/types";
export function PostPreview({ post }: { post: Post }) {
    return (
        <article className={"bg-white p-6 md:px-8 md:py-10 lg:px-12 rounded-2xl"} style={{
            boxShadow: '0 8px 26px 0 rgba(22,24,26,.07)',
        }}>
            <h2 className="text-2xl font-bold mb-2 font-heading">
                <a href={`/blog/${post.slug}`}>{post.title}</a>
            </h2>
            <p className="text-gray-600 mb-4">{post.excerpt}</p>
            <div className="text-sm text-gray-500">
                <span>{new Date(post.date).toLocaleDateString()}</span> |
                <span> by {post.author}</span>
            </div>
        </article>
    );


}