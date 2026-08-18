function Home() {
  return (
    <div className="home-page">

      <div className="hero">

        <span className="hero-badge">
          Welcome to P-Hub
        </span>

        <h1>
          Find Products You
          Love.
        </h1>

        <p>
          Explore cars, bikes and laptops
          in one modern product marketplace.
        </p>

        <a
          href="/products"
          className="hero-button"
        >
          Explore Products →
        </a>

      </div>

    </div>
  );
}

export default Home;