import React from "react";
import RouterBase from "components/RouterBase";
import { useState } from "react";
import { authService } from "firebaseConfig";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);

  return (
    <>
      <RouterBase isLoggedIn={isLoggedIn} />
      <footer>&copy; Nwitter {new Date().getFullYear()}</footer>
    </>
  );
}

export default App;
