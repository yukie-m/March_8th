import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import News from "./components/News";
import About from "./components/About";
import "./scss/news.scss";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MainMenu />
        <Routes>
          <Route path="/" element={<News />} />
          <Route path="/about" element={<About />} />
          <Route path="/technology" element={<News />} />
          <Route path="/business" element={<News />} />
          <Route path="/sports" element={<News />} />
          <Route path="/entertainment" element={<News />} />
          <Route path="/health" element={<News />} />
          <Route path="/science" element={<News />} />
          <Route path="/politics" element={<News />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;

function MainMenu() {
  return (
    <>
      <div className="company"></div>
      <div className="nav">
        <nav>
          <ul>
            <li>
              <Link to="/?searchTerm=general">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/technology/?searchTerm=technology"> Technology</Link>
            </li>
            <li>
              <Link to="/business/?searchTerm=business"> Business</Link>
            </li>
            <li>
              <Link to="/entertainment/?searchTerm=entertainment">
                Entertainment
              </Link>
            </li>
            <li>
              <Link to="/sports/?searchTerm=sports"> Sports</Link>
            </li>
            <li>
              <Link to="/health/?searchTerm=health">Health</Link>
            </li>
            <li>
              <Link to="/science/?searchTerm=science">Science</Link>
            </li>
            <li>
              <Link to="/politics/?searchTerm=politics" className="last-nav">
                Politics
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
