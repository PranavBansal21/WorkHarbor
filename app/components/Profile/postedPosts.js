"use client";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";

export default function PostedPosts({ props }) {
  const router = useRouter();
  const truncateText = (text, width) => {
    if (text.length <= width) {
      return text;
    }
    return text.substr(0, width) + "...";
  };
  const handleClick = async () => {
    router.push(`/posts/${props._id}`);
  };
  return (
    <Grid xs={3}>
      <Card
        className="border border-gray-400 mr-3 rounded-lg mb-3"
        onClick={handleClick}
      >
        <CardContent>
          <Typography className="inika text-lg text-center font-bold">
            {truncateText(props.title, 20)}
          </Typography>
        </CardContent>
        <CardActionArea>
          <CardMedia
            component="img"
            image={props.image}
            style={{
              minHeight: "100px",
              maxHeight: "200px",
              width: "100%",
              objectFit: "cover",
            }}
          />
        </CardActionArea>
        <CardContent>
          <Typography>{truncateText(props.description, 50)}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
