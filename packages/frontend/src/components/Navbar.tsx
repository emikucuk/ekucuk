import { VscMenu } from "react-icons/vsc"

export const Navbar = ({ isSidebarOpen, setIsSidebarOpen }: { isSidebarOpen: boolean, setIsSidebarOpen: (isSidebarOpen: boolean) => void }) => {
  return (
    <div className='flex justify-between items-center md:hidden fixed top-0 left-0 w-full h-16 bg-white dark:bg-gray-900 z-50 p-4'>
        <p className="text-2xl text-center
        font-semibold bg-gradient-to-r 
        from-blue-500 to-blue-600
        flex flex-row items-center gap-4
        dark:from-gray-100 dark:to-gray-200
        bg-clip-text text-transparent">
          <strong>Emin Küçük</strong>
          <span className="text-sm font-medium text-slate-500 dark:text-slate-400">Full Stack Developer</span>
        </p>
        <div className='flex items-center gap-4'>
            <button className='text-2xl' onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                <VscMenu className='text-slate-500 dark:text-slate-400' size={24} />
            </button>
        </div>
    </div>
  )
}
