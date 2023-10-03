import React from "react";

const FiltterButton = ({ filtterItems, setItems }) => {
  return (
    <div className="row justify-content-center">
      <button
        className="btn btn-outline-secondary col-md-2 mx-0 fw-bold btn-block"
        onClick={() => filtterItems("topseller")}
      >
        Topseller
      </button>
      <button
        className="btn btn-outline-secondary col-md-2 mx-0 fw-bold btn-block"
        onClick={() => filtterItems("new")}
      >
        New
      </button>
      <button
        className="btn btn-outline-secondary col-md-2 mx-0 fw-bold btn-block"
        onClick={() => filtterItems("price_reduced")}
      >
        Offers
      </button>
      <button
        className="btn btn-outline-secondary col-md-2 mx-0 fw-bold btn-block"
        onClick={() => filtterItems("popularity")}
      >
        Popularity
      </button>
    </div>
  );
};

export default FiltterButton;
