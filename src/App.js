import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes></Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

// main demo : https://ninetheme.com/themes/venam/v3/contact/
// demo 1 : https://demo.xpeedstudio.com/marketov2/home5/product/branch-apple/
// demo 2 : https://demo.xpeedstudio.com/marketov2/furniture/
