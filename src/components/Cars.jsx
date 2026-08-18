const cars = [
  {
    name: "Tesla Model 3",
    price: "$42,990",
    image:
      "https://images.unsplash.com/photo-1560958089-b8a1929cea89",
    description:
      "A modern electric sedan with impressive range and performance."
  },
  {
    name: "BMW M4",
    price: "$78,100",
    image:
      "https://images.unsplash.com/photo-1555215695-3004980ad54e",
    description:
      "A powerful luxury sports car designed for an exciting drive."
  },
  {
    name: "Mercedes AMG",
    price: "$92,500",
    image:
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8",
    description:
      "Premium performance combined with elegant German engineering."
  }
];

function Cars() {
  return (
    <div className="product-grid">

      {cars.map((car) => (

        <div
          className="product-card"
          key={car.name}
        >

          <img
            src={car.image}
            alt={car.name}
          />

          <div className="product-content">

            <span className="category-label">
               Car
            </span>

            <h2>
              {car.name}
            </h2>

            <p>
              {car.description}
            </p>

            <div className="product-bottom">

              <strong>
                {car.price}
              </strong>

              <button>
                View Details
              </button>

            </div>

          </div>

        </div>

      ))}

    </div>
  );
}

export default Cars;