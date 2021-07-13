import "./TodoForm.css";
const InputTodo = () => {
  return (
    <div className="container_form">
      <form>
        <div className="formControl">
          <div className="icon">
            <i class="fas fa-plus"></i>
          </div>
          <input type="text" />
        </div>
        <div className="btn-c">
          <button className="btn" type="submit">
            Add ToDo
            <i class="fas fa-plus"></i>
          </button>
        </div>
      </form>
    </div>
  );
};

export default InputTodo;
