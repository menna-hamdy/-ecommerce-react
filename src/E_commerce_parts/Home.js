import React, { useEffect } from "react";
import AOS from "aos";   /*Animate On Scroll*/
import "aos/dist/aos.css";

import '../App.css';

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); 
  }, []);

  return (
    <div className="home-page">
      {/* 🔹 HERO SECTION */}
      <section
        className="hero d-flex align-items-center text-center text-white"
        data-aos="fade-up"
      >
        <div className="container">
          <h1 className="display-4 fw-bold" data-aos="fade-down">
            Discover Your Style
          </h1>
          <p className="lead mb-4" data-aos="fade-up" data-aos-delay="200">
            Find the latest trends and deals just for you
          </p>
          <a
            href="/products"
            className="btn btn-warning btn-lg px-4"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            Shop Now <i className="bi bi-arrow-right"></i>
          </a>
        </div>
      </section>

     
    </div>
  );
}
