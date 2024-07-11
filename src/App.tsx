import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/home/Home";
import { Auth } from "./pages/auth/Auth";
import { Rated } from "./pages/rated/Rated";
import { Movie } from "./pages/movie/Movie";
import { TvShows } from "./pages/tvshow/TvShows";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/rated" element={<Rated />} />
          <Route path="/movie/:id" element={<Movie />} />
          <Route path="/tvshow/:id" element={<TvShows />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
