import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { warmEngine } from "./lib/warmEngine";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ChessGame from "./pages/Chess";
import NotFound from "./pages/NotFound";
import Car from "./pages/Car";
import Pool from "./pages/Pool";

function App() {
  useEffect(() => {
    warmEngine();
  }, []);

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="chess" element={<ChessGame />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="/car" element={<Car />} />
      <Route path="/cars" element={<Car />} />
      <Route path="/pool" element={<Pool />} />
      <Route path="/pools" element={<Pool />} />
    </Routes>
  );
}

export default App;
