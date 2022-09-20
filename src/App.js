import { Container } from "@mui/system";
import "./App.css";
import Header from "./Components/Headers/Header";
import SimpleBottomNavigation from "./Components/Mainnav";
import Movie from "./Components/Pages/Movie/Movie";
import Search from "./Components/Pages/Search/Search";
import Trending from "./Components/Pages/Trending/Trending";
import TvSeries from "./Components/Pages/TvSeries/TvSeries";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Container>
          <Routes>
            <Route path="/" element={<Trending />} exact />
            <Route path="/movie" element={<Movie />} />
            <Route path="/tvSeries" element={<TvSeries />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </Container>
      </div>
      <SimpleBottomNavigation />
    </BrowserRouter>
  );
}

export default App;
