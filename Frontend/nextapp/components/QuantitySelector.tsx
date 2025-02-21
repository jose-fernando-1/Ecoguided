import { useState } from "react";
import styles from "../styles/QuantitySelector.module.css"; // Importando o CSS

interface QuantitySelectorProps {
  initialQuantity?: number;
  min?: number;
  max?: number;
  onChange?: (quantity: number) => void;
}

export default function QuantitySelector({
  initialQuantity = 1,
  min = 1,
  max = 99,
  onChange,
}: QuantitySelectorProps) {
  const [quantity, setQuantity] = useState(initialQuantity);

  const handleIncrease = () => {
    if (quantity < max) {
      const newQuantity = quantity + 1;
      setQuantity(newQuantity);
      onChange?.(newQuantity);
    }
  };

  const handleDecrease = () => {
    if (quantity > min) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onChange?.(newQuantity);
    }
  };

  return (
    <div className={styles.container}>
      <button onClick={handleDecrease} className={styles.button}>-</button>
      <span className={styles.quantity}>{quantity}</span>
      <button onClick={handleIncrease} className={styles.button}>+</button>
    </div>
  );
}