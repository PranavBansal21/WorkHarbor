import { Typography } from "@mui/material";

export default function AboutInfo({props}) {
    return (
        <div >
            <Typography className="inika font-semibold text-2xl">
                About:-
            </Typography>
            <Typography className="inika ml-8 object-cover text-xl">
                {props}
            </Typography>
        </div>
    )
}