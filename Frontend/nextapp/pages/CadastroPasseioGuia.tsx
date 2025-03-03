import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import styles from '../styles/CadastroPasseioGuia.module.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useRouter } from 'next/router';
import NewNavbar from '../components/NewNavbar';
import ImageUploader from '../components/ImageUploader';

const citiesOfBrazil = [
  'São Paulo', 'Rio de Janeiro', 'Salvador', 'Brasília', 'Fortaleza', 'Belo Horizonte',
  'Manaus', 'Curitiba', 'Recife', 'Goiânia', 'Belém', 'Porto Alegre', 'Guarulhos',
  'Campinas', 'São Luís', 'Maceió', 'Natal', 'Teresina', 'Campo Grande'
];

const CadastroPasseioGuia = () => {
  const router = useRouter();

  const [images, setImages] = useState<string[]>([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedTrips, setSelectedTrips] = useState<number[]>([]);
  const [location, setLocation] = useState<string>('Recife');
  const [date, setDate] = useState('');
  const [maxParticipants, setMaxParticipants] = useState<number | ''>('');
  const [price, setPrice] = useState<number | ''>('');

  const ecoTripStyles = [
    { key: 'trilha', label: 'Trilhas e Caminhadas' },
    { key: 'passaro', label: 'Observação de Pássaros' },
    { key: 'aqua', label: 'Aqua Trekking' },
    { key: 'ecodiving', label: 'Eco-Diving' },
    { key: 'arborismo', label: 'Arborismo' },
    { key: 'cavalo', label: 'Passeios a Cavalo' },
    { key: 'canoa', label: 'Canoagem e Caiaque' },
    { key: 'ciclismo', label: 'Ciclismo de Montanha' },
  ];
  
  useEffect(() => {
    const storedTitle = localStorage.getItem('title');
    if (storedTitle) {
      setTitle(storedTitle);
    }
  
    const storedDescription = localStorage.getItem('description');
    if (storedDescription) {
      setDescription(storedDescription);
    }
  
    const storedLocation = localStorage.getItem('location');
    if (storedLocation) {
      setLocation(storedLocation);
    }
  
    const storedDate = localStorage.getItem('date');
    if (storedDate) {
      setDate(storedDate);
    }
  
    const storedMaxParticipants = localStorage.getItem('maxParticipants');
    if (storedMaxParticipants) {
      setMaxParticipants(Number(storedMaxParticipants));
    }
  
    const storedPrice = localStorage.getItem('price');
    if (storedPrice) {
      setPrice(Number(storedPrice));
    }
  
    const storedTrips = localStorage.getItem('selectedTrips');
    if (storedTrips) {
      setSelectedTrips(JSON.parse(storedTrips));
    }
  }, []);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
    localStorage.setItem('title', e.target.value);
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
    localStorage.setItem('description', e.target.value);
  };

  const handleLocationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLocation(e.target.value);
    localStorage.setItem('location', e.target.value);
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value)
    localStorage.setItem('date', e.target.value);
  };

  const handleParticipantsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setMaxParticipants(value);
    localStorage.setItem('maxParticipants', value.toString());
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setPrice(value > 0 ? value : '');
    localStorage.setItem('price', value.toString());
  }

  const handleSelectedTripsChange = (tripKey: string) => {
    setSelectedTrips(prevSelectedTrips => {
      const updatedTrips = prevSelectedTrips.includes(tripKey)
        ? prevSelectedTrips.filter(key => key !== tripKey) 
        : [...prevSelectedTrips, tripKey]; 
  
      localStorage.setItem('selectedTrips', JSON.stringify(updatedTrips));
      return updatedTrips;
    });
  };

  const handleAddImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const newImages = Array.from(event.target.files).map(file => URL.createObjectURL(file));
      setImages(prevImages => [...prevImages, ...newImages]);
    }
  };

  const handleRemoveImage = (index: number) => {
    setImages(prevImages => prevImages.filter((_, i) => i !== index));
  };

  const toggleTripSelection = (trip: string) => {
    setSelectedTrips(prevSelectedTrips =>
      prevSelectedTrips.includes(trip)
        ? prevSelectedTrips.filter(t => t !== trip)
        : [...prevSelectedTrips, trip]
    );
  };

  const convertDateToDjangoFormat = (dateString: string) => {
    const [year, month, day] = dateString.split('-');
    return `${year}-${month}-${day}`;
  };

  const handleSubmit = async () => {
    const formattedDate = convertDateToDjangoFormat(date);
    const data = {
      title: title,
      description: description,
      location: location,
      is_guide: true,
      date: formattedDate,
      max_participants: maxParticipants,
      price: price,
      tags: selectedTrips,
    };

    console.log('Dados enviados:', data); 

    const token = localStorage.getItem('sessionToken');
    if (!token) {
      alert("Erro: Usuário não autenticado.");
      return;
    }

    try {
      const response = await fetch('http://127.0.0.1:8000/api/trips/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `token ${token}`
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        alert('Passeio cadastrado com sucesso!');
        router.push('/FeedGuia');
      } else {
        const error = await response.json();
        console.log('Erro na resposta da API:', error);
        alert(`Erro: ${error.message}`);
      } 
    } catch (error) {
      console.error("Erro na requisição:", error);
      alert("Houve um erro ao enviar os dados. Tente novamente.");
    }
  }

  return (
    <div>
      <div className={styles.container}>
        <NewNavbar userName="Niciu" />
        <section className={styles.headerSection}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <input
              type="text"
              className={styles.titleInput}
              value={title}
              onChange={handleTitleChange}
              placeholder="Digite o título aqui..."
            />

            <section className={styles.imageGalleryContainer}>
              {images.length > 0 ? (
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
                      <div className={styles.imageContainer}>
                        <Image src={image} alt={`Imagem ${index}`} width={200} height={200} className={styles.image} />
                        <button type="button" className={styles.removeImageButton} onClick={() => handleRemoveImage(index)}>
                          Remover
                        </button>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              ) : (
                <div className={styles.noImagesMessage}>
                  Nenhuma imagem adicionada. Adicione imagens para que os turistas possam ver o seu passeio.
                </div>
              )}
              <ImageUploader onAddImage={handleAddImage} />
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
                {ecoTripStyles.map(({ key, label }) => (
                  <button
                    type="button"
                    key={key}
                    className={`${styles.tripButton} ${selectedTrips.includes(key) ? styles.selected : ''}`}
                    onClick={() => handleSelectedTripsChange(key)}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </section>

            <section className={styles.detailsSection}>
              <h2 className={styles.detailsTitle}>Detalhes</h2>
              <div className={styles.detailsGrid}>
                <input
                  type="number"
                  placeholder="Quantidade de participantes"
                  className={styles.detailInput}
                  value={maxParticipants}
                  onChange={handleParticipantsChange}
                />
                <input
                  type="date"
                  placeholder="Data / Horário"
                  className={styles.detailInput}
                  value={date}
                  onChange={handleDateChange} 
                />
                <select
                  className={styles.detailInput}
                  value={location}
                  onChange={handleLocationChange} 
                >
                  {citiesOfBrazil.map((city) => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
                <input
                  type="number"
                  placeholder="Preço"
                  className={styles.detailInput}
                  value={price}
                  onChange={handlePriceChange} 
                />
              </div>

              <div className={styles.actionButtons}>
                <button type="button" className={styles.deleteButton}>Excluir passeio</button>
                <button type="submit" className={styles.confirmButton} onClick={handleSubmit}>Confirmar</button>
              </div>
            </section>
          </form>
        </section>
      </div>
    </div>
  );
};

export default CadastroPasseioGuia;
