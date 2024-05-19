
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NewPage from "./pages/NewPage";
import BentoCard from "./pages/BentoCard";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-page" element={<NewPage/>} />
        <Route path="/bento" element={<BentoCard/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
