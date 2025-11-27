import { motion } from 'motion/react'
import { useTranslationService } from '../i18n/useTranslationService';
import { resourcesMap } from '../resources/translations';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

const SocialMedia = () => {
  const { t } = useTranslationService();
  return (
    <div>
        <p className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-200 dark:from-blue-500 dark:to-blue-100">
              {t(resourcesMap.contact.socialmedia)}
        </p>
        <div className='mt-4 flex flex-row gap-6 w-full'>
            <a href="https://www.instagram.com/eminkuecuk" target='_blank' className='flex items-center gap-4'>
            <motion.div 
                initial={{
                scale: 1,
                rotate: 0,
                borderRadius: "50%"
                }
                }
                whileHover={
                {
                    scale: [1, 1.1, 1.1, 1, 1],
                    rotate: [0, 0, 360],
                    borderRadius: ["50%", "50%", "10%", "10%", "50%"],
                }
                }
                transition={{
                duration: 1.5,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1]
                }}
                className='w-18 h-18 flex items-center justify-center rounded-xl group
                bg-slate-100 hover:bg-blue-500 shadow-lg
                dark:bg-slate-700 dark:hover:bg-blue-600
                '
            >
                <FaInstagram size={30} className='text-blue-600 dark:text-white group-hover:text-white' />
            </motion.div>
            </a>
            <a href="https://wa.me/905348860502" target='_blank' className='flex items-center gap-4'>
            <motion.div 
                initial={{
                scale: 1,
                rotate: 0,
                borderRadius: "50%"
                }
                }
                whileHover={
                {
                    scale: [1, 1.1, 1.1, 1, 1],
                    rotate: [0, 0, 360],
                    borderRadius: ["50%", "50%", "10%", "10%", "50%"],
                }
                }
                transition={{
                duration: 1.5,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
                }}
                className='w-18 h-18 flex items-center justify-center rounded-xl group
                bg-slate-100 hover:bg-blue-500 shadow-lg
                dark:bg-slate-700 dark:hover:bg-blue-600
                '
            >
                <FaWhatsapp size={30} className='text-blue-600 dark:text-white group-hover:text-white' />
            </motion.div>
            </a>
        </div>
    </div>
  )
}

export default SocialMedia