import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../App.css";

export default function Register() {
  return (
    <div className="register-page d-flex justify-content-center align-items-center">
      <div className="card p-4 shadow-lg register-card "
      data-aos="zoom-in"
        data-aos-duration="1000">
        
        <h2 className="text-center mb-4 fw-bold">Create an Account</h2>
        <form>
          {/* Name */}
          <div className="mb-3 position-relative">
            <i className="bi bi-person-fill input-icon"></i>
            <input
              type="text"
              className="form-control ps-5"
              placeholder="Full Name"
              required
            />
          </div>

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
          <div className="mb-3 position-relative">
            <i className="bi bi-lock-fill input-icon"></i>
            <input
              type="password"
              className="form-control ps-5"
              placeholder="Password"
              required
            />
          </div>

          {/* Confirm Password */}
          <div className="mb-4 position-relative">
            <i className="bi bi-shield-lock-fill input-icon"></i>
            <input
              type="password"
              className="form-control ps-5"
              placeholder="Confirm Password"
              required
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-warning w-100 fw-bold">
            <i className="bi bi-person-plus me-2"></i> Register
          </button>
        </form>

        {/* Footer */}
        <p className="text-center mt-3 mb-0 text-muted">
          Already have an account?{" "}
          <a href="/login" className="text-decoration-none text-warning fw-bold">
            Login here
          </a>
        </p>
      </div>
    </div>
  );
}
