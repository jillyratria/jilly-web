import { PostPreview } from "@/components/blog/post-preview";
import { getAllPosts } from "@/lib/posts";
import { Intro } from "@/components/blog/intro";

export default function BlogPage() {
    const allPosts = getAllPosts();

    return (
        <>
            <Intro />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {allPosts.map((post) => (<PostPreview key={post.slug} post={post} />))}

            </div>
        </>
    );
}