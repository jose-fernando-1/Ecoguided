import React, { useState } from 'react';
import styles from "../styles/FilterPopup.module.css";
import { useRouter } from 'next/router';

interface FilterPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const paisesComCidades: { [key: string]: string[] } = {
  Brasil: ["Recife", "São Paulo", "Rio de Janeiro", "Salvador", "Brasília", "Fortaleza", "Manaus", "Curitiba", "Belém", "Porto Alegre", "Florianópolis", "Natal", "João Pessoa", "Maceió", "Vitória", "Goiânia", "Campo Grande", "Cuiabá", "Palmas", "Boa Vista", "Macapá", "Rio Branco", "Porto Velho", "São Luís", "Teresina", "São José", "Aracaju"],
  Argentina: ["Buenos Aires", "Córdoba", "Rosário"],
  Chile: ["Santiago", "Valparaíso", "Concepción"],
  Peru: ["Lima", "Cusco", "Arequipa"],
  Colômbia: ["Bogotá", "Medellín", "Cartagena"],
  Uruguai: ["Montevidéu", "Punta del Este", "Colônia do Sacramento"],
  Paraguai: ["Assunção", "Ciudad del Este", "Encarnación"],
  Bolívia: ["La Paz", "Santa Cruz de la Sierra", "Cochabamba"],
  Equador: ["Quito", "Guayaquil", "Cuenca"],
  Venezuela: ["Caracas", "Maracaibo", "Valência"]
};

const sortedPaisesComCidades = Object.keys(paisesComCidades).sort().reduce((acc, pais) => {
  acc[pais] = paisesComCidades[pais].sort();
  return acc;
}, {} as { [key: string]: string[] });

const FilterPopup: React.FC<FilterPopupProps> = ({ isOpen, onClose }) => {
  const [paisSelecionado, setPaisSelecionado] = useState<string>("Brasil");
  const [cidades, setCidades] = useState<string[]>(sortedPaisesComCidades["Brasil"]);
  const router = useRouter();

  const handlePaisChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const pais = event.target.value;
    setPaisSelecionado(pais);
    setCidades(sortedPaisesComCidades[pais]);
  };

  const handleSearchClick = () => {
    onClose();
    router.push('/Filtering');
  };

  if (!isOpen) return null;

  return (
    <div className={styles.filterPopup}>
      <div className={styles.overlay}>
        <div className={styles.popup}>
          <button className={styles.closeButton} onClick={onClose}>
            &times;
          </button>
          <h2>Filtros Avançados</h2>
          <div className={styles.filterContainer}>
            <div className={styles.filterRow}>
              <div className={styles.filterColumn}>
                <label>País</label>
                <select value={paisSelecionado} onChange={handlePaisChange}>
                  {Object.keys(sortedPaisesComCidades).map((pais) => (
                    <option key={pais} value={pais}>{pais}</option>
                  ))}
                </select>
              </div>
              <div className={styles.filterColumn}>
                <label>Cidade</label>
                <select>
                  {cidades.map((cidade) => (
                    <option key={cidade} value={cidade}>{cidade}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className={styles.filterRow}>
              <div className={styles.filterColumn}>
                <label>EcoTrip Lifestyle</label>
                <select>
                  {["Observação de Pássaros", "Aqua Trekking", "Trilhas e Caminhadas", "Eco-Diving", "Arborismo", "Passeios a Cavalo", "Canoagem e Caiaque", "Ciclismo de Montanha"].sort().map((lifestyle) => (
                    <option key={lifestyle} value={lifestyle}>{lifestyle}</option>
                  ))}
                </select>
              </div>
              <div className={styles.filterColumn}>
                <label>Viajarei...</label>
                <select>
                  {["Sozinho(a)", "Em casal", "Com amigos", "Em familia"].sort().map((viajarei) => (
                    <option key={viajarei} value={viajarei}>{viajarei}</option>
                  ))}
                </select>
              </div>
            </div>
            <label>Estou disposto a pagar...</label>
            <input type="range" min="1" max="5" step="1" list="tickmarks" className={styles.rangeSlider} />
            <datalist id="tickmarks" className={styles.datalist}>
              <option value="1" label="$"></option>
              <option value="2" label="$$"></option>
              <option value="3" label="$$$"></option>
              <option value="4" label="$$$$"></option>
              <option value="5" label="$$$$$"></option>
            </datalist>
            <button className={styles.searchButton} onClick={handleSearchClick}>Procurar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterPopup;
