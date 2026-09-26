import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ChessGame from "./pages/Chess";
import Car from "./pages/Car";
import Pool from "./pages/Pool";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chess" element={<ChessGame />} />
      <Route path="/car" element={<Car />} />
      <Route path="/pool" element={<Pool />} />
    </Routes>
  );
}

export default App;
