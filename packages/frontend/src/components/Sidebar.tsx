import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import { useTranslationService } from '../i18n/useTranslationService'
import { menuItems } from '../constants/menuItems'

export const Sidebar = () => {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const { t, currentLanguage, changeLanguage } = useTranslationService();
  return (
    <aside className="w-72 
    bg-gradient-to-b 
    from-slate-50 to-slate-100 
    dark:from-slate-800 dark:to-slate-900
    text-white border border-slate-200 dark:border-slate-900
    flex flex-col rounded-lg shadow-md">
      {/* Header */}
      <div className="px-8 py-6 border-b border-slate-200 dark:border-slate-600">
        <p className="text-2xl 
        font-semibold bg-gradient-to-r 
        from-blue-500 to-blue-600
        dark:from-gray-100 dark:to-gray-200
        bg-clip-text text-transparent">
          <strong>Emin Küçük</strong>
          <br />
          <span className="text-sm text-slate-500 dark:text-slate-400">Full Stack Developer</span>
        </p>
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
                      ? 'bg-blue-500/25 dark:bg-blue-500/15 text-blue-500 border-blue-500' 
                      : 'text-slate-400 border-transparent hover:bg-blue-500/15 hover:text-blue-400 dark:hover:text-blue-100 hover:border-blue-400 dark:hover:bg-blue-400/15'
                    }
                  `}
                >
                  <span className="text-xl w-6 text-center">{item.icon}</span>
                  <span className={`${isActive ? 'font-semibold' : 'font-medium'}`}>{t(item.label)}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
      {/* Dark Mode Toggle */}
      <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-600">
        <label className="flex items-center justify-between cursor-pointer">
          <div className="relative w-full">
            <input
              type="checkbox"
              className="sr-only"
              checked={theme === 'dark'}
              onChange={toggleTheme}
            />
            <div className={`
              w-full h-10 rounded-full transition-colors duration-200
              bg-slate-200 dark:bg-slate-700
            `}>
              <div className={`absolute top-1 left-1 rounded-full text-2xl transition-transform duration-500 dark:translate-x-48 translate-x-0`}>
                {theme === 'dark' ? '🌙' : '☀️'}
              </div>
            </div>
          </div>
        </label>
      </div>

      {/* Language Toggle */}
      <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-600 w-full flex justify-center items-center gap-2">
        <button onClick={() => changeLanguage('TR')} className="cursor-pointer">
          <img src="/tr.webp" alt="TR" className={`w-7 h-7 transition-opacity duration-200 rounded-full hover:opacity-75 ${currentLanguage === 'TR' ? 'opacity-100 border-green-500' : 'opacity-50'}`}/>
        </button>
        <button onClick={() => changeLanguage('EN')} className="cursor-pointer">
          <img src="/uk.webp" alt="EN" className={`w-7 h-7 transition-opacity duration-200 rounded-full hover:opacity-75 ${currentLanguage === 'EN' ? 'opacity-100 border-green-500' : 'opacity-50'}`} />
        </button>
        <button onClick={() => changeLanguage('DE')} className="cursor-pointer">
          <img src="/de.webp" alt="DE" className={`w-7 h-7 transition-opacity duration-200 rounded-full hover:opacity-75 ${currentLanguage === 'DE' ? 'opacity-100 border-green-500' : 'opacity-50'}`} />
        </button>
      </div>
    </aside>
  )
}
