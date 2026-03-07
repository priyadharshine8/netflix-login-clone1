import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Login from "./pages/Login";
import Movies from "./pages/Movies";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginWrapper setIsLoggedIn={setIsLoggedIn} />} />
        <Route
          path="/movies"
          element={isLoggedIn ? <Movies /> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
}

// Login wrapper
function LoginWrapper({ setIsLoggedIn }) {
  const navigate = useNavigate();

  const handleLogin = async (email, password) => {
    try {
      const response = await fetch("https://movie-login-clone.onrender.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if (data.success) {
        setIsLoggedIn(true);
        navigate("/movies");
      } else {
        alert("Invalid email or password");
      }
    } catch (error) {
      console.error(error);
      alert("Server error");
    }
  };

  return <Login onLogin={handleLogin} />;
}

export default App;