const About = () => {
  return (
    <div className="max-w-7xl animate-fadeIn">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
        👤 About Me
      </h1>
      
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-6 transition-colors duration-200">
        <p className="text-gray-700 dark:text-gray-300 text-lg mb-6">
          Bu sayfa hakkımda bilgiler içerir. Layout sidebar'ı sabit kalırken
          bu içerik değişiyor.
        </p>
        
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
            Skills
          </h2>
          <ul className="space-y-3">
            <li className="flex items-center gap-3 py-3 border-b border-gray-200 dark:border-gray-600 last:border-0">
              <span className="text-blue-600 dark:text-blue-400">⚛️</span>
              <span className="text-gray-700 dark:text-gray-200 font-medium">React & TypeScript</span>
            </li>
            <li className="flex items-center gap-3 py-3 border-b border-gray-200 dark:border-gray-600 last:border-0">
              <span className="text-green-600 dark:text-green-400">🟢</span>
              <span className="text-gray-700 dark:text-gray-200 font-medium">Node.js & Express</span>
            </li>
            <li className="flex items-center gap-3 py-3 border-b border-gray-200 dark:border-gray-600 last:border-0">
              <span className="text-purple-600 dark:text-purple-400">🗄️</span>
              <span className="text-gray-700 dark:text-gray-200 font-medium">MongoDB & PostgreSQL</span>
            </li>
            <li className="flex items-center gap-3 py-3 border-b border-gray-200 dark:border-gray-600 last:border-0">
              <span className="text-orange-600 dark:text-orange-400">📦</span>
              <span className="text-gray-700 dark:text-gray-200 font-medium">Git & Lerna</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About

