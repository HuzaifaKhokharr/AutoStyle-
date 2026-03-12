import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
 
  const sectionStyle = {
    position: 'relative',
    minHeight: '100vh',
    width: '100%',
   
    backgroundImage: `url('https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1600&q=80')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    display: 'flex',
    flexDirection: 'column'
  };

  
  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.6)', 
    zIndex: 1
  };

  const contentStyle = {
    position: 'relative',
    zIndex: 2 
  };

  const featured = [
    {
      name: "Custom Car Seat Covers",
      oldPrice: "22,499",
      newPrice: "18,499",
      img: "https://lahoreauto.pk/wp-content/uploads/2025/01/Car-Seat-Cover.jpg"
    },
    {
      name: "Careeze Ceramic Spray",
      oldPrice: "3,500",
      newPrice: "1,999",
      img: "https://careaze.co/cdn/shop/files/DSC09848_1_edited_b5a5d933-f527-4bc8-8b76-6464ee206d5d.jpg?v=1755009326&width=416"
    },
    {
      name: "Carrera Car Coolant", 
      oldPrice: "4,500",
      newPrice: "3,499", 
      img: "https://carrera.pk/cdn/shop/articles/Coolant.jpg?v=1708518856" 
    }
  ];

  return (
    <div style={sectionStyle}>
     
      <div style={overlayStyle}></div>

    
      <div style={contentStyle} className="home-page">
        <section className="hero">
          <div className="hero-content">
            <h1>Upgrade Your Ride with Premium Car Accessories</h1>
            <p>Get exclusive offers on car interior and exterior products in Pakistan!</p>
            <Link to="/products" className="btn btn-danger btn-lg">Shop Now</Link>
          </div>
        </section>

        <section className="sale py-3">
          <div className="container text-center">
            <h4 className="mb-0">🔥 Mega Sale — Up to 40% Off! Grab your favorite accessories before the sale ends!</h4>
          </div>
        </section>

        <section className="container my-5 pb-5">
          <h2 className="text-center mb-4">Featured Products</h2>
          <div className="product-grid">
            {featured.map((item, index) => (
              <div className="product-card" key={index}>
                <img src={item.img} alt={item.name} />
                <h3 className="mt-3">{item.name}</h3>
                <p className="price">
                  <span className="orig">Rs {item.oldPrice}</span> 
                  <span className="text-danger fw-bold ms-2">Rs {item.newPrice}</span>
                </p>
                <Link to="/products" className="btn btn-outline-light">View Details</Link>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;