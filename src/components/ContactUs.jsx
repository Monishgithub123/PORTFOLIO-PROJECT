import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const ContactUs = () => {
  const form = useRef();
  const [submitted, setSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_iuhquen',
        'template_bnmygnl',
        form.current,
        'jQxJU2mnXLG0C6k73'
      )
      .then(() => {
        setSubmitted(true);
        form.current.reset();
        setTimeout(() => setSubmitted(false), 4000);
      })
      .catch((error) => console.error('EmailJS Error:', error));
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 flex items-center justify-center px-4 py-16"
    >
      <div className="w-full max-w-6xl rounded-3xl shadow-2xl bg-white/30 backdrop-blur-xl border border-white/20 p-10 flex flex-col md:flex-row gap-10">
        {/* Left - Contact Info */}
        <div className="flex-1 space-y-8 text-gray-800">
          <h2 className="text-4xl font-extrabold">Get in Touch 💬</h2>
          <p className="text-lg text-gray-600">
            Whether you have a question or just want to say hi, I’ll try my best to get back to you!
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="text-white text-xl bg-gradient-to-br from-indigo-500 to-purple-500 p-4 rounded-xl shadow-md" />
              <div>
                <h4 className="text-lg font-semibold">Location</h4>
                <p className="text-gray-600">Nagpur, Maharashtra - 440015</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FontAwesomeIcon icon={faPhone} className="text-white text-xl bg-gradient-to-br from-green-400 to-blue-500 p-4 rounded-xl shadow-md" />
              <div>
                <h4 className="text-lg font-semibold">Phone</h4>
                <p className="text-gray-600">+91-9399138837</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FontAwesomeIcon icon={faEnvelope} className="text-white text-xl bg-gradient-to-br from-pink-500 to-yellow-500 p-4 rounded-xl shadow-md" />
              <div>
                <h4 className="text-lg font-semibold">Email</h4>
                <p className="text-gray-600">yedlewarmonish@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right - Contact Form */}
        <div className="flex-1 bg-white/60 rounded-2xl p-8 shadow-xl border border-white/20">
          <h3 className="text-3xl font-bold text-center mb-4">Send a Message 📬</h3>
          <p className="text-center text-gray-500 mb-6">I'll reply as soon as I can!</p>

          {submitted && (
            <div className="bg-green-100 text-green-700 text-center px-4 py-3 rounded-lg mb-6 font-medium animate-bounce">
              🎉 Your message has been sent!
            </div>
          )}

          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div>
              <label className="block mb-1 font-medium">Your Name</label>
              <input
                type="text"
                name="user_name"
                required
                placeholder="John Doe"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-400 transition-all bg-white/80 shadow-sm"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Email Address</label>
              <input
                type="email"
                name="user_email"
                required
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-400 transition-all bg-white/80 shadow-sm"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Your Message</label>
              <textarea
                name="message"
                rows="4"
                required
                placeholder="Write something..."
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-400 transition-all bg-white/80 shadow-sm resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-tr from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white py-3 font-semibold rounded-xl shadow-lg transition-transform transform hover:-translate-y-1"
            >
              🚀 Submit Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
