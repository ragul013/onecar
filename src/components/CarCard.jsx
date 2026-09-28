import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  addFavorite,
  removeFavorite,
} from "../redux/favoritesSlice";

function CarCard({ car }) {
  const dispatch = useDispatch();

  const favorites = useSelector(
    (state) => state.favorites.items
  );

  const isFavorite = favorites.some(
    (item) => item.id === car.id
  );

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(car.id));
    } else {
      dispatch(addFavorite(car));
    }
  };

  return (
    <div className="car-card">
      <img
        src={car.image}
        alt={car.name}
        className="car-image"
      />

      <div className="car-info">
        <span className="badge">{car.condition}</span>

        <h3>{car.name}</h3>

        <p className="brand">{car.brand}</p>

        <div className="car-details">
          <span>📅 {car.year}</span>
          <span>⛽ {car.fuel}</span>
          <span>⚙️ {car.transmission}</span>
        </div>

        <h2>₹{car.price.toLocaleString("en-IN")}</h2>

        <div className="card-actions">
          <Link to={`/cars/${car.id}`} className="details-btn">
            View Details
          </Link>

          <button
            onClick={toggleFavorite}
            className="favorite-btn"
          >
            {isFavorite ? "❤️" : "🤍"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default CarCard;