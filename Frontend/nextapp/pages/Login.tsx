import React from 'react';
import styles from '../styles/Login.module.css';
import NavbarSimple from '../components/NavbarSimple';

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
            <button type="submit" className={styles.button}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;