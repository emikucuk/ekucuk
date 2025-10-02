import { useState, useEffect } from 'react'

function Dashboard() {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalProjects: 0,
    activeProjects: 0,
    pendingTasks: 0
  })

  useEffect(() => {
    // TODO: Fetch real stats from API
    setStats({
      totalUsers: 142,
      totalProjects: 28,
      activeProjects: 12,
      pendingTasks: 47
    })
  }, [])

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <p>Welcome to the admin panel!</p>
      
      <div className="stats-grid">
        <div className="stat-card">
          <h3>👥 Total Users</h3>
          <p className="stat-number">{stats.totalUsers}</p>
        </div>
        
        <div className="stat-card">
          <h3>📁 Total Projects</h3>
          <p className="stat-number">{stats.totalProjects}</p>
        </div>
        
        <div className="stat-card">
          <h3>✅ Active Projects</h3>
          <p className="stat-number">{stats.activeProjects}</p>
        </div>
        
        <div className="stat-card">
          <h3>⏳ Pending Tasks</h3>
          <p className="stat-number">{stats.pendingTasks}</p>
        </div>
      </div>

      <div className="recent-activity">
        <h2>Recent Activity</h2>
        <ul>
          <li>New user registered: john@example.com</li>
          <li>Project "E-commerce App" updated</li>
          <li>3 new contact form submissions</li>
        </ul>
      </div>
    </div>
  )
}

export default Dashboard

