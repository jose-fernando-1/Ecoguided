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
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const description = (document.getElementById('description') as HTMLInputElement)
    const style = (document.getElementById('style') as HTMLInputElement)
    const details = (document.getElementById('details') as HTMLInputElement)

    const data = { description, style, details, is_guide: true }
  try {
    const token = localStorage.getItem('sessionToken')
    const response = await fetch('http://127.0.0.1:8000/api/trips/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `token ${token}`
        },
        body: JSON.stringify(data)
    })
    if (response.ok) {
        alert('Passeio cadastrado!');
        router.push('/FeedGuia');
    } else {
        const error = await response.json();
        alert(`Erro: ${error.message}`);
    }
  }
    catch (error) {
      console.error("Erro na requisição:", error);
      alert("Houve um erro ao enviar os dados. Tente novamente.");
  }
  router.push('/FeedGuia')
}

return ( 
  <div>
    <div className={styles.container}>
      <NewNavbar userName="Niciu" />
      <section className={styles.headerSection}>
        <form className={styles['form']} onSubmit={handleSubmit}>
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
                  <button type="button" className={styles.removeImageButton} onClick={() => handleRemoveImage(index)}>
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
                  type="button"
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
              <button type="button" className={styles.deleteButton}>Excluir passeio</button>
              <button type="submit" className={styles.confirmButton}>Confirmar</button>
            </div> 
          </section>
        </form>  
      </section>
    </div>
  </div>
);
}

export default CadastroPasseioGuia
