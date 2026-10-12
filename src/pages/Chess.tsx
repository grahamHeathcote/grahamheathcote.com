import { Chessboard } from "react-chessboard";
import { Chess, type Square } from "chess.js";
import { useState, useRef } from "react";
import axios from "axios";

function statusText(fen: string, loading: boolean, error: boolean) {
  const game = new Chess(fen);
  if (error) return "The engine could not be reached. Try your move again later.";
  if (game.isCheckmate())
    return game.turn() === "b" ? "Checkmate — you win!" : "Checkmate — the engine wins.";
  if (game.isDraw()) return "Draw.";
  if (loading) return "Engine is thinking…";
  return game.isCheck() ? "Your move (you are in check)." : "Your move.";
}

function ChessGame() {
  const API_URL = import.meta.env.VITE_API_URL;
  const gameRef = useRef(new Chess());
  const game = gameRef.current;
  const [fen, setFen] = useState(game.fen());
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function engineMove() {
    setLoading(true);
    setError(false);
    try {
      const { data } = await axios.post(`${API_URL}/api/move`, {
        fen: game.fen(),
      });
      game.load(data.fen);
      setFen(data.fen);
    } catch {
      // Hand the turn back so a failed request does not leave the game stuck.
      setError(true);
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

  function newGame() {
    game.reset();
    setFen(game.fen());
    setError(false);
  }

  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight text-[#3d2b23]">
          Chess
        </h1>
        <p className="max-w-prose leading-relaxed text-[#6b5d4f]">
          I made this chess engine in Julia — see{" "}
          <a
            href="https://github.com/grahamHeathcote/Chess"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8a7c6d] underline underline-offset-4 hover:text-[#3d2b23]"
          >
            the code
          </a>{" "}
          for details. You play white: move a piece to get started.
        </p>
      </div>

      <div className="max-w-md rounded-xl border border-[#e4d9c8] bg-white/40 p-4 backdrop-blur-sm">
        <Chessboard
          options={{
            position: fen,
            onPieceDrop,
            darkSquareStyle: { backgroundColor: "#b58863" },
            lightSquareStyle: { backgroundColor: "#f0d9b5" },
            boardStyle: { borderRadius: "8px", overflow: "hidden" },
          }}
        />
        <div className="mt-4 flex items-center justify-between gap-4">
          <span className="text-sm text-[#6b5d4f]">
            {statusText(fen, loading, error)}
          </span>
          <button
            type="button"
            onClick={newGame}
            disabled={loading}
            className="shrink-0 rounded-lg bg-[#e7c9b8] px-3 py-1.5 text-sm font-medium text-[#3d2b23] transition-colors hover:bg-[#dfb9a3] disabled:opacity-50"
          >
            New game
          </button>
        </div>
      </div>

      <p className="max-w-prose text-sm text-[#6b5d4f]">
        The first move can take a while as the container has to start up, but later moves should be much faster. Note
        there is no threefold repetition currently implemented.
      </p>
    </div>
  );
}

export default ChessGame;
