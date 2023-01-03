import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <div className="headerLeft">
        <Link to="/">
          <img
            className="header-icon"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/330px-IMDB_Logo_2016.svg.png"
            alt=""
          />
        </Link>
        <Link to="/movies/popular" style={{ textDecoration: "none" }}>
          <span className="icons">Popular</span>
        </Link>
        <Link to="/movies/top_rated" style={{ textDecoration: "none" }}>
          <span className="icons">Top Rated</span>
        </Link>
        <Link to="/movies/upcoming" style={{ textDecoration: "none" }}>
          <span className="icons">Upcoming</span>
        </Link>
      </div>
    </div>
  );
};
export default Header;

/* React Link ko compilation ke time a tag mai compile karta hai */