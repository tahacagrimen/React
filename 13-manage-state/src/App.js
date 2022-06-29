import "./App.css";
import MovieList from "./MovieList";
import AddMovie from "./AddMovie";
import Nav from "./Nav";
import { MovieProvider } from "./MovieContext";
// MovieProvider i süslü paranteze almamızın sebebi ayrı ayrı export etmemiz.

// <MovieProvider> ın içine aldığımız bütün componentler movie listesine erişebiliyor artık.
function App() {
  return (
    <MovieProvider>
      <div className="App">
        <Nav />
        <AddMovie />
        <MovieList />
      </div>
    </MovieProvider>
  );
}

export default App;
