"use client";
import smileMemoji from "@/assets/images/memoji-smile.png";
import { SectionHeader } from "@/components/SectionHeader";
import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import emailjs from '@emailjs/browser';
import { Card } from "@/components/Card";
import Image from "next/image";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init("cNpwItKK8du-F8jos");
  }, []);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submission triggered"); // Debug log
    
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus({
        success: false,
        message: "Please fill in all required fields",
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      console.log("Attempting to send email"); // Debug log
      await emailjs.send(
        'service_fb1fvl1',
        'template_4flm343',
        {
          user_name: formData.name,
          user_email: formData.email,
          subject: formData.subject || 'No subject',
          message: formData.message
        },
        'cNpwItKK8du-F8jos'
      );

      setSubmitStatus({
        success: true,
        message: "Message sent successfully!",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSubmitStatus({
        success: false,
        message: "Failed to send message. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact">
      <div className="bg-white dark:bg-gray-900 mt-20">
        <div className="container mx-auto px-4 py-10 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <SectionHeader
              eyebrow="Contact"
              title="Get in Touch"
              description="Have a question or want to work together? Drop me a message!"
            />

            <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-20 xl:gap-12">
              
              {/* Contact Form */}
              <div className="order-2 lg:order-1">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        Name <span className="text-emerald-300">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="py-3 px-4 block w-full shadow-sm rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                        placeholder="Your name"
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        Email <span className="text-emerald-300">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="py-3 px-4 block w-full shadow-sm rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="py-3 px-4 block w-full shadow-sm rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                      placeholder="What is this regarding?"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Message <span className="text-emerald-300">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="py-3 px-4 block w-full shadow-sm rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-emerald-500 focus:border-emerald-500 transition-colors resize-none"
                      placeholder="Your message here..."
                      required
                    ></textarea>
                  </div>

                  {submitStatus && (
                    <div
                      className={`p-4 rounded-md transition-all ${
                        submitStatus.success
                          ? "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200"
                          : "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200"
                      }`}
                    >
                      {submitStatus.message}
                    </div>
                  )}

                  <div className="pt-4">
                    <button
  type="submit"
  className={`
    text-white h-12 w-full px-6 rounded-xl font-semibold
    inline-flex items-center justify-center gap-2
    transition-all duration-300 ease-in-out
    bg-gradient-to-r from-emerald-400 to-sky-400
    hover:from-emerald-500 hover:to-sky-500  // Darker gradient on hover
    hover:shadow-lg
    active:scale-[0.98]  // Subtle press effect
    transform hover:-translate-y-0.5  // Lift effect instead of horizontal move
    ${isSubmitting ? 'opacity-70 cursor-wait' : 'cursor-pointer'}
    focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-opacity-70
    shadow-md
  `}
  disabled={isSubmitting}
>
  {isSubmitting ? (
    <>
      <svg
        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
      Sending...
    </>
  ) : (
    "Send Message"
  )}
</button>
                  </div>
                </form>
              </div>

              {/* Map Section */}
              <div className="order-1 lg:order-2">
                <Card className="h-[500px] lg:h-[500xl] p-0 relative w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3626.4799264461444!2d79.89968427454038!3d6.795695119941322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2454186608f23%3A0x1e4a36ca98dbbb88!2sUniversity%20of%20Moratuwa%2C%20Moratuwa%2010400!5e1!3m2!1sen!2slk!4v1747730197608!5m2!1sen!2slk"
                    className="h-full w-full object-cover object-left-top border-0 rounded-lg"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:outline-offset-2 after:rounded-full after:outline-gray-950/30">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
                    <Image
                      src={smileMemoji}
                      alt="smiling memoji"
                      className="size-20"
                    />
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};