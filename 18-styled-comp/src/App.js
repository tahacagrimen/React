import "./App.css";
import { ThemeProvider } from "styled-components";
import Container from "./components/styled/Container.styled";
import Header from "./components/Header";
import GlobalStyles from "./components/styled/Global";

const theme = {
  colors: {
    header: "#ebfbff",
    body: "white",
    footer: "#003333",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container>
          <h1>Hello World</h1>
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
