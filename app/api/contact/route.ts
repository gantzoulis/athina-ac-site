import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;

    const name = body.name?.trim() ?? "";
    const email = body.email?.trim() ?? "";
    const message = body.message?.trim() ?? "";

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Όλα τα πεδία είναι υποχρεωτικά." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Το email δεν είναι έγκυρο." },
        { status: 400 }
      );
    }

    console.log("New contact form submission:", {
      name,
      email,
      message,
      submittedAt: new Date().toISOString(),
    });

    return NextResponse.json(
      { success: true, message: "Το μήνυμα καταχωρήθηκε επιτυχώς." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      { error: "Παρουσιάστηκε σφάλμα κατά την αποστολή." },
      { status: 500 }
    );
  }
}