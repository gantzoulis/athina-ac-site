export type NewsStatus = "draft" | "published" | "archived";

export type NewsPost = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImageUrl?: string;
  status: NewsStatus;
  tags: string[];
  publishedAt?: Date;
  createdAt?: Date;
  updatedAt?: Date;
  social?: {
    facebookPostUrl?: string;
    instagramPostUrl?: string;
    tiktokUrl?: string;
    youtubeUrl?: string;
  };
};