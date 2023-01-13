import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import Nav from "./routes/navigation/navigation.component";

const Shop = () => {
  return <h1>Shop</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
