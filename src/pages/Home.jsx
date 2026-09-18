import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="hero">
      <div className="hero-content">
        <h1>Discover Your Next Favorite Movie</h1>

        <p>
          Find popular movies, explore different genres,
          and choose something amazing to watch.
        </p>

        <Link to="/movies" className="hero-button">
          Explore Movies
        </Link>
      </div>
    </main>
  );
}

export default Home;