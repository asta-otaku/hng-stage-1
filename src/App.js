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
          <li>Afolabi69093815</li>
          <li id="slack">afolabiibrahim08</li>
          <li>
            <a id="btn__zuri" href="https://training.zuri.team/">
              Zuri Team
            </a>
          </li>
          <li>
            <a id="books" href=" http://books.zuri.team">
              Zuri Books
            </a>
          </li>
          <li>
            <a
              id="book__python"
              href="https://books.zuri.team/python-for-beginners?ref_id=afolabiibrahim08"
            >
              Python Books
            </a>
          </li>
          <li>
            <a id="pitch" href="https://background.zuri.team">
              Background Check for Coders
            </a>
          </li>
          <li>
            <a id="book__design" href="https://books.zuri.team/design-rules">
              Design Books
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default App;
