import "./App.css";

function App() {
  return (
    <div className="container">

      <div className="card">

        <img
          src="https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=1000&auto=format&fit=crop"
          alt="Perfume"
        />

        <div className="content">

          <p className="category">PERFUME</p>

          <h1>Gabrielle Essence Eau De Parfum</h1>

          <p className="description">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>

          <div className="price">

            <span className="new-price">$149.99</span>

            <span className="old-price">$169.99</span>

          </div>

          <button>Add to Cart</button>

        </div>

      </div>

    </div>
  );
}

export default App;