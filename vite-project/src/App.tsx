import { useState } from "react";
import "./App.css";
import "./components/Card/Card.tsx";
import Card from "./components/Card/Card.tsx";

function App() {
  const [] = useState(0);

  return (
    <>
      {" "}
      <Card />
    </>
  );
}

export default App;
