// import { useState } from "react";
// import styles from "../styles/ImageUploader.module.css";

// const ImageUploader = ({ onAddImage }: { onAddImage: (event: React.ChangeEvent<HTMLInputElement>) => void }) => {
//   const [images, setImages] = useState<File[]>([]);

//   const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
//     if (event.target.files) {
//       const newImages = Array.from(event.target.files);
//       setImages([...images, ...newImages]);
//       onAddImage(event); // Chama a função passada como prop para adicionar imagens
//     }
//   };

//   return (
//     <div className={styles.container}>
//       <div className={styles.imageGrid}>
//         {images.map((image, index) => (
//           <img key={index} src={URL.createObjectURL(image)} alt="Preview" className={styles.image} />
//         ))}
//         <label className={styles.uploadButton}>
//           +
//           <input type="file" accept="image/*" multiple onChange={handleImageUpload} className={styles.hiddenInput} />
//         </label>
//       </div>
//     </div>
//   );
// };

// export default ImageUploader;

import styles from "../styles/ImageUploader.module.css";

const ImageUploader = ({ onAddImage }: { onAddImage: (event: React.ChangeEvent<HTMLInputElement>) => void }) => {
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      onAddImage(event); 
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.imageGrid}>
        <label className={styles.uploadButton}>
          +
          <input type="file" accept="image/*" multiple onChange={handleImageUpload} className={styles.hiddenInput} />
        </label>
      </div>
    </div>
  );
};

export default ImageUploader;