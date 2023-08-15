import React from "react";
import "./App.css";
import Button from "./Components/Custom/Button";
import PageNotFound from "./Components/NotFound/PageNotFound";
import Item from "./Components/Item/Item";

function App() {
  return (
    <div className="App">
      <div className="content">
        <div className="title">LIST SOCIAL CARD</div>
        <div className="custom">
          <Button />
        </div>
        <div className="not-found">
          <Item />
          <PageNotFound />
        </div>
      </div>
    </div>
  );
}

export default App;
