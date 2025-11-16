import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/Home.js"
import Tasks from "./components/Tasks.js"
import NotFound from "./components/NotFound.js"
import About from "./components/About.js"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/tasks/:id" element={<Tasks />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/about" element={<About/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
