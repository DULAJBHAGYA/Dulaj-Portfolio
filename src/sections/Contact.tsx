"use client";

import { SectionHeader } from '@/components/SectionHeader';
import { useState, ChangeEvent, FormEvent } from 'react';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };
  
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-10 sm:px-6 lg:px-4">
        <div className="max-w-5xl mx-auto">
          
          <SectionHeader
                    eyebrow="Contact"
                    title="Get in Touch"
                    description="Have a question or want to work together? Drop me a message!"
                  />
          
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4 mt-10">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="py-3 px-4 block w-full shadow-sm rounded-md border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="Your name"
                    required
                  />
                </div>
              </div>
              
              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email
                </label>
                <div className="mt-1">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="py-3 px-4 block w-full shadow-sm rounded-md border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>
            </div>
            
            {/* Subject Field */}
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Subject
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="py-3 px-4 block w-full shadow-sm rounded-md border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="What is this regarding?"
                  required
                />
              </div>
            </div>
            
            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-sm md:text-base text-gray-700 dark:text-gray-300">
                Message
              </label>
              <div className="mt-1">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="py-3 px-4 block w-full shadow-sm rounded-md border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="Your message here..."
                  required
                ></textarea>
              </div>
            </div>
            
            {/* Submit Button */}
            <div className="flex justify-end">
            <a>
                <button className="text-white h-12 w-full md:w-auto border border-white/15 px-6 rounded-xl font-normal inline-flex items-center justify-center gap-2 mt-8">
                  <span>Send Message</span>
                  </button>
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}