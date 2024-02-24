
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Fql from "./pages/Fql";
import Mt from "./pages/Mt";
import Appbar from "./Components/Appbar";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <BrowserRouter>
    <Appbar/>
    <Sidebar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fql" element={<Fql />} />
        <Route path="/mt" element={<Mt />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
