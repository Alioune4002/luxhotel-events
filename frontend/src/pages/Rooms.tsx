import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Room {
  id: number;
  name: string;
  desc: string;
  price: string;
  image_url?: string;  // Champ optionnel pour l'image
}

const Rooms: React.FC = () => {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/rooms/')
      .then((response) => {
        setRooms(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setError('Erreur lors du chargement des chambres');
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center p-8">Chargement...</div>;
  if (error) return <div className="text-center p-8 text-red-500">{error}</div>;

  return (
    <section className="bg-bg-beige p-8">
      <h2 className="text-4xl font-serif text-primary-green text-center mb-8">Nos Chambres et Appartements</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {rooms.map((room) => (
          <div key={room.id} className="bg-white p-4 rounded shadow">
            <img
              src={room.image_url || 'https://source.unsplash.com/random/400x300/?hotel-room'}
              alt={room.name}
              className="w-full h-48 object-cover rounded"
            />
            <h3 className="text-2xl font-serif text-primary-green mt-4">{room.name}</h3>
            <p className="text-text-dark">{room.desc}</p>
            <p className="font-bold mt-2">{room.price} € / nuit</p>
            <button className="bg-accent-gold text-primary-green px-4 py-2 rounded-full mt-4">
              Voir plus
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Rooms;