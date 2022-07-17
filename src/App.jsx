import { Routes, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Camera from "./components/Camera";
import Videos from "./components/Videos";
import Gallery from "./components/Gallery";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/camera" element={<Camera />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/gallery" element={<Gallery />} />
      </Route>
    </Routes>
  );
};

export default App;
