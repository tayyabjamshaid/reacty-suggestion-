import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState(89);
  const style = {
    maxHeight: "275px",
    minHeight: "38px",
    resize: "none",
    padding: "9px",
    boxSizing: "border-box",
    fontSize: "25px",
    margin: "0 auto",
  };
  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <textarea
        style={style}
        placeholder="Tell us about your business"
        onChange={(v) => setValue(v)}
      />{" "}
    </div>
  );
}

export default App;
