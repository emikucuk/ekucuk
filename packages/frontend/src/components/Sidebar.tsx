import { Link, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { useTheme } from '../context/ThemeContext'
import { useTranslationService } from '../i18n/useTranslationService'
import { menuItems } from '../constants/menuItems'
import { motion } from 'motion/react';
import { VscCloudDownload, VscClose } from 'react-icons/vsc';
import { resourcesMap } from '../resources/translations';

export const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }: { isSidebarOpen: boolean, setIsSidebarOpen: (isSidebarOpen: boolean) => void }) => {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const { t, currentLanguage, changeLanguage } = useTranslationService();

  useEffect(() => {
    setIsSidebarOpen(false);
  }, [location.pathname, setIsSidebarOpen]);
  return (
    <aside className={
      `w-full md:w-72 fixed md:sticky 
      top-0 -left-72 md:left-0 h-full
      overflow-y-auto overflow-x-hidden
      transition-all duration-300
      ${isSidebarOpen ? 'left-0' : '-left-full'}
      bg-gradient-to-b z-60
      from-slate-50 to-slate-100 
      dark:from-slate-800 dark:to-slate-900
      text-white border border-slate-200 dark:border-slate-900
      flex flex-col md:rounded-lg shadow-lg
      `
    }>
      <div className='flex md:hidden absolute top-4 right-4'>
        <button className='text-2xl' onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          <VscClose className='text-slate-500 dark:text-slate-400' size={32} />
        </button>
      </div>
      {/* Header */}
      <div className="px-8 py-6 border-b border-slate-200 dark:border-slate-600">
        <img src="/me.png" alt="Emin Küçük" className="w-32 h-32 rounded-full mx-auto mb-2 shadow-xl" />
        <p className="text-2xl text-center
        font-semibold bg-gradient-to-r 
        from-blue-500 to-blue-600
        flex flex-col items-center gap-1
        dark:from-gray-100 dark:to-gray-200
        bg-clip-text text-transparent">
          <strong>Emin Küçük</strong>
          <span className="text-sm font-medium text-slate-500 dark:text-slate-400">Full Stack Developer</span>
        </p>
      </div>
      {/* Download CV */}
      <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-600">
        <motion.a
        href="/cv.pdf"
        target="_blank"
        download="cv.pdf"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="cursor-pointer w-full h-10 rounded-full transition-colors duration-200 
        bg-gradient-to-r from-blue-500 to-blue-600
        hover:from-blue-600 hover:to-blue-700
        flex items-center justify-center gap-2">
          <VscCloudDownload className="text-2xl text-slate-100" />
          <span className="font-medium text-slate-100">{t(resourcesMap.common.downloadCV)}</span>
        </motion.a>
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
                  {item.icon}
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
              <div className="absolute top-1 left-1 rounded-full text-2xl transition-transform duration-500 dark:translate-x-[85%] md:dark:translate-x-48 translate-x-1 w-full">
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
