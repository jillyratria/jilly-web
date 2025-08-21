import { Intro } from "@/components/blog/intro";
import { PostPreview } from "@/components/blog/post-preview";
import { getAllPosts } from "@/lib/api";

export default function BlogPage() {
    const allPosts = getAllPosts();
    console.log("All Posts:", allPosts);

    return (
        <div className="min-h-screen">
            <div className="container mx-auto px-4 py-8">
                <Intro />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {allPosts.map((post) => (<PostPreview key={post.slug} post={post} />))}

                </div>


            </div>
        </div>
    );
}