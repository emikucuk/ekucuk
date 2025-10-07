import { VscCode } from "react-icons/vsc";
import { useTranslationService } from "../i18n/useTranslationService";
import { resourcesMap } from "../resources/translations";
import { useState, useEffect } from "react";
import type { Technology } from "@ekucuk/shared";
import { apiRequest } from "../services/api";

const About = () => {
  const { t } = useTranslationService();
  const [technologies, setTechnologies] = useState<Technology[]>([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    apiRequest<Technology[]>({
      method: 'GET',
      sourceUrl: '/api/technologies',
      onSuccess: (data) => {
        setTechnologies(data)
      },
      onError: (error) => {
        console.error('Technologies yüklenemedi:', error.message)
      },
      onFinally: () => {
        setLoading(false)
      }
    })
  }, [])
  return (
    <div className="animate-fadeIn">
      <div className="mb-3">
        <span className="text-4xl mr-2">🙋‍♂️​</span>
        <span className="text-4xl font-semibold text-blue-600 dark:text-blue-500">
          {t(resourcesMap.about.title)}
        </span>
      </div>
      <p className="text-lg text-gray-800 dark:text-gray-300 mb-8">
        {t(resourcesMap.about.description)}
      </p>
      {
        loading ? (<div className="flex items-center justify-center h-64">
          <div className="text-lg text-gray-800 dark:text-gray-300">Loading projects...</div>
        </div>) : (
          <div className='mt-8 grid grid-cols-12 gap-6'>
          {/* Profile */}
          <div className='col-span-12 xl:col-span-3 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8'>
            <img src="/me.png" alt="Me" className="w-full h-auto object-cover rounded-tl-2xl rounded-br-2xl" />
          </div>
          {/* Subtitle */}
          <div className='col-span-12 xl:col-span-9'>
            <p className='text-5xl md:text-6xl font-semibold text-gray-800 mb-4 pt-8 pb-3 
            uppercase flex items-center gap-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-200'>
              <VscCode size={72} className="hidden md:block text-blue-700 dark:text-blue-200" /> 
              {t(resourcesMap.about.subtitle)}
            </p>
            <div className='bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8'>
              <p className='text-3xl font-semibold text-gray-800 dark:text-gray-300 mb-4'>Emin Küçük (Ekucuk)</p>
              <p className='text-lg text-gray-800 dark:text-gray-300 text-justify'>{t(resourcesMap.about.meSummary)}</p>
            </div>
          </div>
          {/* Experience */}
          <div className="col-span-12 xl:col-span-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8">
            <p className="text-xl font-medium text-gray-800 dark:text-gray-300 mb-4">{t(resourcesMap.about.experience)}</p>
            <ul className="mt-2 space-y-3">
              <li className="text-lg text-gray-800 dark:text-gray-300 border-slate-700 dark:border-slate-200 border-l-2 py-1 pl-4 hover:pl-6 transition-all duration-300 cursor-pointer">
                <p className="font-light text-sm">2021-2025</p>
                <p className="text-gray-800 dark:text-gray-100 font-medium text-lg">Freelancer</p>
                <p className="font-light text-base">Bionluk, Fiverr, Upwork</p>
              </li>
              <li className="text-lg text-gray-800 dark:text-gray-300 border-slate-700 dark:border-slate-200 border-l-2 py-1 pl-4 hover:pl-6 transition-all duration-300 cursor-pointer">
                <p className="font-light text-sm">2021-2025</p>
                <p className="text-gray-800 dark:text-gray-100 font-medium text-lg">Frontend Developer</p>
                <p className="font-light text-base">YG Digital</p>
              </li>
              <li className="text-lg text-gray-800 dark:text-gray-300 border-slate-700 dark:border-slate-200 border-l-2 py-1 pl-4 hover:pl-6 transition-all duration-300 cursor-pointer">
                <p className="font-light text-sm">2025 - </p>
                <p className="text-gray-800 dark:text-gray-100 font-medium text-lg">Yazılım Mühendisi</p>
                <p className="font-light text-base">Ford OTOSAN</p>
              </li>
            </ul>
          </div>
          {/* Education */}
          <div className="col-span-12 xl:col-span-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8">
            <p className="text-xl font-medium text-gray-800 dark:text-gray-300 mb-4">{t(resourcesMap.about.education)}</p>
            <ul className="mt-2 space-y-2">
              <li className="text-lg text-gray-800 dark:text-gray-300 border-slate-700 dark:border-slate-200 border-l-2 py-1 pl-4 hover:pl-6 transition-all duration-300 cursor-pointer">
                <p className="font-light text-sm">2021-2026</p>
                <p className="text-gray-800 dark:text-gray-100 font-medium text-lg">Sakarya Üniversitesi</p>
                <p className="font-light text-base">License</p>
              </li>
            </ul>
          </div>
          {/* Technologies & Tools */}
          <div className="col-span-12 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8">
            <p className="text-xl font-medium text-gray-800 dark:text-gray-300 mb-2">{t(resourcesMap.about.technologies)}</p>
            <p className="text-lg text-gray-800 dark:text-gray-300 mb-4">{t(resourcesMap.about.technologiesDescription)}</p>
            <div className="flex flex-wrap gap-4">
              {technologies.map((technology) => (
                <div key={technology.id} className="flex items-center gap-2 border rounded-md border-slate-300 dark:border-slate-600 px-4 py-1 cursor-pointer hover:shadow-lg hover:translate-y-[-2px] transition-all duration-300">
                  <img src={technology.image} alt={technology.title} className="w-5 h-5" />
                  <p className="text-base text-gray-800 dark:text-gray-300">
                    {technology.title}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-lg text-gray-800 dark:text-gray-300 mt-5 text-left">{t(resourcesMap.about.manyMore)}</p>
          </div>
        </div>
        )
      }
    </div>
  )
}

export default About

