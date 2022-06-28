import "./App.css";
import Container from "./components/Container";
import { ThemeProvider } from "./context/TeamContext";

function App() {
  return (
    <ThemeProvider>
      <Container />
    </ThemeProvider>
  );
}

export default App;
