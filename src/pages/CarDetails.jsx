import { useParams, Link } from "react-router-dom";
import useFetchCars from "../hooks/useFetchCars";

function CarDetails() {
  const { id } = useParams();

  const { cars, loading } = useFetchCars();

  if (loading) {
    return (
      <div className="loading">
        Loading car details...
      </div>
    );
  }

  const car = cars.find(
    (item) => item.id === Number(id)
  );

  if (!car) {
    return (
      <div className="empty">
        <h2>Car not found</h2>
        <Link to="/cars">Back to Cars</Link>
      </div>
    );
  }

  return (
    <section className="details-page">
      <img src={car.image} alt={car.name} />

      <div>
        <span className="badge">
          {car.condition}
        </span>

        <h1>{car.name}</h1>

        <h3>{car.brand}</h3>

        <h2>
          ₹{car.price.toLocaleString("en-IN")}
        </h2>

        <div className="specifications">
          <p>📅 Year: {car.year}</p>
          <p>⛽ Fuel: {car.fuel}</p>
          <p>
            ⚙️ Transmission: {car.transmission}
          </p>
        </div>

        <p>{car.description}</p>

        <button className="hero-btn">
          Contact Dealer
        </button>
      </div>
    </section>
  );
}

export default CarDetails;