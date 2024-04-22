"use client";
import Navbar from "../components/Navbar/navbar";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Rating from "@mui/material/Rating";
import { LocationOn } from "@mui/icons-material";
import { NextResponse } from "next/server";
import { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";
import { usePathname, useRouter } from "next/navigation";
import { Chip, Divider, TextField } from "@mui/material";
import { cityAndStates } from "@/utils/location";

export default function Services() {
  const [services, setServices] = useState(null);

  const router = useRouter();
  const pathname = usePathname();

  const getAllServices = async () => {
    try {
      const res = await axios.post("/api/services/allServices");
      setServices(res.data);
    } catch (err) {
      return NextResponse.json({ error: err.message, status: 500 });
    }
  };

  useEffect(() => {
    getAllServices();
  }, []);

  const [searchValue, setSearchValue] = useState('');
  const [matchedCities, setMatchedCities] = useState([]);

  const handleInputChange = (event) => {
    const { value } = event.target;
    setSearchValue(value);
    const matched = cityAndStates.filter(city =>
      city.toLowerCase().includes(value.toLowerCase())
    );
    setMatchedCities(matched);
  };

  const handleCityClick = (city) => {
    setSearchValue(city);
    setMatchedCities([]);
  };

  const truncateText = (text) => {
    if (text.length <= 80) {
      return text;
    }
    return text.substr(0, 80) + "...";
  };

  return (
    <div>
      <Navbar />

      <div className="p-5 flex flex-col gap-5">

        <div className="relative ml-3">
          <div className="flex gap-5">
            <TextField id="city" label="City" variant="outlined" onChange={handleInputChange} value={searchValue} />
            <TextField id="search" label="Search" variant="outlined" />
          </div>
          {searchValue ?
            <div className={`top-14 absolute z-10 max-h-fit cursor-pointer ${searchValue ? 'bg-white' : ''}`}>
              <ul className="mx-2 my-2">
                {matchedCities.slice(0, 25).map((city, index) => (
                  <>
                    <li key={index} onClick={() => handleCityClick(city)}>
                      {city}
                    </li>
                    <Divider />
                  </>
                ))}
              </ul>
            </div> : <></>}
        </div>

        {services ? (
          <Grid container spacing={2}>
            {services.map((service, index) => (
              <Grid
                key={index}
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Card sx={{ maxWidth: 400 }} className="border border-gray-300 cursor-pointer" onClick={() => router.push(`${pathname}/${service._id}`)}>
                  <CardContent>
                    <Typography className="inika text-xl">
                      {service.title}
                    </Typography>
                    <div className="flex gap-2 items-center">
                      <Typography className="inika text-gray-400">
                        {service.city}, {service.state}
                      </Typography>
                    </div>
                  </CardContent>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      image={service.frontImg}
                      style={{
                        minHeight: '250px',
                        maxHeight: '250px',
                        width: '100%',
                        objectFit: 'cover'
                      }}
                      alt={service.title}
                    />
                  </CardActionArea>

                  <CardContent className="flex gap-5">
                    {service.tags.slice(0, 3).map((tag, index) => (
                      <Chip label={tag} />
                    ))}
                  </CardContent>

                  <CardContent style={{paddingTop: '0'}}>
                    <div style={{ display: "-webkit-box", WebkitLineClamp: 2, overflow: "hidden" }}>
                      <Typography className="inika mt-2">
                        {truncateText(service.description)}
                      </Typography>
                    </div>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        ) : (
          <div className="flex justify-center items-center">
            <CircularProgress />
          </div>
        )}
      </div>
    </div>
  );
}
