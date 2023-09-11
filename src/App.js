import React from "react";
import "./App.css";
import Button from "./Components/Modal";
import PageNotFound from "./Components/NotFound";
import Delete from "./Components/DeleteCard";
import EditItem from "./Components/CardDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ListCard from "./Components/ListCard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Button />} />
        <Route path="/NotFound" element={<PageNotFound />} />
        <Route path="/Delete" element={<Delete />} />
        <Route path="/Edit/:id" element={<EditItem />} />
        <Route path="/ListCard" element={<ListCard />} />
      </Routes>
    </Router>
  );
}

export default App;
