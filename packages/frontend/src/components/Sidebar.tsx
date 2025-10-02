import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'

export const Sidebar = () => {
  const location = useLocation()
  const { theme, toggleTheme } = useTheme()

  const menuItems = [
    { path: '/', label: 'Home', icon: '🏠' },
    { path: '/about', label: 'About', icon: '👤' },
    { path: '/projects', label: 'Projects', icon: '📁' },
    { path: '/contact', label: 'Contact', icon: '📧' },
    { path: '/connection', label: 'DB Test', icon: '🔧' },
  ]

  return (
    <aside className="w-72 bg-gradient-to-b from-slate-800 to-slate-900 text-white flex flex-col shadow-xl">
      {/* Header */}
      <div className="p-8 border-b border-white/10">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
          🚀 Portfolio
        </h2>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-6">
        <ul className="space-y-1">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`
                    flex items-center gap-4 px-6 py-3 font-medium transition-all duration-200
                    border-l-4
                    ${isActive 
                      ? 'bg-blue-500/15 text-blue-400 border-blue-400' 
                      : 'text-slate-400 border-transparent hover:bg-white/5 hover:text-white hover:border-blue-500'
                    }
                  `}
                >
                  <span className="text-xl w-6 text-center">{item.icon}</span>
                  <span>{item.label}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>

      {/* Dark Mode Toggle */}
      <div className="px-6 py-4 border-t border-white/10">
        <label className="flex items-center justify-between cursor-pointer group">
          <span className="text-sm font-medium text-slate-400 group-hover:text-white transition-colors">
            {theme === 'dark' ? '🌙 Dark Mode' : '☀️ Light Mode'}
          </span>
          <div className="relative">
            <input
              type="checkbox"
              className="sr-only"
              checked={theme === 'dark'}
              onChange={toggleTheme}
            />
            <div className={`
              w-14 h-7 rounded-full transition-colors duration-200
              ${theme === 'dark' ? 'bg-blue-600' : 'bg-slate-600'}
            `}>
              <div className={`
                absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform duration-200
                ${theme === 'dark' ? 'translate-x-7' : 'translate-x-0'}
              `} />
            </div>
          </div>
        </label>
      </div>

      {/* Footer */}
      <div className="p-6 border-t border-white/10 text-center">
        <p className="text-sm text-slate-500">© 2025 Portfolio</p>
      </div>
    </aside>
  )
}
