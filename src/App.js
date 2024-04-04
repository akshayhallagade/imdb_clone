import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Browse from "./page/Browse";
import WatchList from "./page/WatchList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Browse />}></Route>
          <Route path="/watchlist" element={<WatchList />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
