import Home from "./views/Home";
import Main from "./views/Main";
import { BrowserRouter, Routes, Route } from "react-router";

import "./index.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/album" element={<Home />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
