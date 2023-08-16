import React, { useState } from "react";
import "./App.css";
import Button from "./Components/Custom/Button";
import PageNotFound from "./Components/NotFound/PageNotFound";
import Item from "./Components/Item/Item";
import CardDetail from "./Components/Card/CardDetail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <div className="title">LIST SOCIAL CARD</div>
          <div className="custom">
            <Button />
          </div>
          {/* <CardDetail /> */}
        </div>
        <Routes>
          <Route path="/" element={<Item />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
