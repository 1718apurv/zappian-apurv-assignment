import React from "react";
import Header from "./HeaderComponent";
import HomePage from "./HomePageComponent";
import Register from "./Registration";
import Login from "./LoginPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
