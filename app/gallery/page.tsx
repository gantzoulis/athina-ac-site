import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "View photos from training, events, and camp life at Athina AC.",
};

export default function GalleryPage() {
  return (
    <main>
      <h1>Gallery</h1>
      <p>Photos from training, events, and camp life.</p>
    </main>
  );
}