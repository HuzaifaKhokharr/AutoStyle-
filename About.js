import React from 'react';

const About = () => {

  const aboutPageStyle = {
    position: 'relative',
    minHeight: '100vh',
    width: '100%',
    backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed', 
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '100px 20px'
  };

  return (
    <div style={aboutPageStyle}>
      <section className="about">
        <h1>About AutoStyle</h1>
        <p>
          At <strong>AutoStyle</strong>, we bring you high-quality car accessories designed to elevate your driving experience. 
          From elegant seat covers to performance-enhancing gadgets, our goal is to combine comfort, safety, and style — all in one place.
        </p>
        <p>
          We proudly serve car enthusiasts across Pakistan, offering premium products at affordable prices. 
          Drive with confidence, drive with AutoStyle.
        </p>

        <div className="contact-box">
          <h2>📞 Contact Us</h2>
          <div className="contact-item">
            <span>📱</span> <strong>Phone:</strong> 0332-7766177
          </div>
          <div className="contact-item">
            <span>✉️</span> <strong>Email:</strong>{" "}
            <a href="mailto:huzaifakhokhar77@gmail.com" style={{ color: '#ff2e2e', textDecoration: 'none' }}>
              huzaifakhokhar77@gmail.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;