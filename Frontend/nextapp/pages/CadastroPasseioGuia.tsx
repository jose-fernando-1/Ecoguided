import React, { useState } from 'react';
import styles from '../styles/CadastroPasseioGuia.module.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import img_chapada from '../img/img_chapada.jpg';
import NavbarSimple from '../components/NavbarSimple';
import Images from '../components/Images';

const CadastroPasseioGuia = () => {
const [images, setImages] = useState([img_chapada, img_chapada, img_chapada])
const [description, setDescription] = useState('')

  const handleAddImage = () => {
    setImages([...images, img_chapada])
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };

//   const handleSaveDescription = () => {
//     console.log('Descrição salva:', description); 
//     alert('Descrição salva com sucesso!')
//   };

  return (
    <div>
      <NavbarSimple />
      <div className={styles.container}>
        <section className={styles.headerSection}>
          <h1 className={styles.title}>Reserva da Mantiqueira</h1>
        <section className={styles.mostWanted}>
        <Images />
        </section>
        <button className={styles.addImageButton} onClick={handleAddImage}>
            Adicionar Imagem
          </button>
          <textarea
            className={styles.descriptionInput}
            placeholder="Digite a descrição aqui..."
            value={description} 
            onChange={handleDescriptionChange} 
          />
          {/* <button
            className={styles.saveButton}
            onClick={handleSaveDescription}
          >
            Salvar Descrição
          </button> */}
        </section>
        <section className={styles.ecoTripStyles}>
          <h2 className={styles.subtitle}>Qual o seu estilo de <span className={styles.highlight}>ecotrip</span>?</h2>
          <div className={styles.buttonGroup}>
            <button className={styles.tripButton}>Observação de Pássaros</button>
            <button className={styles.tripButton}>Aqua Trekking</button>
            <button className={styles.tripButton}>Trilhas e Caminhadas</button>
            <button className={styles.tripButton}>Eco-Diving</button>
            <button className={styles.tripButton}>Arborismo</button>
            <button className={styles.tripButton}>Passeios a Cavalo</button>
            <button className={styles.tripButton}>Canoagem e Caiaque</button>
            <button className={styles.tripButton}>Ciclismo de Montanha</button>
          </div>
        </section>

        <section className={styles.detailsSection}>
  <h2 className={styles.detailsTitle}>Lorem</h2>
  <div className={styles.detailsGrid}>
    <input
      type="text"
      placeholder="Eco Turistas" 
      className={styles.detailInput}
    />
    <input
      type="text"
      placeholder="Data / Horário"
      className={styles.detailInput}
    />
    <input
      type="text"
      placeholder="Localização"
      className={styles.detailInput}
    />
    <input
      type="text"
      placeholder="Roteiros / Translados"
      className={styles.detailInput}
    />
    <input
      type="text"
      placeholder="Itens / Recomendações"
      className={styles.detailInput}
    />
    <input
      type="text"
      placeholder="Preço"
      className={styles.detailInput}
    />
  </div>
  <div className={styles.actionButtons}>
    <button className={styles.deleteButton}>Excluir passeio</button>
    <button className={styles.confirmButton}>Confirmar</button>
  </div>
</section>
      </div>
    </div>
  );
};

export default CadastroPasseioGuia;
