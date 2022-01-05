import "./index.css";
import "./App.css"
import MyProfile from "./MyProfile.jsx";
import Navbar from "./Navbar";
import HomePage from "./HomePage.jsx";
import Upload from "./Upload";
import Contact from "./Contact.jsx";
import NoMatchPage from "./NoMatchPage.jsx";
import PaleHorse from "./PaleHorse.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/profile" element={<MyProfile />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/palehorse" element={<PaleHorse />} />
          <Route path="*" element={<NoMatchPage />} />
        </Routes>
      </Router>
  );
}

export default App;
