import "./App.css";
import State from "./components/State";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="App">
      <Welcome userName="홍길동"></Welcome>
      <Welcome userName="고길동"></Welcome>
      <State></State>
    </div>
  );
}

export default App;
