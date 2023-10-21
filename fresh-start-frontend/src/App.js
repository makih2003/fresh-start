import "./App.css";
import FirstPage from "./components/FirstPage";
import SecondPage from "./components/SecondPage";
import { useState, useEffect } from "react";
import Filter from "bad-words";

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [resolutions, setResolutions] = useState([]);
  const [content, setContent] = useState("");
  const [isOffensive, setIsOffensive] = useState(false);
  const filter = new Filter();

  function handleSubmit(e) {
    e.preventDefault();
    sendData();
  }

  async function sendData() {
    const apiURL = "http://localhost:3500/api/resolutions/";

    // If user input contains some offensive words, it blocks and displays the messages to enter non-offensive message
    if (filter.isProfane(content)) {
      console.log("triggered");
      setContent("");
      setIsOffensive(true);
      return;
    }

    const resolution = { content };
    const response = await fetch(apiURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(resolution),
    });

    const data = await response.json();

    if (response.ok) {
      setResolutions([data, ...resolutions]);
      setContent("");
    }

    setIsSubmitted(true);
  }

  useEffect(() => {
    const getResolutions = async () => {
      const apiURL = "http://localhost:3500/api/resolutions/";

      const response = await fetch(apiURL);

      const data = await response.json();

      if (response.ok) {
        setResolutions(data);
      }
    };

    getResolutions();
  }, []);

  return !isSubmitted ? (
    <FirstPage
      onHandleSubmit={handleSubmit}
      newRes={content}
      setNewRes={setContent}
    />
  ) : (
    <SecondPage data={resolutions} onSubmit={setIsSubmitted} />
  );
}

export default App;
