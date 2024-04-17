import { Typography } from "@mui/material";

export default function PreviousWork({ props }) {
  console.log(props);
  return (
    <div className="px-[80px]">
      <div className="bg-gray-300 p-4 rounded-3xl">
        <Typography className="inika font-semibold text-2xl text-center">
          Previous Works
        </Typography>
        <div className="h-[550px] overflow-y-auto no-scrollbar">
          {props.map((work, index) => (
            <div
              key={index}
              className="rounded-[40px] bg-gray-400 p-5 mt-2 flex"
            >
              <div className="w-2/3">
                <img
                  src={work.workImg}
                  className="w-full h-[150px] rounded-[40px]"
                />
              </div>
              <Typography className="inika text-white text-2xl text-center w-1/3">
                {work.workTitle}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
