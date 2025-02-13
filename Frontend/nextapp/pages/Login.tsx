import React from 'react';
import styles from '../styles/Login.module.css';
import NavbarSimple from '../components/NavbarSimple';
import Link from 'next/link';

const Login: React.FC = () => {
  return (
    <div>
      <NavbarSimple />
      <div className={styles.container}>
        <div className={styles.loginBox}>
          <h2 className={styles.title}>Login</h2>
          <form className={styles.form}>
            <div className={styles.inputGroup}>
              <label htmlFor="email" className={styles.label}>Email</label>
              <input type="email" id="email" className={styles.input} required />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="password" className={styles.label}>Password</label>
              <input type="password" id="password" className={styles.input} required />
            </div>
            <div className={styles['div-castrar-and-button']}>
              <Link href="/ProfileMapping">
              <button className={styles['button']}>
                Cadastre-se
              </button>
              </Link>
              <button type="submit" className={styles.button}>Entrar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;