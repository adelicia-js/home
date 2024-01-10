export default function NavMenu() {
  return (
    <nav
      id="large-navigation-menu"
      className="hidden md:flex z-10 md:col-start-2 md:row-span-3 bg-sky-500/20 backdrop-filter backdrop-blur-sm border border-green-700/10 rounded-r-md shadow-white"
    >
      <menu className="flex flex-col justify-evenly items-center text-center gap-8 p-12 w-full text-white/50 text-3xl uppercase font-fosterama tracking-[0.1rem]">
        <li>Skills</li>
        <li>Projects</li>
        <li>
          <a href="./ady-resume.pdf" target="_blank">
            Resume
          </a>
        </li>
        <li>Contact</li>
        <li>Blog</li>
      </menu>
    </nav>
  );
}
