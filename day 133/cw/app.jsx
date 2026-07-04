function App() {
  return (
    <div className="bg-[#2c2c38] h-screen flex justify-center items-center">

      <div className="bg-white w-56 p-4 rounded-2xl">

        <img
          className="rounded-xl"
          src="https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=frontendmentor"
          alt=""
        />

        <h2 className="text-center font-bold text-lg mt-4">
          Improve your front-end skills by building projects
        </h2>

        <p className="text-center text-gray-500 text-sm mt-3">
          Scan the QR code to visit Frontend Mentor
        </p>

      </div>

    </div>
  );
}

export default App;