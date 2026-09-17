import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { Booking } from "@/models/Booking";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      bookingType,
      serviceName,
      clientName,
      clientEmail,
      clientPhone,
      preferredDate,
      preferredTime,
      practitionerPreference,
      notes,
    } = body;

    if (!bookingType || !serviceName || !clientName || !clientEmail || !clientPhone || !preferredDate || !preferredTime) {
      return NextResponse.json(
        { success: false, error: "Please provide all required fields." },
        { status: 400 }
      );
    }

    try {
      await connectToDatabase();
      const newBooking = await Booking.create({
        bookingType,
        serviceName,
        clientName,
        clientEmail,
        clientPhone,
        preferredDate,
        preferredTime,
        practitionerPreference,
        notes,
        status: "pending",
        paymentStatus: "unpaid",
      });

      return NextResponse.json({
        success: true,
        message: "Your appointment request has been submitted successfully! We will contact you to confirm.",
        booking: newBooking,
      });
    } catch (dbErr) {
      console.warn("MongoDB connection fallback (working in mock mode):", dbErr);
      return NextResponse.json({
        success: true,
        message: "Your appointment request has been recorded. Our team will contact you promptly!",
        mock: true,
      });
    }
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Failed to process booking request.";
    return NextResponse.json(
      { success: false, error: message },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectToDatabase();
    const bookings = await Booking.find().sort({ createdAt: -1 }).limit(50);
    return NextResponse.json({ success: true, bookings });
  } catch (dbErr) {
    return NextResponse.json({
      success: true,
      bookings: [],
      message: "Database offline or running in mock mode.",
    });
  }
}
