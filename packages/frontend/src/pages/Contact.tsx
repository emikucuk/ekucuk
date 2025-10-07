import { useState } from 'react'
import { resourcesMap } from '../resources/translations';
import { useTranslationService } from '../i18n/useTranslationService';
import FormFields from './Contact/FormFields';
import { VscMail, VscCallOutgoing, VscMap } from 'react-icons/vsc';
import { motion } from 'motion/react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const { t } = useTranslationService();
  const [status, setStatus] = useState('');
  return (
    <div className="animate-fadeIn">
      <div className="mb-3">
        <span className="text-4xl mr-2">📧</span>
        <span className="text-4xl font-semibold text-blue-600 dark:text-blue-500">
          {t(resourcesMap.contact.title)}
        </span>
      </div>
      <p className="text-lg text-gray-800 dark:text-gray-300 mb-8">
        {t(resourcesMap.contact.description)}
      </p>
      {status && (
          <div className={`mt-12 p-4 rounded-lg font-medium ${
            status.includes('✅') 
              ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300' 
              : 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300'
          }`}>
            {status}
          </div>
        )}
        <div className='mt-8 grid grid-cols-12 gap-6'>
          <div className='col-span-12 xl:col-span-4 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8'>
            <p className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-200 dark:from-blue-500 dark:to-blue-100">
              {t(resourcesMap.contact.contactme)}
            </p>
            <div className='mt-4 flex flex-col gap-6 w-full'>
              <a href="mailto:eminkucuk612@gmail.com" className='flex items-center gap-4'>
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
                  <VscMail size={29} className='text-blue-600 dark:text-white group-hover:text-white' />
                </motion.div>
                <div>
                  <p className='text-lg text-gray-800 dark:text-gray-300'>eminkucuk612@gmail.com</p>
                </div>
              </a>
              <a href="tel:+905348860502" className='flex items-center gap-4'>
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
                  className='w-18 h-18 flex items-center justify-center rounded-xl  group
                    bg-slate-100 hover:bg-blue-500 shadow-lg
                    dark:bg-slate-700 dark:hover:bg-blue-600
                  '
                >
                  <VscCallOutgoing size={26} className='text-blue-600 dark:text-white group-hover:text-white' />
                </motion.div>
                <div>
                  <p className='text-lg text-gray-800 dark:text-gray-300'>+90 534 886 05 02</p>
                </div>
              </a>
              <a href="https://www.google.com/maps/d/u/0/embed?mid=1tMPf9kw6HEwpHneOhFRupJlZyxw&hl=tr&ie=UTF8&msa=0&ll=40.821830999999996%2C29.310578999999993&spn=0.015588%2C0.027466&z=15&output=embed" target='_blank' className='flex items-center gap-4'>
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
                  className='w-18 h-18 flex items-center justify-center rounded-xl  group
                    bg-slate-100 hover:bg-blue-500 shadow-lg
                    dark:bg-slate-700 dark:hover:bg-blue-600
                  '
                >
                  <VscMap  size={30} className='text-blue-600 dark:text-white group-hover:text-white' />
                </motion.div>
                <div>
                  <p className='text-lg text-gray-800 dark:text-gray-300'>TUZLA/İstanbul, Türkiye</p>
                </div>
              </a>
            </div>
            <p className="mt-6 text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-200 dark:from-blue-500 dark:to-blue-100">
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
                    times: [0, 0.2, 0.5, 0.8, 1],
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
          <FormFields setStatus={setStatus} />
        </div>
    </div>
  )
}

export default Contact

