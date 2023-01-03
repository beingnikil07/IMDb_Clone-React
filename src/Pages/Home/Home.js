import React, { useEffect, useState } from "react";
import "./Home.css";
const Home = () => {
  // storing data results into state
  const [popularMovies, setPopularMovies] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
    )
      .then((res) => res.json()) //converting got responed to json
      //.then(data=>console.log(data))  //To show data of api
      .then((data) => setPopularMovies(data.results));
  }, []);
  return <></>;
};
export default Home;
