import { BASE_URL, requestBackend } from "../../utils/request";
import { useNavigate, useParams } from "react-router-dom";
import { validateEmail } from "../../utils/validate";
import { useEffect, useState } from "react";
import { Movie } from "../../types/types";
import { AxiosRequestConfig } from "axios";
import { toast } from "react-toastify";
import "./styles.css";


type UrlParams = {
  movieId: string;
};

const Form = () => {
  const { movieId } = useParams<UrlParams>();
  const [movie, setMovie] = useState<Movie>();
  const navigate = useNavigate();

  useEffect(() => {
    const params: AxiosRequestConfig = {
      method: "GET",
      url: `/movies/${movieId}`,
    };

    requestBackend(params).then((response) => {
      setMovie(response.data);
    });
  }, [movieId]);

  const handleCancel = () => {
    navigate("/");
  };

  function handleSumit(event: React.FormEvent<HTMLFormElement>){
    event.preventDefault();
    const email = (event.target as any).email.value;
    const score = (event.target as any).score.value;

    if(!validateEmail(email)){
      return;
    }

    const config: AxiosRequestConfig = {
      baseURL: BASE_URL,
      method: 'PUT',
      url: '/scores',
      data: {
        emailUser: email,
        idMovie:movieId,
        value: score
      }
    }

    requestBackend(config)
    .then(() => {
      toast.success(`Avaliação salva com sucesso!`);
      navigate('/')
  })
  .catch(() => {
    toast.error('Erro ao salvar avaliação');
   })
  }

  return (
    <div className="dsmovie-form-container">
      <img
        className="dsmovie-movie-card-image"
        src={movie?.image}
        alt={movie?.title}
      />
      <div className="dsmovie-card-bottom-container">
        <h3>{movie?.title}</h3>
        <form className="dsmovie-form" onSubmit={handleSumit}>
          <div className="form-group dsmovie-form-group">
            <label htmlFor="email">Informe seu email</label>
            <input type="email" className="form-control" id="email" />
          </div>
          <div className="form-group dsmovie-form-group">
            <label htmlFor="score">Informe sua avaliação</label>
            <select className="form-control" id="score">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div className="dsmovie-form-btn-container">
            <button type="submit" className="btn btn-dark dsmovie-btn">
              Salvar
            </button>
          </div>
        </form>
        <button
          className="btn btn-dark dsmovie-btn mt-3"
          onClick={handleCancel}
        >
          Cancelar
        </button>
      </div>
    </div>
  );
};

export default Form;
