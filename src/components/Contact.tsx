import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const CONTACT_EMAIL = 'donnie@hyxos.io';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Message from ${formData.name} via don.hyxos.io`);
    const body = encodeURIComponent(`${formData.message}\n\n— ${formData.name} <${formData.email}>`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Get in Touch</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Architecture, integration, and exact-computation questions are welcome. Email is the fastest route.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Contact</h3>

            <div className="space-y-6">
              <div className="flex items-center">
                <div className="bg-blue-100 dark:bg-yellow-400/20 rounded-full p-3 mr-4">
                  <Mail size={24} className="text-blue-600 dark:text-yellow-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Email</h4>
                  <a href={`mailto:${CONTACT_EMAIL}`} className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-yellow-400 transition-colors duration-200">
                    {CONTACT_EMAIL}
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-green-100 dark:bg-yellow-400/20 rounded-full p-3 mr-4">
                  <Phone size={24} className="text-green-600 dark:text-yellow-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Phone</h4>
                  <p className="text-gray-600 dark:text-gray-300">(416) 878-4790</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-purple-100 dark:bg-yellow-400/20 rounded-full p-3 mr-4">
                  <MapPin size={24} className="text-purple-600 dark:text-yellow-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Location</h4>
                  <p className="text-gray-600 dark:text-gray-300">Toronto, ON</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-yellow-400 focus:border-transparent transition-colors duration-200 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-yellow-400 focus:border-transparent transition-colors duration-200 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-yellow-400 focus:border-transparent transition-colors duration-200 resize-none bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  placeholder="What are you working on?"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center px-8 py-4 bg-blue-600 dark:bg-yellow-400 text-white dark:text-black rounded-lg hover:bg-blue-700 dark:hover:bg-yellow-500 transition-all duration-300 hover:transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Send size={20} className="mr-2" />
                Open in Email
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
