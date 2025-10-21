import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../App.css";


export default function Login() {
  return (
    <div className="login-page d-flex justify-content-center align-items-center">
      <div
        className="card p-4 shadow-lg login-card"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <h2 className="text-center mb-4 fw-bold">Welcome Back</h2>
        <form>
          {/* Email */}
          <div className="mb-3 position-relative">
            <i className="bi bi-envelope-fill input-icon"></i>
            <input
              type="email"
              className="form-control ps-5"
              placeholder="Email Address"
              required
            />
          </div>

          {/* Password */}
          <div className="mb-4 position-relative">
            <i className="bi bi-lock-fill input-icon"></i>
            <input
              type="password"
              className="form-control ps-5"
              placeholder="Password"
              required
            />
          </div>

          {/* Remember Me + Forgot Password */}
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="remember" />
              <label htmlFor="remember" className="form-check-label text-muted">
                Remember me
              </label>
            </div>
            <a href="#" className="text-warning text-decoration-none">
              Forgot Password?
            </a>
          </div>

          {/* Login Button */}
          <button type="submit" className="btn btn-warning w-100 fw-bold">
            <i className="bi bi-box-arrow-in-right me-2"></i> Login
          </button>
        </form>

        {/* Footer */}
        <p className="text-center mt-3 mb-0 text-muted">
          Don’t have an account?{" "}
          <a href="/register" className="text-decoration-none text-warning fw-bold">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
