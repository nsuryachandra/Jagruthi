import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ContactForm = () => {
  const { language, t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState(null); // 'success' | 'error' | 'submitting' | null

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setStatus('error');
      return;
    }

    setStatus('submitting');
    
    // Mock successful submission
    setTimeout(() => {
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      // Clear status banner after 6 seconds
      setTimeout(() => setStatus(null), 6000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-[#fafaf9] relative overflow-hidden">
      
      {/* Decorative glows */}
      <div className="absolute top-[30%] left-[-10%] w-[30vw] h-[30vw] rounded-full bg-brand-green-800/[0.03] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[35vw] h-[35vw] rounded-full bg-brand-gold-600/[0.03] blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-green-900 tracking-wide font-display">
            {t('contact.title')}
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2 font-bold uppercase tracking-widest font-telugu">
            {t('contact.subtitle')}
          </p>
          <div className="ornament-line mt-5">
            <div className="ornament-diamond" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Block: Contact Details & Map Card */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            <div className="bg-[#f5f5f4] rounded-3xl p-8 border border-brand-green-900/10 space-y-6 flex-1 shadow-premium">
              <h3 className="text-xl font-bold text-slate-800 tracking-wide border-l-2 border-brand-gold-700 pl-3 font-display">
                {t('contact.officeAddress')}
              </h3>

              <div className="space-y-6 pt-4">
                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-xl bg-brand-green-50 border border-brand-green-900/15 flex items-center justify-center text-brand-green-900 shrink-0 shadow-sm animate-pulse-slow">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-bold">Headquarters</span>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-telugu font-semibold">
                      {t('contact.addressVal')}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-xl bg-brand-green-50 border border-brand-green-900/15 flex items-center justify-center text-brand-green-900 shrink-0 shadow-sm">
                    <Phone className="h-4.5 w-4.5" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-bold">{t('contact.phoneLabel')}</span>
                    <a href="tel:04023511111" className="text-xs sm:text-sm text-slate-700 hover:text-brand-green-900 transition-colors font-bold">
                      040 - 2351 1111
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-xl bg-brand-green-50 border border-brand-green-900/15 flex items-center justify-center text-brand-green-900 shrink-0 shadow-sm">
                    <Mail className="h-4.5 w-4.5" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-bold">{t('contact.emailLabel')}</span>
                    <a href="mailto:telanganajagruthi@gmail.com" className="text-xs sm:text-sm text-slate-700 hover:text-brand-green-900 transition-colors font-bold">
                      telanganajagruthi@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Stylized Google Maps Panel (Custom styling map container) */}
            <div className="h-56 sm:h-64 rounded-3xl border border-brand-green-900/10 overflow-hidden relative shadow-premium bg-white">
              {/* Light map placeholder with high quality vector elements */}
              <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(180,83,9,0.15),transparent_60%)]" />
              {/* Map grid */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(6,78,59,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(6,78,59,0.015)_1px,transparent_1px)] bg-[size:1.5rem_1.5rem]" />
              
              {/* Map lines mock */}
              <svg className="absolute inset-0 w-full h-full text-brand-green-900/10" viewBox="0 0 100 100" fill="none">
                <path d="M 0 30 Q 30 40, 50 20 T 100 50" stroke="currentColor" strokeWidth="0.5" />
                <path d="M 20 0 Q 40 40, 30 70 T 80 100" stroke="currentColor" strokeWidth="0.5" />
                <circle cx="50" cy="50" r="1.5" fill="#eab308" className="animate-ping" />
                <circle cx="50" cy="50" r="1.2" fill="#d97706" />
              </svg>

              <div className="absolute inset-0 p-5 flex flex-col justify-between z-10">
                <span className="text-[10px] font-extrabold text-brand-green-900 uppercase tracking-widest bg-brand-green-50 px-2.5 py-1 rounded-full w-fit border border-brand-green-900/10 shadow-sm">Banjara Hills, Road No. 14</span>
                
                <div className="space-y-1">
                  <h4 className="text-xs sm:text-sm font-bold text-slate-800 font-telugu">తెలంగాణ జాగృతి ప్రధాన కార్యాలయం</h4>
                  <a
                    href="https://maps.google.com/?q=Hill+Top+Residency+Road+No+14+Banjara+Hills+Hyderabad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[11px] font-display font-black text-brand-green-800 hover:text-brand-green-950 transition-colors uppercase tracking-widest cursor-pointer"
                  >
                    <span>Open in Google Maps</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Block: Light Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#f5f5f4] rounded-3xl p-6 sm:p-8 border border-brand-green-900/10 h-full shadow-premium">
              <form onSubmit={handleFormSubmit} className="space-y-5 font-telugu">
                
                {/* Notification banners */}
                <AnimatePresence>
                  {status === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="p-4 rounded-xl bg-brand-green-50 border border-brand-green-900/25 text-brand-green-900 text-xs sm:text-sm leading-relaxed font-semibold shadow-sm"
                    >
                      {t('contact.successMsg')}
                    </motion.div>
                  )}

                  {status === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="p-4 rounded-xl bg-red-50 border border-red-500/25 text-red-800 text-xs sm:text-sm leading-relaxed font-semibold shadow-sm"
                    >
                      {t('contact.errorMsg')}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Name Input */}
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    {t('contact.formName')} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-white border border-brand-green-900/15 rounded-xl px-4 py-3 text-slate-700 text-sm focus:outline-none focus:border-brand-gold-700 focus:ring-1 focus:ring-brand-gold-700 transition-all font-telugu font-semibold shadow-sm"
                    placeholder={language === 'en' ? "Your Name" : "మీ పేరు"}
                  />
                </div>

                {/* Email and Phone Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      {t('contact.formEmail')} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-white border border-brand-green-900/15 rounded-xl px-4 py-3 text-slate-700 text-sm focus:outline-none focus:border-brand-gold-700 focus:ring-1 focus:ring-brand-gold-700 transition-all font-telugu font-semibold shadow-sm"
                      placeholder="email@example.com"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      {t('contact.formPhone')}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full bg-white border border-brand-green-900/15 rounded-xl px-4 py-3 text-slate-700 text-sm focus:outline-none focus:border-brand-gold-700 focus:ring-1 focus:ring-brand-gold-700 transition-all font-telugu font-semibold shadow-sm"
                      placeholder={language === 'en' ? "Phone Number" : "ఫోన్ నెంబర్"}
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div className="space-y-1.5">
                  <label htmlFor="subject" className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    {t('contact.formSubject')} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full bg-white border border-brand-green-900/15 rounded-xl px-4 py-3 text-slate-700 text-sm focus:outline-none focus:border-brand-gold-700 focus:ring-1 focus:ring-brand-gold-700 transition-all font-telugu font-semibold shadow-sm"
                    placeholder={language === 'en' ? "Message Subject" : "సందేశ విషయం"}
                  />
                </div>

                {/* Message Input */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    {t('contact.formMessage')} <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="4"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full bg-white border border-brand-green-900/15 rounded-xl px-4 py-3 text-slate-700 text-sm focus:outline-none focus:border-brand-gold-700 focus:ring-1 focus:ring-brand-gold-700 transition-all font-telugu resize-none font-semibold shadow-sm"
                    placeholder={language === 'en' ? "Type your message here..." : "మీ సందేశాన్ని ఇక్కడ టైప్ చేయండి..."}
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full mt-2 flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-brand-green-800 to-brand-green-900 hover:from-brand-green-700 hover:to-brand-green-800 disabled:from-brand-green-900 disabled:to-stone-900 text-white text-[10px] sm:text-xs font-display font-black uppercase tracking-widest transition-all shadow-sm cursor-pointer transform hover:-translate-y-0.5"
                >
                  <Send className="h-4 w-4" />
                  <span>{status === 'submitting' ? t('common.loading') : t('common.submit')}</span>
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
