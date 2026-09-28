import useFetchCars from "../hooks/useFetchCars";
import CarCard from "../components/CarCard";

function NewCars() {
  const { cars, loading } = useFetchCars();

  const newCars = cars.filter(
    (car) => car.condition === "New"
  );

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="car-grid">
      {newCars.map((car) => (
        <CarCard key={car.id} car={car} />
      ))}
    </div>
  );
}

export default NewCars;