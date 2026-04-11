import React, { useEffect, useState } from "react";
import MovieCard from "./Components/MovieCard";

const App = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const apiKey = import.meta.env.VITE_TMDB_API_KEY;

  const fetchData = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      },
    );

    const jsonData = await response.json();
    setData((prev) => [...prev, ...jsonData?.results]);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  const handleScroll = () => {
    if (
      document.body.scrollHeight - 300 <
      window.scrollY + window.innerHeight
    ) {
      setLoading(true);
    }
  };

  const debounce = (func, delay) => {
    let timeoutId;
    return function (...args) {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  window.addEventListener("scroll", debounce(handleScroll, 500));

  useEffect(() => {
    if (loading == true) {
      setPage((prevPage) => prevPage + 1);
    }
  }, [loading]);

  return (
    <>
      <div className="app">
        <header className="app-header">
          Popular movies according to TMDB
          <div className="movieCardContainer">
            {data.length > 0 &&
              data.map((item) => (
                <MovieCard
                  key={item?.id}
                  title={item.original_title}
                  description={item.overview}
                  rating={item.vote_average}
                  imageURL={item.poster_path}
                />
              ))}
            {loading && <h1>loading...</h1>}
          </div>
        </header>
      </div>
    </>
  );
};

export default App;
