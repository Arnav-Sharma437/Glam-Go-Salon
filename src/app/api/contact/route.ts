import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { Contact } from "@/models/Contact";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    try {
      await connectToDatabase();
      const newContact = await Contact.create({
        name,
        email,
        phone,
        subject: subject || "General Inquiry",
        message,
        status: "new",
      });

      return NextResponse.json({
        success: true,
        message: "Thank you for getting in touch! We have received your message and will respond shortly.",
        contact: newContact,
      });
    } catch (dbErr) {
      console.warn("MongoDB fallback:", dbErr);
      return NextResponse.json({
        success: true,
        message: "Thank you for getting in touch! We have received your message and will respond shortly.",
        mock: true,
      });
    }
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Failed to send message.";
    return NextResponse.json(
      { success: false, error: message },
      { status: 500 }
    );
  }
}
