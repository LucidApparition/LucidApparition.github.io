import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import PropTypes from 'prop-types';
import { resumeIcon, linkedin } from '../../assets';

function ContactCard({ resumeLink, linkedInLink }) {
  const formRef = useRef();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        'service_xv8ziw4',
        'template_a12o6ec',
        {
          from_name: form.name,
          to_name: 'Jeff',
          from_email: form.email,
          to_email: 'jagrafe94@gmail.com',
          message: form.message,
        },
        '0QtRv3Td_w3uX-rEV',
      );

      setLoading(false);
      setForm({ name: '', email: '', message: '' });
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row gap-6">
      {/* Contact Form */}
      <div className="rounded-2xl p-6 bg-gray-800 w-full sm:w-2/3 lg:w-full lg:h-full">
        <h3 className="text-white text-2xl font-bold mb-4">Contact Me</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-6"
        >
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="bg-gray-700 py-4 px-6 placeholder:text-gray-400 text-white rounded-lg"
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="bg-gray-700 py-4 px-6 placeholder:text-gray-400 text-white rounded-lg"
          />
          <textarea
            name="message"
            rows="4"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="bg-gray-700 py-4 px-6 placeholder:text-gray-400 text-white rounded-lg"
          />
          <button
            type="submit"
            className="bg-indigo-600 text-white py-3 px-6 rounded-lg font-bold"
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </div>

      {/* Resume and LinkedIn Icons */}
      <div className="flex flex-col justify-start items-center gap-4">
        <a
          href={linkedInLink}
          target="_blank"
          rel="noopener noreferrer"
          title="Visit LinkedIn"
        >
          <img src={linkedin} alt="LinkedIn" className="w-20 h-20" />
        </a>
        <a
          href={resumeLink}
          target="_blank"
          rel="noopener noreferrer"
          title="View Resume"
        >
          <img src={resumeIcon} alt="Resume" className="w-28 h-28" />
        </a>
      </div>
    </div>
  );
}

ContactCard.propTypes = {
  resumeLink: PropTypes.string.isRequired,
  linkedInLink: PropTypes.string.isRequired,
};

export default ContactCard;
