import Pagination from "../../components/Pagination";
import { requestBackend } from "../../utils/request";
import { MoviePage } from "../../types/types";
import { useState, useEffect } from "react";
import { AxiosRequestConfig } from "axios";
import CardMovie from "../CardMovie";

const Listing = () => {
  const [movies, setMovies] = useState<MoviePage>();
  const [isLoader, setIsLoader] = useState(false);

  useEffect(() => {
    const params: AxiosRequestConfig = {
      method: "GET",
      url: "/movies",
      params: {
        page: 3,
        linePerPage: 8,
      },
    };

    setIsLoader(true);
    requestBackend(params)
      .then((response) => {
        setMovies(response.data);
      })
      .finally(() => {
        setIsLoader(false);
      });
  }, []);

  return (
    <>
      <Pagination  />
      <div className="container">
        <div className="row ">
          {isLoader ? (
            <h1> Carregando ... </h1>
          ) : (
            movies?.content.map((movie) => (
              <div className="col-12 col-sm-6 col-md-4 " key={movie.id}>
                <CardMovie movie={movie} />
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Listing;
