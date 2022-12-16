function Header() {
  return (
    <div>
      <header>
        <nav>
          <img src="./React.png" width="80px"></img>
        </nav>
      </header>
    </div>
  );
}

function MainContent() {
  return (
    <div>
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
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <small>2022 Abhiraj development. All right reserved</small>
    </footer>
  );
}

//Parent Component
function Page() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

ReactDOM.render(<Page />, document.getElementById("root"));
