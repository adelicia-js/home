export default function Introduction() {
  return (
    <section
      id="introduction-section"
      className="z-10 grid grid-cols-2 grid-rows-1 p-12 md:col-start-1 md:row-span-2 bg-cyan-500/20 backdrop-filter backdrop-blur-sm border border-cyan-900/20 rounded-l-md shadow-sea-glass shadow-cyan-900/20 text-white/50"
    >
      <div className="col-start-1 self-center flex flex-col gap-4 font-fosterama tracking-[0.15rem] text-left">
        <p className="flex flex-row gap-2 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-[1.5rem] h-[1.5rem] animate-waving"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.05 4.575a1.575 1.575 0 1 0-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 0 1 3.15 0v1.5m-3.15 0 .075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 0 1 3.15 0V15M6.9 7.575a1.575 1.575 0 1 0-3.15 0v8.175a6.75 6.75 0 0 0 6.75 6.75h2.018a5.25 5.25 0 0 0 3.712-1.538l1.732-1.732a5.25 5.25 0 0 0 1.538-3.712l.003-2.024a.668.668 0 0 1 .198-.471 1.575 1.575 0 1 0-2.228-2.228 3.818 3.818 0 0 0-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0 1 16.35 15m.002 0h-.002"
            />
          </svg>
          <span className="text-3xl">Hi there!</span>
        </p>

        <h1 className="text-6xl">I{`'`}m Adelicia.</h1>
      </div>

      <div className="col-start-2 justify-self-center self-center w-fit h-fit rounded-full border border-cyan-900/30 shadow-md shadow-cyan-900/50 p-2 bg-teal-100/40">
        <img
          src="./ady.webp"
          alt="A picture of Ady"
          className="w-52 h-52 rounded-full object-cover object-center border border-cyan-900/30"
        />
      </div>
    </section>
  );
}
