import { Typography } from "@mui/material"

export default function PreviousWork() {
    return (
        <div className="px-[80px]">
            <div className="bg-gray-300 p-4 rounded-3xl">
                <Typography className="inika font-semibold text-2xl text-center">
                    Previous Works
                </Typography>
                <div>
                    <div className="rounded-[40px] bg-gray-400 p-5 mt-2 flex">
                        <div className="w-2/3">
                            <img src="/Images/back.jpg" className="w-full rounded-[40px]" />
                        </div>
                        <Typography className="inika text-white text-2xl text-center w-1/3">
                            Store
                        </Typography>
                    </div>
                    <div className="rounded-[40px] bg-gray-400 p-5 mt-2 flex">
                        <div className="w-2/3">
                            <img src="/Images/back.jpg" className="w-full rounded-[40px]" />
                        </div>
                        <Typography className="inika text-white text-2xl text-center w-1/3">
                            Store
                        </Typography>
                    </div>
                    <div className="rounded-[40px] bg-gray-400 p-5 mt-2 flex">
                        <div className="w-2/3">
                            <img src="/Images/back.jpg" className="w-full rounded-[40px]" />
                        </div>
                        <Typography className="inika text-white text-2xl text-center w-1/3">
                            Store
                        </Typography>
                    </div>
                    <div className="rounded-[40px] bg-gray-400 p-5 mt-2 flex">
                        <div className="w-2/3">
                            <img src="/Images/back.jpg" className="w-full rounded-[40px]" />
                        </div>
                        <Typography className="inika text-white text-2xl text-center w-1/3">
                            Store
                        </Typography>
                    </div>
                </div>
            </div>
        </div>
    )
}