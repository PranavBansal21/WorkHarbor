"use client";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

export default function PostedServices({ props }) {
  const truncateText = (text, width) => {
    if (text.length <= width) {
      return text;
    }
    return text.substr(0, width) + "...";
  };
  return (
    <Grid xs={3}>
      <Card className="border border-gray-400 mr-3 rounded-lg mb-3">
        <CardContent>
          <Typography className="inika text-lg text-center font-bold">
            {truncateText(props.workTitle, 20)}
          </Typography>
        </CardContent>
        <CardActionArea>
          <CardMedia
            component="img"
            image={props.workImg}
            style={{
              minHeight: "100px",
              maxHeight: "200px",
              width: "100%",
              objectFit: "cover",
            }}
          />
        </CardActionArea>
        <CardContent>
          <Typography>{truncateText(props.workDesc, 50)}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
