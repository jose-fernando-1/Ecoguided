import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import NavbarSimple from '../components/NavbarSimple';
import styles from '../styles/Cadastro.module.css';
import NavbarCadastro from '../components/NavbarCadastro';

const Cadastro = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    email: '',
    cpf: '',
    telefone: '',
    is_guide: false
  });

  const router = useRouter();

  interface FormData {
    username: string;
    password: string;
    confirmPassword: string;
    email: string;
    cpf: string;
    telefone: string;
    is_guide: boolean;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData: FormData) => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleCpfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const formattedCpf = value
      .replace(/\D/g, '') // Remove tudo que não é dígito
      .replace(/(\d{3})(\d)/, '$1.$2') // Coloca um ponto entre o terceiro e o quarto dígitos
      .replace(/(\d{3})(\d)/, '$1.$2') // Coloca um ponto entre o sexto e o sétimo dígitos
      .replace(/(\d{3})(\d{1,2})$/, '$1-$2'); // Coloca um hífen entre o nono e o décimo dígitos
    setFormData((prevFormData: FormData) => ({
      ...prevFormData,
      cpf: formattedCpf
    }));
  };

  const validateCpf = () => {
    const regex = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;
    if (!regex.test(formData.cpf)) {
      alert('CPF inválido!');
      setFormData((prevFormData: FormData) => ({
        ...prevFormData,
        cpf: ''
      }));
    }
  };

  const validatePasswords = () => {
    if (formData.password !== formData.confirmPassword) {
      alert('As senhas não coincidem!');
      setFormData((prevFormData: FormData) => ({
        ...prevFormData,
        confirmPassword: ''
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post<{ token: string }>('http://127.0.0.1:8000/users/signup', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (response.status === 200) {
        const token = response.data.token;
        localStorage.setItem('authToken', token);
        localStorage.setItem('username', formData.username);
        console.log('Cadastro realizado com sucesso:', response.data);
        alert('Cadastro efetuado!');
        router.push('/ProfileMapping');
      } else if (response.status === 400) {
        console.error('Erro ao realizar cadastro:', response.data);
        alert('Erro ao realizar cadastro. Usuário já existe.');
      }
    } catch (error) {
      console.error('Erro ao realizar cadastro:', error);
    }
  };

  return (
    <div>
      <NavbarCadastro />
      <div className={styles.container}>
        <div className={styles.loginBox}>
          <h2 className={styles.title}>Cadastro</h2>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.row}>
              <div className={styles.leftColumn}>
                <div className={styles.inputGroup}>
                  <label htmlFor="username" className={styles.label}>Nome</label>
                  <input type="text" id="username" name="username" className={styles.input} value={formData.username} onChange={handleChange} required />
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="email" className={styles.label}>Email</label>
                  <input type="email" id="email" name="email" className={styles.input} value={formData.email} onChange={handleChange} required />
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="telefone" className={styles.label}>Telefone</label>
                  <input type="text" id="telefone" name="telefone" className={styles.input} value={formData.telefone} onChange={handleChange} required />
                </div>
              </div>
              <div className={styles.rightColumn}>
                <div className={styles.inputGroup}>
                  <label htmlFor="password" className={styles.label}>Senha</label>
                  <input type="password" id="password" name="password" className={styles.input} value={formData.password} onChange={handleChange} required />
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="confirmPassword" className={styles.label}>Confirme a Senha</label>
                  <input type="password" id="confirmPassword" name="confirmPassword" className={styles.input} value={formData.confirmPassword} onChange={handleChange} onBlur={validatePasswords} required />
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="cpf" className={styles.label}>CPF</label>
                  <input type="text" id="cpf" name="cpf" className={styles.input} value={formData.cpf} onChange={handleCpfChange} onBlur={validateCpf} required />
                </div>
              </div>
            </div>
            <div className={styles.divCastrarAndButton}>
              <button type="submit" className={styles.button}>Cadastrar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Cadastro;
