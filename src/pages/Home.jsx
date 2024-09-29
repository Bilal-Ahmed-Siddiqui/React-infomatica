import React, { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Home.css";
const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchBy, setSearchBy] = useState("name");

  const handleSearch = async () => {
    try {
      const endpoint =
        searchBy === "name"
          ? `http://www.omdbapi.com/?t=${encodeURIComponent(
              searchTerm
            )}&apikey=${import.meta.env.VITE_OMDB_API_KEY}`
          : `http://www.omdbapi.com/?i=${encodeURIComponent(
              searchTerm
            )}&apikey=${import.meta.env.VITE_OMDB_API_KEY}`;

      const response = await axios.get(endpoint);

      if (response.data.Response === "True") {
        // setResults(response.data);
        console.log("Search Results:", response.data);
      } else {
        // setResults(null);
        console.error("Movie not found:", response.data.Error);
      }
    } catch (error) {
      console.error("Error fetching movie details:", error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="search-container">
        <h1>Search Movies and Series</h1>
        <div className="search-options">
          <label>
            <input
              type="radio"
              value="name"
              checked={searchBy === "name"}
              onChange={() => setSearchBy("name")}
            />
            Search by Name
          </label>
          <label>
            <input
              type="radio"
              value="id"
              checked={searchBy === "id"}
              onChange={() => setSearchBy("id")}
            />
            Search by IMDB Id
          </label>
        </div>
        <input
          type="text"
          placeholder={`Enter ${
            searchBy === "name" ? "movie name" : "movie ID"
          }`}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <button onClick={handleSearch} className="search-button">
          Find it for me!
        </button>
      </div>{" "}
      <Footer></Footer>
    </>
  );
};

export default Home;
