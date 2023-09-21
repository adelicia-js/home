import CottageRoundedIcon from "@mui/icons-material/CottageRounded";

export default function Projects() {
    return (
        <div
      className={`min-h-screen bg-gradient-to-b from-cyan-300 via-cyan-200 to-cyan-400 flex flex-col items-center justify-center`}
    >
      <h1 className={`animated text-4xl font-bold pb-4`}>{`[insert magnificent projects here]`}</h1>
      <h3 className={`animated text-xs pb-4`}>{`[`}This page is currently still being worked on.{`]`}</h3>
      <a className={`text-3xl text-emerald-900 icons`} href="/">
        <CottageRoundedIcon sx={{ fontSize: 40 }} />
      </a>{" "}
    </div>
    )
}