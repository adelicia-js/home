import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import KeyboardDoubleArrowDownRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowDownRounded";
import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded";
import AlternateEmailRoundedIcon from "@mui/icons-material/AlternateEmailRounded";

export default function Root() {
  return (
    <div
      id="home"
      className={`text-center bg-gradient-to-b from-teal-500 via-emerald-300 to-cyan-600`}
    >
      <header
        id="header"
        className={`min-h-screen grid grid-rows-3 items-center justify-center text-black`}
      >
        <section className={`row-start-2`}>
          <h1
            id="welcome-text"
            className={`animated text-shadow-sea font-bold pb-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl`}
          >
            Hi, I{`'`}m Adelicia.
          </h1>
          <div>
            <h2
              className={`max-[370px]:text-sm max-[300px]:text-xs text-md md:text-xl sm:text-md font-bold text-emerald-800 pb-2`}
            >
              <span id="intro-line" className="italic changing-me"></span>
            </h2>
            <h2
              // className={`tracking-widest font-normal font-mono max-[400px]:text-[0.70rem] max-[370px]:text-[0.65rem] max-[300px]:text-[0.60rem] text-sm md:text-md sm:text-xs text-emerald-600 pb-4`}
              className={`text-shadow-sea tracking-wider font-normal font-mono max-[400px]:text-[0.65rem] max-[370px]:text-[0.60rem] max-[300px]:text-[0.55rem] text-xs lg:text-[0.9rem] md:text-sm sm:text-xs text-emerald-600 pb-4`}
            >
              React | Next.js | Tailwind | Vite | Node.js | Figma
            </h2>
            <ul
              id="socials"
              className={`flex flex-col justify-center text-emerald-800`}
            >
              <div className={`flex flex-row justify-center gap-5`}>
                <li>
                  <a
                    id="github-link"
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.github.com/adelicia-js"
                  >
                    <GitHubIcon
                      id="github-icon"
                      sx={{ fontSize: 37 }}
                      className={`hover:text-emerald-200`}
                    />
                  </a>
                </li>
                <li>
                  <a
                    id="linkedin-link"
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/adelicia"
                  >
                    <LinkedInIcon
                      id="linkedin-icon"
                      sx={{ fontSize: 40 }}
                      className={`hover:text-emerald-200`}
                    />
                  </a>
                </li>
                <li>
                  <a
                    id="email-link"
                    target="_blank"
                    rel="noreferrer"
                    href="mailto:a.seq@gmail.com"
                  >
                    <AlternateEmailRoundedIcon
                      id="email-icon"
                      sx={{ fontSize: 39 }}
                      className={`hover:text-emerald-200`}
                    />
                  </a>
                </li>
              </div>
            </ul>
          </div>
        </section>
        <section className={`row-start-3`}>
          <a href="#menu">
            <KeyboardDoubleArrowDownRoundedIcon
              sx={{ fontSize: 50 }}
              className={`scroll-down absolute top-3/4 text-emerald-900`}
            />
          </a>
        </section>
      </header>
      <main
        id="menu"
        className={`text-center pt-4 min-h-screen grid grid-rows-4 items-center justify-around text-black text-l sm:text-2xl`}
      >
        <div
          className={`text-shadow-sea sm:hover:tracking-[0.08rem] uppercase text-emerald-900 hover:text-emerald-200 hover:font-semibold min-[500px]:hover:underline min-[500px]:hover:underline-offset-[10px] min-[500px]:hover:decoration-2 row-start-1 `}
        >
          <a href="/me">About Me</a>
        </div>
        <div
          className={`text-shadow-sea sm:hover:tracking-[0.08rem] uppercase text-emerald-900 hover:text-emerald-200 hover:font-semibold min-[500px]:hover:underline min-[500px]:hover:underline-offset-[10px] min-[500px]:hover:decoration-2 row-start-2 `}
        >
          <a href="/projects">My Projects</a>
        </div>
        <div
          className={`text-shadow-sea sm:hover:tracking-[0.08rem] uppercase text-emerald-900 hover:text-emerald-200 hover:font-semibold min-[500px]:hover:underline min-[500px]:hover:underline-offset-[10px] min-[500px]:hover:decoration-2 row-start-3 `}
        >
          <a href="./ady-resume.pdf" target="_blank">My Resume</a>
        </div>
        <div
          className={`text-emerald-900 row-start-4 flex flex-col gap-16 items-center`}
        >
          <a href="/">
            <ArrowUpwardRoundedIcon
              sx={{ fontSize: 45 }}
              className={`absolute scroll-down`}
            />
          </a>
          <div>
            <p className="text-md sm:text-lg md:text-xl italic uppercase sm:pb-2 pb-1 ">
              <span className="text-lg sm:text-xl md:text-2xl not-italic"> 🧜🏽‍♀️ </span>
              <span>
                Thank you for visiting{" "}
              </span>
              <span className="text-lg sm:text-xl md:text-2xl not-italic"> 🌴 </span>
            </p>
            <a
              href="https://github.com/adelicia-js/home"
              target="_blank"
              rel="noreferrer"
            >
              <p className="text-shadow-sea text-sm sm:text-md md:text-lg font-semibold hover:underline hover:underline-offset-8 hover:decoration-2">
                <span className="tracking-wide"> Source</span> |{" "}
                <span className="text-emerald-400">2023 - 2024 </span>
              </p>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
