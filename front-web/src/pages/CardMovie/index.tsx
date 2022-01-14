import { Link } from "react-router-dom";
import { Movie } from "../../types/types";
import MovieScore from "./movieScore";
import "./styles.css";

type Props = {
  movie: Movie;
}

const CardMovie = ({movie} : Props) => {
  return (
    <div className="container-card">
      <img
        className="dsmovie-movie-card-image"
        src={movie.image}
        alt={movie.title}
      />
      <div className="dsmovie-card-bottom-container">
        <h3>{movie.title}</h3>
        <MovieScore />
        <Link to={`/form/${movie.id}`} className="btn btn-dark dsmovie-btn">Avaliar</Link>
      </div>
      </div>
  );
};

export default CardMovie;
