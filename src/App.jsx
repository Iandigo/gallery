import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Camera from "./components/Camera";
import Videos from "./components/Videos";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/camera" element={<Camera />} />
        <Route path="/videos" element={<Videos />} />
      </Route>
    </Routes>
  );
};

export default App;
