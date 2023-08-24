import "./App.css";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="Animated-Header">Hi, I'm Adelicia.</h1>
        <div>
          <h2 className="Socials-header">Connect with me</h2>
          <ul className="Socials-list">
            <a target="_blank" rel="noreferrer" href="https://www.github.com/adelicia-js"><GitHubIcon fontSize="large"/></a>
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/adelicia"><LinkedInIcon fontSize="large"/></a>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
