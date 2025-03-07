import React from 'react';
import styles from '../styles/Login.module.css';
import NavbarSimple from '../components/NavbarSimple';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Login: React.FC = () => {

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const username = (document.getElementById('username') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;

    if (!username || !password) {
      alert('Preencha todos os campos');
      return;
    }

    const data = { username, password };

    try {
      const response = await fetch('http://127.0.0.1:8000/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      console.log('Response:', response);

      if (response.ok) {
        const responseData = await response.json();
        const token = responseData.token;
        const licenca = responseData.user.licenca; 
        localStorage.setItem('sessionToken', token);
        localStorage.setItem('username', username);
        localStorage.setItem('licenca', licenca); 
        alert('Login efetuado');

        if (licenca) {
          router.push('/FeedGuia');
        } else {
          router.push('/FeedCliente');
        }
      } else {
        const error = await response.json();
        console.log('Error Response:', error);
        alert(`Erro: ${error.message}`);
      }

    } catch (error) {
      console.error("Erro na requisição:", error);
      alert("Houve um erro ao enviar os dados. Tente novamente.");
    }
  }

  return (
    <div>
      <NavbarSimple />
      <div className={styles.container}>
        <div className={styles.loginBox}>
          <h2 className={styles.title}>Login</h2>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <label htmlFor="username" className={styles.label}>Username</label>
              <input type="text" id="username" className={styles.input} required />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="password" className={styles.label}>Password</label>
              <input type="password" id="password" className={styles.input} required />
            </div>
            <div className={styles['div-cadastrar-and-button']}>
              <Link href="/Cadastro" className={styles['button']}>
                Cadastre-se
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