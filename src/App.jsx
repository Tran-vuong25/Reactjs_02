import { useState } from "react";
import "./App.css";
import Header from "./Glasses/header";
import ListGlasses from "./Glasses/list-glasses";

function App() {
  return (
    <div className="bg-img">
      <div className="overlay">
        <Header />
        <ListGlasses />
      </div>
    </div>
  );
}

export default App;
