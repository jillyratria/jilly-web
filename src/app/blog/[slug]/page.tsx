import { PostTitle, PostContent } from "@/components/blog/post";
import { Section } from "@/components/section";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import markdownToHtml from "@/lib/markdownToHtml";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export default async function PostDetailPage(props: Params) {

    const params = await props.params;

    const post = getPostBySlug(params.slug);

    if (!post) {
        return notFound();
    }

    const content = await markdownToHtml(post.content || "");

    return <Section id="blog-detail">
        <PostTitle title={post.title} author="Jilly" date={post.date} />
        <PostContent content={content} />
    </Section>;
}

type Params = {
    params: Promise<{
        slug: string;
    }>;
};

export async function generateMetadata(props: Params): Promise<Metadata> {
    const params = await props.params;
    const post = getPostBySlug(params.slug);

    if (!post) {
        return notFound();
    }

    const title = `${post.title} | Blog by Jilly Ratria`;

    return {
        title,
        openGraph: {
            title,
        },
    };
}

export async function generateStaticParams() {
    const posts = getAllPosts();

    return posts.map((post) => ({
        slug: post.slug,
    }));
}