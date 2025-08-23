// src/lib/posts.ts
import type { Post } from "@/lib/types";
import { posts } from "@/generated/posts.data";

export function getPostSlugs(): string[] {
  // keep compatibility with your previous API
  return posts.map((p) => `${p.slug}.md`);
}

export function getPostBySlug(slug: string): Post | undefined {
  const realSlug = slug.replace(/\.md$/, "");
  return posts.find((p) => p.slug === realSlug) as Post | undefined;
}

export function getAllPosts(): Post[] {
  return [...(posts as unknown as Post[])];
}
