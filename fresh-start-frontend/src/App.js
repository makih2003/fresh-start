import "./App.css";
import FirstPage from "./components/FirstPage";
import SecondPage from "./components/SecondPage";
import { useState } from "react";

const data = [
  {
    content: "Lose weight",
  },
  {
    content: "get 6 pad abs",
  },
  {
    content: "get rich",
  },
  {
    content: "Read more books",
  },
  {
    content: "learn Spanish and Japanese",
  },
  {
    content: "eat healthy",
  },
  {
    content: "Run everyday",
  },
  {
    content: "Cook everyday",
  },
  {
    content: "sleep by 10 pm",
  },
  {
    content: "go back to Japannnnnn",
  },
];

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitted(true);
  }

  return !isSubmitted ? (
    <FirstPage onHandleSubmit={handleSubmit} />
  ) : (
    <SecondPage data={data} />
  );
}

export default App;
