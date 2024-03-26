import { Call, LocationOn, Mail } from "@mui/icons-material";
import { Typography } from "@mui/material";

export default function BasicInfo({props}) {
    return (
        <div className="mt-16 flex flex-col gap-2">
            <Typography
                className="inika text-2xl font-semibold"
            >
                {props[0]}
            </Typography>
            <div className="flex">
                <LocationOn />
                <Typography
                    className="inika text-xl"
                >
                    {props[1]}, {props[2]}
                </Typography>
            </div>
            <div className="flex gap-10">
                <div className="flex gap-2 bg-gray-300 p-2 rounded-xl">
                    <Call />
                    <Typography
                        className="inika text-xl font-semibold"
                    >
                        +91 {props[3]}
                    </Typography>
                </div>
                <div className="flex gap-2 bg-gray-300 p-2 rounded-xl">
                    <Mail />
                    <Typography
                        className="inika text-xl"
                    >
                        {props[4]}
                    </Typography>
                </div>
            </div>
        </div>
    )
}