export default function Location() {
  return (
    <div className="flex flex-col items-center justify-center py-[100px]">
      <div className="flex justify-center flex-col items-center gap-9 pb-12">
        <p className="font-bold text-3xl">Huge Global Network of Fast VPN</p>
        <p className="text-slate-600">
          See <b>LaslesVPN</b> everywhere to make it easier for you when you
          move locations.
        </p>
      </div>
      <img src="./HugeGlobal.png" alt="" width={1060} height={540} />
      <div className="flex justify-center items-center gap-6">
        <img src="./Netflix.png" alt="" width={190} height={60} />
        <img src="./Reddit.png" alt="" width={190} height={60} />
        <img src="./Reddit.png" alt="" width={190} height={60} />
        <img src="./Discord.png" alt="" width={190} height={60} />
        <img src="./Spotify.png" alt="" width={190} height={60} />
      </div>
    </div>
  );
}
