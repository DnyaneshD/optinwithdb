import React from "react";
// import { Link } from "react-router-dom";
import iconFounderCrown from '../assets/img/icons/founder-crown.svg';
import imageCtaBackground from '../assets/img/sections/cta-background.svg';
const Cta = () => {
    return (
    <section className="call-to-action">
        <div className="wrap">
            <div className="content">
                <h2>Hiring?</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae amet culpa obcaecati itaque rem qui sit vel, doloremque architecto esse.</p>
                <a href="/founder-sign-up" className="cta alternative-cta">
                    <img src={iconFounderCrown} alt="Founder" />
                    <p>Become a founder</p>
                </a>
                <p><b>Offer lasts for another 25 days</b></p>
            </div>
            <img className="cta-section-bg" src={imageCtaBackground} alt="#" />
        </div>       
    </section>
    )
}

export default Cta;

