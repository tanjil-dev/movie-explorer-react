import { useState } from "react";
import MovieCard from "../components/MovieCard";

const movies = [
  {
    id: 1,
    title: "Interstellar",
    year: "2014",
    genre: "Sci-Fi",
    image:
      "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa",
  },
  {
    id: 2,
    title: "The Dark Knight",
    year: "2008",
    genre: "Action",
    image:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba",
  },
  {
    id: 3,
    title: "Avatar",
    year: "2009",
    genre: "Adventure",
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23",
  },
  {
    id: 4,
    title: "Inception",
    year: "2010",
    genre: "Thriller",
    image:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728",
  },
];

function Movies() {
  const [search, setSearch] = useState("");

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="movies-page">
      <h1>Explore Movies</h1>

      <input
        type="text"
        placeholder="Search movie..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="movie-grid">
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </main>
  );
}

export default Movies;