import { useState } from 'react'
import { apiRequest } from '../services/api'
import type { ContactFormData } from '@ekucuk/shared'
import { resourcesMap } from '../resources/translations';
import { useTranslationService } from '../i18n/useTranslationService';
import { motion } from 'motion/react';

const Contact = () => {
  const { t } = useTranslationService();
  const [formData, setFormData] = useState<ContactFormData>({} as ContactFormData);
  const [status, setStatus] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    apiRequest({
      method: 'POST',
      sourceUrl: '/api/contact',
      body: formData,
      onSuccess: () => {
        setStatus('✅ Message sent successfully!')
      },
      onError: (error) => {
        setStatus(`❌ ${error.message}`)
      }
    })
  }
  const inputClasses = 'w-full px-0 py-2 outline-none transition-colors duration-200 border-b-2 border-slate-300 dark:border-slate-700 focus:border-blue-500 dark:focus:border-blue-500 placeholder:text-slate-600 dark:placeholder:text-slate-400 text-gray-700 dark:text-white';
  return (
    <div className="animate-fadeIn">
      <p className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
        📧 Contact
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
        <form onSubmit={handleSubmit} className="grid grid-cols-12 gap-10 mt-4">
          <div className="col-span-6">
            <label className="block font-medium text-gray-700 dark:text-gray-300 mb-2">
              {t(resourcesMap.contact.name.label)}
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className={inputClasses}
              placeholder={t(resourcesMap.contact.name.placeholder)}
              required
            />
          </div>
          <div className="col-span-6">
            <label className="block font-medium text-gray-700 dark:text-gray-300 mb-2">
              {t(resourcesMap.contact.email.label)}
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={inputClasses}
              placeholder={t(resourcesMap.contact.email.placeholder)}
              required
            />
          </div>
          <div className="col-span-6">
            <label className="block font-medium text-gray-700 dark:text-gray-300 mb-2">
              {t(resourcesMap.contact.phone.label)}
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className={inputClasses}
              placeholder={t(resourcesMap.contact.phone.placeholder)}
              required
            />
          </div>
          <div className="col-span-6">
            <label className="block font-medium text-gray-700 dark:text-gray-300 mb-2">
              {t(resourcesMap.contact.website.label)}
            </label>
            <input
              type="text"
              value={formData.website}
              onChange={(e) => setFormData({ ...formData, website: e.target.value })}
              className={inputClasses}
              placeholder={t(resourcesMap.contact.website.placeholder)}
              required
            />
          </div>
          <div className="col-span-12">
            <label className="block font-medium text-gray-700 dark:text-gray-300 mb-2">
              {t(resourcesMap.contact.subject.label)}
            </label>
            <input
              type="text"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className={inputClasses}
              placeholder={t(resourcesMap.contact.subject.placeholder)}
              required
            />
          </div>
          <div className="col-span-12">
            <label className="block font-medium text-gray-700 dark:text-gray-300 mb-2">
              {t(resourcesMap.contact.message.label)}
            </label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={4}
              className={inputClasses + ' resize-none'}
              placeholder={t(resourcesMap.contact.message.placeholder)}
              required
            />
          </div>
          <div className="col-span-12 flex justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              type="submit"
              className="w-max px-12 py-3 rounded-md bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-700 transition-colors duration-200"
              >
              {t(resourcesMap.contact.submit.label)} <span className="ml-2 w-6 h-6">🚀</span>
            </motion.button>
          </div>
        </form>
    </div>
  )
}

export default Contact

