export type Menu = {
  id: string;
  label: string;
  href: string;
  active?: boolean;
};

export type Social = {
  desc: string;
  label: string;
  href: string;
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
