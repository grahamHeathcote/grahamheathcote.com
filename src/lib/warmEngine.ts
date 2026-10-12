import axios from "axios";

// Position after 1. e4, black to move. The reply is thrown away: this request
// only exists to start the engine container before anyone opens /chess.
const WARMUP_FEN =
  "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1";

let started = false;

export function warmEngine() {
  if (started) return;
  started = true;
  axios
    .post(`${import.meta.env.VITE_API_URL}/api/move`, { fen: WARMUP_FEN })
    .catch(() => {});
}
