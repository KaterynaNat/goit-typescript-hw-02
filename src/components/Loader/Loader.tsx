import React from "react";
import { Circles } from "react-loader-spinner";
import styles from "./Loader.module.css";

function Loader() {
  return (
    <div className={styles.loader}>
      {" "}
      {}
      <Circles color="#646cff" height={80} width={80} />
    </div>
  );
}

export default Loader;
