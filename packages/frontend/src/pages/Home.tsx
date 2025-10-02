import { useTranslationService } from "../i18n/useTranslationService"
import { resourcesMap } from "../resources/translations"

const Home = () => {
  const { t } = useTranslationService();
  return (
    <div className="animate-fadeIn">
      <p className="text-4xl font-bold text-blue-600 dark:text-blue-500 mb-6">
        {t(resourcesMap.home.welcome)}
      </p>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
        Modern monorepo projesi - Lerna ile yönetilen React + Express.js uygulaması.
      </p>
    </div>
  )
}

export default Home