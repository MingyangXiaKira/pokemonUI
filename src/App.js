import Input from "./Components/Input/Input";
import Card from "./Components/Surface/Card";
import "./app.scss";
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Homepage from "./pages/homepage";
import Button from "./Components/Display/Button";
import Experiencepage from "./pages/experiencepage";
import Projectpage from "./pages/projectpage";
import Contactpage from "./pages/contactpage";
function App() {
  const router = createBrowserRouter([{ path: "/", element: <Homepage /> }]);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/experience" element={<Experiencepage />} />
        <Route path="/project" element={<Projectpage />} />
        <Route path="/contact" element={<Contactpage />} />
      </Routes>
      {/* <Card className="myCustomCard">
        <Input content="Pixelated Pokémon Card" />
      </Card> */}
    </div>
  );
}

export default App;
