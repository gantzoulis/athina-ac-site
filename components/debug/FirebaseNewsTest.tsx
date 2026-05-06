"use client";

import { useEffect, useState } from "react";
import { getPublishedNews } from "@/lib/news";
import type { NewsPost } from "@/content/news.types";

export default function FirebaseNewsTest() {
  const [posts, setPosts] = useState<NewsPost[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    getPublishedNews(3)
      .then(setPosts)
      .catch((err) => {
        console.error(err);
        setError(err instanceof Error ? err.message : "Unknown error");
      });
  }, []);

  return (
    <div className="rounded-2xl border border-zinc-300 bg-white p-4 text-zinc-900">
      <p className="font-bold">Firebase News Test</p>

      {error ? <p className="mt-2 text-red-600">{error}</p> : null}

      <ul className="mt-3 space-y-2">
        {posts.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <br />
            <span className="text-sm text-zinc-600">{post.excerpt}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}