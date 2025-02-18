import "./App.css";
import MysteryCube from "./components/MysteryCube";

function App() {
  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center px-4">
      {/* Responsive Title */}
      <p className="font-mono font-extrabold text-5xl md:text-7xl lg:text-9xl text-white text-center mb-6">
        MYSTERY BOX
      </p>
      {/* Mystery Cube Component */}
      <MysteryCube />
    </div>
  );
}

export default App;
