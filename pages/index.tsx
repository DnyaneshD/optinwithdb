import React from "react";

import Listing from "./components/Listing.jsx";
import Cta from "./components/Cta.jsx";

import imageHero from "./assets/img/sections/hero.svg";
import imageWaveHero from "./assets/img/sections/wave-hero.svg";
import iconFounderCrown from "./assets/img/icons/founder-crown.svg";
import Header from "./components/Header";
import { getMovies } from "../lib/mongo/movies";

export async function getServerSideProps() {
  const { movies } = await getMovies();

  if (!movies) throw new Error("Failed to get movies");
  return {
    props: {
      movies: movies.map((m: any) => {
        return { _id: m._id, title: m.jobTitle };
      }),
    },
  };
}

const Home = ({ movies }: any) => {
  console.log(" movies ---> ", movies);

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
      <Listing showFilter="1" />
      <Cta />
    </React.Fragment>
  );
};

export default Home;
