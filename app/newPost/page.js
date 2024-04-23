"use client";
import { Button, Chip, TextField, Typography } from "@mui/material";
import Navbar from "../components/Navbar/navbar";
import { Tags } from "@/utils/tags";
import TagSelector from "../components/Register/tagSelector";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function NewPost() {
  const router = useRouter();
  const [selectedTags, setSelectedTags] = useState([]);
  const [uploadedImages, setUploadedImages] = useState([]);
  const [token, setToken] = useState(null);
  const tokenData = async () => {
    const res = await axios.post("/api/users/getTokenData");
    if ("id" in res.data) {
      setToken(res.data);
    } else {
      setToken(null);
    }
  };
  useEffect(() => {
    tokenData();
  }, []);

  function addTag(tag) {
    if (!selectedTags.includes(tag)) {
      setSelectedTags((prevTags) => [...prevTags, tag]);
    }
  }

  function removeTag(tag) {
    const updatedTags = selectedTags.filter((t) => t !== tag);
    setSelectedTags(updatedTags);
  }
  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target.form);
    const title = formData.get("title");
    const description = formData.get("description");
    const phone = formData.get("phone");
    const city = formData.get("city");
    const state = formData.get("state");

    const imageUrls = [];
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
      imageUrls.push(res.data.secure_url);
    }

    const postData = {
      title,
      description,
      phone,
      city,
      state,
      selectedTags,
      imageUrls,
      token,
    };

    const res = await axios.post("/api/posts/new", postData);
    // console.log(res.data);
    if (res.data.status == 200) {
      router.push("/posts");
    }
  }

  function handleImageChange(e) {
    const files = Array.from(e.target.files);
    setUploadedImages(files);
  }

  return (
    <>
      <Navbar />
      <div className="rounded-lg px-4 py-6">
        <form className="mx-96">
          <div className="flex flex-col gap-2">
            <TextField name="title" label="Title" required fullWidth />
            <TextField
              name="description"
              label="Description"
              required
              fullWidth
            />
            <TextField
              name="phone"
              label="Phone Number"
              type="number"
              required
              fullWidth
            />
            <div className="flex gap-4">
              <TextField name="city" label="City" required fullWidth />
              <TextField name="state" label="State" required fullWidth />
            </div>
            <div className="container my-4">
              <Typography className="inika text-xl font-bold">
                Select Tags
              </Typography>
              <div className="my-2 flex flex-wrap gap-2">
                {Tags.map((tag, index) => (
                  <Chip
                    key={index}
                    label={tag}
                    variant="outlined"
                    onClick={() => addTag(tag)}
                  />
                ))}
              </div>
              <TagSelector
                tags={selectedTags}
                removeTag={(data) => removeTag(data)}
              />
            </div>
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
              Save and Continue
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
