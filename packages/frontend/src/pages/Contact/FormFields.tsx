import React, { useState } from 'react'
import { resourcesMap } from '../../resources/translations';
import type { ContactFormData } from '@ekucuk/shared';
import { useTranslationService } from '../../i18n/useTranslationService';
import { apiRequest } from '../../services/api';
import { motion } from 'motion/react';
import { VscMilestone } from 'react-icons/vsc';

const FormFields = ({setStatus}: {setStatus: (status: string) => void}) => {
    const { t } = useTranslationService();
    const [formData, setFormData] = useState<ContactFormData>({} as ContactFormData);
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
    const inputClasses = 'w-full px-0 py-2 outline-none transition-colors duration-200 border-b-2 border-slate-300 dark:border-slate-700 focus:border-blue-500 dark:focus:border-blue-500 placeholder:text-slate-600 dark:placeholder:text-slate-400 text-gray-700 dark:text-white bg-transparent';
  return (
    <form onSubmit={handleSubmit} className="col-span-12 xl:col-span-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8 lg:grid grid-cols-12 gap-x-8 gap-y-6 w-full">
    <p className="mb-4 lg:mb-0 col-span-12 text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-200 dark:from-blue-500 dark:to-blue-100">
      {t(resourcesMap.contact.letswork)}
    </p>
    <div className="mb-4 lg:mb-0 col-span-12 lg:col-span-6">
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
    <div className="mb-4 lg:mb-0 col-span-12 lg:col-span-6">
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
    <div className="mb-4 lg:mb-0 col-span-12 lg:col-span-6">
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
    <div className="mb-4 lg:mb-0 col-span-12 lg:col-span-6">
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
    <div className="mb-4 lg:mb-0 col-span-12">
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
    <div className="mb-4 lg:mb-0 col-span-12">
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
    <div className="mb-4 lg:mb-0 col-span-12 flex justify-center">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        type="submit"
        className="cursor-pointer w-max px-12 py-3 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-700 transition-colors duration-200 flex items-center justify-center gap-2 shadow-lg"
        >
        {t(resourcesMap.contact.submit.label)} <VscMilestone className="ml-2" size={22}/>
      </motion.button>
    </div>
  </form>
  )
}

export default FormFields