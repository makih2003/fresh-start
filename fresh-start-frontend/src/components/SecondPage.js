import "./SecondPage.css";

function SecondPage({ data, onSubmit }) {
  function getColor() {
    return (
      "hsl(" +
      360 * Math.random() +
      "," +
      (30 + 70 * Math.random()) +
      "%," +
      (40 + 10 * Math.random()) +
      "%)"
    );
  }

  const createDivs = (data) => {
    const divs = [];
    let currentDiv = [];
    let counter = 0;
    let lineDirection = "one";

    for (let i = 0; i < data.length; i++) {
      const content = data[i];

      currentDiv.push(
        <span
          key={`span-${i}`}
          className="resolution"
          style={{ color: getColor() }}
        >
          {content.content}
        </span>
      );

      if (currentDiv.length === 10 || i === data.length - 1) {
        if (counter === 4) {
          counter = 1;
        } else {
          counter++;
        }
        switch (counter) {
          case 1:
            lineDirection = "one";
            break;
          case 2:
            lineDirection = "two";
            break;
          case 3:
            lineDirection = "three";
            break;
          case 4:
            lineDirection = "four";
            break;
          default:
            break;
        }

        // If we've added 10 elements or reached the end of the data, create a new div
        divs.push(
          <div
            key={`div-${divs.length}`}
            className={`resolutions ${lineDirection}`}
          >
            {currentDiv}
          </div>
        );
        currentDiv = []; // Reset the current div
      }
    }

    return divs;
  };

  return (
    <div className="container">
      <div className="data-container">{createDivs(data)}</div>
      <button className="back-button" onClick={() => onSubmit(false)}>
        Back
      </button>
    </div>
  );
}

export default SecondPage;
