import React from "react";
import styles from "../styles/PriceDisplay.module.css";

interface PriceDisplayProps {
  originalPrice: number;
  discountedPrice: number;
}

export default function PriceDisplay({
  originalPrice,
  discountedPrice,
}: PriceDisplayProps) {
  return (
    <div className={styles.container}>
      <span className={styles.originalPrice}>R${originalPrice}</span>
      <span className={styles.discountedPrice}>R${discountedPrice}</span>
    </div>
  );
}
