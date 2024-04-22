"use client";
import { Call, LocationOn, Mail } from "@mui/icons-material";
import { Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

export default function BasicInfo({ props }) {
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
  return (
    <div className="mt-16 flex flex-col gap-2">
      <Typography className="inika text-2xl font-semibold">
        {props[0]}
      </Typography>
      <div className="flex">
        <LocationOn />
        <Typography className="inika text-xl">
          {props[1]}, {props[2]}
        </Typography>
      </div>
      {token ? (
        <div className="flex gap-10">
          <div className="flex gap-2 bg-gray-300 p-2 rounded-xl">
            <Call />
            <Typography className="inika text-xl font-semibold">
              +91 {props[3]}
            </Typography>
          </div>
          <div className="flex gap-2 bg-gray-300 p-2 rounded-xl">
            <Mail />
            <Typography className="inika text-xl">{props[4]}</Typography>
          </div>
        </div>
      ) : (
        <>Login To Get Contact Details</>
      )}
    </div>
  );
}
