import React from "react";
import { Image } from "../../types";
import styles from "./ImageCard.module.css";

interface ImageCardProps {
  image: Image;
  onClick: () => void;
}

function ImageCard({ image, onClick }: ImageCardProps) {
  return (
    <div className={styles.card} onClick={onClick}>
      {" "}
      {}
      <img
        src={image.urls.small}
        alt={image.alt_description}
        className={styles.image}
      />
    </div>
  );
}

export default ImageCard;
