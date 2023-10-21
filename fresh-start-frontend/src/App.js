import "./App.css";
import FirstPage from "./components/FirstPage";
import SecondPage from "./components/SecondPage";
import { useState, useEffect } from "react";

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [resolutions, setResolutions] = useState([]);
  const [content, setContent] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    sendData();

    setIsSubmitted(true);
  }

  async function sendData(){
    const apiURL = "http://localhost:5000/api/resolutions/";

    const resolution = { content };
    const response = await fetch(apiURL, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(resolution)
    });

    const data = await response.json();

    if(response.ok){

      setResolutions([...resolutions, data]);
      setContent("");
    }
  }

  useEffect(() => {

    const getResolutions = async () => {
      const apiURL = "http://localhost:5000/api/resolutions/";

      const response = await fetch(apiURL);

      const data = await response.json();

      if(response.ok){
        setResolutions(data);
      }
    }

    getResolutions();
  }, [])

  return !isSubmitted ? (
    <FirstPage onHandleSubmit={handleSubmit} newRes={content} setNewRes={setContent} />
  ) : (
    <SecondPage data={resolutions} />
  );
}

export default App;
