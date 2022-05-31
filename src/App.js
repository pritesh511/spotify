import Home from "./pages/home/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddSong from "./pages/add-song/add-song";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/add-song" element={<AddSong />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
