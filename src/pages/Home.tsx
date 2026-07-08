import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="p-4">
      <h1 className="text-xl font-semibold mb-2">Graham Heathcote</h1>
      <h2>Welcome to my (soon to be improved) website.</h2>
      In the meantime,{" "}
      <Link className="mt-2 text-blue-500 hover:underline" to="/chess">
        {" "}
        play my chess engine{" "}
      </Link>
      or{" "}
      <a
        className="mt-2 text-blue-500 hover:underline"
        href="/pdf/undergraduate_dissertation.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        read my dissertation.
      </a>
    </div>
  );
}

export default Home;
