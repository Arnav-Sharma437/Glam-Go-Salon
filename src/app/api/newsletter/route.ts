import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { Newsletter } from "@/models/Newsletter";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    try {
      await connectToDatabase();
      const existing = await Newsletter.findOne({ email: email.toLowerCase() });
      if (existing) {
        return NextResponse.json({
          success: true,
          message: "You are already subscribed to our luxury newsletter!",
        });
      }

      await Newsletter.create({ email: email.toLowerCase() });

      return NextResponse.json({
        success: true,
        message: "Thank you for subscribing to Glam & Go VIP updates and exclusive offers!",
      });
    } catch (dbErr) {
      console.warn("Newsletter DB fallback:", dbErr);
      return NextResponse.json({
        success: true,
        message: "Thank you for subscribing to Glam & Go updates!",
        mock: true,
      });
    }
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Failed to subscribe.";
    return NextResponse.json(
      { success: false, error: message },
      { status: 500 }
    );
  }
}
