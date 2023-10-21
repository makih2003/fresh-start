import "./SecondPage.css";

function SecondPage({ data }) {
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
    </div>
  );
}

export default SecondPage;
