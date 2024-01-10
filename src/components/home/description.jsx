import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
// import { SlSocialTwitter } from "react-icons/sl"
export default function Description() {
  return (
    <section
      id=""
      className="z-10 font-fosterama tracking-[0.1rem] text-white/50 bg-cyan-500/20 backdrop-filter backdrop-blur-sm border border-cyan-900/20 rounded-l-md shadow-white"
    >
      <ul
        id="social-links-list"
        className="flex flex-col justify-center gap-20 sm:flex-row sm:justify-evenly items-center w-full h-full p-4 sm:p-12"
      >
        <li>
          <a href="https://www.linkedin.com/in/adelicia/" target="_blank" rel="noreferrer">
          <FaLinkedin size={50} />
          </a>

        </li>
        <li>
          <a href="https://github.com/adelicia-js" target="_blank" rel="noreferrer">
          <FaGithub size={50} />
          </a>
        </li>
        <li>
          <a href="mailto:a.seq2804@gmail.com" target="_blank" rel="noreferrer">
          <MdAlternateEmail size={50} />
          </a>
        </li>
        {/* <li>
          <a href="" target="_blank" rel="noreferrer">
          <SlSocialTwitter size={50}/>
          </a>
        </li> */}
      </ul>
    </section>
      
  );
  
}

