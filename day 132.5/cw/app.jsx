import "./App.css";

function App() {
  return (
    <div className="box">
      <img
        src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=hello"
        alt="qr"
      />

      <h3>Front-end skills</h3>

      <p>Scan QR code</p>
    </div>
  );
}

export default App;