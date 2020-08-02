import mongoose from "mongoose";
const Schema = mongoose.Schema;
const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    links: {
      type: String,
      trim: true,
    },
    thumbUrl: {
      type: String,
      trim: true,
    },
    user: {
      type: Schema.Types.ObjectId,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Post || mongoose.model("Post", postSchema);
