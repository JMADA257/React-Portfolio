import Navbar from "./components/Navbar/Navbar";

import Background from "./components/Background/Background";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Background />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
