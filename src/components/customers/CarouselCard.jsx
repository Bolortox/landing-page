import { comments } from "./Comments.js";

export const CarouselCard = ({ user }) => {
  const { name, location, picture } = user;
  const generatedStar = Math.floor(Math.random() * 6);
  return (
    <div>
      <div className="w-[400px] h-[230px] rounded-[10px] border-2 hover:border-red-500 hover:shadow-2xl flex flex-col p-5 gap-3 ">
        <div className="flex justify-between pt-2 ">
          <div className="flex gap-2 ">
            <img src={picture?.thumbnail} alt="" className="rounded-3xl" />
            <div>
              <p className="font-bold">
                {name?.first} {name?.last}
              </p>
              <p className="text-sm text-slate-600">
                {location?.city}, {location?.country}
              </p>
            </div>
          </div>
          <p className="flex items-center">{generatedStar} ⭐</p>
        </div>
        <p>{comments[generatedStar]}</p>
      </div>
    </div>
  );
};
