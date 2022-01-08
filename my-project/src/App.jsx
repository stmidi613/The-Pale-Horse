import "./index.css";
import NewAcc from "./NewAccount";
import Login from "./Login";
import Policies from "./DandP";
import HeroHome from "./Herobody";
import Header from "./Header";
import PaleHorse from "./PaleHorse";
import Contact from "./Contact";
import NoMatchPage from "./NoMatchPage";
import AfterLogin from "./AfterLogin";
import HomePage from "./HomePage";
import Upload from "./Upload";
import MyContactUs from "./MyContactUs";
import MyPaleHorse from "./MyPaleHorse";
import MyProfile from "./MyProfile";
import ProtectedRoutes from "./ProtectedRoutes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { StrictMode } from "react";

export default function App() {
  return (
    <>
      <StrictMode>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<HeroHome />} />
            <Route path="/NewAcc" element={<NewAcc />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/policies" element={<Policies />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/palehorse" element={<PaleHorse />} />

            <Route element={<ProtectedRoutes />}>
              <Route path="/afterlogin" element={<AfterLogin />} />
              <Route path="/homepage" element={<HomePage />} />
              <Route path="/upload" element={<Upload />} />
              <Route path="/profile" element={<MyProfile />} />
              <Route path="/mycontactus" element={<MyContactUs />} />
              <Route path="/mypalehorse" element={<MyPaleHorse />} />
            </Route>

            <Route path="*" element={<NoMatchPage />} />
          </Routes>
        </Router>
      </StrictMode>
    </>
  );
}
