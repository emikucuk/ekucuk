import { useState } from 'react'

function Login() {
  const [credentials, setCredentials] = useState({ email: '', password: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement authentication
    console.log('Login attempt:', credentials)
  }

  return (
    <div className="login-page">
      <div className="login-container">
        <h1>🔐 Admin Login</h1>
        <p>Sign in to access the admin panel</p>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="admin@example.com"
              value={credentials.email}
              onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
              required
            />
          </div>
          
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={credentials.password}
              onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
              required
            />
          </div>
          
          <button type="submit" className="btn-primary btn-full">
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login

