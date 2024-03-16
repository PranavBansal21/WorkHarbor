import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
  backImg: {
    type: String,
  },
  frontImg: {
    type: String,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  previousWorks: [
    {
      workImg: String,
      workTitle: {
        type: String,
        required: true,
      },
      workDesc: {
        type: String,
        required: true,
      },
    },
  ],
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const Service = mongoose.models.services || mongoose.model("services",serviceSchema);
export default Service;