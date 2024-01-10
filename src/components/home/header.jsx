import { useState } from "react";
export default function Header() {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <header id="small-navigation-menu" className="z-30 block sm:hidden fixed text-white">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-[1.5rem] h-[1.5rem] absolute top-8 left-6"
        onClick={toggleNav}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>

      {navOpen && (
        <nav className="absolute top-0 p-8 flex flex-col justify-center h-screen w-screen bg-black ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-[1.5rem] h-[1.5rem] absolute top-8 left-6"
            onClick={toggleNav}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>

          <ul className="flex flex-col items-center justify-between p-8 gap-20 font-fosterama text-3xl tracking-[0.1rem]">
            <li>Skills</li>
            <li>Projects</li>
            <li><a href="./ady-resume.pdf" target="_blank">Resume</a></li>
            <li>Contact</li>
            <li>Blog</li>
          </ul>
        </nav>
      )}
    </header>
  );
}
