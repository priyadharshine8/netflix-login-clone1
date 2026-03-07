import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Login from "./pages/Login";
import Movies from "./pages/Movies";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginWrapper />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </Router>
  );
}

// Wrapper to handle login navigation
function LoginWrapper() {
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
        navigate("/movies");
      } else {
        alert("Invalid email or password");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Server error");
    }
  };

  return <Login onLogin={handleLogin} />;
}

export default App;