import { NavLink, Outlet } from "react-router-dom";

function Products() {
  return (
    <div className="products-page">

      <div className="products-header">

        <span className="section-badge">
          Products
        </span>

        <h1>
          Explore Our Products
        </h1>


      </div>


      {/* Nested Navigation */}

      <div className="category-nav">

        <NavLink to="cars">
          Cars
        </NavLink>

        <NavLink to="bikes">
          Bikes
        </NavLink>

        <NavLink to="laptops">
          Laptops
        </NavLink>

      </div>


      {/* Nested components appear here */}

      <Outlet />

    </div>
  );
}

export default Products;