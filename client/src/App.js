import { BrowserRouter, Routes, Route } from "react-router-dom"
import Update from "./pages/Update";
import Add from "./pages/Add";
import Books from "./pages/Books";
import "./style.css"

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Books />}></Route>
          <Route path="/add" element={<Add />}></Route>
          <Route path="/update/:id" element={<Update />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
