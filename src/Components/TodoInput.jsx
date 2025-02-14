function TodoInput() {
  return (
    <>
      <div className="inputCont">
        <div className="input-group flex-nowrap">
          <input
            type="text"
            className="form-control"
            placeholder="Enter your todo here"
            aria-label="Username"
            aria-describedby="addon-wrapping"
          />
        </div>

        <div className="inputDate input-group flex-nowrap">
          <input
            type="date"
            className="form-control"
            aria-label="Username"
            aria-describedby="addon-wrapping"
          />
        </div>

        <button type="button" className="btn btn-success">
          Add
        </button>
      </div>
    </>
  );
}

export default TodoInput;
