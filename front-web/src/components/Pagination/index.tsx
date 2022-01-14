import { ReactComponent as Arrow } from "../../assets/arrow.svg";
import "./styles.css";

const Pagination = () =>{


  return (
    <div className="dsmovie-pagination-container">
      <div className="dsmovie-pagination-box">
        <button className="dsmovie-pagination-button" disabled={true}>
          <Arrow className="dsmovie-flip-horizontal" />
        </button>
        {
          <p>
            {`${1} de ${3}`}
          </p>
    }
        <button className="dsmovie-pagination-button" disabled={false}>
          <Arrow className="dsmovie-flip-active" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
