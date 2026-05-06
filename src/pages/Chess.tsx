import { Chessboard } from "react-chessboard";
import { Chess, type Square } from "chess.js";
import { useState, useRef } from "react";
import axios from "axios";

function ChessGame() {
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
      <h1 className="text-xl font-semibold mb-2">Chess</h1>
      <div className="mt-2">
        I made this chess engine in Julia -- see{" "}
        <a
          href="https://github.com/grahamHeathcote/Chess"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          here
        </a>{" "}
        for details. Move a white piece to get started (the first move might
        take a while as the container has to startup). Note there is no threefold repition currently implemented.
      </div>
      <div className="max-w-md pt-2">
        <Chessboard options={{ position: fen, onPieceDrop }} />
      </div>
    </div>
  );
}

export default ChessGame;
