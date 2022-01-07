import "./index.css";
import "./App.css"
import MyProfile from "./MyProfile.jsx";
import HomePage from "./HomePage.jsx";
import Upload from "./Upload";
import NoMatchPage from "./NoMatchPage.jsx";
import MyPaleHorse from "./MyPaleHorse.jsx";
import Header from "./Header";
import MyContactUs from "./MyContactUs";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
      <Router>
        <Header />
        <Routes>
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/profile" element={<MyProfile />} />
          <Route path="/mycontactus" element={<MyContactUs />} />
          <Route path="/mypalehorse" element={<MyPaleHorse />} />
          <Route path="*" element={<NoMatchPage />} />
        </Routes>
      </Router>
  );
}

export default App;
