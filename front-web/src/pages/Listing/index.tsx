import CardMovie from "../CardMovie";
import "./styles.css";

const Listing = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <CardMovie/>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <CardMovie/>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <CardMovie/>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <CardMovie/>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <CardMovie/>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <CardMovie/>
        </div>
      </div>
    </div>
  );
};

export default Listing;
