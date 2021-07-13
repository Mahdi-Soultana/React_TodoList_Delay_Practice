import "./Layout.css";
const Layout = props => {
  return (
    <>
      <div className="container">
        <main>{props.children}</main>
      </div>
      <footer>
        <div>
          <p>Created By</p>
          <a href="https://github.com/Mahdi-Soultana">@MahdiSoutlana</a>
        </div>
        <ul>
          <li>
            <a href="">Twitter</a>
          </li>
          <li>
            <a href="">linkdin</a>
          </li>
          <li>
            <a href="">github</a>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default Layout;
