function SecondPage({ data }) {
  return (
    <div>
      {data.map((content) => (
        <span>{content.content} . </span>
      ))}
    </div>
  );
}

export default SecondPage;
