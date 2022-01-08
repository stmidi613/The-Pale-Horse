import { Outlet, useNavigate, Link } from "react-router-dom";
import { useState } from "react";

export default function ProtectedRoutes(props) {
const [Authenticated, setAuthenticated] = useState(null);
  const user = props.userId;
  const pw = props.pw;
  const navigate = useNavigate();

  function Authenticate() {
    if (user === "myname" && pw === "password") {
        setAuthenticated(true);
    } else {
        setAuthenticated(false);
    }
    Authenticated ? navigate("/afterlogin") : navigate("/login");
  }

  return (
    <button
      onClick={Authenticate}
      className="text-center mt-8 w-32 bg-crimson hover:shadow-md text-pale-green py-2 px-4 rounded"
    >
      Log In
    </button>
  );
}

