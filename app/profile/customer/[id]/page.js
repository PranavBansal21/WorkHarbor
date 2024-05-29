"use client";
import { Button, CircularProgress, Grid, Typography } from "@mui/material";
import Navbar from "@/app/components/Navbar/navbar";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailIcon from "@mui/icons-material/Mail";
import axios from "axios";
import { getTokenData } from "@/utils/getTokenData";
import { useEffect, useState } from "react";
import InfoImage from "@/app/components/Dashboard/infoImage";
import PostedServices from "@/app/components/Profile/postedServices";
import PostedPosts from "@/app/components/Profile/postedPosts";
import EditIcon from "@mui/icons-material/Edit";
import Modal from "@mui/material/Modal";

export default function Profile({ params }) {
  const [pageUser, setPageUser] = useState(null);
  const [uploadedImages, setUploadedImages] = useState([]);
  const [user, setUser] = useState(null);
  const [open, setOpen] = useState(false);
  const getUser = async () => {
    const res = await axios.post("/api/users/getTokenData");
    setPageUser(res.data);
    const userId = res.data.id;
    const resp = await axios.post("/api/users/getUser", { userId });
    setUser(resp.data);
  };
  useEffect(() => {
    getUser();
  }, []);

  function handleImageChange(e) {
    const files = Array.from(e.target.files);
    setUploadedImages(files);
  }
  async function handleSubmit(e) {
    e.preventDefault();
    let imageUrl;
    for (const image of uploadedImages) {
      const imageData = new FormData();
      imageData.append("file", image);
      imageData.append(
        "upload_preset",
        process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET
      ); // Replace with your upload preset
      const res = await axios.post(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
        imageData
      );
      imageUrl = res.data.secure_url;
    }
    const userId = params.id;
    if (imageUrl) {
      const res = await axios.post("/api/users/uploadProfileImage", {
        imageUrl,
        userId,
      });
      if (res.data.status == 200) {
        location.reload();
      }
    }
  }

  return (
    <>
      <Navbar />
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="flex items-center justify-center"
      >
        <div className="bg-white p-44">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Upload files
            </label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                >
                  <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m-4-4l4-4m-4 4V12" />
                </svg>
                <div className="flex text-sm text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                  >
                    <span>Upload a file</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                      onChange={handleImageChange}
                      multiple
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">
                  PNG, JPG, GIF up to 10MB
                </p>
              </div>
            </div>
            {uploadedImages.length > 0 &&
              uploadedImages.map((image, index) => (
                <img
                  key={index}
                  src={URL.createObjectURL(image)}
                  alt={`Uploaded ${index}`}
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                  }}
                />
              ))}
          </div>
          <Button
            variant="contained"
            className="bg-blue-500 hover:bg-blue-800"
            onClick={handleSubmit}
          >
            Update Profile
          </Button>
        </div>
      </Modal>
      {pageUser && user ? (
        <div className="px-10">
          <Grid container>
            <Grid item xs={8} className="ml-2 mt-5">
              <div className="relative">
                <InfoImage props={["/Images/back.jpg", user.image]} />
                <div
                  className="absolute left-48 top-88 cursor-pointer rounded-full p-1 bg-gray-300"
                  onClick={() => setOpen(true)}
                >
                  <EditIcon />
                </div>
              </div>
            </Grid>
          </Grid>

          <Typography className="inika text-2xl ml-64 mt-4 font-bold tracking-wide">
            {pageUser.firstName} {pageUser.lastName}
          </Typography>

          <Grid container className="mt-16">
            <Grid xs={2.5} className="p-2">
              <div className="border border-black rounded-xl h-80 p-4">
                <Typography className="inika text-xl text-center font-bold">
                  Contact Information
                </Typography>
                <hr />
                <div className="mt-2 flex flex-col gap-2">
                  <div className="flex gap-2">
                    <LocalPhoneIcon />
                    <Typography className="inika">{pageUser.phone}</Typography>
                  </div>
                  <div className="flex gap-2">
                    <MailIcon />
                    <Typography className="inika">{pageUser.email}</Typography>
                  </div>
                </div>
              </div>
            </Grid>

            <Grid xs={9.5} className="p-2">
              <div className="border border-black px-2 rounded-xl">
                <Typography className="inika text-xl text-center font-bold m-4">
                  Posted Works
                </Typography>
                <Grid container>
                  {user.posts.map((service, index) => (
                    <PostedPosts key={index} props={service} />
                  ))}
                </Grid>
              </div>
            </Grid>
          </Grid>
        </div>
      ) : (
        <div className="flex justify-center items-center mt-5">
          <CircularProgress />
        </div>
      )}
    </>
  );
}
