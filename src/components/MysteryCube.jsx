import { useState } from "react";
import SpotlightCard from "./SpotlightCard";
import Counter from "./Counter";
import "../App.css";

const MysteryCube = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [glowColor, setGlowColor] = useState("rgba(255,195,26,0.4)");
  const [products, setProducts] = useState([]);
  const [clicks, setClicks] = useState(3);
  const [selectedProduct, setSelectedProduct] = useState("");

  const productList = [
    "Smartphone", "Laptop", "Tablet", "Headphones", "Smartwatch",
    "Camera", "Speaker", "Keyboard", "Mouse", "Drone",
    "Printer", "Smart Home Device", "VR Headset", "Gaming Console",
    "Router", "Gamepad", "External Hard Drive", "Webcam",
    "Projector", "Flash Drive",
  ];

  const toggleCube = () => {
    if (clicks > 0) {
      setIsOpen(true);
      revealProduct();
      setClicks(clicks - 1);

      setTimeout(() => {
        setIsOpen(false);
        setSelectedProduct("");
      }, 800);
    }
  };

  const revealProduct = () => {
    const remainingProducts = productList.filter(product => !products.includes(product));
    const randomProduct = remainingProducts[Math.floor(Math.random() * remainingProducts.length)];
    setProducts(prevProducts => [...prevProducts, randomProduct]);
    setSelectedProduct(randomProduct);
    setGlowColor("rgba(69,185,251,0.33)");
  };

  const resetGame = () => {
    setIsOpen(false);
    setProducts([]);
    setClicks(3);
    setGlowColor("rgba(255,195,26,0.4)");
    setSelectedProduct("");
  };

  return (
    <div className="flex flex-col items-center justify-center w-full overflow-hidden">
      {/* Counter */}
      <Counter
        value={clicks}
        places={[10, 1]}
        fontSize={60} /* Adjusted for mobile */
        padding={6}
        gap={10}
        textColor="white"
        fontWeight={900}
      />

      {/* Cube Container */}
      <div
        id="cube"
        className="relative flex justify-center items-center cursor-pointer animate-floating mt-40"
        onClick={toggleCube}
      >
        {/* Glow Effect */}
        <div
          className="absolute rounded-full"
          style={{
            zIndex: -2,
            width: "150px",
            height: "80px",
            backgroundColor: glowColor,
            filter: "blur(20px)",
            margin: "50px 0",
          }}
        ></div>

        {/* Cube Faces */}
        <div
          className={`cube back absolute bg-cover bg-center transition-all duration-700 w-40 h-40 sm:w-48 sm:h-48 lg:w-64 lg:h-64 ${
            isOpen ? "opacity-10" : "opacity-100"
          }`}
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/dbrwtwlwl/image/upload/v1580369339/cube/mysteryBoxBackground_2x_b2espr.png')",
          }}
        ></div>

        <div
          className={`cube top absolute bg-cover bg-center transition-all duration-700 w-40 h-40 sm:w-48 sm:h-48 lg:w-64 lg:h-64 ${
            isOpen ? "translate-y-[-2rem] opacity-10" : "translate-y-0 opacity-100"
          }`}
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/dbrwtwlwl/image/upload/v1580369339/cube/mysteryBoxTopFlap_2x_f9cb8g.png')",
          }}
        ></div>

        <div
          className={`cube left absolute bg-cover bg-center transition-all duration-700 w-40 h-40 sm:w-48 sm:h-48 lg:w-64 lg:h-64 ${
            isOpen ? "translate-x-[-2rem] opacity-10" : "translate-x-0 opacity-100"
          }`}
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/dbrwtwlwl/image/upload/v1580369339/cube/mysteryBoxLeftFlap_2x_y8u4gz.png')",
          }}
        ></div>

        <div
          className={`cube right absolute bg-cover bg-center transition-all duration-700 w-40 h-40 sm:w-48 sm:h-48 lg:w-64 lg:h-64 ${
            isOpen ? "translate-x-[2rem] opacity-10" : "translate-x-0 opacity-100"
          }`}
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/dbrwtwlwl/image/upload/v1580369339/cube/mysteryBoxRightFlap_2x_abexhh.png')",
          }}
        ></div>

        {/* Selected Product Name */}
        {isOpen && (
          <div className="absolute text-white text-3xl md:text-4xl font-bold transition-all duration-700 top-1/2 transform -translate-y-1/2">
            {selectedProduct}
          </div>
        )}
      </div>

      {/* Reset Button */}
      <button
        onClick={resetGame}
        className="mt-56 px-6 py-3 text-white text-lg md:text-xl font-bold rounded-md transition-all border border-white hover:bg-white hover:text-black"
      >
        Reset Game
      </button>

      {/* SpotlightCard appears after 3 clicks */}
      {clicks === 0 && (
        <SpotlightCard className="mt-8 p-6 md:p-10 bg-gray-800 text-white rounded-lg shadow-lg w-full max-w-xs sm:max-w-md lg:max-w-lg">
          <h2 className="text-xl md:text-2xl font-bold mb-4">Your Products</h2>
          <ul className="list-disc pl-5 text-lg">
            {products.map((product, index) => (
              <li key={index}>{product}</li>
            ))}
          </ul>
          <p className="mt-4 text-lg">Now, combine these products into one unique product and sell it!</p>
        </SpotlightCard>
      )}

      {/* Floating Animation */}
      <style>
        {`
          @keyframes floating {
            0% { transform: translateY(-0.5rem); }
            100% { transform: translateY(0.5rem); }
          }

          .animate-floating {
            animation: floating 1.5s ease-in-out infinite alternate;
          }
        `}
      </style>
    </div>
  );
};

export default MysteryCube;
