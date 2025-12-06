import React, { useState } from 'react';
import axios from 'axios';

const Booking: React.FC = () => {
  const API_BASE_URL =
    process.env.REACT_APP_API_BASE_URL ||
    (process.env.NODE_ENV === 'production'
      ? 'https://luxhotel-backend-1-5165639c0c00.herokuapp.com'
      : 'http://localhost:8000');
  const [formData, setFormData] = useState({
    check_in: '',
    check_out: '',
    guests: 1,
    room: 'Suite Royale',
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
      await axios.post(`${API_BASE_URL}/api/bookings/`, formData);
      setSuccess(true);
      setError(null);
      setFormData({ check_in: '', check_out: '', guests: 1, room: 'Deluxe' });
    } catch (error) {
      console.error(error);
      setError('Erreur lors de la réservation');
      setSuccess(false);
    }
  };

  return (
    <section className="bg-primary-green px-4 sm:px-6 md:px-10 py-10 text-white">
      <h2 className="text-3xl sm:text-4xl font-serif text-accent-gold text-center mb-8">
        Réserver une Chambre
      </h2>
      <div className="max-w-xl mx-auto bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 shadow-lg">
        {success && <div className="text-center text-accent-gold mb-4">Réservation envoyée avec succès !</div>}
        {error && <div className="text-center text-red-300 mb-4">{error}</div>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block space-y-2 text-sm font-semibold">
            <span>Date d'arrivée</span>
            <input
              type="date"
              name="check_in"
              value={formData.check_in}
              onChange={handleChange}
              className="w-full p-3 text-black rounded-lg"
              required
            />
          </label>
          <label className="block space-y-2 text-sm font-semibold">
            <span>Date de départ</span>
            <input
              type="date"
              name="check_out"
              value={formData.check_out}
              onChange={handleChange}
              className="w-full p-3 text-black rounded-lg"
              required
            />
          </label>
          <label className="block space-y-2 text-sm font-semibold">
            <span>Nombre de personnes</span>
            <input
              type="number"
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              min="1"
              className="w-full p-3 text-black rounded-lg"
              required
            />
          </label>
          <label className="block space-y-2 text-sm font-semibold">
            <span>Type de chambre</span>
            <select
              name="room"
              value={formData.room}
              onChange={handleChange}
              className="w-full p-3 text-black rounded-lg"
            >
              <option value="Suite Royale">Suite Royale</option>
              <option value="Chambre Deluxe Jardin">Chambre Deluxe Jardin</option>
              <option value="Loft Urbain">Loft Urbain</option>
              <option value="Villa Patio">Villa Patio</option>
            </select>
          </label>
          <button
            type="submit"
            className="w-full bg-accent-gold text-primary-green px-4 py-3 rounded-full font-bold hover:bg-yellow-300 transition-colors"
          >
            Réserver
          </button>
        </form>
      </div>
    </section>
  );
};

export default Booking;
