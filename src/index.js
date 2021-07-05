// import react from "react"; Babel detect Automaticlly that you use React behind the Scene
// ************
import ReactDOM from "react-dom";

function ListBook() {
  return (
    <>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </>
  );
}
const Book = () => {
  return (
    <article>
      <Img />
      <Title />
      <Author />
    </article>
  );
};
const Title = () => <h1>A Place Inside of Me: A Poem to Heal</h1>;

const Author = () => <h3>Mahdi Soultana</h3>;

const Img = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/I/518cC86Q+CS._AC_SX184_.jpg"
    alt="img"
  />
);

ReactDOM.render(<ListBook />, document.getElementById("root"));
