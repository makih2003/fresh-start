import "./FirstPage.css";

function FirstPage({ onHandleSubmit, newRes, setNewRes, isOffensive }) {
  const nextYear = new Date().getFullYear() + 1;

  return (
    <div className="content">
      <h1>New Year, New Me! </h1>
      <h2>What would you like to do more in {nextYear} ?</h2>
      <form className="user-form" onSubmit={onHandleSubmit}>
        <input
          type="text"
          placeholder="Your new year resolution..."
          value={newRes}
          onChange={(e) => {
            setNewRes(e.target.value);
          }}
        ></input>
        <button className="submit-button">Submit</button>
      </form>

      {isOffensive ? (
        <p className="message">Please keep the message clean :D</p>
      ) : (
        <></>
      )}
    </div>
  );
}

export default FirstPage;
