import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Cars from "./pages/Cars";
import AllCars from "./pages/AllCars";
import NewCars from "./pages/NewCars";
import UsedCars from "./pages/UsedCars";
import CarDetails from "./pages/CarDetails";
import Favorites from "./pages/Favorites";
import AddCar from "./pages/AddCar";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/cars" element={<Cars />}>
            <Route index element={<AllCars />} />
            <Route path="new" element={<NewCars />} />
            <Route path="used" element={<UsedCars />} />
          </Route>

          <Route path="/cars/:id" element={<CarDetails />} />

          <Route path="/favorites" element={<Favorites />} />
          <Route path="/add-car" element={<AddCar />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;