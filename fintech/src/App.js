import logo from "./logo.svg";
import "./App.css";

const Welcome = (props) => {
  console.log(props);
  return <p>안녕하세요 {props.userName} 님 반갑습니다. </p>;
};

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
