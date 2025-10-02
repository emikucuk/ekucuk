import { useState, useEffect } from 'react'

interface User {
  id: number
  name: string
  email: string
  role: string
  status: string
}

function Users() {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    // TODO: Fetch from API
    setUsers([
      { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Active' },
      { id: 3, name: 'Bob Wilson', email: 'bob@example.com', role: 'User', status: 'Inactive' },
    ])
  }, [])

  return (
    <div className="users-page">
      <div className="page-header">
        <h1>👥 Users Management</h1>
        <button className="btn-primary">+ Add New User</button>
      </div>

      <table className="data-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td><span className={`badge ${user.role.toLowerCase()}`}>{user.role}</span></td>
              <td><span className={`status ${user.status.toLowerCase()}`}>{user.status}</span></td>
              <td>
                <button className="btn-sm">Edit</button>
                <button className="btn-sm btn-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Users

