import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your message has been received.`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="custom-page">
      <h1>Contact Us</h1>
      <form className="custom-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          required
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <button type="submit">Send Message</button>
      </form>

      <div className="social-handles">
        <h3>Connect with us:</h3>
        <div className="social-icons">
          <a href="https://www.instagram.com/sangeeta_kaseeda_embroidery?utm_source=ig_web_button_share_sheet&igsh=ODdmZWVhMTFiMw==" target="_blank" rel="noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" />
          </a>
          <a href="https://www.facebook.com/share/19AmygHrak/" target="_blank" rel="noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" />
          </a>
          <a href="https://youtube.com/@sangeeta_embroidery?feature=shared" target="_blank" rel="noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="YouTube" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
