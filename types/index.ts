export interface SimplePost {
  title: string;
  uri: string;
}

export interface CategoriesPost {
  name: string;
  count: number;
  slug: string;
}

export type PropsLayout = {
  ogTitle: string;
  ogDescription: string;
  ogImageUrl?: string;
  ogOriginalUrl?: string;
  ogKeywords?: string;
  children?: JSX.Element | JSX.Element[];
};

export interface PropsPost extends SimplePost {
  date: Date;
  content: string;
  excerpt: string;
  featuredImage: {
    node: {
      sourceUrl: string;
    };
  };
  seo?: {
    description?: string;
    keywords?: string;
    title?: string;
  };
}