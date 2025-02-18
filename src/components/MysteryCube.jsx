import { useState } from "react";
import SpotlightCard from "./SpotlightCard";
import Counter from "./Counter";

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
    "Projector", "Flash Drive"
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
    <div className="bg-black h-screen w-screen p-4 flex flex-col justify-center items-center overflow-hidden px-4 lg:px-0">
      {/* Counter - Larger on Desktop */}
      <Counter
        value={clicks}
        places={[10, 1]}
        fontSize={100} 
        padding={10}
        gap={12}
        textColor="white"
        fontWeight={900}
      />

      {/* Cube Container - Bigger on Larger Screens */}
      <div
        id="cube"
        className="relative flex justify-center items-center cursor-pointer animate-floating mt-20"
        onClick={toggleCube}
      >
        {/* Glow Effect */}
        <div
          className="absolute"
          style={{
            zIndex: -2,
            width: "200px",
            height: "120px",
            backgroundColor: glowColor,
            filter: "blur(20px)",
            margin: "60px 0",
          }}
        ></div>

        {/* Cube Faces */}
        <div
          className={`cube back absolute bg-cover bg-center transition-all duration-700 w-48 h-48 lg:w-64 lg:h-64 ${
            isOpen ? "opacity-10" : "opacity-100"
          }`}
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/dbrwtwlwl/image/upload/v1580369339/cube/mysteryBoxBackground_2x_b2espr.png')",
          }}
        ></div>

        <div
          className={`cube top absolute bg-cover bg-center transition-all duration-700 w-48 h-48 lg:w-64 lg:h-64 ${
            isOpen ? "translate-y-[-4rem] opacity-10" : "translate-y-0 opacity-100"
          }`}
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/dbrwtwlwl/image/upload/v1580369339/cube/mysteryBoxTopFlap_2x_f9cb8g.png')",
          }}
        ></div>

        <div
          className={`cube left absolute bg-cover bg-center transition-all duration-700 w-48 h-48 lg:w-64 lg:h-64 ${
            isOpen ? "translate-x-[-4rem] opacity-10" : "translate-x-0 opacity-100"
          }`}
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/dbrwtwlwl/image/upload/v1580369339/cube/mysteryBoxLeftFlap_2x_y8u4gz.png')",
          }}
        ></div>

        <div
          className={`cube right absolute bg-cover bg-center transition-all duration-700 w-48 h-48 lg:w-64 lg:h-64 ${
            isOpen ? "translate-x-[4rem] opacity-10" : "translate-x-0 opacity-100"
          }`}
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/dbrwtwlwl/image/upload/v1580369339/cube/mysteryBoxRightFlap_2x_abexhh.png')",
          }}
        ></div>

        {/* Selected Product Name */}
        {isOpen && (
          <div
            className="absolute text-white text-lg lg:text-2xl font-bold transition-all duration-700"
            style={{
              zIndex: 1,
              opacity: isOpen ? 1 : 0,
              top: "50%",
              transform: "translateY(-50%)",
            }}
          >
            {selectedProduct}
          </div>
        )}
      </div>

      {/* Reset Button - Large & Centered */}
      <div className="mt-25 text-white text-center">
  <button
    onClick={resetGame}
    className="mt-4 px-6 py-3 lg:px-8 lg:py-4 text-white text-lg lg:text-xl font-bold rounded-md transition-all"
  >
    Reset Game
  </button>
</div>


      {/* SpotlightCard appears after 3 clicks */}
      {clicks === 0 && (
        <SpotlightCard className="mt-8 p-6 lg:p-10 bg-gray-800 text-white rounded-lg shadow-lg w-full max-w-md lg:max-w-lg">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">Your Products</h2>
          <ul className="list-disc pl-5 text-lg lg:text-xl">
            {products.map((product, index) => (
              <li key={index}>{product}</li>
            ))}
          </ul>
          <p className="mt-4 text-lg lg:text-xl">
            Now, combine these products into one unique product and sell it!
          </p>
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
