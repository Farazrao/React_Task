import React, { useState } from "react";
import "../styles/Foodcard.css";
import FoodFiltterButton from "./FoodFiltterButton";
const images1 = importAll(
  require.context("../images/Brandimages", false, /\.(png|jpe?g|svg)$/)
);
const images2 = importAll(
  require.context("../images/TeaserImages", false, /\.(png|jpe?g|svg)$/)
);
const images3 = importAll(
  require.context("../images/Mobilesimages", false, /\.(png|jpe?g|svg)$/)
);
const FoodCard = ({ items }) => {
  const [filteredItems, setFilteredItems] = useState(items);
  // Filter function
  const filtterItems = (filter) => {
    let newItems = [];
    switch (filter) {
      case "topseller":
        newItems = items.filter((item) => item.topseller === true);
        break;
      case "new":
        newItems = items.filter((item) => item.new === true);
        break;
      case "price_reduced":
        newItems = items.filter((item) => item.price_reduced !== null);
        break;
      case "popularity":
        newItems = items.filter((item) => item.rating > 4);
        break;
      default:
        newItems = items;
    }
    setFilteredItems(newItems);
  };
  return (
    <div className="container">
      <div className="row justify-content-center align-items-center">
        <div className="col-md-12 text-center">
          <h1 className="fw-bold fs-3">Finde dein perfektes Smartphone</h1>
          <div className="teaser-images">
            {Object.keys(images2).map((imageKey) => (
              <img
                key={imageKey}
                src={images2[imageKey]}
                alt={`Teaser ${imageKey}`}
              />
            ))}
          </div>
          <div className="col-sm-12 text-center">
            <div className="mobile-brands">
              <div className="image-container">
                {Object.keys(images1).map((imageKey) => (
                  <img
                    key={imageKey}
                    src={images1[imageKey]}
                    alt={`Teaser ${imageKey}`}
                    className="mobile-brand"
                  />
                ))}
              </div>
            </div>
            <div className=".btn-gray">
              {/* Call the FiltterButton component with the filter function */}
              <FoodFiltterButton filtterItems={filtterItems} />
            </div>
          </div>
        </div>
        {filteredItems.map((item) => (
          <div key={item.id} className="col-md-2 col-sm-6 card my-3 border-1">
            <div className="card-img-top text-center">
              <img src={images3[item.image]} alt="" className="w-100" />
            </div>
            <div className="card-body">
              <div className="card-title fw-bold fs-4">{item.rating}</div>
              <div className="card-tex">{item.name}</div>
              <div className="card-tex">{item.price}</div>
              <div className="card-tex">{item.price_reduced}</div>
            </div>
            <div className="card-footer">
              <button className="btn btn-gray btn-block btn-lg">Order</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
function importAll(r) {
  const images = {};
  r.keys().forEach((key) => {
    images[key.replace("./", "")] = r(key);
  });
  return images;
}
export default FoodCard;
