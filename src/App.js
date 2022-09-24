import "./App.css";
import Header from "./components/Header/Header";
import BottomNav from "./components/Mainnav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "@material-ui/core";
import Trending from "./pages/Trending/Trending";
import Movies from "./pages/Movies/Movies";
import Series from "./pages/Series/Series";
import Search from "./pages/Search/Search";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="app">
        <Container>
          <Routes>
            <Route path="/" element={<Trending />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/series" element={<Series />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </Container>
      </div>
      <BottomNav />
    </BrowserRouter>
  );
}

export default App;
