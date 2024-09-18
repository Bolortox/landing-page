export default function Footer() {
  return (
    <div className="container pt-[100px]">
      <div className="w-full bg-red-100 h-[233px] rounded-[10px] flex items-center justify-around ">
        <div className="flex flex-col w-[420px] ">
          <p className="font-bold text-4xl ">
            Subscribe Now for Get Special Features!
          </p>
          <p className="text-slate-600">
            Let's subscribe with us and find the fun.
          </p>
        </div>
        <div className="btn btn-error w-[250px] h-[60px] shadow-2xl shadow-red-500 bg-red-500 text-white font-bold text-base">
          Subscribe Now
        </div>
      </div>
    </div>
  );
}
