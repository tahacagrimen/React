import "./App.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}>
            Home
          </Route>
          <Route path="/char/:char_id" element={<Detail />}>
            Detail
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
