import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const ContactUs = () => {
  const form = useRef();
  const [submitted, setSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_iuhquen',      // ⬅️ Replace with your actual Service ID
      'template_bnmygnl',     // ⬅️ Replace with your actual Template ID
      form.current,
      'jQxJU2mnXLG0C6k73'       // ⬅️ Replace with your actual Public Key
    )
    .then(() => {
      setSubmitted(true);
      form.current.reset();
      setTimeout(() => setSubmitted(false), 4000);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-5" id="contact">
      <div className="w-full max-w-5xl bg-white shadow-lg rounded-lg p-6 md:flex">
        
        {/* Contact Info */}
        <div className="md:w-1/2 mb-6 md:mb-0 md:mr-6 flex flex-col justify-center">
          <div className="mb-6 flex items-center hover:bg-gray-200 hover:shadow-md p-3 rounded-lg transition-all duration-300">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-purple-500 bg-white rounded-full p-3 shadow-md mr-4" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Address</h3>
              <p className="text-gray-600">Nagpur, Maharashtra - 440015</p>
            </div>
          </div>
          <div className="mb-6 flex items-center hover:bg-gray-200 hover:shadow-md p-3 rounded-lg transition-all duration-300">
            <FontAwesomeIcon icon={faPhone} className="text-purple-500 bg-white rounded-full p-3 shadow-md mr-4" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Phone</h3>
              <p className="text-gray-600">+91-9399138837</p>
            </div>
          </div>
          <div className="mb-6 flex items-center hover:bg-gray-200 hover:shadow-md p-3 rounded-lg transition-all duration-300">
            <FontAwesomeIcon icon={faEnvelope} className="text-purple-500 bg-white rounded-full p-3 shadow-md mr-4" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Email</h3>
              <p className="text-gray-600">yedlewarmonish@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:w-1/2 bg-gray-50 p-6 rounded-lg shadow-inner">
          <h2 className="text-3xl font-semibold text-gray-800 text-center">Contact Us</h2>
          <p className="mt-4 text-gray-600 text-center">Feel free to reach out for inquiries or feedback.</p>

          {submitted && (
            <div className="mt-4 bg-green-100 text-green-700 p-3 rounded-lg text-center font-medium shadow">
              Message sent successfully!
            </div>
          )}

          <form ref={form} onSubmit={sendEmail} className="mt-6 space-y-4">
            <div>
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                name="user_name"
                required
                className="w-full mt-2 p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-purple-400"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="user_email"
                required
                className="w-full mt-2 p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-purple-400"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label className="block text-gray-700">Message</label>
              <textarea
                name="message"
                rows="4"
                required
                className="w-full mt-2 p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-purple-400"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
