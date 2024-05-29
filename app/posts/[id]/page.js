"use client";
import Navbar from "@/app/components/Navbar/navbar";
import {
  Card,
  CardActionArea,
  CardMedia,
  Chip,
  Grid,
  Typography,
} from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import axios from "axios";
import { useEffect, useState } from "react";

export default function CertainPost({ params }) {
  const postId = params.id;
  const [postData, setPostData] = useState(null);
  const findPostData = async () => {
    const res = await axios.post("/api/posts/findById", { postId });
    setPostData(res.data);
  };
  useEffect(() => {
    findPostData();
  }, []);

  return (
    <>
      <Navbar />
      {postData ? (
        <div className="px-10 py-10">
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Card style={{ boxShadow: "none" }} className="pl-32">
                <CardMedia
                  component="img"
                  image={postData.image}
                  style={{
                    minHeight: "500px",
                    maxHeight: "500px",
                    minWidth: "600px",
                    maxWidth: "600px",
                    objectFit: "cover",
                  }}
                />
              </Card>
            </Grid>
            <Grid item xs={6} className="flex flex-col gap-5">
              <Typography className="inika text-3xl">
                {postData.title}
              </Typography>
              <Typography className="inika text-xl text-gray-500">
                {postData.city},{postData.state}
              </Typography>
              <div className="flex flex-wrap gap-6">
                {postData.tags.map((tag, index) => (
                  <Chip key={index} label={tag} />
                ))}
              </div>
              <Typography className="inika text-2xl">
                {postData.owner.firstName} {postData.owner.lastName}
              </Typography>
              <div className="flex gap-2">
                <LocalPhoneIcon />
                <Typography className="inika">{postData.phone}</Typography>
              </div>
              <Typography className="inika text-lg text-gray-500">
                {postData.description}
              </Typography>
            </Grid>
          </Grid>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
