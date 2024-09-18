export default function Header() {
  return (
    <div className="flex justify-between items-center container py-[50px]  ">
      <div className="">
        <img width={150} height={36} src="/Logo.png" alt="" />
      </div>
      <div className="text-base text-slate flex gap-10  ">
        <p>About</p>
        <p>Features</p>
        <p>Pricing</p>
        <p>Testimonials</p>
        <p>Help</p>
      </div>
      <div className="flex items-center gap-7 ">
        <p className="text-black font-bold">Sign in</p>
        <div className="btn btn-outline rounded-3xl w-[150px] font-extrabold hover:bg-red-500 hover:text-white hover:border-red-500 border-red-500 text-red-500 ">
          Sign up
        </div>
      </div>
    </div>
  );
}
