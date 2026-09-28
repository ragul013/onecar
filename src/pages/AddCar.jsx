import { useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  carReducer,
  initialState,
} from "../reducer/carReducer";

function AddCar() {
  const navigate = useNavigate();

  const [cars, dispatch] = useReducer(
    carReducer,
    initialState
  );

  const [form, setForm] = useState({
    name: "",
    brand: "",
    price: "",
    year: "",
    fuel: "Petrol",
    transmission: "Automatic",
    image: "",
    description: "",
  });

  const [error, setError] = useState("");

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !form.name ||
      !form.brand ||
      !form.price ||
      !form.year ||
      !form.image ||
      !form.description
    ) {
      setError("Please fill all fields.");
      return;
    }

    if (Number(form.price) <= 0) {
      setError("Price must be greater than zero.");
      return;
    }

    const newCar = {
      ...form,
      id: Date.now(),
      price: Number(form.price),
      year: Number(form.year),
      condition: "New",
    };

    dispatch({
      type: "ADD_CAR",
      payload: newCar,
    });

    setError("");

    alert("Car added successfully!");

    navigate("/cars");
  };

  return (
    <section className="form-section">
      <div className="page-header">
        <p className="section-label">
          CAR MANAGEMENT
        </p>
        <h1>Add New Car</h1>
      </div>

      <form onSubmit={handleSubmit} className="car-form">
        {error && (
          <div className="error">
            {error}
          </div>
        )}

        <input
          name="name"
          placeholder="Car Name"
          value={form.name}
          onChange={handleChange}
        />

        <input
          name="brand"
          placeholder="Brand"
          value={form.brand}
          onChange={handleChange}
        />

        <input
          name="price"
          type="number"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
        />

        <input
          name="year"
          type="number"
          placeholder="Year"
          value={form.year}
          onChange={handleChange}
        />

        <select
          name="fuel"
          value={form.fuel}
          onChange={handleChange}
        >
          <option>Petrol</option>
          <option>Diesel</option>
          <option>Electric</option>
          <option>Hybrid</option>
        </select>

        <select
          name="transmission"
          value={form.transmission}
          onChange={handleChange}
        >
          <option>Automatic</option>
          <option>Manual</option>
        </select>

        <input
          name="image"
          placeholder="Image URL"
          value={form.image}
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Car Description"
          value={form.description}
          onChange={handleChange}
        />

        <button type="submit" className="submit-btn">
          Add Car
        </button>
      </form>

      <p className="small-note">
        Cars added through this form demonstrate the
        CREATE operation using useReducer.
      </p>
    </section>
  );
}

export default AddCar;