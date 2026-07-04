function App() {
  return (
    <div className="min-h-screen bg-gray-200 flex flex-col items-center justify-center gap-10 p-10">

      {/* ORDER SUMMARY CARD */}
      <div className="w-[350px] bg-white rounded-3xl shadow-xl overflow-hidden">
        
        <img src="/illustration-hero.svg" />

        <div className="p-6 text-center">
          <h1 className="text-2xl font-bold text-[#1f2f56]">
            Order Summary
          </h1>

          <p className="text-gray-500 mt-3 text-sm">
            You can now listen to millions of songs anywhere.
          </p>

          <div className="flex justify-between items-center bg-gray-100 p-4 rounded-xl mt-5">
            <div>
              <p className="font-bold">Annual Plan</p>
              <p className="text-gray-500 text-sm">$59.99/year</p>
            </div>

            <button className="text-blue-600 font-bold text-sm">
              Change
            </button>
          </div>

          <button className="w-full mt-6 bg-blue-600 text-white py-3 rounded-xl">
            Proceed to Payment
          </button>

          <p className="mt-4 text-gray-500">Cancel Order</p>
        </div>
      </div>

      {/* NFT CARD */}
      <div className="w-[320px] bg-[#14253d] p-5 rounded-2xl text-white shadow-xl">

        <div className="relative group">
          <img src="/image-equilibrium.jpg" className="rounded-xl" />

          <div className="absolute inset-0 bg-cyan-400/50 opacity-0 group-hover:opacity-100 rounded-xl flex items-center justify-center">
            👁
          </div>
        </div>

        <h1 className="mt-4 font-bold hover:text-cyan-400">
          Equilibrium #3429
        </h1>

        <p className="text-gray-400 text-sm mt-2">
          NFT collection description here.
        </p>

        <div className="flex justify-between mt-4 text-sm">
          <span className="text-cyan-400">0.041 ETH</span>
          <span className="text-gray-400">3 days left</span>
        </div>

        <hr className="border-gray-600 my-4" />

        <div className="flex items-center gap-3">
          <img src="/image-avatar.png" className="w-8 rounded-full" />
          <p className="text-sm text-gray-400">
            Creation of <span className="text-white">Jules Wyvern</span>
          </p>
        </div>

      </div>

    </div>
  );
}

export default App;