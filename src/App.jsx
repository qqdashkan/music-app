import Home from "./views/Home";
import Header from "./sections/Header";
import { BrowserRouter, Routes, Route } from "react-router";

import "./index.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Header />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
