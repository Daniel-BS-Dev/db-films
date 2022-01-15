import { ReactComponent as Arrow } from "../../assets/arrow.svg";
import { MoviePage } from "../../types/types";
import "./styles.css";

type Props = {
  page: MoviePage;
  onChange: (item: number) => void;
}

const Pagination = ({ page, onChange } : Props) =>{


  return (
    <div className="dsmovie-pagination-container">
      <div className="dsmovie-pagination-box">
        <button className="dsmovie-pagination-button" disabled={page.first} onClick={() => onChange(page.number - 1)}>
          <Arrow className="dsmovie-flip-horizontal" />
        </button>
        {
          <p>
            {`${page.number + 1} de ${page.totalPages}`}
          </p>
    }
        <button className="dsmovie-pagination-button" disabled={page.last} onClick={() => onChange(page.number + 1)}>
          <Arrow className="dsmovie-flip-active" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
