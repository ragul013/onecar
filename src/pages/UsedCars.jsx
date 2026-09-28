import useFetchCars from "../hooks/useFetchCars";
import CarCard from "../components/CarCard";

function UsedCars() {
  const { cars, loading } = useFetchCars();

  const usedCars = cars.filter(
    (car) => car.condition === "Used"
  );

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="car-grid">
      {usedCars.map((car) => (
        <CarCard key={car.id} car={car} />
      ))}
    </div>
  );
}

export default UsedCars;