

import React, { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import styles from '../styles/CadastroPasseioGuia.module.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import NavbarSimple from '../components/NavbarSimple';
import img_montanha from '../img/img_montanha.jpeg'
import { useRouter } from 'next/router';
import NewNavbar from '../components/NewNavbar';

const CadastroPasseioGuia = () => {
  const router = useRouter(); 

  const handleConfirm = () => {
    router.push('/FeedGuia2')
  };

  const [images, setImages] = useState<string[]>([img_montanha.src, img_montanha.src, img_montanha.src, img_montanha.src]);
  const [description, setDescription] = useState('')
  const [selectedTrips, setSelectedTrips] = useState<string[]>([])

  const handleAddImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const newImages = Array.from(event.target.files).map(file => URL.createObjectURL(file));
      setImages(prevImages => [...prevImages, ...newImages]);
    }
  };

  const handleRemoveImage = (index: number) => {
    setImages(prevImages => prevImages.filter((_, i) => i !== index));
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };

  const toggleTripSelection = (trip: string) => {
    setSelectedTrips(prevSelectedTrips =>
      prevSelectedTrips.includes(trip)
        ? prevSelectedTrips.filter(t => t !== trip)
        : [...prevSelectedTrips, trip]
    );
  };

  return (
    <div>
    <div className={styles.container}>
      <NewNavbar userName="Niciu" />
        <section className={styles.headerSection}>
          <h1 className={styles.title}>Reserva da Mantiqueira</h1>

          <section className={styles.imageGalleryContainer}>
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={10}
              slidesPerView={4} 
              navigation
              pagination={{ clickable: true }}
              className={styles.imageCarousel}
            >
              {images.map((image, index) => (
                <SwiperSlide key={index} className={styles.imageSlide}>
                  <Image src={image} alt={`Imagem ${index}`} width={500} height={500} className={styles.image} />
                  <button className={styles.removeImageButton} onClick={() => handleRemoveImage(index)}>
                    Remover
                  </button>
                </SwiperSlide>
              ))}
            </Swiper>

            <label className={styles.addImageButton}>
              Adicionar Imagem
              <input type="file" multiple accept="image/*" onChange={handleAddImage} className={styles.hiddenInput} />
            </label>

            <textarea
              className={styles.descriptionInput}
              placeholder="Digite a descrição aqui..."
              value={description}
              onChange={handleDescriptionChange}
            />
          </section>
        </section>

        <section className={styles.ecoTripStyles}>
          <h2 className={styles.subtitle}>
            Qual o seu estilo de <span className={styles.highlight}>ecotrip</span>?
          </h2>
          <div className={styles.buttonGroup}>
            {[
              'Observação de Pássaros', 'Aqua Trekking', 'Trilhas e Caminhadas',
              'Eco-Diving', 'Arborismo', 'Passeios a Cavalo',
              'Canoagem e Caiaque', 'Ciclismo de Montanha'
            ].map(trip => (
              <button
                key={trip}
                className={`${styles.tripButton} ${selectedTrips.includes(trip) ? styles.selected : ''}`}
                onClick={() => toggleTripSelection(trip)}
              >
                {trip}
              </button>
            ))}
          </div>
        </section>

        <section className={styles.detailsSection}>
          <h2 className={styles.detailsTitle}>Detalhes</h2>
          <div className={styles.detailsGrid}>
            <input type="text" placeholder="Eco Turistas" className={styles.detailInput} />
            <input type="text" placeholder="Data / Horário" className={styles.detailInput} />
            <input type="text" placeholder="Localização" className={styles.detailInput} />
            <input type="text" placeholder="Roteiros / Translados" className={styles.detailInput} />
            <input type="text" placeholder="Itens / Recomendações" className={styles.detailInput} />
            <input type="text" placeholder="Preço" className={styles.detailInput} />
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
