import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import { Image } from "../../types";
import styles from "./ImageGallery.module.css";

interface ImageGalleryProps {
  images: Image[];
  onImageClick: (image: Image) => void;
}

function ImageGallery({ images, onImageClick }: ImageGalleryProps) {
  return (
    <ul className={styles.gallery}>
      {" "}
      {}
      {images.map((image) => (
        <li key={image.id} className={styles.item}>
          {" "}
          {}
          <ImageCard image={image} onClick={() => onImageClick(image)} />
        </li>
      ))}
    </ul>
  );
}

export default ImageGallery;
