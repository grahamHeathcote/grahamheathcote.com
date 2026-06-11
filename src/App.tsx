import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ChessGame from "./pages/Chess";
import Car from "./pages/Car";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chess" element={<ChessGame />} />
      <Route path="/car" element={<Car />} />
    </Routes>
  );
}

export default App;
