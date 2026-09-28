import { NavLink, Outlet } from "react-router-dom";

function Cars() {
  return (
    <section className="section">
      <div className="page-header">
        <p className="section-label">CARHUB COLLECTION</p>
        <h1>Explore Cars</h1>
        <p>
          Find the perfect car for your lifestyle.
        </p>
      </div>

      <div className="sub-navigation">
        <NavLink to="/cars" end>
          All Cars
        </NavLink>

        <NavLink to="/cars/new">
          New Cars
        </NavLink>

        <NavLink to="/cars/used">
          Used Cars
        </NavLink>
      </div>

      <Outlet />
    </section>
  );
}

export default Cars;