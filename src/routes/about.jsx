import CottageRoundedIcon from "@mui/icons-material/CottageRounded";

export default function AboutMe() {
  return (
    <div
      className={`px-4 text-center min-h-screen bg-gradient-to-b from-cyan-300 via-cyan-200 to-cyan-400 flex flex-col items-center justify-center`}
    >
      <h1 className={`text-3xl font-bold pb-4`}>Hi! I{`'`}m Ady. :{`)`} </h1>
      <h2 className={`text-s sm:text-l pb-1`}>A graduate student from Bengaluru, India.</h2>
      <h2 className={`text-s sm:text-l pb-4`}>Also a frontend web developer, artist & cat enthusiast.</h2>
      <h3 className={`text-xs pb-4`}>{`[`}This page is currently still being worked on.{`]`}</h3>
      <a className={`text-3xl text-emerald-900 icons`} href="/">
        <CottageRoundedIcon sx={{ fontSize: 40 }} />
      </a>{" "}
    </div>
  );
}
