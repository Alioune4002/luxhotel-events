import React, { useState } from 'react';
import axios from 'axios';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:8000';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post(`${API_BASE_URL}/api/contact/`, formData);
      setSuccess(true);
      setError(null);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error(error);
      setError('Erreur lors de l\'envoi du message');
      setSuccess(false);
    }
  };

  return (
    <section className="bg-primary-green px-4 sm:px-6 md:px-10 py-10 text-white">
      <h2 className="text-3xl sm:text-4xl font-serif text-accent-gold text-center mb-8">
        Contactez-nous
      </h2>
      <div className="max-w-xl mx-auto bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 shadow-lg">
        {success && <div className="text-center text-accent-gold mb-4">Message envoyé avec succès !</div>}
        {error && <div className="text-center text-red-300 mb-4">{error}</div>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block space-y-2 text-sm font-semibold">
            <span>Nom</span>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 text-black rounded-lg"
              required
            />
          </label>
          <label className="block space-y-2 text-sm font-semibold">
            <span>Email</span>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 text-black rounded-lg"
              required
            />
          </label>
          <label className="block space-y-2 text-sm font-semibold">
            <span>Message</span>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 text-black rounded-lg min-h-[140px]"
              required
            />
          </label>
          <button
            type="submit"
            className="w-full bg-accent-gold text-primary-green px-4 py-3 rounded-full font-bold hover:bg-yellow-300 transition-colors"
          >
            Envoyer
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
