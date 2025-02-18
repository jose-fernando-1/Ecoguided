import { useState } from "react";
import styles from "../styles/ImageUploader.module.css";

const ImageUploader = () => {
  const [images, setImages] = useState<File[]>([]);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setImages([...images, ...Array.from(event.target.files)]);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.imageGrid}>
        {images.map((image, index) => (
          <img key={index} src={URL.createObjectURL(image)} alt="Preview" className={styles.image} />
        ))}
        <label className={styles.uploadButton}>
          +
          <input type="file" accept="image/*" multiple onChange={handleImageUpload} />
        </label>
      </div>
    </div>
  );
};

export default ImageUploader;
