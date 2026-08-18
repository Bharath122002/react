const bikes = [
  {
    name: "Royal Enfield Classic",
    price: "$5,500",
    image:
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39",
    description:
      "Classic motorcycle design with a powerful and comfortable ride."
  },
  {
    name: "Yamaha MT-15",
    price: "$4,200",
    image:
      "https://images.unsplash.com/photo-1558981359-219d6364c9c8",
    description:
      "A sporty street bike built for agile city performance."
  },
  {
    name: "Kawasaki Ninja",
    price: "$12,800",
    image:
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87",
    description:
      "High-performance sports bike with aggressive styling."
  }
];

function Bikes() {
  return (
    <div className="product-grid">

      {bikes.map((bike) => (

        <div
          className="product-card"
          key={bike.name}
        >

          <img
            src={bike.image}
            alt={bike.name}
          />

          <div className="product-content">

            <span className="category-label">
              Bike
            </span>

            <h2>
              {bike.name}
            </h2>

            <p>
              {bike.description}
            </p>

            <div className="product-bottom">

              <strong>
                {bike.price}
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

export default Bikes;