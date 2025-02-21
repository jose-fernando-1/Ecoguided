import { useState } from "react";
import styles from "../styles/TripSelector.module.css";
import NavbarSimple from "../components/NavbarSimple";

const tripOptions = [
  "Observação de Pássaros",
  "Aqua Trekking",
  "Trilhas e Caminhadas",
  "Eco-Diving",
  "Arborismo",
  "Passeios a Cavalo",
  "Canoagem e Caiaque",
  "Ciclismo de Montanha"
];

const TripSelector = () => {
  const [selectedTrip, setSelectedTrip] = useState<string | null>(null);

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.tripOptions}>
          {tripOptions.map((trip) => (
            <button
              key={trip}
              className={`${styles.tripButton} ${selectedTrip === trip ? styles.active : ""}`}
              onClick={() => setSelectedTrip(trip)}
              style={{
                padding: "10px 20px",
                borderRadius: "25px",
                border: "none",
                backgroundColor: selectedTrip === trip ? "#5D9EA1" : "#F5F5F5",
                color: selectedTrip === trip ? "white" : "black",
                fontWeight: "bold",
                cursor: "pointer",
                transition: "background-color 0.3s",
                margin: "5px"
              }}
            >
              {trip}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TripSelector;