import React from "react";

import Listing from "./components/Listing.jsx";
import Cta from "./components/Cta.jsx";

import imageHero from "./assets/img/sections/hero.svg";
import imageWaveHero from "./assets/img/sections/wave-hero.svg";
import iconFounderCrown from "./assets/img/icons/founder-crown.svg";
import Header from "./components/Header";
import { getJobs } from "../lib/mongo/jobs";

export async function getServerSideProps() {
  const { movies: jobs } = await getJobs();

  if (!jobs) throw new Error("Failed to get jobs");
  return {
    props: {
      jobs: jobs.map((job: any) => {
        return {
          jobId: job._id,
          jobTitle: job.jobTitle,
          companyName: job.company.name,
          jobType: job.jobType,
          salaryRange: "",
          companyLogo: job.company.logo,
        };
      }),
    },
  };
}

const Home = ({ jobs }: any) => {
  console.log(" jobs ---> ", jobs);

  return (
    <React.Fragment>
      <Header />
      <section className="hero">
        <div className="wrap">
          <img src={imageHero} alt="#" />
          <div className="content">
            <h1>For the brave ones of these unprecedented times</h1>
            <p>Find your dream jomote job here</p>
            <div className="founder-promo">
              <p>For Employers:</p>
              <a href="/founder-sign-up" className="cta alternative-cta">
                <img src={iconFounderCrown} alt="Founders program" />
                <p>Become a founder</p>
              </a>
              <p>
                <b>Offer lasts for another 25 days</b>
              </p>
            </div>
          </div>
        </div>
        <img className="waves" src={imageWaveHero} alt="bg" />
      </section>
      <Listing jobs={jobs} showFilter="1" />
      <Cta />
    </React.Fragment>
  );
};

export default Home;
