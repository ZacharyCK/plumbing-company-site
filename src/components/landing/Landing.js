import React from "react";
import './Landing.css';

const Landing = () => {
    return (
        <div className="landing-element background-tint">
            <div class="main-content">
                <img src="plumber.png" alt="plumber"></img>
                <div className="display-text">
                    <h1 class="display-title">Helping Our Community For Over 10 Years</h1>
                    <h2 class="display-caption">Find out what makes our customers continue to choose us for their plumbing problems</h2>
                </div>
            </div>
        </div>
    );
}
  
  export default Landing;