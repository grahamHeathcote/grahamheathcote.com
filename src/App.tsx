import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ChessGame from "./pages/Chess";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chess" element={<ChessGame />} />
    </Routes>
  );
}

export default App;
