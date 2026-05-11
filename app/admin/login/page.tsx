"use client";

import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { auth } from "@/lib/firebase-auth";

export default function AdminLoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      await signInWithEmailAndPassword(auth, email, password);

      router.push("/admin/news/new");
    } catch (err) {
      console.error(err);
      setError("Λάθος στοιχεία σύνδεσης.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-950 px-6 text-white">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md space-y-5 rounded-3xl border border-zinc-800 bg-zinc-900 p-8"
      >
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-brand-primary">
            Admin
          </p>

          <h1 className="mt-2 text-3xl font-bold">
            Σύνδεση
          </h1>
        </div>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-2xl bg-white px-5 py-3 font-semibold text-black"
        >
          {loading ? "Σύνδεση..." : "Σύνδεση"}
        </button>

        {error ? (
          <p className="text-sm text-red-400">
            {error}
          </p>
        ) : null}
      </form>
    </main>
  );
}