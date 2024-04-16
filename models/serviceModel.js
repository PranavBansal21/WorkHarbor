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
  city:{
    type:String,
    required:true,
  },
  state:{
    type:String,
    required:true,
  },
  pincode:{
    type:Number,
    required:true,
  },
  buildingName:{
    type:String,
  },
  streetName:{
    type:String,
  },
  area:{
    type:String,
  },
  landmark:{
    type:String,
  },
  reviews:[
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Review",
    }
  ],
  stars:{
    type:Number,
    required:true,
  },
});

const Service = mongoose.models.Service || mongoose.model("Service",serviceSchema);
export default Service;