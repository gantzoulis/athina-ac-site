import type { Metadata } from "next";
import WomensEmpowermentPageContent from "@/components/pages/WomensEmpowermentPageContent";

export const metadata: Metadata = {
  title: "Women’s Empowerment",
  description: "Women’s Empowerment στον Α.Σ. Αθηνά.",
};

export default function WomensEmpowermentPage() {
  return <WomensEmpowermentPageContent />;
}