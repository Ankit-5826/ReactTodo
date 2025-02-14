import TodoMainTitle from "./todoMainTitle";
import TodoInput from "./TodoInput";
import AllTodo from "./AllTodo";
function TodoAllUi(props) {
  let { list } = props;
  return (
    <>
      <center>
        <TodoMainTitle> </TodoMainTitle>
        <TodoInput></TodoInput>
        <AllTodo list={list}></AllTodo>
      </center>
    </>
  );
}

export default TodoAllUi;
