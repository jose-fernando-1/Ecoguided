import React, { useEffect, useState } from 'react';
import TravelCard from '../components/TravelCard';
import styles from '../styles/FeedCliente.module.css';
import NavbarSimpleUser from '../components/NavbarSimpleUser';

interface Trip {
  id: number;
  imageUrl: string;
  title: string;
  author: string;
  rating: number;
  oldPrice: number;
  newPrice: number;
  ecotripStyle: string; // Adicionado para incluir o estilo de EcoTrip
}

const ResultadoFiltro = () => {
  const [trips, setTrips] = useState<Trip[]>([]);

  useEffect(() => {
    const fetchTrips = async () => {
      const filters = JSON.parse(localStorage.getItem('filters') || '{}');
      const { city, ecotrip_style, companion, price_range } = filters;

      const response = await fetch(`http://127.0.0.1:8000/api/get_trips/?city=${city}&ecotrip_style=${ecotrip_style}&companion=${companion}&price_range=${price_range}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      setTrips(data);
    };

    fetchTrips();
  }, []);

  return (
    <div>
      <NavbarSimpleUser />
      <section className={styles.section}>
        <h2 style={{ display: 'flex', position: 'relative', paddingLeft: '250px' }}>O que encontramos para você </h2>
        <div className={styles.recommendations}>
          {trips.map((trip) => (
            <TravelCard
              key={trip.id}
              id={trip.id.toString()}
              imageUrl={trip.imageUrl}
              title={trip.title}
              author={trip.author}
              rating={trip.rating}
              oldPrice={trip.oldPrice}
              newPrice={trip.newPrice}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ResultadoFiltro;
