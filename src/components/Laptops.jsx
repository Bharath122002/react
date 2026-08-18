const laptops = [
  {
    name: "MacBook Pro",
    price: "$1,999",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQtDS42Tw3prDY43A-7cvHcRZvPj5rUIqh8be15NLA0Kn99rBllAQiRno&s=10",
    description:
      "Powerful laptop designed for professional work and creativity."
  },
  {
    name: "Dell XPS 15",
    price: "$1,499",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
    description:
      "Premium Windows laptop with a beautiful high-resolution display."
  },
  {
    name: "Gaming Laptop",
    price: "$1,799",
    image:
      "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6",
    description:
      "High-performance gaming machine built for demanding workloads."
  }
];

function Laptops() {
  return (
    <div className="product-grid">

      {laptops.map((laptop) => (

        <div
          className="product-card"
          key={laptop.name}
        >

          <img
            src={laptop.image}
            alt={laptop.name}
          />

          <div className="product-content">

            <span className="category-label">
              Laptop
            </span>

            <h2>
              {laptop.name}
            </h2>

            <p>
              {laptop.description}
            </p>

            <div className="product-bottom">

              <strong>
                {laptop.price}
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

export default Laptops;