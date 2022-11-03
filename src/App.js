import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";

function App() {
  const location = useLocation();

  return (
    <Routes key={location.pathname} location={location}>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
