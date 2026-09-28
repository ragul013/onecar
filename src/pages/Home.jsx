import { Link } from "react-router-dom";
import useFetchCars from "../hooks/useFetchCars";
import CarCard from "../components/CarCard";

function Home() {
  const { cars, loading } = useFetchCars();

  return (
    <div>
      <section className="hero">
        <div>
          <p className="hero-small">WELCOME TO CARHUB</p>

          <h1>
            Find Your
            <br />
            <span>Dream Car</span>
          </h1>

          <p>
            Discover premium cars from trusted brands
            at competitive prices.
          </p>

          <Link to="/cars" className="hero-btn">
            Explore Cars →
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <p className="section-label">EXPLORE</p>
            <h2>Featured Cars</h2>
          </div>

          <Link to="/cars">View All →</Link>
        </div>

        {loading ? (
          <div className="loading">Loading cars...</div>
        ) : (
          <div className="car-grid">
            {cars.slice(0, 6).map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        )}
      </section>

      <section className="features">
        <div>
          <span>🚘</span>
          <h3>Premium Cars</h3>
          <p>Explore carefully selected vehicles.</p>
        </div>

        <div>
          <span>🔒</span>
          <h3>Trusted Service</h3>
          <p>Transparent and reliable car buying.</p>
        </div>

        <div>
          <span>💰</span>
          <h3>Best Prices</h3>
          <p>Competitive prices for every budget.</p>
        </div>
      </section>
    </div>
  );
}

export default Home;