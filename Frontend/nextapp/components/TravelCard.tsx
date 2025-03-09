import React from "react";
import styles from "../styles/TravelCard.module.css";
import Image from "next/image";
import { useRouter } from 'next/router';

interface TravelCardProps {
    imageUrl: string;    // URL da imagem
    title: string;       // Título do destino
    author: string;      // Nome do guia/autor
    rating: number;      // Nota (ex.: 4.8)
    oldPrice: number;    // Preço antigo
    newPrice: number;    // Preço novo
    id: string;          // ID do destino
}

export default function TravelCard({imageUrl, title, author, rating, oldPrice, newPrice, id}: TravelCardProps) {
    const router = useRouter();

    const handleComprar = () => {
        router.push('/Carrinho');
    }

    return (
        <div className={styles.travelCard}>
          {/* Imagem à esquerda */}
          <div className={styles.imageWrapper}>
            <Image src={imageUrl} width={400} height={300} alt={title} />
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
              <button className={styles.buyButton} onClick={handleComprar}>
                Comprar
                <span className={styles.buyIcon}>🛒</span>
              </button>
            </div>
          </div>
        </div>
      );
}
