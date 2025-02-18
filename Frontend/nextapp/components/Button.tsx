import styles from "../styles/Button.module.css";

interface ButtonProps {
  text: string;
  onClick: () => void;
  type?: "primary" | "danger";
  className?: string;
}

const Button = ({ text, onClick, type = "primary" }: ButtonProps) => {
  return (
    <button className={`${styles.button} ${styles[type]}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
