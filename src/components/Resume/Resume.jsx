import React from "react";
import "../Resume/Resume.css";
import pdf from "../../assets/Resume.pdf";
import ResumeSS from "../../assets/ResumeSS.png";

export default function Resume() {
  return (
    <>
      <div className="resume">
        <a href={pdf} target="_blank">
          <img src={ResumeSS} alt="Jordan's Resume" className="resumeImg" />
        </a>
      </div>
    </>
  );
}
