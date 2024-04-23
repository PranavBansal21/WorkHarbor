"use client"
import { Card, CardActionArea, CardContent, CardMedia, CircularProgress, Typography } from "@mui/material";

export default function PreviousWork({ props, gridHeight }) {

  return (
    <div className="py-4 px-16 flex flex-col gap-5" style={{ height: gridHeight }}>
      <Typography className="inika font-semibold text-2xl text-center">
        Previous Works
      </Typography>
      <div className="h-full overflow-y-auto no-scrollbar">
        {props.map((work, index) => (
          <Card key={index} className="border border-gray-300 mb-3">
            <CardContent>
              <Typography className="inika text-black text-xl">
                {work.workTitle}
              </Typography>
            </CardContent>
            <CardActionArea>
              <CardMedia
                component="img"
                image={work.workImg}
                style={{
                  minHeight: '250px',
                  maxHeight: '250px',
                  width: '100%',
                  objectFit: 'cover'
                }}
              />
            </CardActionArea>
            <CardContent>
              <Typography className="inika text-black">
                {work.workDesc}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
