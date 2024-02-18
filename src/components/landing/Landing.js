import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import "./Landing.css";

const Landing = () => {
  // State for button text (testimonials button)
  const [testimonialsText, setTestimonialsText] = useState("");

  useEffect(() => {
    // Function to update button text based on screen width
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 1045) {
        setTestimonialsText("Testimonials");
      } else {
        setTestimonialsText("What Our Customers Think Of Us");
      }
    };
    // Set initial state based on current screen width
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty dependency array means this effect runs only on mount and unmount

  return (
    <div className="landing-element background-tint">
      <div class="main-content">
        <img src="plumber.png" alt="plumber" id="plumber-img"></img>
        <div className="display-text">
          <h1 class="display-title">Helping Our Community For Over 10 Years</h1>
          <h2 class="display-caption">
            Find out what makes our customers continue to choose us for their
            plumbing problems
          </h2>
          <div id="landing-buttons">
            <Button
              className="landing-button"
              id="services-button"
              variant="primary"
            >
              What We Do
            </Button>
            <Button
              className="landing-button"
              id="testimonials-button"
              variant="primary"
            >
              {testimonialsText}
            </Button>
            <Button
              className="landing-button"
              id="contact-button"
              variant="primary"
            >
              Contact Us!
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
