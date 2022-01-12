import { Link } from "react-router-dom";
import MovieScore from "./movieScore";
import "./styles.css";

const CardMovie = () => {
    const movie = {
        id: 1,
        image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg",
        title: "The Witcher",
        count: 2,
        score: 4.5
    };

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
        <Link to={`/form/${movie.id}`} className="btn btn-primary dsmovie-btn">Avaliar</Link>
      </div>
      </div>
  );
};

export default CardMovie;
