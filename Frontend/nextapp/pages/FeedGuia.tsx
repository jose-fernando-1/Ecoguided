import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/FeedGuia.module.css';
import NavbarCadastro from '../components/NavbarCadastro';
import Carousel from '../components/FeedGuiaCarousel';

const FeedGuia = () => {
  const trips = ['Reserva da Mantiqueira', 'Praia dos Carneiros', 'Cachoeira Diamantina', 'Praia de Porto de Galinhas'];

  return (
    <div className={styles.container}>
      <NavbarCadastro />
      
      <div className={styles.profileSection}>
        <div className={styles.formContainer}>
          <input type="text" placeholder="Nome" />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Cpf" />
          <input type="password" placeholder="Senha" />
          <input type="password" placeholder="Confirmar Senha" />
        </div>
        
        <div className={styles.profileDetails}>
          <Image src="/images/guia.jpg" alt="Foto do Guia" width={250} height={250} className={styles.profileImage} />
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
      <Carousel trips={trips} />
      
      <button className={styles.newTrip}>Novo Passeio</button>
    </div>
  );
};

export default FeedGuia;