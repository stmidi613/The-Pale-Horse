import React from "react";

function Logout() {
  const logOut = () => {};

  return (
    <div>
      <button
        onClick={logOut}
        className="text-center m-8 w-32 bg-crimson hover:shadow-md text-pale-green py-2 px-4 rounded"
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;
