import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ModuleList from "./components/ModuleList";
import ModuleDetails from "./components/ModuleDetails";
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ModuleList />} />
        <Route path="/modules/:id" element={<ModuleDetails />} />
      </Routes>
    </Router>
  );
}

export default App;