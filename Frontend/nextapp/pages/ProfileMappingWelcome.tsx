import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/ProfileMappingWelcome.module.css';
import NavbarSimple from '../components/NavbarSimple';

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
      <div className={styles.navbar}>
        <NavbarSimple />
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>Seja Bem-vindo(a), {username}!</h1>
      </div>
    </div>
  );
};

export default ProfileMappingWelcome;