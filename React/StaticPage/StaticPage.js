function Page() {
  return (
    <div>
      <header>
        <nav>
          <img src="./React.png" width="80px"></img>
        </nav>
      </header>
      <h1>Fun Facts, that not really a FUN !</h1>
      <ul>
        <li>
          <strong>Was first released in 2013</strong>
        </li>
        <li>
          <strong>Was originally created by jordan wake</strong>
        </li>
        <li>
          <strong>Has well over 100k+ stars on Github</strong>
        </li>
        <li>
          <strong>Is maintained by facebook</strong>
        </li>
        <li>
          <strong>
            Powers thousands of enterprise apps, including mobile apps
          </strong>
        </li>
      </ul>
      <footer>
        <small>2022 Abhiraj development. All right reserved</small>
      </footer>
    </div>
  );
}

ReactDOM.render(<Page />, document.getElementById("root"));
