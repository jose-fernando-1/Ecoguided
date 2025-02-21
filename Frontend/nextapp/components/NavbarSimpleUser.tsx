import logo from '../img/img_logo.png';
import heart from '../img/heart.png'
import bell from '../img/bell.png'
import styles from '../styles/Carrinho.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const NavbarSimpleUser = () => {

  const [preview, setPreview] = useState(null);

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className={styles.navbar}>
      <Link href="/" passHref>
        <Image src={logo} alt="Eco-Guided Logo" width={190} height={35} />
      </Link>

      <div className={styles.iconsContainer}>
        <Link href="/" passHref>
          <Image src={heart} alt="Ícone coração" width={20} height={20} />
        </Link>
        <Link href="/" passHref>
          <Image src={bell} alt="Ícone sino" width={20} height={20} style={{ paddingLeft: "5px" }} />
        </Link>

        {/* Área de Upload de Foto integrada no mesmo container */}
        <div className={styles.photoUpload}>
          <label htmlFor="photo-input" className={styles.photoLabel}>
            {preview ? (
              <img src={preview} alt="Preview" className={styles.photoPreview} />
            ) : (
              <span className={styles.photoText}>Upload</span>
            )}
          </label>
          <input
            id="photo-input"
            type="file"
            accept="image/*"
            onChange={handlePhotoChange}
            className={styles.photoInput}
          />
        </div>
      </div>
    </div>
  );
};

export default NavbarSimpleUser;
