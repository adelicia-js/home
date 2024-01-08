// import CottageRoundedIcon from "@mui/icons-material/CottageRounded";

export default function AboutMe() {
  return (
    <section
      className={`min-h-screen bg-fixed bg-gradient-to-t from-fuchsia-500/40 to-white flex flex-col items-center justify-center gap-8`}
    >
      <div className="h-screen place-content-center flex flex-col items-center gap-4 text-fuchsia-900/70">
        <h1 className="text-5xl flex flex-row items-center gap-2">
          <span className="whitespace-pre waving">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-[2.6rem] h-[2.6rem]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.05 4.575a1.575 1.575 0 1 0-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 0 1 3.15 0v1.5m-3.15 0 .075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 0 1 3.15 0V15M6.9 7.575a1.575 1.575 0 1 0-3.15 0v8.175a6.75 6.75 0 0 0 6.75 6.75h2.018a5.25 5.25 0 0 0 3.712-1.538l1.732-1.732a5.25 5.25 0 0 0 1.538-3.712l.003-2.024a.668.668 0 0 1 .198-.471 1.575 1.575 0 1 0-2.228-2.228 3.818 3.818 0 0 0-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0 1 16.35 15m.002 0h-.002"
              />
            </svg>
          </span>
          Hi, I{`'`}m Adelicia.
        </h1>
        <div className="flex flex-row gap-4 justify-center items-center text-xl uppercase">
        <a href="#uni" className="hover:underline underline-offset-4">Uni</a>
        <a className="hover:underline underline-offset-4">Art</a>
        <a className="hover:underline underline-offset-4">Work</a>
      </div>
      <div className="rounded-full border border-fuchsia-900/30 shadow-md shadow-fuchsia-900/50 p-2 bg-fuchsia-900/20">
          <img
            src="./ady.webp"
            alt="A picture of Ady"
            className="w-44 h-44 rounded-full object-cover object-center border border-fuchsia-900/30"
          />
        </div>
      </div>

      <div id="uni" className="h-screen flex flex-col place-content-center justify-center items-center  ">
        <p>I{`'`}m a graduate student at St. Joseph{`'`}s University, pursuing Computer Science.</p>
        <p>I{`'`}m currently seeking internship roles in software development.</p>
        <p></p>
      </div>

      {/* Designations - CS Graduate student, currently seeking internships */}
      {/* Fields of interest - web dev, creative fields */}
      {/* Experience - Internships, Uni Stuff */}
      {/* Hobbies - Jewellery Making, Music, Writing*/}
      {/* What drives me */}
      {/* <a className={`text-3xl`} href="/">
        <CottageRoundedIcon sx={{ fontSize: 40 }} />
      </a> */}
    </section>
  );
}
