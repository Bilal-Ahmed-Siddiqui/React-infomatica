import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./About.css";
const About = () => {
  return (
    <>
      <Navbar />
      <div className="about-container">
        <h1>About Our Movie/Series Info System</h1>
        <p>
          Welcome to the Movie/Series Info System! Our platform is designed for
          movie and series enthusiasts to discover, explore, and share
          information about their favorite films and television shows.
        </p>
        <h2>What We Offer</h2>
        <ul>
          <li>
            Detailed information about movies and series, including cast, crew,
            and synopsis.
          </li>
          <li>User reviews and ratings to help you choose what to watch.</li>
          <li>Search functionality to find your favorite titles quickly.</li>
          <li>Personalized recommendations based on your viewing history.</li>
          <li>Regular updates on the latest releases and upcoming titles.</li>
        </ul>
        <h2>Our Mission</h2>
        <p>
          Our mission is to create a comprehensive and user-friendly platform
          where users can easily access and share their thoughts on movies and
          series. We aim to foster a community of film and television lovers who
          can connect through their shared interests.
        </p>
        <h2>Contact Us</h2>
        <p>
          If you have any questions, feedback, or suggestions, feel free to
          reach out to us at{" "}
          <a href="#">info@movieseriesinfo.com</a>
          .
        </p>
      </div>
      <Footer></Footer>
    </>
  );
};

export default About;
