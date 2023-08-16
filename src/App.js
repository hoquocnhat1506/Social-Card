// import React, { useState } from "react";
import "./App.css";
import Button from "./Components/Modal";
import PageNotFound from "./Components/NotFound";
import Delete from "./Components/DeleteCard";
// import Item from "./Components/Item/index";
// import CardDetail from "./Components/CardDetail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <div className="title">LIST SOCIAL CARD</div>
          <div className="custom">{/* <Button /> */}</div>
          {/* <CardDetail /> */}
          {<Delete />}
        </div>
        <Routes>
          <Route path="/" element={<Button />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
