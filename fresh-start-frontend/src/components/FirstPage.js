import "./FirstPage.css";

function FirstPage({ onHandleSubmit, newRes, setNewRes, isOffensive }) {

  return (
    <div className="content">
      <h1>Time for a Fresh Start! </h1>
      <h2>What dream are you pursuing today ?</h2>
      <form className="user-form" onSubmit={onHandleSubmit}>
        <input
          type="text"
          placeholder="Learn how to cook, Pick up a new language, ..."
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
      <p className="disclaimer">Share your dreams, inspire others. <br />All data is anonymous and secure.</p>
    </div>
  );
}

export default FirstPage;
