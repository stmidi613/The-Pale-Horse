import { useNavigate, Navigate } from "react-router-dom";
import { useState } from "react";
import HomePage from "./HomePage";

function ProtectedRoutes(props) {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleClick = () => {
    const adminUser = {
      userId: "myname",
      password: "password123",
    };
    if (
      props.details.userId === adminUser.userId &&
      props.details.password === adminUser.password
      ) {
        props.setAuthenticated(true);
        navigate("afterlogin")
      } else {
        props.setAuthenticated(false);
        <Navigate replace to="/login" />;
      }
      console.log(props);
    };
    return (
      <div>
        <button
          onClick={handleClick}
          className="text-center mt-8 w-32 bg-crimson hover:shadow-md text-pale-green py-2 px-4 rounded"
        >Login
        </button>
    </div>
    
  );
}
  

export default ProtectedRoutes;
