import { CheckedIcon } from "../../../public/svg/CheckedIcon";

export default function Plan() {
  return (
    <div className="container bg-slate-50">
      <div className="flex flex-col items-center py-20">
        <div className="flex flex-col gap-8 items-center">
          <p className=" font-bold text-4xl">Choose Your Plan</p>
          <p className="text-slate-700">
            Let is choose the package that is best for you and explore it
            happily and cheerfully.
          </p>
        </div>

        <div className="flex gap-20 pt-8">
          <div className="border-2 border-slate-200 w-[330px] h-[760px] rounded-[10px] flex flex-col items-center gap-8 pt-20 bg-white">
            <img src="./Free.png" alt="" width={150} height={165} />
            <p className="font-bold text-lg">Free Plan</p>
            <div className="flex flex-col items-start gap-5">
              <div className="flex gap-5">
                <CheckedIcon />
                <p>Unlimited Bandwitch</p>
              </div>
              <div className="flex gap-5">
                <CheckedIcon />
                <p>Encrypted Connection</p>
              </div>

              <div className="flex gap-5">
                <CheckedIcon />
                <p>No Traffic Logs</p>
              </div>

              <div className="flex gap-5">
                <CheckedIcon />
                <p>Works on All Devices</p>
              </div>
            </div>

            <div className="text-slate-800 flex flex-col items-center gap-4 pt-20">
              <p className="font-bold text-xl">Free</p>
              <div className="btn btn-ghost btn-outline rounded-3xl w-[177px] h-[45px] btn-error">
                Select
              </div>
            </div>
          </div>

          {/* another box */}

          <div className="border-2 border-slate-200 w-[330px] h-[760px] rounded-[10px] flex flex-col items-center gap-8 pt-20 bg-white">
            <img src="./Free.png" alt="" width={150} height={165} />
            <p className="font-bold text-lg">Standard Plan</p>
            <div className="flex flex-col items-start gap-5">
              <div className="flex gap-5">
                <CheckedIcon />
                <p>Unlimited Bandwitch</p>
              </div>
              <div className="flex gap-5">
                <CheckedIcon />
                <p>Encrypted Connection</p>
              </div>

              <div className="flex gap-5">
                <CheckedIcon />
                <p>Yes Traffic Logs</p>
              </div>

              <div className="flex gap-5">
                <CheckedIcon />
                <p>Works on All Devices</p>
              </div>

              <div className="flex gap-5">
                <CheckedIcon />
                <p>Connect Anywhere</p>
              </div>
            </div>

            <div className="text-slate-800 flex flex-col items-center gap-4 ">
              <p className="text-xl">
                <b>$9 </b>/ mo
              </p>
              <div className="btn btn-ghost btn-outline rounded-3xl w-[177px] h-[45px] btn-error">
                Select
              </div>
            </div>
          </div>

          <div className="border-2 border-slate-200 w-[330px] h-[760px] rounded-[10px] flex flex-col items-center gap-8 pt-20 bg-white">
            <img src="./Free.png" alt="" width={150} height={165} />
            <p className="font-bold text-lg">Premium Plan</p>
            <div className="flex flex-col items-start gap-5">
              <div className="flex gap-5">
                <CheckedIcon />
                <p>Unlimited Bandwitch</p>
              </div>
              <div className="flex gap-5">
                <CheckedIcon />
                <p>Encrypted Connection</p>
              </div>

              <div className="flex gap-5">
                <CheckedIcon />
                <p>No Traffic Logs</p>
              </div>

              <div className="flex gap-5">
                <CheckedIcon />
                <p>Works on All Devices</p>
              </div>

              <div className="flex gap-5">
                <CheckedIcon />
                <p>Connect Anywhere</p>
              </div>

              <div className="flex gap-5">
                <CheckedIcon />
                <p>Get New Features</p>
              </div>
            </div>

            <div className="text-slate-800 flex flex-col items-center gap-4 ">
              <p className="text-xl">
                <b>$12 </b>/ mo
              </p>
              <div className="btn btn-ghost btn-outline rounded-3xl w-[177px] h-[45px] btn-error">
                Select
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
