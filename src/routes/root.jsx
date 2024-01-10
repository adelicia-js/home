import Header from "../components/home/header";
import Introduction from "../components/home/intro";
import NavMenu from "../components/home/navMenu";
import Description from "../components/home/description";

export default function Root() {
  return (
    <div id="home" className="min-h-screen bg-black">
        <Header />
      <main className="z-20 min-h-screen px-4 py-20 mobile-lg:px-8 mobile-lg:py-32  md:p-32 grid grid-rows-2 grid-cols-1 md:grid-cols-2 md:grid-rows-3 gap-6 content-center bg-slate-400/10">
        <Introduction />
        <NavMenu />
        <Description />
      </main>
    </div>
  );
}
