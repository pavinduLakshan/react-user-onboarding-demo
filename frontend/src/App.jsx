import './App.css'
import Home from "./pages/home"
import Register from "./pages/register"
import Dashboard from "./pages/dashboard"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AuthProvider } from '@asgardeo/auth-react'
import ProtectedRoute from './components/protected-route';

const authConfig = {
  baseUrl: import.meta.env.VITE_ASGARDEO_BASE_URL,
  clientID: import.meta.env.VITE_ASGARDEO_CLIENT_ID,
  scope: [
    "openid",
    "profile"
  ],
  signInRedirectURL: "http://localhost:5173",
  signOutRedirectURL: "http://localhost:5173"
}

function App() {

  return (
    <AuthProvider config={authConfig}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App
