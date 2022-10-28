import "./App.css";
import profile__img from "./assets/profile__img.png";

function App() {
  return (
    <div className="App">
      <div className="profile__img__container" id="profile__img__container">
        <img src={profile__img} alt="woman" id="profile__img" />
        <h3 className="profile__name">Annette Black</h3>
      </div>
      <section className="profile">
        <ul>
          <li id="twitter">Twitter Link</li>
          <li>Zuri Team</li>
          <li>Zuri Books</li>
          <li id="slack">Slack</li>
          <li>Python Books</li>
          <li>Background Check for Coders</li>
          <li>Design Books</li>
        </ul>
      </section>
    </div>
  );
}

export default App;
