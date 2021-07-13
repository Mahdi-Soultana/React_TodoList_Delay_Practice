import TodoItem from "../TodoItem/TodoItem";
import "../InputForm/InputTodo.js";
const TodoList = () => {
  return (
    <div>
      <TodoItem />
      <TodoItem />
      <div className="btn-c">
        <button className="btn btn-w100">Clear All</button>
      </div>
    </div>
  );
};

export default TodoList;
