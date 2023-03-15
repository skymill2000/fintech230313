import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import List from "./components/List";
import Axios from "./components/Axios";
import NewsSearch from "./pages/NewsSearch";
import Auth from "./pages/Auth";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/welcome" element={<Welcome />}></Route>
          <Route path="/list" element={<List></List>}></Route>
          <Route path="/axios" element={<Axios></Axios>}></Route>
          <Route path="/news" element={<NewsSearch></NewsSearch>}></Route>
          <Route path="/auth" element={<Auth></Auth>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
