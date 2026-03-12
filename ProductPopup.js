import React, { useState, useEffect } from 'react';

const ProductPopup = ({ product, addToCart }) => {
  const [quantity, setQuantity] = useState(1);

 
  useEffect(() => {
    setQuantity(1);
  }, [product]);



  return (
    <div className="modal fade" id="productPopup" tabIndex="-1" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content bg-dark text-white border-danger" style={{boxShadow: '0 0 30px rgba(255,0,0,0.3)'}}>
          
          <div className="modal-header border-secondary">
            <h5 className="modal-title fw-bold">ADD TO <span className="text-danger">CART</span></h5>
            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal"></button>
          </div>

          <div className="modal-body text-center">
           
            <img 
              src={product?.image} 
              alt={product?.name} 
              className="img-fluid mb-3 rounded" 
              style={{maxHeight: '200px', display: product ? 'block' : 'none', margin: '0 auto'}} 
            />
            
            <h4 className="fw-bold">{product?.name || "Loading..."}</h4>
            <p className="text-muted small">{product?.description}</p>
            
            <div className="fs-4 mb-3">
              <span className="text-decoration-line-through text-muted me-3 fs-6">
                Rs {product?.oldPrice}
              </span>
              <span className="text-danger fw-bold">Rs {product?.price}</span>
            </div>

            <div className="d-flex justify-content-center align-items-center gap-3 mb-4">
              <span className="fw-bold">Quantity:</span>
              <button 
                className="btn btn-outline-light btn-sm" 
                onClick={() => setQuantity(q => Math.max(1, q - 1))}
              >-</button>
              <span className="fs-5 fw-bold text-danger" style={{width: '30px'}}>{quantity}</span>
              <button 
                className="btn btn-outline-light btn-sm" 
                onClick={() => setQuantity(q => q + 1)}
              >+</button>
            </div>

            <button 
              className="btn btn-danger w-100 fw-bold" 
              data-bs-dismiss="modal" 
              onClick={() => {
                if(product) addToCart(product, quantity);
              }}
            >
              CONFIRM & ADD
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductPopup;