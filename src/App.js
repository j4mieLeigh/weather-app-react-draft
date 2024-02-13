import logo from "./logo.svg";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello world, React here</h1>
      </header>
      <main>
        <Weather city="Tokyo" />
      </main>
    </div>
  );
}

export default App;
