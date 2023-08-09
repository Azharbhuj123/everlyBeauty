import React, { useEffect, useRef, useState } from "react";
import { ProgressBar } from "primereact/progressbar";
import { Toast } from "primereact/toast";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

const Progressbar = ({ discountPercent }) => {
  const [value, setValue] = useState(0);
  const toast = useRef(null);
  const interval = useRef(null);

  useEffect(() => {
    let progressValue = discountPercent;
    if (progressValue > 100) {
      progressValue = 100; // Ensure progressValue does not exceed 100%
    }
    setValue(progressValue);
  }, [discountPercent]);

  return (
    <>
      <Toast ref={toast}></Toast>
      <ProgressBar
        value={value}
        displayValueTemplate={() => `${discountPercent}%`}
      ></ProgressBar>
    </>
  );
};

export default Progressbar;
