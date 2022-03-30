import "./App.css";
import About from "./Components/About";
import Header from "./Components/Header";

import Main from "./Components/Main";
import Stats from "./Components/Stats";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Main />
        <Stats />
        <About />
      </div>
    </div>
  );
}

export default App;
