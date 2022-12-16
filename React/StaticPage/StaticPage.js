function Page() {
  return (
    <div>
      <img src="./React.png" width="80px"></img>
      <h1>Fun Factos, that not really a FUN !</h1>
      <ul>
        <li><strong>Was first released in 2013</strong></li>
        <li><strong>Was originally created by jordan wake</strong></li>
        <li><strong>Has well over 100k+ stars on Github</strong></li>
        <li><strong>Is maintained by facebook</strong></li>
        <li><strong>Powers thousands of enterprise apps, including mobile apps</strong></li>
      </ul>
    </div>
  );
}

ReactDOM.render(<Page />, document.getElementById("root"));
