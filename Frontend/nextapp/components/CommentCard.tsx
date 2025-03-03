import React from "react";
import styles from "../styles/CommentCard.module.css";

interface CommentCardProps {
  userName: string;
  userImage: string;  // URL da imagem de avatar
  comment: string;    // Texto do comentário
  rating: number;     // Nota (por exemplo, 5)
}

export default function CommentCard({
  userName,
  userImage,
  comment,
  rating,
}: CommentCardProps) {
  return (
    <div className={styles.commentCard}>
      {/* Avatar + texto */}
      <div className={styles.commentLeft}>
        <img src={userImage} alt={userName} className={styles.avatar} />
        <div>
          <span className={styles.userName}>{userName}</span>
          <p className={styles.comment}>{comment}</p>
        </div>
      </div>

      {/* Rating à direita */}
      <div className={styles.ratingBox}>
        <span className={styles.ratingValue}>{rating}</span>
        <span className={styles.ratingStar}>⭐</span>
      </div>
    </div>
  );
}
