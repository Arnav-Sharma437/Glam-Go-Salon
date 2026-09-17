import mongoose, { Schema, Document, Model } from "mongoose";

export interface IBooking extends Document {
  bookingType: "clinical" | "salon";
  serviceName: string;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  preferredDate: string;
  preferredTime: string;
  practitionerPreference?: string;
  notes?: string;
  status: "pending" | "confirmed" | "cancelled" | "completed";
  paymentStatus: "unpaid" | "deposit_paid" | "fully_paid";
  depositAmount?: number;
  totalAmount?: number;
  createdAt: Date;
  updatedAt: Date;
}

const BookingSchema: Schema<IBooking> = new Schema(
  {
    bookingType: {
      type: String,
      enum: ["clinical", "salon"],
      required: [true, "Booking type is required"],
    },
    serviceName: {
      type: String,
      required: [true, "Service name is required"],
    },
    clientName: {
      type: String,
      required: [true, "Client name is required"],
      trim: true,
    },
    clientEmail: {
      type: String,
      required: [true, "Client email is required"],
      trim: true,
      lowercase: true,
    },
    clientPhone: {
      type: String,
      required: [true, "Client phone number is required"],
      trim: true,
    },
    preferredDate: {
      type: String,
      required: [true, "Preferred date is required"],
    },
    preferredTime: {
      type: String,
      required: [true, "Preferred time is required"],
    },
    practitionerPreference: {
      type: String,
      default: "Any Specialist",
    },
    notes: {
      type: String,
      default: "",
    },
    status: {
      type: String,
      enum: ["pending", "confirmed", "cancelled", "completed"],
      default: "pending",
    },
    paymentStatus: {
      type: String,
      enum: ["unpaid", "deposit_paid", "fully_paid"],
      default: "unpaid",
    },
    depositAmount: {
      type: Number,
      default: 0,
    },
    totalAmount: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

export const Booking: Model<IBooking> =
  mongoose.models.Booking || mongoose.model<IBooking>("Booking", BookingSchema);
