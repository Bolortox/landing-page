export const CarouselCard = () => {
  return (
    <div>
      <div className="w-[400px] h-[230px] rounded-[10px] border-2 hover:border-red-500 hover:shadow-2xl flex flex-col p-5 gap-3 ">
        <div className="flex justify-between pt-2 ">
          <div className="flex gap-2">
            <img src="/Person.png" alt="" />
            <div>
              <p className="font-bold">Viezh Robert</p>
              <p className="text-sm text-slate-600">Warsaw, Poland</p>
            </div>
          </div>
          <p className="flex items-center">4.5 ⭐</p>
        </div>
        <p>
          “Wow... I am very happy to use this VPN, it turned out to be more than
          my expectations and so far there have been no problems. LaslesVPN
          always the best”.
        </p>
      </div>
    </div>
  );
};
