import React, { useState } from 'react';
import axios from 'axios';

const Booking: React.FC = () => {
  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    guests: 1,
    room: 'Deluxe',
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8000/api/bookings/', formData);
      setSuccess(true);
      setError(null);
      setFormData({ checkIn: '', checkOut: '', guests: 1, room: 'Deluxe' });
    } catch (error) {
      console.error(error);
      setError('Erreur lors de la réservation');
      setSuccess(false);
    }
  };

  return (
    <section className="bg-primary-green p-8 text-white">
      <h2 className="text-4xl font-serif text-accent-gold text-center mb-8">Réserver une Chambre</h2>
      {success && <div className="text-center text-accent-gold mb-4">Réservation envoyée avec succès !</div>}
      {error && <div className="text-center text-red-500 mb-4">{error}</div>}
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <label className="block mb-4">
          Date d'arrivée :{' '}
          <input
            type="date"
            name="checkIn"
            value={formData.checkIn}
            onChange={handleChange}
            className="w-full p-2 text-black rounded"
            required
          />
        </label>
        <label className="block mb-4">
          Date de départ :{' '}
          <input
            type="date"
            name="checkOut"
            value={formData.checkOut}
            onChange={handleChange}
            className="w-full p-2 text-black rounded"
            required
          />
        </label>
        <label className="block mb-4">
          Nombre de personnes :{' '}
          <input
            type="number"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            min="1"
            className="w-full p-2 text-black rounded"
            required
          />
        </label>
        <label className="block mb-4">
          Type de chambre :{' '}
          <select
            name="room"
            value={formData.room}
            onChange={handleChange}
            className="w-full p-2 text-black rounded"
          >
            <option value="Deluxe">Chambre Deluxe</option>
            <option value="Suite">Suite Royale</option>
          </select>
        </label>
        <button type="submit" className="bg-accent-gold text-primary-green px-4 py-2 rounded-full">
          Réserver
        </button>
      </form>
    </section>
  );
};

export default Booking;