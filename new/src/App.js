import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Bottom from "./components/Bottom";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Bottom />
    </>
  );
}

export default App;
