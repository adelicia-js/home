import CottageRoundedIcon from "@mui/icons-material/CottageRounded";
import { useState } from "react";

export default function Projects() {
  // States & Functions to add interactive descriptions
  // object anchorStates store visibility states for the respective descriptions of the project anchor elements
  const [anchorStates, setAnchorStates] = useState({});

  const handleMouseEnter = (anchorKey) => {
    setAnchorStates((prevStates) => ({
      ...prevStates,
      [anchorKey]: true,
    }));
  };

  const handleMouseLeave = (anchorKey) => {
    setAnchorStates((prevStates) => ({
      ...prevStates,
      [anchorKey]: false,
    }));
  };

  return (
    <div
      id="projects-wrapper"
      className={`px-8 text-center min-h-screen bg-gradient-to-b from-teal-400 via-teal-200 to-teal-400 flex flex-col justify-center`}
    >
      {/* Back to Home - Small Screens */}
      <a
        id="home-link-small"
        className={`text-3xl text-emerald-900 hover:text-emerald-500 pt-4 pb-8 md:py-4 lg:hidden`}
        href="/"
      >
        <CottageRoundedIcon sx={{ fontSize: 40 }} />
      </a>{" "}
      <div
        id="project-list-wrapper"
        className={`text-emerald-900 uppercase grid gap-12 grid-cols-3 grid-rows-7 items-center justify-center sm:justify-evenly justify-items-center text-l sm:text-xl md:text-2xl`}
      >
        {/* Syntaxia 2023's Website */}
        <a
          id="syntaxia-link"
          href="https://syntaxia2023.web.app/"
          target="_blank"
          rel="noreferrer"
          className={`shadow-md shadow-teal-500/50 hover:shadow-lg hover:shadow-emerald-700/60 hover:cursor-pointer border border-b-4 border-projects-boxes border-emerald-900 hover:tracking-wide hover:border-emerald-700 hover:text-emerald-700 px-4 py-10 sm:py-8 w-50vw lg:w-full sm:h-full lg:h-fit hover:font-bold row-start-1 col-start-2 lg:row-start-1 lg:col-start-2`}
          onMouseEnter={() => handleMouseEnter("syntaxia")}
          onMouseLeave={() => handleMouseLeave("syntaxia")}
        >
          Syntaxia 2023
        </a>
        {anchorStates.syntaxia && (
          <div
            id="syntaxia-description"
            className="row-start-1 col-start-3 text-[0.9rem] text-center normal-case tracking-[0.01em] invisible lg:visible border border-b-4 border-description-boxes border-emerald-900 bg-teal-500 text-emerald-200 px-4"
          >
            <p>Official registration website for Syntaxia 2023.</p>
            <p>
              Built with{" "}
              <span className="font-bold underline underline-offset-4">
                HTML, CSS, JavaScript & Bootstrap
              </span>
              .
            </p>
            <p>
              Hosted with <span className="font-bold">Firebase</span>.
            </p>
          </div>
        )}
        {/* Loyola Degree College's Website */}
        <a
          id="loyola-link"
          href="https://loyola-website.vercel.app/"
          target="_blank"
          rel="noreferrer"
          className={`shadow-md shadow-teal-500/50 hover:shadow-lg hover:shadow-emerald-700/60 hover:cursor-pointer border border-b-4 border-projects-boxes border-emerald-900 hover:tracking-wide hover:border-emerald-700 hover:text-emerald-700 px-4 py-8 w-50vw lg:w-full sm:h-full lg:h-fit hover:font-bold row-start-2 col-start-2 lg:row-start-2 lg:col-start-2`}
          onMouseEnter={() => handleMouseEnter("loyola")}
          onMouseLeave={() => handleMouseLeave("loyola")}
        >
          LDC College Website
        </a>
        {anchorStates.loyola && (
          <div
            id="loyola-description"
            className="row-start-2 col-start-3 text-[0.9rem] text-center normal-case tracking-[0.01em] invisible lg:visible border border-b-4 border-description-boxes border-emerald-900 bg-teal-500 text-emerald-200 px-4"
          >
            <p>Redesigned website for Loyola Degree College.</p>
            <p>
              Built with{" "}
              <span className="font-bold underline underline-offset-4">
                Next.js, React & Tailwind CSS
              </span>
              .
            </p>
            <p>
              Hosted with <span className="font-bold">Vercel</span>.
            </p>
          </div>
        )}
        {/* Simple To-Do Web App */}
        <a
          id="todo-link"
          href="https://todo-cra.pages.dev/"
          target="_blank"
          rel="noreferrer"
          className={`shadow-md shadow-teal-500/50 hover:shadow-lg hover:shadow-emerald-700/60 hover:cursor-pointer border border-b-4 border-projects-boxes border-emerald-900 hover:tracking-wide hover:border-emerald-700 hover:text-emerald-700 px-4 py-10 sm:py-8 w-50vw lg:w-full sm:h-full lg:h-fit hover:font-bold row-start-3 col-start-2 lg:row-start-3 lg:col-start-2`}
          onMouseEnter={() => handleMouseEnter("todo")}
          onMouseLeave={() => handleMouseLeave("todo")}
        >
          To-do App
        </a>
        {anchorStates.todo && (
          <div
            id="todo-description"
            className="row-start-3 col-start-3 text-[0.9rem] text-center normal-case tracking-[0.01em] invisible lg:visible border border-b-4 border-description-boxes border-emerald-900 bg-teal-500 text-emerald-200 px-4"
          >
            <p>Simple To-Do app.</p>
            <p>
              Built with{" "}
              <span className="font-bold underline underline-offset-4">
                React & Tailwind CSS
              </span>
              .
            </p>
            <p>
              Hosted with <span className="font-bold">Cloudflare Pages</span>.
            </p>
          </div>
        )}
        {/* Milestone Monitor*/}
        <a
          id="milestone-monitor-link"
          href="https://milestone-monitor.vercel.app/"
          target="_blank"
          rel="noreferrer"
          className={`shadow-md shadow-teal-500/50 hover:shadow-lg hover:shadow-emerald-700/60 hover:cursor-pointer border border-b-4 border-projects-boxes border-emerald-900 hover:tracking-wide hover:border-emerald-700 hover:text-emerald-700 px-4 py-8 sm:py-8 w-50vw lg:w-full sm:h-full lg:h-fit hover:font-bold row-start-4 col-start-2 lg:row-start-4 lg:col-start-2`}
          onMouseEnter={() => handleMouseEnter("milestone")}
          onMouseLeave={() => handleMouseLeave("milestone")}
        >
          Milestone Monitor
        </a>
        {anchorStates.milestone && (
          <div
            id="milestone-monitor-description"
            className="row-start-4 col-start-3 text-[0.9rem] text-center normal-case tracking-[0.01em] invisible lg:visible border border-b-4 border-description-boxes border-emerald-900 bg-teal-500 text-emerald-200 px-4"
          >
            <p>A cataloguing app for university faculty.</p>
            <p>
              Built with{" "}
              <span className="font-bold underline underline-offset-4">
                Next.js, Supabase & Tailwind CSS
              </span>
              . Hosted with <span className="font-bold">Vercel</span>.
            </p>
          </div>
        )}
        {/* Back to Home - Large Screens*/}
        <a
          className={`text-emerald-900 hover:text-emerald-600 invisible lg:visible lg:row-start-5 lg:col-start-2`}
          href="/"
        >
          <CottageRoundedIcon sx={{ fontSize: 50 }} />
        </a>{" "}
        {/* A description of this website's tech stack.*/}
        <div className="row-start-5 col-span-3 -mt-6 pb-4 lg:mt-0 lg:pb-0 lg:row-start-6 lg:col-span-1 lg:col-start-2 text-xs text-center normal-case tracking-[0.01em]">
          <p>
            This website was built with{" "}
            <span className="font-bold whitespace-pre lg:whitespace-normal">
              Vite, React & Tailwind CSS.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
