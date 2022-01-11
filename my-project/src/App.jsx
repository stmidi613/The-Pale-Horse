import "./index.css";
import { useState, useEffect } from "react";
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
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { StrictMode } from "react";

export default function App() {
  const [Authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const a = localStorage.getItem("Authenticated");
    a && JSON.parse(a) ? setAuthenticated(true) : setAuthenticated(false);
  }, []);

  useEffect(() => {
    localStorage.setItem("Authenticated", Authenticated);
  }, [Authenticated]);

  return (
    <>
      <StrictMode>
        <Router>
          <Header />
          <Routes>
            {!Authenticated && (
              <>
                <Route path="/" element={<HeroHome />} />
                <Route path="/newAcc" element={<NewAcc />} />
                <Route path="/policies" element={<Policies />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/palehorse" element={<PaleHorse />} />
                <Route
                  path="/login"
                  element={
                    <Login
                      Authenticated={Authenticated}
                      setAuthenticated={setAuthenticated}
                    />
                  }
                />
              </>
            )}

            {Authenticated && (
              <>
                <Route element={<ProtectedRoutes />} />
                <Route path="login/afterlogin" element={<AfterLogin />} />
                <Route
                  path="/homepage"
                  element={<HomePage />}
                />
                <Route path="/upload" element={<Upload />} />
                <Route path="/profile" element={<MyProfile Authenticated={Authenticated} />} />
                <Route path="/mycontactus" element={<MyContactUs />} />
                <Route path="/mypalehorse" element={<MyPaleHorse />} />
              </>
            )}

            <Route path="*" element={<NoMatchPage />} />
          </Routes>
        </Router>
      </StrictMode>
    </>
  );
}
