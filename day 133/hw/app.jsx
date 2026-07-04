function App() {
  return (
    <div className="bg-[#f2ebe3] h-screen flex justify-center items-center">

      <div className="bg-white rounded-2xl w-[600px] flex overflow-hidden">

        
        <img
          className="w-1/2 object-cover"
          src="https://images.unsplash.com/photo-1541643600914-78b084683601"
          alt=""
        />

        <div className="p-6 w-1/2">

          <p className="uppercase text-gray-400 tracking-[5px] text-sm">
            Perfume
          </p>

          <h1 className="text-3xl font-bold mt-4">
            Gabrielle Essence Eau De Parfum
          </h1>

          <p className="text-gray-500 mt-4">
            A floral, solar and voluptuous interpretation composed by Olivier Polge.
          </p>

          <div className="flex items-center gap-4 mt-6">
            <span className="text-3xl font-bold text-green-700">
              $149.99
            </span>

            <span className="line-through text-gray-400">
              $169.99
            </span>
          </div>

          {/* Button */}
          <button className="bg-green-700 text-white w-full py-3 rounded-xl mt-6 hover:bg-green-800">
            Add to Cart
          </button>

        </div>

      </div>

    </div>
  );
}

export default App;