import { Outlet } from 'react-router-dom'
import { Sidebar } from './Sidebar'

export const Layout = () => {
  return (
    <div className="p-4 flex h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <Sidebar />
      <main className="flex-1 
        p-8 overflow-y-auto h-full 
        bg-gradient-to-b 
        from-slate-50 to-slate-100
        dark:from-slate-800 dark:to-slate-900
        transition-colors duration-200 ml-4 rounded-lg
        border border-slate-200 dark:border-slate-900 shadow-md">
        <Outlet />
      </main>
    </div>
  )
}

