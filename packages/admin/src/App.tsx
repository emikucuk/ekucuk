import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Users from './pages/Users'
import Projects from './pages/Projects'
import Settings from './pages/Settings'
import Login from './pages/Login'
import './App.css'

function App() {
  // TODO: Implement real authentication
  const isAuthenticated = true

  if (!isAuthenticated) {
    return <Login />
  }

  return (
    <BrowserRouter>
      <div className="admin-layout">
        <aside className="sidebar">
          <h2>🎛️ Admin Panel</h2>
          <nav>
            <ul>
              <li><Link to="/">📊 Dashboard</Link></li>
              <li><Link to="/users">👥 Users</Link></li>
              <li><Link to="/projects">📁 Projects</Link></li>
              <li><Link to="/settings">⚙️ Settings</Link></li>
            </ul>
          </nav>
        </aside>
        
        <main className="content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
