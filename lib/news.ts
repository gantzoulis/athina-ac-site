import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  Timestamp,
  where,
} from "firebase/firestore";
import type { NewsPost, NewsStatus } from "@/content/news.types";
import { db } from "@/lib/firebase";

function timestampToDate(value: unknown): Date | undefined {
  if (value instanceof Timestamp) {
    return value.toDate();
  }

  return undefined;
}

function normalizeStatus(value: unknown): NewsStatus {
  if (value === "published" || value === "draft" || value === "archived") {
    return value;
  }

  return "draft";
}

export async function getPublishedNews(max = 6): Promise<NewsPost[]> {
  const newsQuery = query(
    collection(db, "news"),
    where("status", "==", "published"),
    orderBy("publishedAt", "desc"),
    limit(max)
  );

  const snapshot = await getDocs(newsQuery);

  return snapshot.docs.map((doc) => {
    const data = doc.data();

    return {
      id: doc.id,
      title: String(data.title ?? ""),
      slug: String(data.slug ?? ""),
      excerpt: String(data.excerpt ?? ""),
      content: String(data.content ?? ""),
      coverImageUrl: data.coverImageUrl
        ? String(data.coverImageUrl)
        : undefined,
      status: normalizeStatus(data.status),
      tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
      publishedAt: timestampToDate(data.publishedAt),
      createdAt: timestampToDate(data.createdAt),
      updatedAt: timestampToDate(data.updatedAt),
      social: data.social ?? {},
    };
  });
}