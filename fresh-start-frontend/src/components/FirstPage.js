function FirstPage({ onHandleSubmit }) {
  const nextYear = new Date().getFullYear() + 1;

  return (
    <div>
      <h1>New Year, New Me! </h1>
      <form onSubmit={onHandleSubmit}>
        <h2>What would you like to do more in {nextYear}</h2>
        <input type="text" placeholder="Your new year resolution..."></input>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default FirstPage;
