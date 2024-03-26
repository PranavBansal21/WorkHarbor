export default function InfoImage({props}) {
  return (
    <div className="relative">
      <img
        src={props[0]}
        className="object-cover w-full h-64 rounded-[50px]"
      />
      <div className="absolute top-36 left-16">
        <img
          src={props[1]}
          className="object-cover rounded-full w-40 h-40"
        />
      </div>
    </div>
  );
}
