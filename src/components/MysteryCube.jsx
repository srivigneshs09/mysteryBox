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
    "Pen", "Pencil", "Eraser", "Notebook", "Comb", "Clip", "Cup", 
    "Phone", "Charger", "Bottle", "Spoon", "Toothbrush", "Chair", 
    "Table", "T-shirt", "Shirt", "Glasses", "Watch", "Wallet", 
    "Keys", "Bag", "Umbrella", "Headphones", "Towel", "Socks", 
    "Shoes", "Camera", "Book", "Keypad", "Sunglasses case", "Paperweight", 
    "Postcard", "Plant pot", "Stress ball", "Coasters", "Popcorn maker", 
    "Chalkboard", "Playdough", "Flash drive", "Bowling ball", "Frisbee", 
    "Hammock", "Puzzle", "Snow globe", "Paintbrush", "Ice cube tray", 
    "Letter opener", "Pool float", "Bubble wrap", "Post-it dispenser", 
    "Magnetic strip", "Battery charger", "Fridge magnet", "Cactus", 
    "Pizza cutter", "Teacup", "Watering can", "Doormat", "Thermometer", 
    "Hot pad", "Spatula", "Ruler", "Tongs", "Measuring spoons", "Compost bin", 
    "Crockpot", "Travel pillow", "Carabiner", "Skateboard", "Pool cue", 
    "Map", "Jigsaw puzzle", "Picture frame", "Bread box", "Yoga block", 
    "Tupperware", "Dog leash", "Dog collar", "Pet carrier", "Hair straightener", 
    "Headband", "Medals", "Marbles", "Shoelaces", "Garden hose", "Tea strainer", 
    "Muffin tin", "Nutcracker", "Egg timer", "Gravy boat", "Whisk", "Sandals", 
    "Apron", "Pizza stone", "Paper lantern", "Jenga blocks", "Vases", "Salt lamp", 
    "Wallet chain", "Wind chimes", "Baking mat", "Milk frother", "Tea kettle", 
    "Welcome sign", "Bug spray", "Safety pins", "Candle snuffer", "Cookie jar", 
    "Plant mister", "Tarot cards", "Snow shovel", "Luggage tag", "Back scratcher", 
    "Squeegee", "Tie rack", "Pet brush", "Tea infuser", "Tinsel", "Ice scraper", 
    "Foldable chair", "Clothesline", "Wall hooks", "Apron", "Bean bag", "Ice pack", 
    "Bathrobe", "Scooter", "Folding table", "Drumstick", "Hula hoop", "String lights", 
    "Lantern", "Pizza pan", "Tupperware", "Outdoor mat", "LED strip lights", 
    "Flashlight", "Paddle board", "Sleeping bag", "Card deck", "Frisbee", "Yoga mat", 
    "Safety goggles", "Portable fan", "Picnic basket", "Bubble blower", "Pen holder", 
    "Snow boots", "Trampoline", "Swing", "Sandcastle mold", "Corkscrew", "Raincoat", 
    "Patch kit", "Hummingbird feeder", "Ice cream scoop", "Laundry basket", 
    "Air conditioner filter", "Shoe rack", "Cupcake holder", "Tree swing", 
    "Camera strap", "Keypad", "Potting soil", "Fruit bowl", "Tire pressure gauge", 
    "Ice tray", "Canteen", "Fidget spinner", "Night light", "Makeup bag", "Luggage", 
    "Tarp", "Sandpaper", "Pool noodles", "Sunglasses cleaner", "Sunhat", "Lazy Susan", 
    "Windbreaker", "Paper punch", "Car mat", "Flash drive holder", "Gumball machine", 
    "Roller skates", "Bike lock", "Travel mug", "Trivet", "Griddle", "Pop socket", 
    "Measuring cups", "Trash can liner", "Seat cushion", "Car air freshener", 
    "Baby wipes", "Walking stick", "Spice rack", "Money clip", "Record player", 
    "Car window shade", "Picnic blanket", "Snow boots", "Hand warmer", "Sauna suit", 
    "Teapot", "Medicine box", "Slippers", "Door mat", "Shoehorn", "Measuring tape", 
    "Paper shredder", "Garden rake", "Sledgehammer", "Towel rack", "Slide projector", 
    "Razor sharpener", "Parasol", "Ziplock bags", "Wall mirror", "Spork", "Beach bag", 
    "Baby monitor", "Nail art kit", "Paint roller", "Tile cutter", "Chicken coop", 
    "Roller blind", "Canister set", "Waffle maker", "Pen", "Notebook", "Phone", "Wallet", "Dress", "Shirt", "Pants", "Shoes", "Socks", 
    "Comb", "Toothbrush", "Toothpaste", "Hairbrush", "Towel", "Shampoo", "Conditioner", 
    "Body wash", "Soap", "Razor", "Deodorant", "Perfume", "Hand sanitizer", "Face wash", 
    "Moisturizer", "Sunscreen", "Hand cream", "Lip balm", "Glasses", "Sunglasses", "Umbrella", 
    "Hat", "Jacket", "Gloves", "Scarf", "Belt", "Earrings", "Necklace", "Ring", "Watch", 
    "Laptop", "Charger", "Power bank", "Headphones", "Earphones", "Laptop bag", "Phone case", 
    "Keychain", "Car keys", "House keys", "Book", "Magazine", "TV remote", "Coffee mug", 
    "Water bottle", "Lunchbox", "Thermos", "Plate", "Bowl", "Cup", "Spoon", "Fork", "Knife", 
    "Cutting board", "Pot", "Pan", "Kettle", "Coffee machine", "Microwave", "Refrigerator", 
    "Toaster", "Blender", "Juicer", "Can opener", "Peeler", "Grater", "Salt shaker", 
    "Pepper shaker", "Sugar jar", "Dishwashing soap", "Sponge", "Trash bag", "Mop", "Broom", 
    "Dustpan", "Cleaning cloth", "Vacuum cleaner", "Laundry detergent", "Fabric softener", 
    "Iron", "Ironing board", "Sewing kit", "Hangers", "Shoe rack", "Bed", "Pillow", "Blanket", 
    "Bedsheet", "Mattress", "Curtains", "Curtain rod", "Wall clock", "Calendar", "Photo frame", 
    "Desk lamp", "Light bulbs", "Extension cord", "Flashlight", "Batteries", "Scissors", 
    "Tape", "Glue", "Stapler", "Paper clips", "Rubber bands", "Highlighter", "Marker", 
    "Eraser", "Whiteboard", "Whiteboard markers", "Corkboard", "Pushpins", "Calendar", 
    "Planner", "Notepad", "Sticky notes", "File folder", "Binder", "Printer", "Printer paper", 
    "Ink cartridge", "USB drive", "External hard drive", "Memory card", "Phone stand", "Mouse", 
    "Keyboard", "Mousepad", "Webcam", "Speaker", "Bluetooth speaker", "HDMI cable", "Ethernet cable", 
    "Adapter", "Wi-Fi router", "Modem", "Power strip", "Surge protector", "First aid kit", "Medicine", 
    "Band-aids", "Thermometer", "Cough syrup", "Pain reliever", "Vitamins", "Cold pack", 
    "Hot water bottle", "Eyeglass cleaner", "Lint roller", "Shoe polish", "Tissues", "Napkins", 
    "Wet wipes", "Cotton swabs", "Cotton balls", "Makeup", "Makeup remover", "Hair ties", 
    "Hairpins", "Nail polish", "Nail clippers", "Nail file", "Tweezers", "Shaving cream", 
    "Shaving razor", "Beard oil", "Beard comb", "Face mask", "Hand cream", "Foot cream", 
    "Pedicure kit", "Hair gel", "Hair spray", "Hair straightener", "Hair curler", "Electric razor", 
    "Toothpicks", "Floss", "Dental picks", "Mouthwash", "Air freshener", "Perfumed candles", 
    "Incense", "Lighter", "Matches", "Yoga mat", "Dumbbells", "Resistance bands", "Exercise ball", 
    "Jump rope", "Water filter",
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
  
    if (remainingProducts.length === 0) return;
  
    const randomIndex = crypto.getRandomValues(new Uint32Array(1))[0] % remainingProducts.length;
    const randomProduct = remainingProducts[randomIndex];
  
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
