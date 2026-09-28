import { useRef } from "react";
import { useSearchParams } from "react-router-dom";

import useFetchCars from "../hooks/useFetchCars";
import CarCard from "../components/CarCard";

function AllCars() {
  const { cars, loading, error } = useFetchCars();

  const searchInput = useRef(null);

  const [searchParams, setSearchParams] =
    useSearchParams();

  const search = searchParams.get("search") || "";

  const handleSearch = (event) => {
    const value = event.target.value;

    setSearchParams(
      value ? { search: value } : {}
    );
  };

  const filteredCars = cars.filter((car) =>
    `${car.name} ${car.brand}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="search-container">
        <input
          ref={searchInput}
          type="text"
          placeholder="Search BMW, Audi, Toyota..."
          value={search}
          onChange={handleSearch}
        />

        <button
          onClick={() => searchInput.current.focus()}
        >
          🔍
        </button>
      </div>

      {loading && (
        <div className="loading">
          Loading cars...
        </div>
      )}

      {error && (
        <div className="error">
          {error}
        </div>
      )}

      {!loading && !error && (
        <>
          {filteredCars.length === 0 ? (
            <div className="empty">
              No cars found.
            </div>
          ) : (
            <div className="car-grid">
              {filteredCars.map((car) => (
                <CarCard
                  key={car.id}
                  car={car}
                />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default AllCars;