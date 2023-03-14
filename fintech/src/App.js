import "./App.css";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="App">
      <Welcome userName="홍길동"></Welcome>
      <Welcome userName="고길동"></Welcome>
      <Welcome userName="둘리"></Welcome>
      <Welcome userName="도우너"></Welcome>
    </div>
  );
}

export default App;
