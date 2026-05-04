import { Chessboard } from "react-chessboard";
import { Chess, type Square } from "chess.js";
import { useState, useRef } from "react";
import axios from "axios";

function App() {
  const API_URL = import.meta.env.VITE_API_URL;
  const gameRef = useRef(new Chess());
  const game = gameRef.current;
  const [fen, setFen] = useState(game.fen());
  const [loading, setLoading] = useState(false);

  async function engineMove() {
    setLoading(true);
    try {
      const { data } = await axios.post(`${API_URL}/api/move`, {
        fen: game.fen(),
      });
      game.load(data.fen);
      setFen(data.fen);
    } finally {
      setLoading(false);
    }
  }

  function onPieceDrop({
    sourceSquare,
    targetSquare,
  }: {
    sourceSquare: string;
    targetSquare: string | null;
  }) {
    if (loading || game.turn() === "b" || !targetSquare) return false;

    try {
      game.move({
        from: sourceSquare as Square,
        to: targetSquare as Square,
        promotion: "q",
      });
      setFen(game.fen());
      if (!game.isGameOver()) engineMove();
      return true;
    } catch {
      return false;
    }
  }

  return (
    <div className="p-4">
      <h1 className="text-xl font-semibold mb-2">Graham Heathcote</h1>
      <h2>
        Welcome to my (soon to be improved) website -- I plan to host a chess
        engine I made here eventually.
      </h2>
      <div className="mt-2">
        In the meantime, see my{" "}
        <a
          href="https://www.linkedin.com/in/graham-heathcote/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Linkedin
        </a>{" "}
        to learn about me.
      </div>
      <div className="max-w-md pt-2">
        <Chessboard options={{ position: fen, onPieceDrop }} />
      </div>
    </div>
  );
}

export default App;
