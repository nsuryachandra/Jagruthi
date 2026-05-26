import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, ShieldCheck, MapPin, Phone, Mail, Send, CheckCircle, AlertCircle } from 'lucide-react';

const ContactForm = () => {
  const { language, t } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [status, setStatus]     = useState('idle'); // idle | submitting | success | error

  const handleInputChange = (e) => setFormData(p => ({ ...p, [e.target.name]: e.target.value }));

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    await new Promise(r => setTimeout(r, 1400));
    if (formData.email.includes('@')) {
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } else {
      setStatus('error');
    }
    setTimeout(() => setStatus('idle'), 5000);
  };

  const inputCls = "w-full bg-white border border-gray-200 px-4 py-3 text-sm text-[#1a2a1f] placeholder-gray-400 focus:outline-none focus:border-[#0f5132] focus:ring-1 focus:ring-[#0f5132]/20 transition-all font-medium";
  const labelCls = "text-[9px] font-black uppercase tracking-widest text-gray-500 block mb-1.5";

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#f8f7f5] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-10 sm:mb-14">
          <span className="section-eyebrow mb-4 inline-flex">
            <Mail className="h-3.5 w-3.5" />
            {language === 'en' ? 'Official Contact' : 'అధికారిక సంప్రదింపు'}
          </span>
          <h2 className="section-title text-3xl sm:text-4xl mt-3 mb-2">{t('contact.title')}</h2>
          <p className="text-sm text-gray-500">{t('contact.subtitle')}</p>
          <div className="flex items-center gap-2 mt-5">
            <div className="h-0.5 w-12 bg-[#0f5132]" />
            <div className="h-1.5 w-1.5 bg-[#a16207] rotate-45" />
            <div className="h-0.5 w-4 bg-[#a16207]" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

          {/* Left: Contact Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="official-card bg-white p-6 sm:p-8">
              <h3 className="text-sm font-black text-[#0a361e] mb-5 pb-3 border-b border-gray-100 font-display"
                style={{ fontFamily: 'Cinzel, serif' }}>
                {t('contact.officeAddress')}
              </h3>

              <div className="space-y-5">
                {[
                  {
                    icon: <MapPin className="h-4 w-4 text-[#0f5132]" />,
                    label: 'Headquarters',
                    value: t('contact.addressVal')
                  },
                  {
                    icon: <Phone className="h-4 w-4 text-[#0f5132]" />,
                    label: t('contact.phoneLabel'),
                    value: t('contact.phoneVal')
                  },
                  {
                    icon: <Mail className="h-4 w-4 text-[#0f5132]" />,
                    label: t('contact.emailLabel'),
                    value: t('contact.emailVal')
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="h-8 w-8 bg-[#f0fdf4] border border-[#0f5132]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-[9px] text-gray-400 uppercase tracking-wider font-bold mb-0.5">{item.label}</p>
                      <p className="text-xs sm:text-sm text-[#1a2a1f] font-semibold leading-relaxed"
                        style={{ fontFamily: 'Mandali, Outfit, sans-serif' }}>
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map link */}
              <div className="mt-6 pt-4 border-t border-gray-100">
                <a
                  href="https://maps.google.com/?q=Hill+Top+Residency+Road+No+14+Banjara+Hills+Hyderabad"
                  target="_blank" rel="noopener noreferrer"
                  className="text-[9px] font-display font-black uppercase tracking-widest text-[#0f5132] hover:text-[#a16207] transition-colors flex items-center gap-1.5 cursor-pointer"
                  style={{ fontFamily: 'Cinzel, serif' }}
                >
                  View on Google Maps →
                </a>
              </div>
            </div>

            {/* Quick info cards */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: 'Office Hours', value: 'Mon–Sat\n9AM – 6PM' },
                { label: 'Est.', value: '2006\nHyderabad' }
              ].map((c, i) => (
                <div key={i} className="official-card bg-white p-4 text-center">
                  <p className="text-[8px] text-gray-400 uppercase tracking-wider font-bold mb-1">{c.label}</p>
                  <p className="text-xs font-black text-[#0a361e] whitespace-pre-line leading-tight"
                    style={{ fontFamily: 'Cinzel, serif' }}>{c.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-8">
            <div className="official-card bg-white p-6 sm:p-8">
              <h3 className="text-sm font-black text-[#0a361e] mb-6 pb-3 border-b border-gray-100 font-display"
                style={{ fontFamily: 'Cinzel, serif' }}>
                {language === 'en' ? 'Send a Message' : 'సందేశం పంపండి'}
              </h3>

              {/* Status banners */}
              <AnimatePresence>
                {status === 'success' && (
                  <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                    className="flex items-start gap-3 p-4 bg-[#f0fdf4] border border-[#0f5132]/20 mb-5" style={{ borderRadius: '2px' }}>
                    <CheckCircle className="h-4 w-4 text-[#0f5132] flex-shrink-0 mt-0.5" />
                    <p className="text-xs font-semibold text-[#0f5132]">{t('contact.successMsg')}</p>
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                    className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 mb-5" style={{ borderRadius: '2px' }}>
                    <AlertCircle className="h-4 w-4 text-red-600 flex-shrink-0 mt-0.5" />
                    <p className="text-xs font-semibold text-red-700">{t('contact.errorMsg')}</p>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelCls}>{t('contact.formName')} <span className="text-red-500">*</span></label>
                    <input type="text" name="name" required value={formData.name} onChange={handleInputChange}
                      placeholder={language === 'en' ? 'Your Full Name' : 'మీ పూర్తి పేరు'}
                      className={inputCls} style={{ borderRadius: '2px' }} />
                  </div>
                  <div>
                    <label className={labelCls}>{t('contact.formEmail')} <span className="text-red-500">*</span></label>
                    <input type="email" name="email" required value={formData.email} onChange={handleInputChange}
                      placeholder={language === 'en' ? 'email@example.com' : 'ఇమెయిల్'}
                      className={inputCls} style={{ borderRadius: '2px' }} />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelCls}>{t('contact.formPhone')}</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange}
                      placeholder={language === 'en' ? 'Phone Number' : 'ఫోన్ నెంబర్'}
                      className={inputCls} style={{ borderRadius: '2px' }} />
                  </div>
                  <div>
                    <label className={labelCls}>{t('contact.formSubject')} <span className="text-red-500">*</span></label>
                    <input type="text" name="subject" required value={formData.subject} onChange={handleInputChange}
                      placeholder={language === 'en' ? 'Subject' : 'విషయం'}
                      className={inputCls} style={{ borderRadius: '2px' }} />
                  </div>
                </div>

                <div>
                  <label className={labelCls}>{t('contact.formMessage')} <span className="text-red-500">*</span></label>
                  <textarea name="message" required rows="5" value={formData.message} onChange={handleInputChange}
                    placeholder={language === 'en' ? 'Your message...' : 'మీ సందేశం...'}
                    className={`${inputCls} resize-none`} style={{ borderRadius: '2px' }} />
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="btn-primary w-full justify-center py-3.5 disabled:opacity-60 disabled:cursor-not-allowed text-[10px]"
                  style={{ borderRadius: '2px' }}
                >
                  <Send className="h-4 w-4" />
                  {status === 'submitting' ? t('common.loading') : t('common.submit')}
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;
