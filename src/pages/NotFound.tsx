import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-semibold tracking-tight text-[#3d2b23]">
        Not found
      </h1>
      <p className="text-[#6b5d4f]">That page does not exist.</p>
      <Link
        to="/"
        className="inline-block text-[#8a7c6d] underline underline-offset-4 hover:text-[#3d2b23]"
      >
        Back home
      </Link>
    </div>
  );
}
