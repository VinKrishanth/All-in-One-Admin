import mongoose from "mongoose";

const noticeSchema = new mongoose.Schema(
  {
    linkType: {
      type: String,
      required: true,
      enum: ["attachment", "url"],
    },
    status: {
      type: String,
      default: "pending",
      enum: ["pending", "approved", "rejected"],
    },
    dateTime: {
      type: Date,
      required: true,
    },
    type: {
      type: String,
      required: true,
      enum: ["Common", "Special"],
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    notice: {
      type: String,
      required: true,
      trim: true,
    },
    url: {
      type: String,
      validate: {
        validator: function (value) {
          return !value || /^https?:\/\/\S+$/.test(value);
        },
        message: "Invalid URL format",
      },
    },
    attachment: {
      type: String, 
    },
  },
  {
    timestamps: true,
  }
);

const Notice = mongoose.model("Notice", noticeSchema);

export default Notice;
