import CottageRoundedIcon from "@mui/icons-material/CottageRounded";

export default function Projects() {
  return (
    <div
      className={`px-8 text-center min-h-screen bg-gradient-to-b from-teal-400 via-teal-200 to-teal-400 flex flex-col justify-center`}
    >
      <a
        className={`text-3xl text-emerald-900 hover:text-emerald-500 pt-4 pb-8 md:py-4 lg:hidden`}
        href="/"
      >
        <CottageRoundedIcon sx={{ fontSize: 40 }} />
      </a>{" "}
      <div
        className={`text-emerald-900 uppercase grid gap-16 sm:gap-12 grid-cols-3 grid-rows-5 items-center justify-center sm:justify-evenly justify-items-center text-l sm:text-xl md:text-2xl`}
      >
        <a
          href="https://syntaxia2023.web.app/"
          target="_blank"
          rel="noreferrer"
          className={`shadow-md shadow-teal-500/50 hover:shadow-lg hover:shadow-emerald-700/60 hover:cursor-pointer border border-b-4 border-projects-boxes border-emerald-900 hover:tracking-wide hover:border-emerald-700 hover:text-emerald-700 px-4 py-10 sm:py-8 w-50vw lg:w-full sm:h-full lg:h-fit hover:font-bold row-start-1 col-start-2 lg:row-start-1 lg:col-start-2`}
        >
          Syntaxia 2023
        </a>
        <a
          href="https://loyola-website.vercel.app/"
          target="_blank"
          rel="noreferrer"
          className={`shadow-md shadow-teal-500/50 hover:shadow-lg hover:shadow-emerald-700/60 hover:cursor-pointer border border-b-4 border-projects-boxes border-emerald-900 hover:tracking-wide hover:border-emerald-700 hover:text-emerald-700 px-4 py-8 w-50vw lg:w-full sm:h-full lg:h-fit hover:font-bold row-start-2 col-start-2 lg:row-start-2 lg:col-start-2`}
        >
          LDC College Website
        </a>
        <a
          href="https://todo-cra.pages.dev/"
          target="_blank"
          rel="noreferrer"
          className={`shadow-md shadow-teal-500/50 hover:shadow-lg hover:shadow-emerald-700/60 hover:cursor-pointer border border-b-4 border-projects-boxes border-emerald-900 hover:tracking-wide hover:border-emerald-700 hover:text-emerald-700 px-4 py-10 sm:py-8 w-50vw lg:w-full sm:h-full lg:h-fit hover:font-bold row-start-3 col-start-2 lg:row-start-3 lg:col-start-2`}
        >
          To-do App
        </a>
        <a
          href="https://milestone-monitor.vercel.appx/"
          target="_blank"
          rel="noreferrer"
          className={`shadow-md shadow-teal-500/50 hover:shadow-lg hover:shadow-emerald-700/60 hover:cursor-pointer border border-b-4 border-projects-boxes border-emerald-900 hover:tracking-wide hover:border-emerald-700 hover:text-emerald-700 px-4 py-8 sm:py-8 w-50vw lg:w-full sm:h-full lg:h-fit hover:font-bold row-start-4 col-start-2 lg:row-start-4 lg:col-start-2`}
        >
          Milestone Monitor
        </a>
        <a
          className={`text-emerald-900 hover:text-emerald-600 invisible lg:visible lg:row-start-5 lg:col-start-2`}
          href="/"
        >
          <CottageRoundedIcon sx={{ fontSize: 50 }} />
        </a>{" "}
      </div>
    </div>
  );
}
