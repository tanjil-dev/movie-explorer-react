import { useEffect, useState } from "react";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.tvmaze.com/shows")
      .then((response) => response.json())
      .then((data) => {
        setMovies(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
        setLoading(false);
      });
  }, []);

  const filteredMovies = movies.filter((movie) =>
    movie.name.toLowerCase().includes(searchText.toLowerCase())
  );

  if (loading) {
    return (
      <div>
        <h2>Loading movies...</h2>
      </div>
    );
  }

  return (
    <main className="movies-page">

      <h1>Movie Explorer</h1>

      <input
        type="text"
        placeholder="Search movies..."
        value={searchText}
        onChange={(event) => setSearchText(event.target.value)}
      />

      <p>
        Found {filteredMovies.length} shows
      </p>


      <div className="movie-grid">

        {filteredMovies.map((movie) => (

          <div className="movie-card" key={movie.id}>

            {movie.image?.medium && (
              <img
                src={movie.image.medium}
                alt={movie.name}
              />
            )}

            <h2>{movie.name}</h2>

            <p>
              Rating: {movie.rating?.average || "N/A"}
            </p>



          </div>

        ))}

      </div>



    </main>
  );
}

export default Movies;