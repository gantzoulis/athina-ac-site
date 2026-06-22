import {
  collection,
  doc,
  getDoc,
  updateDoc,
  serverTimestamp,
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

export async function getPublishedNewsBySlug(
  slug: string
): Promise<NewsPost | null> {
  const newsQuery = query(
    collection(db, "news"),
    where("status", "==", "published"),
    where("slug", "==", slug),
    limit(1)
  );

  const snapshot = await getDocs(newsQuery);

  if (snapshot.empty) {
    return null;
  }

  const doc = snapshot.docs[0];
  const data = doc.data();

  return {
    id: doc.id,
    title: String(data.title ?? ""),
    slug: String(data.slug ?? ""),
    excerpt: String(data.excerpt ?? ""),
    content: String(data.content ?? ""),
    coverImageUrl: data.coverImageUrl ? String(data.coverImageUrl) : undefined,
    status: normalizeStatus(data.status),
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    publishedAt: timestampToDate(data.publishedAt),
    createdAt: timestampToDate(data.createdAt),
    updatedAt: timestampToDate(data.updatedAt),
    social: data.social ?? {},
  };
}

export async function getAllNews(max = 50): Promise<NewsPost[]> {
  const newsQuery = query(
    collection(db, "news"),
    orderBy("createdAt", "desc"),
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
      coverImageUrl: data.coverImageUrl ? String(data.coverImageUrl) : undefined,
      status: normalizeStatus(data.status),
      tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
      publishedAt: timestampToDate(data.publishedAt),
      createdAt: timestampToDate(data.createdAt),
      updatedAt: timestampToDate(data.updatedAt),
      social: data.social ?? {},
    };
  });
}

export async function getNewsById(id: string): Promise<NewsPost | null> {
  const ref = doc(db, "news", id);
  const snapshot = await getDoc(ref);

  if (!snapshot.exists()) {
    return null;
  }

  const data = snapshot.data();

  return {
    id: snapshot.id,
    title: String(data.title ?? ""),
    slug: String(data.slug ?? ""),
    excerpt: String(data.excerpt ?? ""),
    content: String(data.content ?? ""),
    coverImageUrl: data.coverImageUrl ? String(data.coverImageUrl) : undefined,
    status: normalizeStatus(data.status),
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    publishedAt: timestampToDate(data.publishedAt),
    createdAt: timestampToDate(data.createdAt),
    updatedAt: timestampToDate(data.updatedAt),
    social: data.social ?? {},
  };
}

export async function updateNewsPost(
  id: string,
  data: {
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    coverImageUrl?: string;
    tags: string[];
    status: "draft" | "published";
  }
) {
  const ref = doc(db, "news", id);

  await updateDoc(ref, {
    ...data,
    updatedAt: serverTimestamp(),
  });
}