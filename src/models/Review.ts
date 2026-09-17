import mongoose, { Schema, Document, Model } from "mongoose";

export interface IReview extends Document {
  author: string;
  rating: number;
  serviceCategory?: string;
  text: string;
  source: string;
  isVerified: boolean;
  isApproved: boolean;
  createdAt: Date;
}

const ReviewSchema: Schema<IReview> = new Schema(
  {
    author: {
      type: String,
      required: [true, "Author name is required"],
      trim: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
      default: 5,
    },
    serviceCategory: {
      type: String,
      default: "General",
    },
    text: {
      type: String,
      required: [true, "Review text is required"],
    },
    source: {
      type: String,
      default: "Google Reviews",
    },
    isVerified: {
      type: Boolean,
      default: true,
    },
    isApproved: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Review: Model<IReview> =
  mongoose.models.Review || mongoose.model<IReview>("Review", ReviewSchema);
