import React, { useState } from 'react';
import { Email, Work } from '@mui/icons-material';
import { Button, TextField } from '@mui/material';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="bg-white/95 backdrop-blur-lg rounded-2xl p-8 shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Get In Touch
      </h2>
      
      <p className="text-gray-600 leading-relaxed mb-8">
        Ready to start your next project? Let's discuss how I can help you achieve your goals.
      </p>

      {/* Contact Methods */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="flex items-center gap-4 p-6 bg-indigo-50 rounded-xl">
          <Email className="text-indigo-600 text-3xl" />
          <div>
            <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
            <a 
              href="mailto:sucharith.dasun@gmail.com"
              className="text-indigo-600 hover:underline"
            >
              sucharith.dasun@gmail.com
            </a>
          </div>
        </div>

        <div className="flex items-center gap-4 p-6 bg-indigo-50 rounded-xl">
          <Work className="text-indigo-600 text-3xl" />
          <div>
            <h3 className="font-semibold text-gray-800 mb-1">LinkedIn</h3>
            <a 
              href="https://linkedin.com/in/dasun-sucharith"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:underline"
            >
              linkedin.com/in/dasun-sucharith
            </a>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-indigo-50 p-6 rounded-xl">
        <h3 className="text-lg font-semibold text-gray-800 mb-6">
          Send a Message
        </h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          <TextField
            fullWidth
            label="Your Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            variant="outlined"
          />

          <TextField
            fullWidth
            label="Your Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            variant="outlined"
          />

          <TextField
            fullWidth
            label="Your Message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            multiline
            rows={5}
            variant="outlined"
          />

          <Button
            type="submit"
            variant="contained"
            size="large"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3"
          >
            Send Message
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;