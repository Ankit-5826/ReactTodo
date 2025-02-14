import Todos from "./Todos";

function AllTodo({ list }) {
  console.log("-->", list);

  return (
    <>
      <div className="todoListCont">
        {list.map((infotodo) => {
          <Todos />;
        })}
      </div>
    </>
  );
}

export default AllTodo;
