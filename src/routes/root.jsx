import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import KeyboardDoubleArrowDownRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowDownRounded";
import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded";

export default function Root() {
  return (
    <div
      id="home"
      className={`text-center bg-gradient-to-b from-cyan-300 via-emerald-400 to-cyan-300`}
    >
      <header
        id="header"
        className={`min-h-screen grid grid-rows-3 items-center justify-center text-black`}
      >
        <section className={`row-start-2`}>
          <h1
            id="welcome-text"
            className={`animated font-bold pb-2 text-4xl max-[400px]:text-3xl sm:text-6xl`}
          >
            Hi, I{`'`}m Adelicia.
          </h1>
          <div>
            <h2
              id="socials-header"
              className={`font-bold text-emerald-800 py-4 text-xl max-[400px]:text-l sm:text-3xl`}
            >
              Connect with me
            </h2>
            <ul
              id="socials"
              className={`flex flex-col justify-center text-emerald-800`}
            >
              <div className={`flex flex-row justify-center gap-5`}>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.github.com/adelicia-js"
                >
                  <GitHubIcon
                    sx={{ fontSize: 37 }}
                    className={`hover:text-emerald-200`}
                  />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/adelicia"
                >
                  <LinkedInIcon
                    sx={{ fontSize: 39 }}
                    className={`hover:text-emerald-200`}
                  />
                </a>
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
        className={`pt-4 min-h-screen grid grid-cols-3 grid-rows-4 items-center justify-around text-black`}
      >
        <div
          className={`sm:hover:tracking-[0.08rem] uppercase text-emerald-900 hover:text-emerald-200 hover:font-semibold sm:hover:underline sm:hover:underline-offset-[10px] row-start-1 col-start-2 text-xl sm:text-2xl`}
        >
          <a href="/me">About Me</a>
        </div>
        <div
          className={`sm:hover:tracking-[0.08rem] uppercase text-emerald-900 hover:text-emerald-200 hover:font-semibold sm:hover:underline sm:hover:underline-offset-[10px] row-start-2 col-start-2 text-xl sm:text-2xl`}
        >
          <a href="/projects">My Projects</a>
        </div>
        <div
          className={`sm:hover:tracking-[0.08rem] uppercase text-emerald-900 hover:text-emerald-200 hover:font-semibold sm:hover:underline sm:hover:underline-offset-[10px] row-start-3 col-start-2 text-xl sm:text-2xl`}
        >
          <a href="/resume">My Resume</a>
        </div>
        <div className={`text-emerald-900 row-start-4 col-start-2`}>
          <a href="#">
            <ArrowUpwardRoundedIcon
              sx={{ fontSize: 45 }}
              className={`absolute scroll-down`}
            />
          </a>
        </div>
      </main>
    </div>
  );
}
