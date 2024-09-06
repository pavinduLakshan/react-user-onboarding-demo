import './App.css'
import Home from "./pages/home"
import Register from "./pages/register"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AuthProvider } from '@asgardeo/auth-react'

const authConfig = {
  baseUrl: "https://api.asgardeo.io/t/pavinduorg",
  clientID: "vuuSrwlh5hErtLMsdiefeviiZv4a",
  scope: [
    "openid",
    "profile"
  ],
  signInRedirectURL: "https://localhost:3000",
  signOutRedirectURL: "https://localhost:3000"
}

function App() {

  return (
    <AuthProvider config={authConfig}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App
