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
  const validEmail = "prisow@gmail.com";
  const validPassword = "2117";

  const handleLogin = (email, password) => {
    if (email === validEmail && password === validPassword) {
      navigate("/movies");
    } else {
      alert("Invalid email or password");
    }
  };

  return <Login onLogin={handleLogin} />;
}

export default App;