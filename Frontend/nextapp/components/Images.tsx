import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import img_chapada from '../img/img_chapada.jpg';
import styles from '../styles/CadastroPasseioGuia.module.css';

const Images = () => {
  return (
    <Swiper
      spaceBetween={20} 
      slidesPerView={4} 
      navigation
      pagination={{ clickable: true }}
      modules={[Navigation, Pagination]}
      className={styles.carousel}
    >
      <SwiperSlide>
        <Image src={img_chapada} alt="Imagem 1" className={styles.image} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={img_chapada} alt="Imagem 2" className={styles.image} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={img_chapada} alt="Imagem 3" className={styles.image} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={img_chapada} alt="Imagem 4" className={styles.image} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={img_chapada} alt="Imagem 5" className={styles.image} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={img_chapada} alt="Imagem 6" className={styles.image} />
      </SwiperSlide>
    </Swiper>
  );
};

export default Images;
