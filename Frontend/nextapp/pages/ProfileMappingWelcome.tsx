import React from 'react';
import styles from '../styles/ProfileMappingWelcome.module.css';
import NavbarSimple from '../components/NavbarSimple';

const ProfileMappingWelcome = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <NavbarSimple />
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>Seja Bem-vinda, Marina!</h1>
      </div>
    </div>
  );
};

export default ProfileMappingWelcome;