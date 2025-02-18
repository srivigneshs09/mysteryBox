import './App.css';
import MysteryCube from './components/MysteryCube';

function App() {
  return (
    <div className="bg-black min-h-screen flex flex-col justify-center items-center">
      {/* Centered CSBS Mystery Box Text */}
      <p className="font-mono text-4xl lg:text-5xl text-white text-center w-full py-4">
        CSBS MYSTERY BOX
      </p>

      {/* Mystery Cube Component */}
      <MysteryCube />
    </div>
  );
}

export default App;
