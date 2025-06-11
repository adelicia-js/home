import CottageRoundedIcon from "@mui/icons-material/CottageRounded";

export default function TestPrj() {
  return (
    <div
      className={`px-8 text-center min-h-screen bg-gradient-to-b from-teal-400 via-teal-200 to-teal-400 flex flex-col justify-center`}
    >
      <a
          className={`text-3xl text-emerald-900 hover:text-emerald-500 pb-8 md:py-4 lg:hidden`}
          href="/"
        >
          <CottageRoundedIcon sx={{ fontSize: 40 }} />
        </a>{" "}
      <div
        className={`text-emerald-900 uppercase grid gap-16 sm:gap-36 grid-cols-3 grid-rows-3 items-center justify-center sm:justify-evenly justify-items-center text-l sm:text-xl md:text-2xl`}
      >
        
        <div
          className={`shadow-md shadow-teal-500/50 hover:shadow-lg hover:shadow-emerald-700/60 hover:cursor-pointer border border-b-4 border-projects-boxes border-emerald-900 hover:tracking-wide hover:border-emerald-700 hover:text-emerald-700 px-4 py-10 sm:py-8 w-50vw lg:w-full sm:h-full lg:h-fit hover:font-bold row-start-1 col-start-2 lg:row-start-2 lg:col-start-1`}
        >
          <a
            href="https://syntaxia2023.web.app/"
            target="_blank"
            rel="noreferrer"
          >
            Syntaxia 2023
          </a>
        </div>
        <div
          className={`shadow-md shadow-teal-500/50 hover:shadow-lg hover:shadow-emerald-700/60 hover:cursor-pointer border border-b-4 border-projects-boxes border-emerald-900 hover:tracking-wide hover:border-emerald-700 hover:text-emerald-700 px-4 py-8 w-50vw lg:w-full sm:h-full lg:h-fit hover:font-bold row-start-2 col-start-2 lg:row-start-2 lg:col-start-2`}
        >
          <a
            href="https://loyola-website.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            LDC College Website
          </a>
        </div>
        <div
          className={`shadow-md shadow-teal-500/50 hover:shadow-lg hover:shadow-emerald-700/60 hover:cursor-pointer border border-b-4 border-projects-boxes border-emerald-900 hover:tracking-wide hover:border-emerald-700 hover:text-emerald-700 px-4 py-10 sm:py-8 w-50vw lg:w-full sm:h-full lg:h-fit hover:font-bold row-start-3 col-start-2 lg:row-start-2 lg:col-start-3`}
        >
          <a
            href="https://todo-cra.pages.dev/"
            target="_blank"
            rel="noreferrer"
          >
            To-do App
          </a>
        </div>
        <a
          className={`text-emerald-900 hover:text-emerald-600 invisible lg:visible lg:row-start-3 lg:col-start-2`}
          href="/"
        >
          <CottageRoundedIcon sx={{ fontSize: 50 }} />
        </a>{" "}
      </div>
      
    </div>
  );
}
