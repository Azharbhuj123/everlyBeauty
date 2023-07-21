import React from "react";
import styles from "@/styles/components/button.module.css";
const Button = ({ text, action }) => {
  return (
    <>
      <button className={styles.button} onClick={() => action()}>
        {text}
      </button>
    </>
  );
};

export default Button;
