export default function Intro() {
  return (
    <div className="flex container">
      <div className="grid grid-cols-2 gap-11 py-[100px]">
        <div className="flex flex-col gap-y-10">
          <p className="font-medium flex text-5xl">
            Want anything to be easy with <b> LaslesVPN.</b>
          </p>
          <p className="text-slate-700">
            Provide a network for all your needs with ease and fun using
            <b> LaslesVPN </b> discover interesting features from us.
          </p>
          <div className="btn btn-error w-[250px] text-white shadow-2xl shadow-red-400">
            Get started
          </div>
        </div>
        <div>
          <img src="/Intro.png" alt="" />
        </div>
      </div>
    </div>
  );
}
