import React from 'react';

const productData = [
  { name: "Full-Set Car Seat Covers", oldPrice: 22499, price: 18499, image: "https://lahoreauto.pk/wp-content/uploads/2025/01/Car-Seat-Cover.jpg", description: "Premium leather-finish seat covers for full interior protection." },
  { name: "Luxury 9D Floor Mats", oldPrice: 12000, price: 8899, image: "https://caristanpk.com/wp-content/uploads/2025/08/9D-Mats.jpg", description: "Waterproof, anti-slip 9D mats offering full floor coverage." },
  { name: "Dash Cam", oldPrice: 8500, price: 6840, image: "https://70mai.store/cdn/shop/files/4k_Omni_time_badge.jpg?v=1761190082", description: "Compact 4K dash camera that records crystal-clear video." },
  { name: "Universal PVC Floor Mats", oldPrice: 4500, price: 3140, image: "https://3dmatsusa.com/cdn/shop/files/KAGU_800x800_2_4f931c57-3844-4812-a7c3-559a334ed6e6.jpg?v=1700205941", description: "Durable PVC mats designed to fit most car models." },
  { name: "Napa Leather Cushion", oldPrice: 5500, price: 3999, image: "https://www.hamzastore.pk/images/product_gallery/1718623180_Car-Seat-Cushion-All-season-Universal-Napa-Leather-Drivers-Front-Seat-Protector-Cover-2.webp", description: "All-season Napa leather cushion for extra comfort." },
  { name: "Car Perfume Freshener", oldPrice: 1500, price: 999, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwrjz22rwftMrfQ41faSHVeQzT0uBhYoz-Vw&s", description: "Long-lasting car fragrance for a fresh drive." },
  { name: "360° Baseus Mobile Holder", oldPrice: 2500, price: 1699, image: "https://i0.wp.com/baseuspak.com/wp-content/uploads/2025/09/%E7%89%B9%E5%AE%9A%E4%B8%BB%E5%9B%BE.webp?fit=430%2C430&ssl=1", description: "Adjustable car phone holder with strong grip." },
  { name: "Portable Tire Inflator", oldPrice: 6000, price: 4299, image: "https://image.made-in-china.com/2f0j00fMsoRQuCHGkd/Manufacturer-Selling-Air-Pump-100psi-20L-Min-Portable-Tire-Inflators-PU-Extended-Trachea-Car-Tire-Inflator-Air-Compressor.webp", description: "Lightweight electric air pump for emergencies." },
  { name: "Carrera Detailing Kit", oldPrice: 7000, price: 5999, image: "https://carrera.pk/cdn/shop/files/Kit_Web_1.webp?v=1754776522", description: "All-in-one cleaning and shine solution." },
  { name: "Carrera Dashboard Shine (295ml)", oldPrice: 1400, price: 999, image: "https://gariparts.com/cdn/shop/products/CARRERA_POLISH_DASHBOARD_POLISH.jpg?v=1701430761", description: "Protects and restores dashboard shine." },
  { name: "Cosmic Car Polish 250ml", oldPrice: 1800, price: 1300, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0kNx4XNREabLtL_Wa1O_tPLTAo_W8z6oanQ&s", description: "High-gloss car polish for surface protection." },
  { name: "Kiwi Car Polish 80ml", oldPrice: 1000, price: 700, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKZD3PNHB1s9NWjsoYF1cwpZAJBro8TWxf--UR6WGB-wt27Fuaa-aaW57cIlaLirk38cM&usqp=CAU", description: "Quick-shine formula for touch-ups." },
  { name: "Bosch Wiper Blades (Pair)", oldPrice: 3000, price: 2499, image: "https://www.partsbigboss.in/media/catalog/product/i/m/image_21080.jpg", description: "Premium rubber wipers for streak-free performance." },
  { name: "Denso Led Lights", oldPrice: 15000, price: 12000, image: "https://eaglemotors.pk/wp-content/uploads/2024/05/imageSFWR.webp", description: "Bright, energy-efficient LED headlights." },
  { name: "Trunk Mat", oldPrice: 3500, price: 2899, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPTpdZEoj5uteq4cYDvKpGxVwTXnT6XGrNYA&s", description: "Heavy-duty waterproof trunk protection." },
  { name: "Waterproof Car Cover", oldPrice: 5000, price: 3799, image: "https://sehgalmotors.pk/cdn/shop/files/1713179381296997.jpg?v=1753184446", description: "All-weather protection for outdoor parking." },
  { name: "Carrera Car Coolant", oldPrice: 4500, price: 3499, image: "https://carrera.pk/cdn/shop/articles/Coolant.jpg?v=1708518856", description: "Advanced formula to prevent engine overheating." },
  { name: "Careeze Ceramic Spray", oldPrice: 3500, price: 1999, image: "https://careaze.co/cdn/shop/files/DSC09848_1_edited_b5a5d933-f527-4bc8-8b76-6464ee206d5d.jpg?v=1755009326&width=416", description: "Showroom-finish ceramic coating spray." },
  { name: "Ingco Pressure Washer", oldPrice: 35000, price: 28000, image: "https://autohub.pk/cdn/shop/files/PhotoRoom-20231219-170402_grande.jpg?v=1702987799", description: "Powerful 1400W washer for home and car." }
];

const Products = ({ openProductView }) => {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-5 fw-bold text-white">OUR <span className="text-danger">COLLECTION</span></h2>
      <div className="row g-4">
        {productData.map((item, index) => {
          
          const discountPercentage = Math.round(((item.oldPrice - item.price) / item.oldPrice) * 100);

          return (
            <div className="col-md-4 col-lg-3" key={index}>
              <div className="custom-card d-flex flex-column h-100 p-3 shadow position-relative" style={{ backgroundColor: '#1a1a1a', border: '1px solid #333' }}>
                
                
                <div 
                  className="position-absolute fw-bold" 
                  style={{
                    top: '10px', 
                    left: '10px', 
                    backgroundColor: 'red', 
                    color: 'white', 
                    padding: '2px 8px', 
                    fontSize: '0.75rem',
                    borderRadius: '3px',
                    zIndex: 2,
                    boxShadow: '0 0 10px rgba(255,0,0,0.5)'
                  }}
                >
                  {discountPercentage}% OFF
                </div>

                <div className="text-center" style={{ height: '180px' }}>
                  <img src={item.image} alt={item.name} className="img-fluid h-100" style={{ objectFit: 'contain' }} />
                </div>

                <h6 className="text-white mt-3 text-truncate">{item.name}</h6>
                <p>
                  <span className="old-price me-2 text-decoration-line-through text-light" style={{ fontSize: '0.9rem' }}>Rs {item.oldPrice}</span>
                  <span className="text-danger fw-bold">Rs {item.price}</span>
                </p>
                
                <div className="mt-auto">
                  <button 
                    className="btn btn-outline-light btn-sm w-100 mb-2"
                    onClick={() => openProductView(item)}
                  >
                    View Detail
                  </button>

                  <button 
                    className="btn btn-danger btn-sm w-100"
                    onClick={() => openProductView(item)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;