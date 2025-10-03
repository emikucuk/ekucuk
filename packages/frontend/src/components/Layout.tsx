import { Outlet } from 'react-router-dom'
import { Sidebar } from './Sidebar'
import { Navbar } from './Navbar'
import { useState } from 'react'

export const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  return (
    <div className="p-0 md:p-4 flex h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <Navbar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <main className="flex-1 
        mt-16 md:mt-0 
        p-6 md:p-8 overflow-y-auto h-full 
        bg-gradient-to-b 
        from-slate-50 to-slate-100
        dark:from-slate-800 dark:to-slate-900
        transition-colors duration-200 ml-0 md:ml-4 md:rounded-lg
        border border-slate-200 dark:border-slate-900 shadow-lg">
        <Outlet />
      </main>
    </div>
  )
}

