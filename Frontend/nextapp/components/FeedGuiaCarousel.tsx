import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import styles from '../styles/FeedGuiaCarousel.module.css';
import Image from 'next/image';
import CachoeiraDiamantina from '../img/cachoeira_diamantina.png';
import PraiaDePortoDeGalinhas from '../img/porto_de_galinha.png';
import PraiaDosCarneiros from '../img/praia_carneiros.png';
import ReservaDaMantiqueira from '../img/Reserva_da_mantiqueira.png';

interface CarouselProps {
  trips: string[];
}

const FeedGuiaCarousel = ({ trips }: CarouselProps) => {
  const images = [
    ReservaDaMantiqueira,
    PraiaDosCarneiros,
    CachoeiraDiamantina,
    PraiaDePortoDeGalinhas,
  ];

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
        {trips.map((trip, index) => (
          <SwiperSlide key={index}>
            <div className={styles.card}>
              <Image src={images[index]} alt={trip} width={300} height={200} className={styles.cardImage} />
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{trip}</h3>
                <p className={styles.cardDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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