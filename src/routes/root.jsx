import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import KeyboardDoubleArrowDownRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowDownRounded";

export default function Root() {
  return (
    <div
      id="App"
      className={`text-center bg-gradient-to-b from-cyan-300 via-cyan-200 to-cyan-400`}
    >
      <header
        id="App-header"
        className={`min-h-screen grid grid-rows-3 items-center justify-center text-black`}
      >
        <section className={`row-start-2`}>
          <h1 id="Animated-Header" className={`animated font-bold pb-2`}>
            Hi, I{`'`}m Adelicia.
          </h1>
          <div></div>
          <div>
            <h2
              id="Socials-header"
              className={`font-bold text-emerald-800 pb-4`}
            >
              Connect with me
            </h2>
            <ul
              id="Socials-list"
              className={`icons flex flex-col justify-center text-emerald-800`}
            >
              <div className={`flex flex-row justify-center gap-5`}>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.github.com/adelicia-js"
                >
                  <GitHubIcon fontSize="large" />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/adelicia"
                >
                  <LinkedInIcon sx={{ fontSize: 40 }} />
                </a>
              </div>
            </ul>
          </div>
        </section>
        <section className={`row-start-3`}>
          <a className={`icons pt-12 text-emerald-800`} href="#main">
            <KeyboardDoubleArrowDownRoundedIcon sx={{ fontSize: 50 }} />
          </a>
        </section>
      </header>
      <main
        id="main"
        className={`min-h-screen grid grid-cols-3 grid-rows-3 items-center justify-center text-black`}
      >
        <div className={`row-start-2`}>
          <a href="/me">About Me</a>
        </div>
        <div className={`row-start-2`}>
          <a href="/projects">My Projects</a>
        </div>
        <div className={`row-start-2`}>
          <a href="/resume">My Resume</a>
        </div>
      </main>
    </div>
  );
}
