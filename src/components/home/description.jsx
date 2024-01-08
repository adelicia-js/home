import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { SlSocialTwitter } from "react-icons/sl"
export default function Description() {
  return (
    <section
      id=""
      className="z-10 font-fosterama tracking-[0.1rem] text-white/50 bg-cyan-500/20 backdrop-filter backdrop-blur-sm border border-cyan-900/20 rounded-l-md shadow-white"
    >
      <ul
        id="social-links-list"
        className="flex flex-row justify-evenly items-center w-full h-full p-12"
      >
        <li>
          <FaLinkedin size={50} />
        </li>
        <li>
          <FaGithub size={50} />
        </li>
        <li>
          <MdAlternateEmail size={50} />
        </li>
        <li>
          <SlSocialTwitter size={50}/>
        </li>
      </ul>
    </section>
      
  );
  
}

