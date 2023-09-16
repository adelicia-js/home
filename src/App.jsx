import "./index.css";
import "./App.css"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function App() {
  return (
    <div id="App" className={`text-center bg-gradient-to-b from-cyan-300 via-cyan-200 to-cyan-400`}>
      <header id="App-header" className={`min-h-screen flex flex-col items-center justify-center text-black`}>
        <h1 id="Animated-Header" className={`font-bold pb-2`}>Hi, I{`'`}m Adelicia.</h1>
        <div>
          <h2 id="Socials-header" className={`font-bold text-emerald-800 pb-4`}>Connect with me</h2>
          <ul id="Socials-list" className={`flex flex-row justify-center gap-5 text-emerald-800`}>
            <a target="_blank" rel="noreferrer" href="https://www.github.com/adelicia-js"><GitHubIcon fontSize="large"/></a>
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/adelicia"><LinkedInIcon fontSize="large"/></a>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
