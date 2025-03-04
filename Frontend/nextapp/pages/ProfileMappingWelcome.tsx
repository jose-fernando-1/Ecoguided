import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/ProfileMappingWelcome.module.css';
import imgLogo from '../img/img_logo_2.png';
import Image from 'next/image';

const ProfileMappingWelcome = () => {
  const [username, setUsername] = useState('');
  const router = useRouter();

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }

    const timer = setTimeout(() => {
      router.push('/FeedCliente');
    }, 2500);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className={styles.container}>
      <Image src={imgLogo} alt="Logo" className={styles.logo} />
      <h1 className={styles.text}>Seja Bem-vindo(a), {username}!</h1>
    </div>
  );
};

export default ProfileMappingWelcome;