import React from 'react';

const CartModal = ({ cart, removeFromCart }) => {
  const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <div className="modal fade" id="cartModal" tabIndex="-1" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content bg-dark border-danger text-white">
          <div className="modal-header border-secondary">
            <h5 className="modal-title fw-bold">YOUR <span className="text-red">CART</span></h5>
            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal"></button>
          </div>
          <div className="modal-body" style={{maxHeight: '400px', overflowY: 'auto'}}>
            {cart.length === 0 ? (
              <p className="text-center text-muted py-4">Your cart is currently empty.</p>
            ) : (
              cart.map((item, index) => (
                <div key={index} className="d-flex justify-content-between align-items-center mb-3 pb-2 border-bottom border-secondary">
                  <div className="d-flex align-items-center gap-3">
                    <img src={item.image} alt={item.name} width="60" height="60" className="rounded border border-secondary" style={{objectFit:'cover'}} />
                    <div>
                      <div className="fw-bold">{item.name}</div>
                      <small className="text-red">{item.quantity} x Rs {item.price}</small>
                    </div>
                  </div>
                  <button className="btn btn-sm btn-outline-danger" onClick={() => removeFromCart(index)}>
                    ✖
                  </button>
                </div>
              ))
            )}
          </div>
          <div className="modal-footer border-secondary justify-content-between">
            <h5 className="mb-0">Total: <span className="text-red">Rs {total.toLocaleString()}</span></h5>
            <button className="btn btn-red-glow px-4" disabled={cart.length === 0}>CHECKOUT</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModal;