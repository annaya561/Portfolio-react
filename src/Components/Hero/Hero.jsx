import React, { useState, useEffect } from 'react';
import './Hero.css';
import bgImage from '../../assets/imageeee.png';

const Hero = () => {
  const text = "Hi, I'm Annaya Sharma,"; 
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showForm, setShowForm] = useState(false);

  // Typing Effect (only for text)
  useEffect(() => {
    const speed = isDeleting ? 100 : 150;

    const timeout = setTimeout(() => {
      if (!isDeleting && index < text.length) {
        setDisplayedText(text.slice(0, index + 1));
        setIndex(index + 1);
      } else if (isDeleting && index > 0) {
        setDisplayedText(text.slice(0, index - 1));
        setIndex(index - 1);
      } else if (!isDeleting && index === text.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && index === 0) {
        setIsDeleting(false);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [index, isDeleting]);

  return (
    <div className='hero' style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>
          <span className="typing-text">{displayedText}</span>
          <span className="cursor">|</span> frontend developer from India
        </h1>
        <p>
          I'm a frontend developer from Noida, India, with 6 months of experience in <br/> Wizora Solutions Pvt. Ltd.
        </p>

        <div className="hero-action">
          {/* Connect With Me Button */}
          <div
            className='hero-connect'
            onClick={() => setShowForm(true)}
          >
            Connect With Me
          </div>

          {/* Resume Download/Open */}
          <a
            href="/Annaya.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="Annaya.pdf"
            className='hero-resume'
          >
            Download Cv
          </a>
        </div>
      </div>
      
      {/* Contact Form Modal */}
      {showForm && (
        <div className="modalOverlay">
          <div className="modal">
            <h2>Say Hello!!</h2>
            <form action="https://formsubmit.co/annayasharma15@gmail.com" method="POST">
              <input type="text" name="name" placeholder="Your Name" required />
              <input type="email" name="email" placeholder="Your Email" required />
              <textarea name="message" placeholder="Your Message" required></textarea>

              {/* Hidden fields for FormSubmit */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="https://yourwebsite.com/thanks" />

              <div className="modal-buttons">
                <button type="submit" className="btn-send">Send</button>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="btn-close"
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
