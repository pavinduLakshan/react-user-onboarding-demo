import './App.css'
import Home from "./pages/home"
import Register from "./pages/register"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/register" element={ <Register /> } />
      </Routes>
    </Router>
  )
}

export default App
