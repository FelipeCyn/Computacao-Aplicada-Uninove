import React from "react";
import styles from "./ImageUploadCircle.module.css";

const ImageUploadCircle = ({ image, onImageUpload }) => {
  return (
    <div
      className={styles.circleContainer}
      onClick={() => document.getElementById("file-input").click()}
    >
      <input
        type='file'
        id='file-input'
        accept='image/*'
        onChange={onImageUpload}
        style={{ display: "none" }}
      />
      {image ? (
        <img className={styles.circleImage} src={image} alt='Uploaded' />
      ) : (
        <span>Sua foto</span>
      )}
    </div>
  );
};

export default ImageUploadCircle;
