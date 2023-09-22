import CottageRoundedIcon from "@mui/icons-material/CottageRounded";
import { useState } from "react";
import { pdfjs, Document, Page } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

export default function Resume() {
  const resume = "./ady-resume.pdf";
  const [numPages, setNumPages] = useState(null);
  const [pageNum, setPageNum] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const goToPrevPage = () => {
    setPageNum(
      pageNum - 1 <= 1 // check if pageNum is now <= 1
        ? 1 // if so, set pageNum to 1
        : pageNum - 1 // else, decrement pageNum
    );
  };

  const goToNextPage = () => {
    setPageNum(
      pageNum + 1 >= numPages // check if pageNum is now >= total pages (max)
        ? numPages // if so, set pageNum to max
        : pageNum + 1 // else, increment pageNum
    );
  };

  return (
    <div
      className={`px-4 text-center min-h-screen bg-gradient-to-b from-cyan-300 via-cyan-200 to-cyan-400 flex flex-col items-center justify-center`}
    >
      <a className={`text-3xl text-emerald-900 icons`} href="/">
        <CottageRoundedIcon sx={{ fontSize: 40 }} />
      </a>{" "}
      <div className="pdf-container">
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
    </div>
    </div>
  );
}
