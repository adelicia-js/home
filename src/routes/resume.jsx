import CottageRoundedIcon from "@mui/icons-material/CottageRounded";
// import { useState } from "react";
// import { pdfjs, Document, Page } from "react-pdf";
// import "react-pdf/dist/esm/Page/AnnotationLayer.css";
// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//   "pdfjs-dist/build/pdf.worker.min.js",
//   import.meta.url
// ).toString();

export default function Resume() {
  // const resume = "./ady-resume.pdf";
  // const [numPages, setNumPages] = useState(null);
  // const [pageNum, setPageNum] = useState(1);

  // const onDocumentLoadSuccess = ({ numPages }) => {
  //   setNumPages(numPages);
  // };

  // const goToPrevPage = () => {
  //   setPageNum(
  //     pageNum - 1 <= 1 // check if pageNum is now <= 1
  //       ? 1 // if so, set pageNum to 1
  //       : pageNum - 1 // else, decrement pageNum
  //   );
  // };

  // const goToNextPage = () => {
  //   setPageNum(
  //     pageNum + 1 >= numPages // check if pageNum is now >= total pages (max)
  //       ? numPages // if so, set pageNum to max
  //       : pageNum + 1 // else, increment pageNum
  //   );
  // };

  return (
    <div
      className={`px-4 text-center min-h-screen bg-gradient-to-b from-cyan-300 via-cyan-200 to-cyan-400 flex flex-col items-center justify-center`}
    >
      <h1 className="text-emerald-900 pb-2">
        {`I am currently pursuing a Master's degree in Computer Science, at St. Joseph's University Bengaluru.`}
      </h1>
      <h2 className="text-emerald-900 pb-4">
        My Resume:
        <a
          href="./ady-resume.pdf"
          target="_blank"
          className="underline underline-offset-2 pl-2 hover:underline-offset-4 hover:text-emerald-500"
        >
          Link
        </a>
      </h2>
      <h3 className={`text-xs pb-4`}>{`[`}This page is currently still being worked on.{`]`}</h3>
      {/* <div className="pdf-container">
      <div className="pdf-controls">
        <button onClick={goToPrevPage} disabled={pageNum <= 1}>
          ⬅️
        </button>
        <button onClick={goToNextPage} disabled={pageNum >= numPages}>
          ➡️
        </button>
        <p>Page {pageNum} / {numPages}</p>
      </div>
      <div className="pdf-content">
        <Document file={resume} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNum} />
        </Document>
      </div>
    </div> */}
      <a className={`text-3xl text-emerald-900 hover:text-emerald-500`} href="/">
        <CottageRoundedIcon sx={{ fontSize: 40 }} />
      </a>{" "}
    </div>
  );
}
