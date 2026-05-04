import { Chessboard } from 'react-chessboard';

function App() {
  return (
    <div className="p-4">
      <h1 className="text-xl font-semibold mb-2">Graham Heathcote</h1>
      <h2>
        Welcome to my (soon to be improved) website -- I plan to host a chess engine I made here eventually.
        
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
        </a>
       {" "} to learn about me.
    </div>
    <div className="max-w-md pt-2">
      <Chessboard/>;
    </div>
    </div>
  );
}

export default App;
