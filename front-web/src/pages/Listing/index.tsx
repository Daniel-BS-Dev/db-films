import Pagination from "../../components/Pagination";
import { requestBackend } from "../../utils/request";
import { MoviePage } from "../../types/types";
import { useState, useEffect } from "react";
import { AxiosRequestConfig } from "axios";
import CardMovie from "../CardMovie";

const Listing = () => {
  const [movies, setMovies] = useState<MoviePage>({
    content: [],
    last: true,
    totalPages: 0,
    totalElements: 0,
    size: 12,
    number: 0,
    first: true,
    numberOfElements: 0,
    empty: true,
  });
  const [isLoader, setIsLoader] = useState(false);
  const [activePage, setActivePage] = useState(0);

  useEffect(() => {
    const params: AxiosRequestConfig = {
      method: "GET",
      url: "/movies",
      params: {
        page: activePage,
        linePerPage: 6,
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
  }, [activePage]);

  return (
    <>
      <Pagination page={movies} onChange = {(changePage: number) => setActivePage(changePage)}/>
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
