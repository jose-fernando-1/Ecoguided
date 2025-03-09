import Image from 'next/image';
import styles from '../styles/FeedGuia.module.css';
import NavbarCadastro from '../components/NavbarCadastro';
import Carousel from '../components/FeedGuiaCarousel';
import router from 'next/router';
import { useEffect, useState } from 'react';
import NewNavbar from '../components/NewNavbar';
import ImagemGuia from '../img/hipster-tourist-looking-city-map.png';

const FeedGuia = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [licenca, setLicenca] = useState('');

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    const storedEmail = localStorage.getItem('email');
    const storedCpf = localStorage.getItem('cpf');
    const storedLicenca = localStorage.getItem('licenca');

    if (storedUsername) setUsername(storedUsername);
    if (storedEmail) setEmail(storedEmail);
    if (storedCpf) setCpf(storedCpf);
    if (storedLicenca) setLicenca(storedLicenca);
  }, []);


  const handleNewTrip = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push('/CadastroPasseioGuia');
  };

  return (
    <div className={styles.container}>
      <NewNavbar/>

      <div className={styles.profileSection}>
        <div className={styles.formContainer}>
          <input type="text" placeholder="Nome" value={username} readOnly />
          <input type="email" placeholder="Email" value={email} readOnly />
          <input type="text" placeholder="Cpf" value={cpf} readOnly />
          <input type="text" placeholder="Licença" value={licenca} readOnly />
        </div>

        <div className={styles.profileDetails}>
          <Image src={ImagemGuia} alt="Foto do Guia" width={250} height={250} className={styles.profileImage} />
          <h2>Biografia</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <h2>Certificações</h2>
          <p>CRPST - Certificado de Registro de Prestador de Serviços Turísticos</p>
          <div className={styles.rating}>
            {'★★★★★'}
          </div>
          <div className={styles.buttons}>
            <button className={styles.edit}>Editar</button>
            <button className={styles.cancel}>Cancelar</button>
            <button className={styles.confirm}>Confirmar</button>
          </div>
        </div>
      </div>

      <h2>Qual o seu estilo de ecotrip?</h2>
      <div className={styles.tags}>
        {['Observação de Pássaros', 'Água Trekking', 'Trilhas e Caminhadas', 'Eco-Diving', 'Arborismo', 'Passeios a Cavalo', 'Canoagem e Caiaque', 'Ciclismo de Montanha'].map(tag => (
          <button key={tag}>{tag}</button>
        ))}
      </div>

      <h2>Passeios</h2>
      <Carousel />
      <button className={styles.newTrip} onClick={handleNewTrip}>
        Novo Passeio
      </button>
    </div>
  );
};

export default FeedGuia;