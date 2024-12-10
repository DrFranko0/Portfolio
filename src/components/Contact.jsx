// Contact.jsx
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_msgfa9m', // Replace with your EmailJS Service ID
        'template_kvugapq', // Replace with your EmailJS Template ID
        formData,
        'eCORw9M-oqL4LYLMG' // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus('success');
          setFormData({ name: '', email: '', message: '' }); // Reset form
        },
        (error) => {
          console.log(error.text);
          setStatus('error');
        }
      );
  };

  return (
    <section id="contact" className="py-20 text-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold mb-8"
        >
          Get in Touch
        </motion.h2>
        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-md mx-auto"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-400 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-gray-800 border-gray-700 text-white px-4 py-2 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-400 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-gray-800 border-gray-700 text-white px-4 py-2 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-400 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-gray-800 border-gray-700 text-white px-4 py-2 rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded"
          >
            Send
          </button>
        </motion.form>
        {status === 'success' && (
          <p className="text-green-500 mt-4">Message sent successfully!</p>
        )}
        {status === 'error' && (
          <p className="text-red-500 mt-4">Failed to send the message. Try again later.</p>
        )}
      </div>
    </section>
  );
}