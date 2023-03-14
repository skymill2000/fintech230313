import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/welcome" element={<Welcome />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
