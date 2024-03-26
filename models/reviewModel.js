import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  stars: {
    type: Number,
    requried: true,
  },
  comment: {
    type: String,
    required: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  serviceProvider:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Service"
  }
});

const Review =
  mongoose.models.Review || mongoose.model("Review", reviewSchema);
export default Review;
