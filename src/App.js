// Import necessary components and libraries
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/Home";
import LoginPage from "./components/Loginpage";
import Signup from "./components/Signup";
import "./App.css";
// Main component with routing
function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* Route for Home Page */}
          <Route exact path="/" element={<HomePage />} />

          {/* Route for Login Page */}
          <Route path="/login" element={<LoginPage />} />

          {/* Route for Signup Page */}
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
      {/* <HomePage /> */}
      {/* <LoginPage/>
          <Signup/> */}
    </>
  );
}

export default App;
