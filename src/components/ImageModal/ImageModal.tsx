import React from "react";
import ReactModal from "react-modal";
import { Image } from "../../types";
import styles from "./ImageModal.module.css";

interface ImageModalProps {
  image: Image;
  onClose: () => void;
}

ReactModal.setAppElement("#root");

function ImageModal({ image, onClose }: ImageModalProps) {
  return (
    <ReactModal
      isOpen={!!image}
      onRequestClose={onClose}
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      <button onClick={onClose} className={styles.closeButton}>
        Close
      </button>
      <img
        src={image.urls.regular}
        alt={image.alt_description}
        className={styles.image}
      />
      <div className={styles.info}>
        <h3>{image.user.name}</h3>
        <p>Likes: {image.likes}</p>
      </div>
    </ReactModal>
  );
}

export default ImageModal;
