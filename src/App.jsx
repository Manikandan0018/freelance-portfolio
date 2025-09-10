
import './App.css'
import Home from './home/Home'
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <Routes basename="/">
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App
