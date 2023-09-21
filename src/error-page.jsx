import { useRouteError } from "react-router-dom";
import CottageRoundedIcon from "@mui/icons-material/CottageRounded";
import "./index.css";
import "./App.css";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      id="error-page"
      className={`min-h-screen bg-gradient-to-b from-cyan-300 via-cyan-200 to-cyan-400 flex flex-col items-center justify-center`}
    >
      <h1 className={`animated text-6xl font-bold pb-2`}>OOPS!</h1>
      <h2 className={`animated text-l`}>Page does not exist.</h2>
      <a className={`text-3xl text-emerald-900 icons`} href="/">
        <CottageRoundedIcon sx={{ fontSize: 40 }} />
      </a>
    </div>
  );
}
