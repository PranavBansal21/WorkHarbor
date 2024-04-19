import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
  backImg: {
    type: String,
    default:
      "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  frontImg: {
    type: String,
    default:
      "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  title: {
    type: String,
    required: true,
  },
  businessEmail: {
    type: String,
    required: true,
  },
  businessPhone: {
    type: Number,
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
      public_id: {
        type: String,
      },
    },
  ],
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  pincode: {
    type: Number,
    required: true,
  },
  buildingName: {
    type: String,
  },
  streetName: {
    type: String,
  },
  area: {
    type: String,
  },
  landmark: {
    type: String,
  },
  reviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
  stars: {
    type: Number,
    default: 0,
  },
  tags: [
    {
      type: String,
    },
  ],
});

const Service =
  mongoose.models.Service || mongoose.model("Service", serviceSchema);
export default Service;
