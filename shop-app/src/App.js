import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ROUTES } from "./Utils/constants";
import Homepage from "./Pages/Homepage";
import Productdetail from "./Pages/Productdetail";
import Cartpage from "./Pages/Cartpage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.homepage} element={<Homepage />} />
        <Route path={ROUTES.detail} element={<Productdetail />} />
        <Route path={ROUTES.cartpage} element={<Cartpage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
