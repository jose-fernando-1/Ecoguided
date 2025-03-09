import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import styles from '../styles/FeedGuiaCarousel.module.css';
import Image from 'next/image';
import { useRouter } from 'next/router';
import CachoeiraDiamantina from '../img/cachoeira_diamantina.png';
import PraiaDePortoDeGalinhas from '../img/porto_de_galinha.png';
import PraiaDosCarneiros from '../img/praia_carneiros.png';
import ReservaDaMantiqueira from '../img/Reserva_da_mantiqueira.png';

const FeedGuiaCarousel = () => {
  const [trips, setTrips] = useState<any[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchTrips = async () => {
      const sessionToken = localStorage.getItem('sessionToken');
      if (!sessionToken) {
        alert('Você precisa estar logado.');
        router.push('/login');
        return;
      }

      try {
        const response = await fetch('http://127.0.0.1:8000/api/users/guide_trips', {
          headers: {
            'Authorization': `token ${sessionToken}`
          }
        });
        const data = await response.json();
        setTrips(data);
      } catch (error) {
        console.error('Error fetching trips:', error);
      }
    };

    fetchTrips();
  }, [router]);

  return (
    <div className={styles.carouselContainer}>
      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={3}
        navigation
        breakpoints={{
          1024: { slidesPerView: 3 },
          768: { slidesPerView: 2 },
          480: { slidesPerView: 1 },
        }}
      >
        {trips.map((trip) => (
          <SwiperSlide key={trip.id}>
            <div className={styles.card}>
              {trip.photo ? (
                <Image src={trip.photo} alt={trip.title} width={300} height={200} className={styles.cardImage} />
              ) : (
                <div className={styles.cardImagePlaceholder}>No Image</div>
              )}
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{trip.title}</h3>
                <p className={styles.cardDescription}>{trip.description}</p>
                <button className={styles.cardButton}>Editar</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FeedGuiaCarousel;