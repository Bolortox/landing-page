import { Arrow, ArrowLeft } from "../../../public/svg/Arrow";
import { ArrowRight } from "../../../public/svg/ArrowRight";
import { CarouselCard } from "./CarouselCard";

export default async function Carousel() {
  const data = await fetch("https://randomuser.me/api/?results=100");
  const users = await data.json();

  return (
    <div className="max-w-[1216px] w-full h-full m-auto">
      <div className="container ">
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center py-11">
            <p className="font-bold text-3xl">
              Trusted by Thousands of Happy Customer
            </p>
            <p className="text-slate-600">
              These are the stories of our customers who have joined us with
              great pleasure when using this crazy feature.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <div className="carousel gap-[40px] overflow-scroll w-[1200px] ">
              {users?.results?.map((user) => (
                <div className="carousel-item">
                  <CarouselCard user={user} />
                </div>
              ))}
            </div>
          </div>

          <div className="flex  gap-6 pt-5 ">
            <button className="w-[60px] h-[60px] border-2 border-red-500 rounded-full flex justify-center items-center">
              <ArrowLeft />
            </button>
            <button className="w-[60px] h-[60px] border-2 bg-red-500 border-red-500 rounded-full flex justify-center items-center">
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
