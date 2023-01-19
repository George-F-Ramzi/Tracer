import React from "react";
import Cav from "./components/cav";
import {
  AddCircle,
  AddRectangle,
  AddTriangle,
  AddText,
} from "./components/fabricElemnts";

const App = () => {
  return (
    <>
      <button
        onClick={() => {
          AddCircle();
        }}
      >
        Circle
      </button>
      <button
        onClick={() => {
          AddRectangle();
        }}
      >
        Rectangle
      </button>
      <button
        onClick={() => {
          AddTriangle();
        }}
      >
        Tringle
      </button>
      <button
        onClick={() => {
          AddText();
        }}
      >
        Text
      </button>

      <Cav />
    </>
  );
};

export default App;
