import { CarouselCard } from "./Card";

export default function Carousel() {
  return (
    <div className="container ">
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center py-11">
          <p className="font-bold text-3xl">
            Trusted by Thousands of Happy Customer
          </p>
          <p className="text-slate-600">
            These are the stories of our customers who have joined us with great
            pleasure when using this crazy feature.
          </p>
        </div>
        <CarouselCard />
      </div>
    </div>
  );
}
