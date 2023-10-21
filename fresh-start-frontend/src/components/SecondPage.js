import "./SecondPage.css";

function SecondPage({ data, onSubmit }) {
  function getColor() {
    return (
      "hsl(" +
      360 * Math.random() +
      "," +
      (40 + 70 * Math.random()) +
      "%," +
      (40 + 10 * Math.random()) +
      "%)"
    );
  }

  return (
    <div className="resolutions">
      {data.map((content) => (
        <span className="resolution" style={{ color: getColor() }}>
          {content.content}
        </span>
      ))}
      <button onClick={() => onSubmit(false)}>Back</button>
    </div>
  );
}

export default SecondPage;
