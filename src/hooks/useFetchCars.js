import { useEffect, useState } from "react";

function useFetchCars() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const carImages = [
      "/cars/BMW M4.webp",
      "/cars/Audi R8.webp",
      "/cars/Mercedes C-Class.webp",
      "/cars/Porsche 911.webp",
      "/cars/Toyota Camry.webp",
      "/cars/Ford Mustang.webp",
      "/cars/Tesla Model 3.webp",
      "/cars/Lexus ES.webp",
      "/cars/Volvo XC90.webp",
      "/cars/Range Rover Sport.webp",
    ];

    const carNames = [
      "BMW M4",
      "Audi R8",
      "Mercedes C-Class",
      "Porsche 911",
      "Toyota Camry",
      "Ford Mustang",
      "Tesla Model 3",
      "Lexus ES",
      "Volvo XC90",
      "Range Rover Sport",
    ];

    const carBrands = [
      "BMW",
      "Audi",
      "Mercedes",
      "Porsche",
      "Toyota",
      "Ford",
      "Tesla",
      "Lexus",
      "Volvo",
      "Land Rover",
    ];

    const formattedCars = carNames.map((name, index) => ({
      id: index + 1,
      name: name,
      brand: carBrands[index],
      price: (index + 5) * 1000000,
      year: 2024 + (index % 2),

      fuel: index % 2 === 0 ? "Petrol" : "Diesel",

      transmission:
        index % 2 === 0 ? "Automatic" : "Manual",

      condition:
        index % 3 === 0 ? "Used" : "New",

      image: carImages[index],

      description:
        "Premium vehicle with excellent performance, comfort and modern technology.",
    }));

    setCars(formattedCars);
    setError("");
    setLoading(false);
  }, []);

  return {
    cars,
    loading,
    error,
  };
}

export default useFetchCars;
