"use client";

import { addDoc, collection, serverTimestamp, Timestamp } from "firebase/firestore";
import { useState } from "react";
import { db } from "@/lib/firebase";
import RequireAdmin from "@/components/admin/RequireAdmin";

function createSlug(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[ά]/g, "α")
    .replace(/[έ]/g, "ε")
    .replace(/[ή]/g, "η")
    .replace(/[ίϊΐ]/g, "ι")
    .replace(/[ό]/g, "ο")
    .replace(/[ύϋΰ]/g, "υ")
    .replace(/[ώ]/g, "ω")
    .replace(/[^a-z0-9α-ω]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export default function NewNewsPage() {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [coverImageUrl, setCoverImageUrl] = useState("");
  const [tags, setTags] = useState("");
  const [status, setStatus] = useState<"draft" | "published">("draft");
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [coverImageFile, setCoverImageFile] = useState<File | null>(null);
  const [uploadingImage, setUploadingImage] = useState(false);

  async function uploadCoverImage(file: File) {
    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
    const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;

    if (!cloudName || !uploadPreset) {
      throw new Error("Cloudinary config is missing.");
    }

    const formData = new FormData();

    formData.append("file", file);
    formData.append("upload_preset", uploadPreset);

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error("Cloudinary upload error:", data);
      throw new Error("Image upload failed.");
    }

    return String(data.secure_url);
  }


  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setMessage("");

    try {
      const finalSlug = slug || createSlug(title);

      let finalCoverImageUrl = coverImageUrl;

      if (coverImageFile) {
        setUploadingImage(true);
        finalCoverImageUrl = await uploadCoverImage(coverImageFile);
        setUploadingImage(false);
      }

      await addDoc(collection(db, "news"), {
        title,
        slug: finalSlug,
        excerpt,
        content,
        coverImageUrl:finalCoverImageUrl,
        tags: tags
          .split(",")
          .map((tag) => tag.trim())
          .filter(Boolean),
        status,
        publishedAt: status === "published" ? Timestamp.now() : null,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
        social: {
          facebookPostUrl: "",
          instagramPostUrl: "",
          tiktokUrl: "",
          youtubeUrl: "",
        },
      });

      setMessage("Το νέο αποθηκεύτηκε επιτυχώς.");
      setTitle("");
      setSlug("");
      setExcerpt("");
      setContent("");
      //setCoverImageUrl("");
      setCoverImageFile(null);
      setTags("");
      setStatus("draft");
    } catch (error) {
      console.error(error);
      setMessage("Κάτι πήγε στραβά στην αποθήκευση.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <RequireAdmin>
    <main className="min-h-screen bg-zinc-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm uppercase tracking-[0.25em] text-brand-primary">
          Admin
        </p>

        <h1 className="mt-3 text-4xl font-bold">Νέο άρθρο / ανακοίνωση</h1>

        <form
          onSubmit={handleSave}
          className="mt-10 space-y-5 rounded-3xl border border-zinc-800 bg-zinc-900/60 p-6"
        >
          <input
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              setSlug(createSlug(e.target.value));
            }}
            placeholder="Τίτλος"
            required
            className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-sm"
          />

          <input
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            placeholder="Slug"
            required
            className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-sm"
          />

          <textarea
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
            placeholder="Σύντομη περιγραφή"
            required
            rows={3}
            className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-sm"
          />

          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Κείμενο άρθρου"
            required
            rows={8}
            className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-sm"
          />

          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-300">
              Cover image upload
            </label>

            <input
              type="file"
              accept="image/*"
              placeholder="Ανέβασμα Αρχείου"
              onChange={(e) => {
                setCoverImageFile(e.target.files?.[0] ?? null);
              }}
              className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-sm"
            />
          </div>

          <input
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            placeholder="Tags χωρισμένα με κόμμα π.χ. school, camp"
            className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-sm"
          />

          <div className="space-y-2">
            <label
                htmlFor="news-status"
                className="text-sm font-medium text-zinc-300"
            >
                Status
            </label>

                <select
                    id="news-status"
                    value={status}
                    onChange={(e) => {
                    setStatus(e.target.value as "draft" | "published")
                    }}
                    className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-sm"
                >
                    <option value="draft">Draft</option>
                    <option value="published">Published</option>
                </select>
            </div>

          <button
            type="submit"
            disabled={saving || uploadingImage}
            className="w-full rounded-2xl bg-white px-5 py-3 font-semibold text-zinc-950 transition hover:bg-zinc-200 disabled:opacity-60"
          >
            {saving || uploadingImage ? "Αποθήκευση..." : "Αποθήκευση"}
          </button>

          {message ? <p className="text-sm text-zinc-300">{message}</p> : null}
        </form>
      </div>
    </main>
    </RequireAdmin>
  );
}