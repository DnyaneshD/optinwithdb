import React from "react";
import iconLinkedin from "../assets/img/icons/icon-linkedin.svg";
// fix me
// import iconFacebook from  '../assets/img/icons/icon-facebook.svg';
import iconTwitter from "../assets/img/icons/icon-twitter.svg";
import Logo from "../assets/img/logo-white.svg";

const Footer = () => {
  return (
    <footer>
      <div className="wrap">
        <div className="content">
          <div>
            <img src={Logo} alt="OptinRemote" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              magnam suscipit dolorem totam eligendi iusto reprehenderit eos
              dicta. Culpa expedita ut aspernatur consectetur ex atque, iste
              nemo et magnam laudantium!
            </p>
          </div>
          <div>
            <ul>
              <li>
                <a href="/impressum">Impressum</a>
              </li>
              <li>
                <a href="/terms">Terms & Conditions</a>
              </li>
              <li>
                <a href="/privacy">Privacy Policy</a>
              </li>
              <li>
                <a href="/privary#cookies">Cookies</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/new">Post a job</a>
              </li>
              <li>
                <a href="/contact">Contact us</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="bottom">
          <p>© 2021 Optinremote. Alle Rechte vorbehalten. </p>
          <div className="social-media">
            <a href="#">
              <img src={iconLinkedin} alt="Linkedin" />
            </a>
            {/* <a href="#">
              <img src={iconFacebook} alt="Facebook" />
            </a> */}
            <a href="#">
              <img src={iconTwitter} alt="Twitter" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
