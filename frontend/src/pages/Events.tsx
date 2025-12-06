import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

interface Event {
  id: number;
  name: string;
  desc: string;
  capacity: number;
  image_url?: string; 
}

const Events: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const API_BASE_URL =
    process.env.REACT_APP_API_BASE_URL ||
    (process.env.NODE_ENV === 'production'
      ? 'https://luxhotel-backend-1-5165639c0c00.herokuapp.com'
      : 'http://localhost:8000');

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/api/events/`)
      .then((response) => {
        setEvents(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setError('Erreur lors du chargement des événements');
        setLoading(false);
      });
  }, [API_BASE_URL]);

  if (loading) return <div className="text-center p-8">Chargement...</div>;
  if (error) return <div className="text-center p-8 text-red-500">{error}</div>;

  return (
    <section className="bg-bg-beige px-4 sm:px-6 md:px-10 py-10">
      <h2 className="text-3xl sm:text-4xl font-serif text-primary-green text-center mb-8">
        Nos Espaces Événementiels
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <div key={event.id} className="bg-white p-4 rounded-xl shadow flex flex-col">
            <img
              src={event.image_url || 'https://source.unsplash.com/random/400x300/?event-hall'}
              alt={event.name}
              className="w-full h-52 object-cover rounded-lg"
            />
            <h3 className="text-2xl font-serif text-primary-green mt-4">{event.name}</h3>
            <p className="text-text-dark">{event.desc}</p>
            <p className="font-bold mt-2">Capacité : {event.capacity} personnes</p>
            <Link
              to={`/reserver?room=${encodeURIComponent(event.name)}`}
              className="bg-accent-gold text-primary-green px-4 py-2 rounded-full mt-4 w-full sm:w-auto inline-block text-center hover:bg-yellow-300 transition-colors"
            >
              Réserver cet espace
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Events;
