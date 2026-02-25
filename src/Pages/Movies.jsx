import React, { useEffect, useState } from "react";
import { useRef } from "react";
import '/node_modules/bootstrap/dist/css/bootstrap.css'
export default function Movies() {

  const API_KEY = "004fae8352a808e06874b6f1d408b11a";
  const [searchResults, setSearchResults] = useState([]);
  const [search, setSearch] = useState("");
  const trendingRef = useRef(null);
  const popularRef = useRef(null);
  const topRatedRef = useRef(null);

  const scroll = (ref, dir) => {
    ref.current.scrollBy({
      left: dir === "left" ? -500 : 500,
      behavior: "smooth"
    });
  };
  const [trending, setTrending] = useState([]);
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);

  useEffect(() => {


    fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`)
      .then(res => res.json())
      .then(data => setTrending(data.results));

    
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
      .then(res => res.json())
      .then(data => setPopular(data.results));

    
    fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`)
      .then(res => res.json())
      .then(data => setTopRated(data.results));

  }, []);
  useEffect(() => {

  if (!search) {
    setSearchResults([]);
    return;
  }

  const fetchMovies = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${search}`
    );

    const data = await res.json();
    setSearchResults(data.results);
  };

  fetchMovies();

}, [search]);
  

 return (
<div className="bg-movies text-white p-5">
    <h1 className="text-center fw-bold p-5">🎥 Explore Movies</h1>
    <div className="container">
        <input type="text" className="form-control w-50 mx-auto shadow rounded-pill" placeholder="Search for movies..." value={search} onChange={(e) => setSearch(e.target.value)}/>
    </div>
    <div className="row mt-4">
  {searchResults.map(movie => (
    <div key={movie.id} className="col-md-3 mb-4">
      <div className="card shadow">

        <img
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          className="card-img-top"
          alt={movie.title}
        />

        <div className="card-body">
          <h6>{movie.title}</h6>
        </div>

      </div>
    </div>
  ))}
</div>

<div className="container my-5">
  <h2 className="text-center mb-4">🔥 Trending Movies</h2>
  <div className="position-relative ">


    <button className="btn btn-dark position-absolute top-50 start-0 translate-middle-y z-3" onClick={() => scroll(trendingRef, "left")}>
      <i class="fa-duotone fa-solid fa-chevron-left"></i>
    </button>

    <button className="btn btn-dark position-absolute top-50 end-0 translate-middle-y z-3" onClick={() => scroll(trendingRef, "right")}>
      <i class="fa-duotone fa-solid fa-chevron-right"></i>
    </button>

  <div
    ref={trendingRef}
    className="d-flex overflow-auto gap-4 relative hide-scrollbar"
    style={{
      scrollBehavior: "smooth"
    }}
  >
    {trending.map((m) => (
      <div
        key={m.id}
        className="flex-shrink-0 movie-card"
      >
        <div className="card shadow rounded-4 d-flex gap-4">
        <img
          src={`https://image.tmdb.org/t/p/w300${m.poster_path}`}
          className="card-img-top rounded-4"
          alt={m.title}
        />
      </div>
    </div>
    ))}
  </div>
  </div>

</div>
<div className="container my-5">

  <h2 className="text-center my-4">🎬 Popular Movies</h2>
  <div className="position-relative ">


    <button className="btn btn-dark position-absolute top-50 start-0 translate-middle-y z-3" onClick={() => scroll(popularRef, "left")}>
      <i class="fa-duotone fa-solid fa-chevron-left"></i>
    </button>

    <button className="btn btn-dark position-absolute top-50 end-0 translate-middle-y z-3" onClick={() => scroll(popularRef, "right")}>
      <i class="fa-duotone fa-solid fa-chevron-right"></i>
    </button>

  <div
    ref={popularRef}
    className="d-flex overflow-auto gap-4 relative hide-scrollbar"
    style={{
      scrollBehavior: "smooth",
    }}
  >
    {popular.map((m) => (
      <div
        key={m.id}
        className="flex-shrink-0 movie-card"
      >
        <div className="card shadow rounded-4 d-flex gap-4">
        <img
          src={`https://image.tmdb.org/t/p/w300${m.poster_path}`}
          className="card-img-top rounded-4"
          alt={m.title}
        />
      </div>
    </div>
    ))}
  </div>
  </div>

</div>
<div className="container my-5">

  <h2 className="text-center my-4">⭐ Top Rated Movies</h2>
  <div className="position-relative ">
    <button className="btn btn-dark position-absolute top-50 start-0 translate-middle-y z-3" onClick={()=>scroll(topRatedRef,"left")}><i class="fa-duotone fa-solid fa-chevron-left"></i></button>
    <button className="btn btn-dark position-absolute top-50 end-0 translate-middle-y z-3" onClick={()=>scroll(topRatedRef,"right")}><i class="fa-duotone fa-solid fa-chevron-right"></i></button>
  <div ref={topRatedRef} className="d-flex overflow-auto gap-4 hide-scrollbar" style={{ scrollBehavior: "smooth"}}>
    {topRated.map((m) => (
      <div className="flex-shrink-0 movie-card" key={m.id}>
            <div className="card shadow rounded-4 d-flex gap-4">
        <img src={`https://image.tmdb.org/t/p/w300${m.poster_path}`} className="card-img-top img-fluid rounded-4" alt={m.title} />
      </div>
    </div>
    ))}
  </div>
</div>
</div>
</div>
);
}