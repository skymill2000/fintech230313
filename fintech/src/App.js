import "./App.css";
import List from "./components/List";
import State from "./components/State";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="App">
      <Welcome userName="홍길동"></Welcome>
      <Welcome userName="고길동"></Welcome>
      <State></State>
      <List></List>
    </div>
  );
}

export default App;
