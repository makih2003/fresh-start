import { useState } from "react";

const data = [
  {
    resolution: "Lose weight",
  },
  {
    resolution: "get 6 pad abs",
  },
  {
    resolution: "get rich",
  },
  {
    resolution: "Read more books",
  },
  {
    resolution: "learn Spanish and Japanese",
  },
  {
    resolution: "eat healthy",
  },
  {
    resolution: "Run everyday",
  },
  {
    resolution: "Cook everyday",
  },
  {
    resolution: "sleep by 10 pm",
  },
  {
    resolution: "go back to Japannnnnn",
  },
];

function FirstPage() {
  const nextYear = new Date().getFullYear() + 1;
  const [isSubmited, setIsSubmited] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    console.log("hello");
    setIsSubmited(true);
  }

  return !isSubmited ? (
    <div>
      <h1>New Year, New Me! </h1>
      <form onSubmit={handleSubmit}>
        <h2>What would you like to do more in {nextYear}</h2>
        <input type="text" placeholder="Your new year resolution..."></input>
        <button>Submit</button>
      </form>
    </div>
  ) : (
    <div>Hello</div>
  );
}

export default FirstPage;
