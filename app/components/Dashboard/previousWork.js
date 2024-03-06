import { Typography } from "@mui/material"

const works = [
    { id: 1, src: "/Images/back.jpg", kaam: "Store" },
    { id: 2, src: "/Images/back.jpg", kaam: "Store" },
    { id: 3, src: "/Images/back.jpg", kaam: "Store" },
    { id: 4, src: "/Images/back.jpg", kaam: "Store" },
    { id: 5, src: "/Images/back.jpg", kaam: "Store" },
]

export default function PreviousWork() {
    return (
        <div className="px-[80px]">
            <div className="bg-gray-300 p-4 rounded-3xl">
                <Typography className="inika font-semibold text-2xl text-center">
                    Previous Works
                </Typography>
                <div className="h-[550px] overflow-y-auto no-scrollbar"> 
                    {works.map((work) => (
                        <div key={work.id} className="rounded-[40px] bg-gray-400 p-5 mt-2 flex">
                            <div className="w-2/3">
                                <img src={work.src} className="w-full rounded-[40px]" />
                            </div>
                            <Typography className="inika text-white text-2xl text-center w-1/3">
                                {work.kaam}
                            </Typography>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}