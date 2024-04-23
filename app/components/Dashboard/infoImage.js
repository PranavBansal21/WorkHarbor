import EditIcon from '@mui/icons-material/Edit';

export default function InfoImage({ props }) {
  return (
    <div className="relative">
      <img
        src={props[0]}
        className="object-cover w-full h-64 rounded-[50px]"
      />
      <div className="absolute top-36 left-16">
        <div className='relative'>
          <img
            src={props[1]}
            className="object-cover rounded-full w-40 h-40"
          />
          <div className='absolute right-0 bottom-0 cursor-pointer rounded-full p-1 hover:bg-gray-300'>
              <EditIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
