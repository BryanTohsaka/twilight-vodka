import "./App.css";
import { navLinks } from "./const";
import { AiOutlineSearch } from "react-icons/ai";

function App() {
  return (
    <main>
      <div className="side_bar">
        <h1>O</h1>
        <ul className="links-side">
          <li>Fb</li>
          <li>In</li>
          <li>Tw</li>
        </ul>
      </div>
      <div className="center-content">
        <nav>
          <ul>
            {navLinks.map((item) => (
              <li className="nav-links">{item.title}</li>
            ))}
            <li>
              <AiOutlineSearch />
            </li>
          </ul>
        </nav>
        <div className="hero">
          <h1>
            Different from the <span className="green-hero">rest</span> of the{" "}
            <span className="green-hero">Vodkas</span>
          </h1>
          <div className="news">
            <div className="side-a">
              <p>
                “Redefining the premium vodka landscape and becoming a paradigm
                of art, culture and nightlife.”
              </p>
            </div>
            <div className="side-b">
              <div className="news-side"></div>
              <div className="text-side">
                <h3>The inspiration</h3>
                <p>
                  For Nature’s Twilight design came from the idea of forest and
                  animals that lives within.
                </p>
                <p>Bottle design by: <span>Terence Lopez</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
