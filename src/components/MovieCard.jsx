function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <img src={movie.image} alt={movie.title} />

      <div className="movie-info">
        <h2>{movie.title}</h2>
        <p>{movie.genre}</p>
        <span>{movie.year}</span>
      </div>
    </div>
  );
}

export default MovieCard;