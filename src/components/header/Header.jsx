import Link from "next/link";

export default function Header() {
  return (
    <div className="bg-white ">
      <div className="max-w-[1216px] w-full h-full m-auto">
        <div className="flex justify-between items-center container max-w-[1216px] py-[50px] fixed z-[1] bg-white">
          <div className="">
            <Link href="/">
              <img width={150} height={36} src="/Logo.png" alt="" />
            </Link>
          </div>
          <div className="text-base text-slate flex gap-10  ">
            <a href="#header">
              <p>About</p>
            </a>
            <a href="#feature">
              <p>Features</p>
            </a>
            <a href="#plan">
              <p>Pricing</p>
            </a>
            <a href="#location">
              <p>Testimonials</p>
            </a>
            <p>Help</p>
          </div>
          <div className="flex items-center gap-7 ">
            <button className="text-black font-bold">Sign in</button>
            <div className="btn btn-outline rounded-3xl w-[150px] font-extrabold hover:bg-red-500 hover:text-white hover:border-red-500 border-red-500 text-red-500 ">
              Sign up
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
