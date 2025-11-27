import Marquee from "react-fast-marquee";
import { useTranslationService } from "../i18n/useTranslationService"
import { resourcesMap } from "../resources/translations"
import { VscCloudDownload } from "react-icons/vsc";
import SocialMedia from "../components/SocialMedia";

const Home = () => {
  const { t } = useTranslationService();
  return (
    <div className="animate-fadeIn">
      <div className="mb-3">
        <span className="text-4xl mr-2">💻​</span>
        <span className="text-4xl font-semibold text-blue-500 dark:text-blue-500">
          {t(resourcesMap.home.welcome)}
        </span>
      </div>
      <p className="text-lg text-gray-800 dark:text-gray-300 mb-8">
        {t(resourcesMap.home.description)}
      </p>
      <div className='mt-8 grid grid-cols-12 gap-6'>
        {/* Profile */}
        <div className='col-span-12 xl:col-span-3 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8'>
          <img src="/me.png" alt="Me" className="w-full h-auto object-cover rounded-tl-2xl rounded-br-2xl" />
        </div>
        {/* Description */}
        <div className='col-span-12 xl:col-span-9 gap-6 h-full flex flex-col justify-between'>
          {/* Available */}
          <div className="bg-white dark:bg-gray-800 rounded-full shadow-lg p-4 md:py-4 md:px-6 h-max mb-2">
            <Marquee
              direction={"right"}
              autoFill={true}
              speed={50}
              pauseOnHover={true}
              play={true}
              className="w-full h-full"
            >
              <span className="text-xl text-blue-500 dark:text-gray-50 font-bold select-none">
                {t(resourcesMap.home.available)} &nbsp;
              </span>
            </Marquee>
          </div>
          {/* Years of Experience */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8 grid grid-cols-4 h-full gap-4">
            <div 
            className="col-span-1 flex flex-col items-center justify-center gap-3 bg-slate-100 dark:bg-slate-700 rounded-2xl shadow-lg p-4 md:py-4 md:px-6 h-full hover:translate-y-[-5px] transition-all duration-300 hover:shadow-xl">
              <strong className="text-6xl text-blue-500 font-bold select-none">04</strong>
              <span className="text-lg text-gray-800 dark:text-gray-200 select-none">
                {t(resourcesMap.home.yearsOfExperience)}
              </span>
            </div>
            <div
            className="col-span-1 flex flex-col items-center justify-center gap-3 bg-slate-100 dark:bg-slate-700 rounded-2xl shadow-lg p-4 md:py-4 md:px-6 h-full hover:translate-y-[-5px] transition-all duration-300 hover:shadow-xl">
              <strong className="text-6xl text-blue-500 font-bold select-none">20+</strong>
              <span className="text-lg text-gray-800 dark:text-gray-200 select-none">
                {t(resourcesMap.home.happyClients)}
              </span>
            </div>
            <div
            className="col-span-1 flex flex-col items-center justify-center gap-3 bg-slate-100 dark:bg-slate-700 rounded-2xl shadow-lg p-4 md:py-4 md:px-6 h-full hover:translate-y-[-5px] transition-all duration-300 hover:shadow-xl">
              <strong className="text-6xl text-blue-500 font-bold select-none">50+</strong>
              <span className="text-lg text-gray-800 dark:text-gray-200 select-none">
                {t(resourcesMap.home.projectsCompleted)}
              </span>
            </div>
            <div
            className="col-span-1 flex flex-col items-center justify-center gap-3 bg-slate-100 dark:bg-slate-700 rounded-2xl shadow-lg p-4 md:py-4 md:px-6 h-full hover:translate-y-[-5px] transition-all duration-300 hover:shadow-xl">
              <strong className="text-6xl text-blue-500 font-bold select-none">N/A</strong>
              <span className="text-lg text-gray-800 dark:text-gray-200 select-none">
                {t(resourcesMap.home.spendTime)}
              </span>
            </div>
          </div>
        </div>
        {/* Download CV */}
        <div className="col-span-12 grid grid-cols-12 gap-6">
          <a 
           className="col-span-12 xl:col-span-3 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8 hover:translate-y-[-5px] transition-all duration-300 hover:shadow-xl"
           href="/cv.pdf"
           target="_blank"
           download="cv.pdf"
           >
            <VscCloudDownload size={90} className="text-blue-500 dark:text-blue-500 mx-auto mb-4" />
            <span className="text-2xl text-gray-800 dark:text-gray-200">
            → {t(resourcesMap.common.downloadCV)}
            </span>
          </a>
          {/* Let's Work Together */}
          <div className="col-span-12 xl:col-span-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8"></div>
        {/* Social Media */}
          <div className="col-span-12 xl:col-span-3 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8">
            <SocialMedia />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home