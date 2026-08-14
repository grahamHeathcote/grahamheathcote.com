import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="p-4">
      <h1 className="text-xl font-semibold mb-2">Graham Heathcote</h1>
      <h2>Welcome to my (soon to be improved) website.</h2>
      In the meantime, play my 
      <Link className="mt-2 text-blue-500 hover:underline" to="/chess">
        {" "}
        chess engine, {" "}
      </Link>
      read my {" "}
      <a
        className="mt-2 text-blue-500 hover:underline"
        href="/pdf/undergraduate_dissertation.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        dissertation,{" "}
      </a>
      or visit my
      <Link
        className="mt-2 text-blue-500 hover:underline"
        to="https://github.com/grahamHeathcote"
      >
        {" "}
        GitHub page.
      </Link>
    </div>
  );
}

export default Home;
