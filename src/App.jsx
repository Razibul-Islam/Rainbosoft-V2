import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import ComponentHome from "./Components/Home";
import Service from "./Components/Service";
import Blog from "./Components/Blog";
import Contact from "./Components/Contact";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/" element={<ComponentHome />} />
          <Route path="/service" element={<Service />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
