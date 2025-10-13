import React, { useState } from 'react';
import axios from 'axios';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8000/api/contact/', formData);
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
    <section className="bg-primary-green p-8 text-white">
      <h2 className="text-4xl font-serif text-accent-gold text-center mb-8">Contactez-nous</h2>
      {success && <div className="text-center text-accent-gold mb-4">Message envoyé avec succès !</div>}
      {error && <div className="text-center text-red-500 mb-4">{error}</div>}
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <label className="block mb-4">
          Nom :{' '}
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 text-black rounded"
            required
          />
        </label>
        <label className="block mb-4">
          Email :{' '}
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 text-black rounded"
            required
          />
        </label>
        <label className="block mb-4">
          Message :{' '}
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 text-black rounded"
            required
          />
        </label>
        <button type="submit" className="bg-accent-gold text-primary-green px-4 py-2 rounded-full">
          Envoyer
        </button>
      </form>
    </section>
  );
};

export default Contact;