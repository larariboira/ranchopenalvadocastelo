import "./style/geral.scss";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import Nav from "./js/geral/Nav";
import Home from "./js/components/Home";
import Story from "./js/components/Story";
import Gallery from "./js/components/Gallery";

function App() {
  return (
    <div className="website">
      <Nav />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/historia" element={<Story />} />
        <Route path="/galeria" element={<Gallery />} />
      </Routes>
    </div>
  );
}

export default App;
