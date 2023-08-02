import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from '../styles';
import { RobotCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState ({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      'service_xv8ziw4',
      'template_a12o6ec',
      {
        from_name: form.name,
        to_name: 'Jeff',
        from_email: form.email,
        to_email: 'jagrafe94@gmail.com',
        message: form.message,
      },
      '0QtRv3Td_w3uX-rEV'
    )
    .then(() => {
      setLoading(false),
      alert('Thank you! I will get back to you as soon as possible.');

      setForm({
        name: '',
        email: '',
        message: '',
      })
    }, 
    (error) => {
      setLoading(false)
      console.log(error);
      alert('Something went wrong')
    })
  }
  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>
          Get in touch
        </p>
        <h3 className={styles.sectionHeadText}>
          Contact.
        </h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              Your Name
            </span>
            <input 
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's you name?"
              className="bg-tertiary py-4 px06 placeholder: text-secondary 
                text-white round-lg outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              Your Email
            </span>
            <input 
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's you email?"
              className="bg-tertiary py-4 px06 placeholder: text-secondary 
                text-white round-lg outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              Your message
            </span>
            <textarea 
              rows="7"
              name="message"
              value={form.meesage}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px06 placeholder: text-secondary 
                text-white round-lg outlined-none border-none font-medium"
            />
          </label>
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 raounded-xl
            outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn('right', "tween", 0.2, 2)}
        className="xl:flex-1 xl:h-auto md:h-[800px] h-[350px]"
      >
        <RobotCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")