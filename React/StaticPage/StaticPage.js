import Header from './Header'
import Footer from './Footer';

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

//Parent Component
function App() {
  return (
    <div>
      <Header/>
      <MainContent />
      <Footer />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
