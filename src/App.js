import React from "react";
import "./App.css";
import Button from "./Components/Modal";
import PageNotFound from "./Components/NotFound";
import Delete from "./Components/HandleCard";
import CardDetail from "./Components/CardDetail";
import EditItem from "./Components/Edit";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ParentComponent from "./Components/EditDelete"; // Correct the import path

function App() {
  return (
    <Router>
      {/* {<Button />} */}
      <Routes>
        <Route path="/" element={<Button />} />
        <Route path="/NotFound" element={<PageNotFound />} />
        <Route path="/Detail" element={<CardDetail />} />
        <Route path="/Delete" element={<Delete />} />
        <Route path="/Edit" element={<EditItem />} />
        <Route path="/EditDelete" element={<ParentComponent />} />
      </Routes>
      <ParentComponent />
    </Router>
  );
}

export default App;
