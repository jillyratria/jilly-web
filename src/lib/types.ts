export type Menu = {
  id: string;
  label: string;
  href: string;
  active?: boolean;
};

export type Post = {
  slug: string;
  title: string;
  date: string;
  coverImage?: string;
  author: string;
  excerpt: string;
  content: string;
  preview?: boolean;
};
