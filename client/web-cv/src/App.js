import Footer from "./components/footer/Footer";
import Header from "./components/header/Header.js";
import Contacts from "./pages/Contacts";
import Education from "./pages/Education";

import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import "./styles/style.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
