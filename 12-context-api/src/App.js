import "./App.css";
import Button from "./components/Button";
import { ThemeProvider } from "./context/TeamContext";

function App() {
  return (
    <ThemeProvider>
      <Button />
    </ThemeProvider>
  );
}

export default App;
