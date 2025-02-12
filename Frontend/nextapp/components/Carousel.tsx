import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from '../styles/Carousel.module.css';
import Image from 'next/image';
import img_porto from '../img/img_porto_galinhas.jpg';

const Carousel = () => {
  return (
    <div className={styles.carouselContainer}>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        breakpoints={{
          1024: { slidesPerView: 3 }, 
          768: { slidesPerView: 2 },  
          480: { slidesPerView: 1 },  
        }}
      >
        <SwiperSlide>
          <div className={styles.card}>
            <Image src={img_porto} alt="Reserva da Mantiqueira" className={styles.cardImage} />
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>Reserva da Mantiqueira</h3>
              <p className={styles.cardDescription}>Explore a natureza exuberante com experiências únicas.</p>
              <button className={styles.cardButton}>Participar!</button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={styles.card}>
            <Image src={img_porto} alt="Praia dos Carneiros" className={styles.cardImage} />
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>Praia dos Carneiros</h3>
              <p className={styles.cardDescription}>Relaxe nas praias mais belas e encantadoras do Brasil.</p>
              <button className={styles.cardButton}>Participar!</button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={styles.card}>
            <Image src={img_porto} alt="Cachoeira Diamantina" className={styles.cardImage} />
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>Cachoeira Diamantina</h3>
              <p className={styles.cardDescription}>Descubra as mais impressionantes cachoeiras do país.</p>
              <button className={styles.cardButton}>Participar!</button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={styles.card}>
            <Image src={img_porto} alt="Praia de Porto de Galinhas" className={styles.cardImage} />
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>Praia de Porto de Galinhas</h3>
              <p className={styles.cardDescription}>Aproveite o paraíso com águas cristalinas e naturais.</p>
              <button className={styles.cardButton}>Participar!</button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
