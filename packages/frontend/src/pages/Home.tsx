import { useTranslationService } from "../i18n/useTranslationService"
import { resourcesMap } from "../resources/translations"

const Home = () => {
  const { t } = useTranslationService();
  return (
    <div className="animate-fadeIn">
      <div className="mb-3">
        <span className="text-4xl font-semibold text-blue-600 dark:text-blue-500">
          {t(resourcesMap.home.welcome)}
        </span>
      </div>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
        Modern monorepo projesi - Lerna ile yönetilen React + Express.js uygulaması.
      </p>
    </div>
  )
}

export default Home