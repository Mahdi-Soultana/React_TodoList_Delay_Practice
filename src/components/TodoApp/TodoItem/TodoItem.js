import "./TodoItem.css";

const TodoItem = () => {
  return (
    <div className="ItemContainer">
      <div className="info">
        <h3>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur
          eaque amet, sit molestias illo fugiat quaerat voluptatum maiores
          architecto iste sint. Laborum, sed nisi necessitatibus rem adipisci
          odio animi recusandae?
        </h3>
      </div>
      <div className="controls">

        <button className="icon btn edit item">
          <i class="fas fa-pencil-alt"></i>
        </button>
        <button className="icon btn delete item">
          <i class="fas fa-trash-alt"></i>
        </button>
      </div>
      <span className="Number">1</span>
    </div>
  );
};

export default TodoItem;
