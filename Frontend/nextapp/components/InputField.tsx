import styles from "../styles/InputField.module.css";

interface InputFieldProps {
  label: string;
  placeholder: string;
  value: string;
  setValue: (value: string) => void;
}

const InputField = ({ label, placeholder, value, setValue }: InputFieldProps) => {
  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={styles.input}
      />
    </div>
  );
};

export default InputField;
