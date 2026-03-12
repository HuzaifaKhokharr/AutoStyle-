import React from 'react';

const Login = () => {
  return (
    <section className="login">
      <div className="form-box">
        <h2>Login</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button className="btn">Login</button>
        </form>

        <div className="google-login">
          <p>or</p>
          <button className="google-btn">
            <img src="https://www.svgrepo.com/show/355037/google.svg" alt="Google Icon" />
            Continue with Google
          </button>
        </div>

        <h3>Don’t have an account?</h3>
        <form onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Create Password" required />
          <button className="btn">Sign Up</button>
        </form>
      </div>
    </section>
  );
};

export default Login;