import React from "react";
import Link from "next/link";

import iconFounderLevelOne from "../assets/img/icons/founder-crown.svg";
import iconLocation from "../assets/img/icons/icon-location.svg";
import iconTime from "../assets/img/icons/icon-time.svg";
import iconSalary from "../assets/img/icons/icon-salary.svg";

import iconLinkedin from "../assets/img/icons/icon-linkedin-dark.svg";
import iconFacebook from "../assets/img/icons/icon-facebook-dark.svg";
import iconTwitter from "../assets/img/icons/icon-twitter-dark.svg";

// temp - remove later
import logoHotJar from "../assets/img/temp/hotjar.svg";

import Listing from "../components/Listing.jsx";

const Company = (props) => {
  const isPreviewMode = props.data && Object.keys(props.data).length > 1;
  const company = props.data[2];
  return (
    <>
      <section className="company-about">
        <div className="wrap back-button-wrap">
          {isPreviewMode && (
            <Link className="cta main-cta back-cta" to="/create/preview">
              Go back
            </Link>
          )}
        </div>
        <div className="wrap highlighted-box founder founder-level-one">
          <div className="top">
            {!isPreviewMode && (
              <span className="badge">
                <img src={iconFounderLevelOne} alt="FP" />
              </span>
            )}
            <div className="company-logo">
              <img src={company.logo.base64} alt="#" />
            </div>
          </div>
          <div className="content">
            <div className="details">
              <div className="desc">
                <p>Company:</p>
                <p>
                  <b>{company.name}</b>
                </p>
              </div>
              <div className="desc">
                <p>Headquarters:</p>
                <p>
                  <b>{company.location}</b>
                </p>
              </div>
              <div className="desc">
                <p>Website:</p>
                <a href={company.website}>{company.website}</a>
              </div>
              {!isPreviewMode && (
                <>
                  <div className="desc">
                    <p>Jobs posted:</p>
                    <p>
                      <b>2</b>
                    </p>
                  </div>
                  <div className="desc">
                    <p>Status:</p>
                    <p>
                      <b>Active, Founder</b>
                    </p>
                  </div>
                </>
              )}
            </div>
            <div
              className="about wysiwyg"
              dangerouslySetInnerHTML={{ __html: company.description }}
            ></div>
          </div>
        </div>
      </section>
      {!isPreviewMode && <Listing showTitle="1" hideFilter="1" />}
    </>
  );
};

export default Company;
