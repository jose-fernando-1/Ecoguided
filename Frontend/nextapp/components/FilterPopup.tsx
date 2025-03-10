import React, { useState } from 'react';
import styles from "../styles/FilterPopup.module.css";

interface FilterPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onApply: (filters: any) => void;
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

const ecoTripStyles = [
  { key: 1, label: 'Observação de Pássaros' },
  { key: 2, label: 'Aqua Trekking' },
  { key: 3, label: 'Trilhas e Caminhadas' },
  { key: 4, label: 'Eco-Diving' },
  { key: 5, label: 'Arborismo' },
  { key: 6, label: 'Passeios a Cavalo' },
  { key: 7, label: 'Canoagem e Caiaque' },
  { key: 8, label: 'Ciclismo de Montanha' }
];

const FilterPopup: React.FC<FilterPopupProps> = ({ isOpen, onClose, onApply }) => {
  const [paisSelecionado, setPaisSelecionado] = useState<string>("Brasil");
  const [cidades, setCidades] = useState<string[]>(sortedPaisesComCidades["Brasil"]);
  const [cidadeSelecionada, setCidadeSelecionada] = useState<string>("Recife");
  const [ecotripStyle, setEcotripStyle] = useState<string>("");
  const [companheiro, setCompanheiro] = useState<string>("");
  const [preco, setPreco] = useState<string>("$");

  const handlePaisChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const pais = event.target.value;
    setPaisSelecionado(pais);
    setCidades(sortedPaisesComCidades[pais]);
    setCidadeSelecionada(sortedPaisesComCidades[pais][0]);
  };

  const handleCidadeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCidadeSelecionada(event.target.value);
  };

  const handleEcotripStyleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setEcotripStyle(event.target.value);
  };

  const handleCompanheiroChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCompanheiro(event.target.value);
  };

  const handlePrecoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const priceSymbols = ["$", "$$", "$$$", "$$$$", "$$$$$"];
    setPreco(priceSymbols[parseInt(value) - 1]);
  };

  const handleSearchClick = () => {
    const filters = {
      city: cidadeSelecionada,
      ecotrip_style: ecotripStyle,
      companion: companheiro,
      price_range: preco,
    };
    localStorage.setItem('filters', JSON.stringify(filters));
    onApply(filters);
    onClose();
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
                <select value={cidadeSelecionada} onChange={handleCidadeChange}>
                  {cidades.map((cidade) => (
                    <option key={cidade} value={cidade}>{cidade}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className={styles.filterRow}>
              <div className={styles.filterColumn}>
                <label>EcoTrip Lifestyle</label>
                <select value={ecotripStyle} onChange={handleEcotripStyleChange}>
                  {ecoTripStyles.map((style) => (
                    <option key={style.key} value={style.label}>{style.label}</option>
                  ))}
                </select>
              </div>
              <div className={styles.filterColumn}>
                <label>Viajarei...</label>
                <select value={companheiro} onChange={handleCompanheiroChange}>
                  {["Sozinho(a)", "Em casal", "Com amigos", "Em familia"].sort().map((viajarei) => (
                    <option key={viajarei} value={viajarei}>{viajarei}</option>
                  ))}
                </select>
              </div>
            </div>
            <label>Estou disposto a pagar...</label>
            <input type="range" min="1" max="5" step="1" list="tickmarks" className={styles.rangeSlider} value={["$", "$$", "$$$", "$$$$", "$$$$$"].indexOf(preco) + 1} onChange={handlePrecoChange} />
            <datalist id="tickmarks" className={styles.datalist}>
              <option value="$" label="$"></option>
              <option value="$$" label="$$"></option>
              <option value="$$$" label="$$$"></option>
              <option value="$$$$" label="$$$$"></option>
              <option value="$$$$$" label="$$$$$"></option>
            </datalist>
            <button className={styles.searchButton} onClick={handleSearchClick}>Procurar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterPopup;
