import { useSelector } from "react-redux";
import CarCard from "../components/CarCard";

function Favorites() {
  const favorites = useSelector(
    (state) => state.favorites.items
  );

  return (
    <section className="section">
      <div className="page-header">
        <p className="section-label">YOUR COLLECTION</p>
        <h1>Favorite Cars ❤️</h1>
      </div>

      {favorites.length === 0 ? (
        <div className="empty">
          <h2>No favorite cars yet.</h2>
          <p>
            Click the ❤️ button on a car to add it here.
          </p>
        </div>
      ) : (
        <div className="car-grid">
          {favorites.map((car) => (
            <CarCard
              key={car.id}
              car={car}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default Favorites;