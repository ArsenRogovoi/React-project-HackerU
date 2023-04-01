import { Container } from "@mui/material";
import "./App.css";
import CardsPage from "./cards/pages/CardsPage";
import AboutPage from "./pages/AboutPage";
import SetPost from "./components/useState/SetPost";

function App() {
  return (
    <div className="App">
      {/* <CardsPage /> */}
      <AboutPage />
      <Container>
        <SetPost />
      </Container>
    </div>
  );
}

export default App;
