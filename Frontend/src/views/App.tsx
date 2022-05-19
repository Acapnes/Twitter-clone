import { Route, Routes } from "react-router-dom";
import { Feed } from "../components/Feed";
import Navbar from "../components/Navbar";
import { Widgets } from "../components/Widgets";
import Home from "./Home";

function App() {
  return (
    <div className="w-[100] h-[100%] bg-black flex items-center justify-center">
      <div className="w-[78rem] h-full flex flex-row">
        <Navbar />
        <Routes>
          <Route path="*" element={<Feed />}/>
          <Route path="/home" element={<Feed />}/>
        </Routes>
        <Widgets />
      </div>
    </div>
  );
}

export default App;
