import React from 'react';
import styles from '../styles/Equipe.module.css';
import Image from 'next/image';
import img_equipe from '../img/img_equipe.png';

const QuemSomos = () => {
  return (
    <div id="quem-somos" className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.title}>
          Quem Somos <span role="img" aria-label="bird">🕊️</span>
        </h2>
        <p className={styles.description}>
          Bem-vindo à EcoGuided, a plataforma que conecta eco turistas a guias de turismo ecológico apaixonados e experientes. Nossa missão é promover o turismo sustentável, oferecendo experiências únicas que valorizam e protegem o meio ambiente.
        </p>
        <p className={styles.description}>
          Estamos comprometidos com a sustentabilidade em todas as nossas atividades, trabalhando com guias que seguem práticas de turismo responsável e destinando parte dos nossos lucros a projetos de conservação ambiental. Junte-se a nós e descubra a natureza de forma consciente e responsável com a EcoGuided!
        </p>
      </div>
      <div className={styles.imageContainer}>
        <Image src={img_equipe} alt="Equipe EcoGuided" layout="responsive" />
      </div>
    </div>
  );
};

export default QuemSomos;
