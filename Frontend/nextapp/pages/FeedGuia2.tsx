import { useState } from "react";
import ImageUploader from "../components/ImageUploader";
import TripSelector from "../components/TripSelector";
import EditableText from "../components/EditableText";
import Button from "../components/Button";
import NewNavbar from "../components/NewNavbar";
import styles from "../styles/Home.module.css";
import Image from "next/image";

export default function Home() {
  const [tripName, setTripName] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className={styles.container}>
      <NewNavbar />
      
      <main className={styles.main}>
        <h1 className={styles.title}></h1>

        <div className={styles.inputSection}>
          <EditableText
            placeholder="Digite o nome do passeio..."
            value={tripName}
            setValue={setTripName}
          />
        </div>
{/* 
        <div className={styles.imageUploaderContainer}>
          <ImageUploader />
        </div> */}

        <h1 className={styles.subtitle}>
          Qual o seu estilo de{" "}
          <span className={styles.ecotripHighlight}>eco</span>trip?
        </h1>
        <div className={styles.tripSelectorContainer}>
          <TripSelector />
        </div>

        <div className={styles.inputSection}>
          <EditableText
            tag="p"
            placeholder="Adicione informações sobre o passeio..."
            value={description}
            setValue={setDescription}
          />
        </div>
        <div className={styles.buttonContainer}>
          <Button
            text="Excluir passeio"
            onClick={() => console.log("Passeio excluído")}
            type="danger"
            className={styles.dangerButton}
          />
          <Button
            text="Confirmar"
            onClick={() => console.log("Passeio confirmado")}
            className={styles.confirmButton}
          />
        </div>
      </main>
    </div>
  );
}
