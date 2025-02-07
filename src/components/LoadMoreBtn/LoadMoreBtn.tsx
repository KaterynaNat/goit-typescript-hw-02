import React from "react";
import styles from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  onClick: () => void;
}

function LoadMoreBtn({ onClick }: LoadMoreBtnProps) {
  return (
    <button onClick={onClick} className={styles.button}>
      Load more
    </button>
  );
}

export default LoadMoreBtn;
