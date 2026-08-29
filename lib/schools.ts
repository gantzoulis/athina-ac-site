import {
  collection,
  getDocs,
  orderBy,
  query,
  where,
} from "firebase/firestore";

import { db } from "@/lib/firebase";

export type PublicSchool = {
  id: string;
  name: string;
  slug: string;
  city: string;
  address: string;
  phone: string;
  email: string;
  description: string;
  imageUrl: string;
  websiteUrl: string;
  mapUrl: string;
  active: boolean;
  featured: boolean;
  order: number;
};

export async function getFeaturedSchools(): Promise<PublicSchool[]> {
  const schoolsQuery = query(
    collection(db, "schools"),
    where("active", "==", true),
    where("featured", "==", true),
    orderBy("order", "asc")
  );

  const snapshot = await getDocs(schoolsQuery);

  return snapshot.docs.map((document) => ({
    id: document.id,
    ...document.data(),
  })) as PublicSchool[];
}

export async function getActiveSchools(): Promise<PublicSchool[]> {
  const schoolsQuery = query(
    collection(db, "schools"),
    where("active", "==", true),
    orderBy("order", "asc")
  );

  const snapshot = await getDocs(schoolsQuery);

  return snapshot.docs.map((document) => ({
    id: document.id,
    ...document.data(),
  })) as PublicSchool[];
}

export async function getActiveSchoolBySlug(
  slug: string
): Promise<PublicSchool | null> {
  const schoolsQuery = query(
    collection(db, "schools"),
    where("active", "==", true),
    where("slug", "==", slug)
  );

  const snapshot = await getDocs(schoolsQuery);

  if (snapshot.empty) {
    return null;
  }

  const document = snapshot.docs[0];

  return {
    id: document.id,
    ...document.data(),
  } as PublicSchool;
}