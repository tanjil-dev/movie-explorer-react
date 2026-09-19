function MovieModal({ movie, onClose }) {
  if (!movie) return null;

  return (
    <div className="modal-overlay">

      <div className="modal-content">

        <button 
          className="close-btn"
          onClick={onClose}
        >
          ✕
        </button>


        <img
          src={movie.image?.original || movie.image?.medium}
          alt={movie.name}
        />


        <h2>{movie.name}</h2>


        <p>
          ⭐ Rating: {movie.rating?.average || "N/A"}
        </p>


        <p>
          Genre: {movie.genres?.join(", ") || "Not available"}
        </p>


        <p>
          {movie.summary
            ? movie.summary.replace(/<[^>]*>/g, "")
            : "No description available"}
        </p>


      </div>

    </div>
  );
}

export default MovieModal;