import { Route, Routes } from "react-router-dom";
import { Feed } from "../components/Feed";
import Navbar from "../components/Navbar";
import { Widgets } from "../components/Widgets";
import Home from "./Home";

function App() {
  return (
    <div className="w-[100] min-h-screen h-[100%] bg-black flex justify-center">
      <div className="w-[78rem] h-full flex flex-row">
        <Navbar />
        <Routes>
          <Route
            path="*"
            element={
              <div className="h-full w-[37.5rem] border-l-2 border-r-2 border-gray-400">
                <div className="bg-red-500 h-[200vh] w-full">ALL OF ROUTES</div>
              </div>
            }
          />
          <Route path="/home" element={<Feed />} />
        </Routes>
        <Widgets />
      </div>
    </div>
  );
}

export default App;
