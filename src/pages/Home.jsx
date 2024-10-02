import React, { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Home.css";
const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchBy, setSearchBy] = useState("name");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);

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
        setResult(response.data);
        setLoading(false);
        console.log("Search Results:", response.data);
      } else {
        setResult(null);
        setLoading(false);
        console.error("Movie not found:", response.data.Error);
      }
    } catch (error) {
      console.error("Error fetching movie details:", error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container">
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
              Search by Id
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
        </div>
        <div className="results-container">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <div className="results">
              <h1 className="title">{result.Title}</h1>

              <div className="content">
                <div className="poster">
                  <img src={result.Poster} alt={`${result.Title} Poster`} />
                </div>

                <div className="details">
                  <p>
                    <strong>Cast:</strong> {result.Actors}
                  </p>
                  <p>
                    <strong>Genre:</strong> {result.Genre}
                  </p>
                  <p>
                    <strong>Director:</strong> {result.Director}
                  </p>
                  <p>
                    <strong>Writer:</strong> {result.Writer}
                  </p>
                  <p>
                    <strong>Year:</strong> {result.Year}
                  </p>
                  <p>
                    <strong>Runtime:</strong> {result.Runtime}
                  </p>

                  <div className="ratings">
                    <strong>Ratings:</strong>
                    <ul>
                      {result.Ratings.map((rating, index) => (
                        <li key={index}>
                          {rating.Source}: {rating.Value}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
