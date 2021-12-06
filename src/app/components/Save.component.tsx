import React from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { Button } from "react-bootstrap";

import { AiOutlineDownload } from "react-icons/ai";

import styles from "../css/Home.module.css";

const Save: React.FC = () => {
  const save = () => {
    const parent = document.getElementById("parent") as HTMLElement;
    html2canvas(parent).then((canvas) => {
      let pdf = new jsPDF({
        orientation: parent.offsetWidth < parent.offsetHeight ? "p" : "l",
        unit: "px",
        format: [parent.offsetWidth, parent.offsetHeight],
      });
      const img = canvas.toDataURL("image/png");
      pdf.addImage(img, "JPEG", 0, 0, parent.offsetWidth, parent.offsetHeight);
      pdf.save("draw.pdf");
    });
  };

  return (
    <div className={`${styles["row-styled"]} ${styles.save}`}>
      <Button variant="outline-primary" onClick={save}>
        <AiOutlineDownload />
      </Button>
    </div>
  );
};

export default Save;
