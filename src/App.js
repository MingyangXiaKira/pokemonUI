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
function App() {
  const router = createBrowserRouter([{ path: "/", element: <Homepage /> }]);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/button" element={<Button />} />
      </Routes>
      {/* <Card className="myCustomCard">
        <Input content="Pixelated Pokémon Card" />
      </Card> */}
    </div>
  );
}

export default App;
