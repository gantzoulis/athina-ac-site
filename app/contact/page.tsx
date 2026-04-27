"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const schoolAddress = "Αγίας Φωτεινής, 33 Νέα Σμύρνη";
  const googleMapsUrl = "https://maps.app.goo.gl/WDW3X2dWvLJsen5Q7";
  const googleMapsEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d786.5589655350686!2d23.712176489610524!3d37.94827839589859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bc525e4ec4ef%3A0xd1824cd4b343dc07!2sAgias%20Fotinis%2033%2C%20Athina%20171%2021!5e0!3m2!1sen!2sgr!4v1777194101807!5m2!1sen!2sgr";

  const formInfo = {
    telephone1: " +30 695 519 4933",
    telephone2: " +30 697 014 2125",
    email: "info@athina-ac.gr",
    instagramProfile: "@athina.ac",
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e: React.FormEvent) {
  e.preventDefault();

  if (!form.name || !form.email || !form.message) {
    alert("Συμπληρώστε όλα τα πεδία");
    return;
  }

  setLoading(true);
  setSuccess(false);

  try {
    const response = await fetch("https://api.athina-ac.gr/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Αποτυχία αποστολής");
    }

    setSuccess(true);
    setForm({
      name: "",
      email: "",
      message: "",
    });
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Παρουσιάστηκε σφάλμα κατά την αποστολή.";

    alert(message);
  } finally {
    setLoading(false);
  }
}

  return (
    <main className="min-h-[70vh] bg-zinc-950 text-white">
      <div className="mx-auto max-w-4xl px-6 py-24">
        <div className="max-w-2xl space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-primary">
            Contact
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Επικοινωνήστε μαζί μας
          </h1>

          <p className="text-lg leading-8 text-zinc-300">
            Στείλτε μας μήνυμα και θα επικοινωνήσουμε μαζί σας το συντομότερο δυνατό.
          </p>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-2">
          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="space-y-5 rounded-3xl border border-zinc-800 bg-zinc-900/60 p-6"
          >
            <input
              type="text"
              name="name"
              placeholder="Όνομα"
              value={form.name}
              onChange={handleChange}
              className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:border-brand-primary focus:outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:border-brand-primary focus:outline-none"
            />

            <textarea
              name="message"
              placeholder="Μήνυμα"
              value={form.message}
              onChange={handleChange}
              rows={5}
              className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:border-brand-primary focus:outline-none"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-200 disabled:opacity-60"
            >
              {loading ? "Αποστολή..." : "Αποστολή μηνύματος"}
            </button>

            {success && (
              <p className="text-sm text-green-400">
                Το μήνυμα στάλθηκε επιτυχώς!
              </p>
            )}
          </form>

          {/* INFO */}
          <div className="space-y-4 text-zinc-300">
            <div>
              <p className="text-sm text-zinc-500">Τηλέφωνα Επικοινωνίας</p>
              <p className="text-white font-medium">{formInfo.telephone1} | {formInfo.telephone2} </p>
            </div>

            <div>
              <p className="text-sm text-zinc-500">Email</p>
              <p className="text-white font-medium">{formInfo.email}</p>
            </div>

            <div>
              <p className="text-sm text-zinc-500">Instagram</p>
              <p className="text-white font-medium">{formInfo.instagramProfile}</p>
            </div>
          </div>
        </div>
        <section className="mt-16 rounded-3xl border border-zinc-800 bg-zinc-900/60 p-6">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-primary">
                Location
              </p>

              <h2 className="text-3xl font-bold tracking-tight text-white">
                Πού θα μας βρείτε
              </h2>

              <p className="leading-8 text-zinc-300">
                Η σχολή μας βρίσκεται στη διεύθυνση:
              </p>

              <p className="font-semibold text-white">{schoolAddress}</p>

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-200"
              >
                Οδηγίες στο Google Maps
              </a>
            </div>

            <div className="overflow-hidden rounded-3xl border border-zinc-800">
              <iframe
                src={googleMapsEmbedUrl}
                className="h-80 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}