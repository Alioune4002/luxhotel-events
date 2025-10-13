import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/events/')
      .then((response) => {
        setEvents(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setError('Erreur lors du chargement des événements');
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center p-8">Chargement...</div>;
  if (error) return <div className="text-center p-8 text-red-500">{error}</div>;

  return (
    <section className="bg-bg-beige p-8">
      <h2 className="text-4xl font-serif text-primary-green text-center mb-8">Nos Espaces Événementiels</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {events.map((event) => (
          <div key={event.id} className="bg-white p-4 rounded shadow">
            <img
              src={event.image_url || 'https://source.unsplash.com/random/400x300/?event-hall'}
              alt={event.name}
              className="w-full h-48 object-cover rounded"
            />
            <h3 className="text-2xl font-serif text-primary-green mt-4">{event.name}</h3>
            <p className="text-text-dark">{event.desc}</p>
            <p className="font-bold mt-2">Capacité : {event.capacity} personnes</p>
            <button className="bg-accent-gold text-primary-green px-4 py-2 rounded-full mt-4">
              Réserver
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Events;