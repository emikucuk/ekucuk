import { useTranslationService } from "../i18n/useTranslationService"
import { resourcesMap } from "../resources/translations"

const Home = () => {
  const { t, changeLanguage } = useTranslationService()
  return (
    <div className="max-w-7xl animate-fadeIn">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
        {t(resourcesMap.home.welcome)}
      </h1>
      
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-6 transition-colors duration-200">
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Modern monorepo projesi - Lerna ile yönetilen React + Express.js uygulaması.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="bg-white dark:bg-gray-700 rounded-xl shadow-md p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-200">
            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-3">
              ⚡ Fast & Modern
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Vite ile hızlı development, TypeScript ile tip güvenliği
            </p>
          </div>

          <div className="bg-white dark:bg-gray-700 rounded-xl shadow-md p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-200">
            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-3">
              🔧 Monorepo
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Lerna ile yönetilen frontend, admin ve backend paketleri
            </p>
          </div>

          <div className="bg-white dark:bg-gray-700 rounded-xl shadow-md p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-200">
            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-3">
              🎨 Beautiful UI
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Modern ve responsive tasarım, sidebar navigation
            </p>
          </div>

          <div className="bg-white dark:bg-gray-700 rounded-xl shadow-md p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-200">
            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-3">
              🔗 API Integration
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Express.js backend ile entegre RESTful API
            </p>
          </div>
        </div>
      <button onClick={() => changeLanguage('TR')}>TR</button>
      <button onClick={() => changeLanguage('EN')}>EN</button>
      <button onClick={() => changeLanguage('DE')}>DE</button>
      </div>
    </div>
  )
}

export default Home