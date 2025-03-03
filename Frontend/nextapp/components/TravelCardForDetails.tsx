import React from "react";
import styles from '../styles/TravelCard.module.css'
import Image from "next/image";

interface TravelCardTravelCardForDetailsProps {
    imageUrl: string;    // URL da imagem
    title: string;       // Título do destino
    author: string;      // Nome do guia/autor
    rating: number;      // Nota (ex.: 4.8)
    oldPrice: number;    // Preço antigo
    newPrice: number;    // Preço novo
  }

export default function TravelCardForDetails({imageUrl,title,author,rating,oldPrice,newPrice}: TravelCardTravelCardForDetailsProps) {
    return (
        <div className={styles.travelCard2}>
          {/* Imagem à esquerda */}
          <div className={styles.imageWrapper}>
            <Image src={imageUrl} width={500} height={300} alt={title} />
          </div>
    
          {/* Conteúdo à direita */}
          <div className={styles.info}>
            <div className={styles.topRow}>
              <h2>{title}</h2>
              <div className={styles.rating}>
                <span>{rating}</span>
                <span>⭐</span>
              </div>
              <button className={styles.favButton} aria-label="Favoritar">
                ♥
              </button>
            </div>
    
            <p className={styles.author}>{author}</p>

            <p>Descrição sobre o passeio Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nihil odit eligendi sapiente distinctio sed error totam, obcaecati nulla voluptatem asperiores consequatur rerum quas quos debitis reprehenderit, iure autem numquam!</p>
    
            <div className={styles.tags}>
              <span>Aventura</span>
              <span>Emocionante</span>
              <span>Experiência Única</span>
            </div>
    
            <p className={styles.extras}>
              + 10 curiosidades sobre este destino
            </p>
    
            <div className={styles.priceRow}>
              <span className={styles.oldPrice}>R${oldPrice}</span>
              <span className={styles.newPrice}>R${newPrice}</span>
              <button className={styles.compareButton}>
                Comparar
                <span className={styles.compareIcon}>🛒</span>
              </button>
            </div>
          </div>
        </div>
      );
}
