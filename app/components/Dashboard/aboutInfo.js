import { Typography } from "@mui/material";

export default function AboutInfo({ props }) {
    return (
        <div className="flex flex-col gap-3">
            <div>
                <Typography className="inika font-semibold text-2xl">
                    About:-
                </Typography>
                <Typography className="inika ml-8 object-cover text-xl">
                    {props[0]}
                </Typography>
            </div>
            <div>
                <Typography className="inika font-semibold text-2xl">
                    Business Details:-
                </Typography>
                <Typography className="inika ml-8 object-cover text-xl">
                    {props[1]}, {props[2]}, {props[3]}, {props[4]}, {props[5]}
                </Typography>
            </div>
        </div>
    )
}