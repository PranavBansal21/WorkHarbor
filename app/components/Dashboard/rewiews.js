"use client";
import Rating from "@mui/material/Rating";
import { Avatar, Button, Divider, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Reviews({ props }) {
  const router = useRouter();
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
    getUser();
  }, []);
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const rating = formData.get("half-rating");
    const comment = formData.get("comment");

    // console.log("Rating:", rating);
    // console.log("Comment:", comment);

    const serviceProvider = props[2].id;

    const res = await axios.post("/api/reviews/new", {
      rating,
      comment,
      token,
      serviceProvider,
    });
  };
  const [user, setUser] = useState([]);
  const getUser = async () => {
    for (let x of props[1]) {
      const userId = x.owner;
      const resp = await axios.post("/api/users/getUser", { userId });
      setUser((prevUser) => ({
        ...prevUser,
        [userId]: resp.data.firstName, // Assuming resp.data.name contains the user's name
      }));
    }
  };
  return (
    <div className="mt-4 flex flex-col gap-5">
      <Typography className="inika font-semibold text-2xl">
        Reviews and Ratings:-
      </Typography>
      <div className="flex gap-5">
        <div className="flex gap-3">
          <Typography className="inika bg-green-600 p-1 px-3 rounded-md">
            {props[0]}
          </Typography>
          <Rating
            name="half-rating-read"
            value={props[0]}
            precision={0.5}
            readOnly
            size="large"
          />
        </div>
        <Typography className="inika text-2xl font-bold tracking-wide">
          {props[1].length} Reviews
        </Typography>
      </div>

      <div>
        {token ? (
          <form onSubmit={handleSubmit}>
            <div className="flex gap-4 mb-3">
              <Typography className="inika">Add a review</Typography>
              <Rating
                name="half-rating"
                defaultValue={2.5}
                precision={0.5}
                required
              />
            </div>
            <TextField
              id="comment"
              label="Comment"
              name="comment"
              multiline
              rows={4}
              variant="outlined"
              fullWidth
              required
              className="mb-3"
            />
            <Button
              type="submit"
              variant="contained"
              className="bg-blue-500 hover:bg-blue-800"
            >
              Submit Review
            </Button>
          </form>
        ) : (
          <>Login to add a review</>
        )}

        <Divider className="bg-black mt-2" />
      </div>
      <div>
        {props[1].map((review, index) => (
          <div key={index}>
            <div className="flex gap-2">
              <Avatar alt="Remy Sharp" src="/Images/profilePic.jpg" />
              <Typography>{user[review.owner]}</Typography>
              <Rating
                name="half-rating-read"
                value={review.stars}
                precision={0.5}
                readOnly
                size="large"
              />
            </div>
            <div>
              <Typography>{review.comment}</Typography>
            </div>
            <Divider className="bg-black mt-2" />
          </div>
        ))}
      </div>
    </div>
  );
}
