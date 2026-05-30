import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { ShieldCheck, User, Phone, MapPin, CheckSquare, Award, ArrowRight, ArrowLeft, Camera, Download, RefreshCw, Check } from 'lucide-react';

const DISTRICTS = [
  'Adilabad', 'Bhadradri Kothagudem', 'Hanumakonda', 'Hyderabad', 'Jagtial', 'Jangaon', 
  'Jayashankar Bhupalpally', 'Jogulamba Gadwal', 'Kamareddy', 'Karimnagar', 'Khammam', 
  'Kumuram Bheem Asifabad', 'Mahabubabad', 'Mahabubnagar', 'Mancherial', 'Medak', 
  'Medchal-Malkajgiri', 'Mulugu', 'Nagarkurnool', 'Nalgonda', 'Narayanpet', 'Nirmal', 
  'Nizamabad', 'Peddapalli', 'Rajanna Sircilla', 'Rangareddy', 'Sangareddy', 'Siddipet', 
  'Suryapet', 'Vikarabad', 'Wanaparthy', 'Warangal', 'Yadadri Bhuvanagiri'
];

const MembershipFormView = () => {
  const { language } = useLanguage();
  const [step, setStep] = useState(1);
  
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    otp: '',
    dob: '',
    gender: '',
    guardian: '',
    address: '',
    district: '',
    constituency: '',
    mandal: '',
    village: '',
    pledge: false,
    photoUrl: null
  });

  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [otpLoading, setOtpLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [memberId, setMemberId] = useState('');
  const [registrationDate, setRegistrationDate] = useState('');
  
  const fileInputRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    // Clear error
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name] : '' }));
    }
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (uploadEvent) => {
        setFormData(prev => ({ ...prev, photoUrl: uploadEvent.target.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerPhotoUpload = () => {
    fileInputRef.current?.click();
  };

  // Simulating OTP Send
  const sendOTP = () => {
    if (!formData.phone || formData.phone.length < 10) {
      setErrors(prev => ({ ...prev, phone: language === 'en' ? 'Enter a valid 10-digit mobile number' : 'దయచేసి సరైన 10 అంకెల మొబైల్ నంబర్ నమోదు చేయండి' }));
      return;
    }
    setOtpLoading(true);
    setTimeout(() => {
      setOtpLoading(false);
      setOtpSent(true);
      alert(language === 'en' ? 'Demo OTP is: 123456' : 'డెమో OTP: 123456');
    }, 1000);
  };

  // Simulating OTP Verify
  const verifyOTP = () => {
    if (formData.otp === '123456') {
      setOtpVerified(true);
      setErrors(prev => ({ ...prev, otp: '' }));
    } else {
      setErrors(prev => ({ ...prev, otp: language === 'en' ? 'Invalid OTP. Enter 123456' : 'తప్పుడు OTP. 123456 నమోదు చేయండి' }));
    }
  };

  const validateStep1 = () => {
    const err = {};
    if (!formData.name.trim()) err.name = language === 'en' ? 'Name is required' : 'పేరు తప్పనిసరి';
    if (!formData.phone) err.phone = language === 'en' ? 'Phone is required' : 'మొబైల్ నంబర్ తప్పనిసరి';
    if (!otpVerified) err.phone = language === 'en' ? 'Verify OTP first' : 'మొదట OTP ని వెరిఫై చేయండి';
    if (!formData.dob) err.dob = language === 'en' ? 'Date of birth is required' : 'పుట్టిన తేదీ తప్పనిసరి';
    if (!formData.gender) err.gender = language === 'en' ? 'Gender is required' : 'లింగం తప్పనిసరి';
    if (!formData.guardian.trim()) err.guardian = language === 'en' ? 'Guardian name is required' : 'తండ్రి/భర్త పేరు తప్పనిసరి';
    
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const validateStep2 = () => {
    const err = {};
    if (!formData.address.trim()) err.address = language === 'en' ? 'Address is required' : 'చిరునామా తప్పనిసరి';
    if (!formData.district) err.district = language === 'en' ? 'District is required' : 'జిల్లా తప్పనిసరి';
    if (!formData.constituency.trim()) err.constituency = language === 'en' ? 'Constituency is required' : 'నియోజకవర్గం తప్పనిసరి';
    if (!formData.mandal.trim()) err.mandal = language === 'en' ? 'Mandal is required' : 'మండలం తప్పనిసరి';
    if (!formData.village.trim()) err.village = language === 'en' ? 'Village is required' : 'గ్రామం తప్పనిసరి';
    
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const validateStep3 = () => {
    const err = {};
    if (!formData.pledge) err.pledge = language === 'en' ? 'You must accept the pledge to join' : 'చేరడానికి మీరు తప్పనిసరిగా ప్రమాణ స్వీకారాన్ని అంగీకరించాలి';
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const nextStep = () => {
    if (step === 1 && validateStep1()) setStep(2);
    if (step === 2 && validateStep2()) setStep(3);
  };

  const prevStep = () => {
    setStep(prev => prev - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateStep3()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      
      // Generate registration details
      const randomId = 'TJ-' + new Date().getFullYear() + '-' + Math.floor(100000 + Math.random() * 900000);
      const today = new Date().toLocaleDateString(language === 'en' ? 'en-US' : 'te-IN', {
        year: 'numeric', month: 'long', day: 'numeric'
      });
      
      setMemberId(randomId);
      setRegistrationDate(today);
      setStep(4); // Success step
    }, 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  const inputCls = "w-full bg-white border border-gray-200 px-4 py-3 text-sm text-[#1a2a1f] placeholder-gray-400 focus:outline-none focus:border-[#0f5132] focus:ring-1 focus:ring-[#0f5132]/20 transition-all font-medium";
  const labelCls = "text-[10px] font-black uppercase tracking-widest text-[#0f5132] block mb-1.5 font-ui";
  const errorCls = "text-xs text-red-600 mt-1 font-sans";

  return (
    <div className="min-h-screen py-12 sm:py-20 bg-[#f8f7f5] text-[#1a2a1f]">
      <div className="max-w-3xl mx-auto px-5">
        
        {/* Banner Card */}
        <div className="bg-gradient-to-r from-[#0a361e] to-[#0f5132] p-8 text-white text-center border-b-4 border-[#a16207] shadow-lg mb-8" style={{ borderRadius: '2px' }}>
          <Award className="h-10 w-10 text-[#facc15] mx-auto mb-3" />
          <h1 className="text-2xl sm:text-3xl font-display font-black tracking-wide">
            {language === 'en' ? 'Telangana Rakshana Sena Membership Portal' : 'తెలంగాణ రక్షణ సేన సభ్యత్వ నమోదు'}
          </h1>
          <p className="text-xs text-gray-200 mt-2 font-sans tracking-wide">
            {language === 'en' 
              ? 'Join Smt. Kalvakuntla Kavitha in building a progressive and self-respecting Telangana.'
              : 'శ్రీమతి కల్వకుంట్ల కవిత గారితో చేతులు కలిపి సగర్వ తెలంగాణ పునర్నిర్మాణంలో భాగస్వాములు అవ్వండి.'}
          </p>
        </div>

        {/* Stepper (Only show for steps 1-3) */}
        {step < 4 && (
          <div className="flex justify-between items-center mb-10 bg-white p-4 shadow-sm border border-gray-100 rounded-sm">
            {[
              { num: 1, label: language === 'en' ? 'Personal' : 'వ్యక్తిగత వివరాలు', icon: <User className="h-4 w-4" /> },
              { num: 2, label: language === 'en' ? 'Address' : 'చిరునామా', icon: <MapPin className="h-4 w-4" /> },
              { num: 3, label: language === 'en' ? 'Pledge' : 'ప్రమాణం', icon: <CheckSquare className="h-4 w-4" /> }
            ].map((s) => (
              <div key={s.num} className="flex flex-1 items-center last:flex-none">
                <div className="flex flex-col items-center">
                  <div className={`h-8 w-8 rounded-full flex items-center justify-center font-bold text-xs border-2 transition-all ${
                    step === s.num 
                      ? 'bg-[#0f5132] border-[#0f5132] text-white' 
                      : step > s.num 
                        ? 'bg-[#a16207] border-[#a16207] text-white' 
                        : 'bg-white border-gray-200 text-gray-400'
                  }`}>
                    {step > s.num ? <Check className="h-4 w-4" /> : s.icon}
                  </div>
                  <span className="text-[9px] font-black uppercase tracking-wider mt-1 text-gray-500 font-ui hidden sm:inline">
                    {s.label}
                  </span>
                </div>
                {s.num < 3 && (
                  <div className={`flex-1 h-0.5 mx-4 transition-all ${
                    step > s.num ? 'bg-[#a16207]' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
        )}

        {/* Form Container */}
        <div className="bg-white border border-gray-100 shadow-sm p-6 sm:p-10 relative overflow-hidden" style={{ borderRadius: '2px' }}>
          <div className="absolute top-0 left-0 w-1.5 h-full bg-[#0f5132]" />
          
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="pb-4 border-b border-gray-100">
                  <h2 className="text-lg font-black text-[#0a361e] font-display flex items-center gap-2">
                    <User className="h-5 w-5 text-[#a16207]" />
                    {language === 'en' ? 'Step 1: Personal Details' : 'దశ 1: వ్యక్తిగత వివరాలు'}
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label className={labelCls}>{language === 'en' ? 'Full Name (as per ID)' : 'పూర్తి పేరు (ఐడీ కార్డు ప్రకారం)'} *</label>
                    <input 
                      type="text" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleInputChange} 
                      placeholder={language === 'en' ? 'e.g. Suri Kumar' : 'ఉదా: సూర్య కుమార్'} 
                      className={inputCls} 
                    />
                    {errors.name && <p className={errorCls}>{errors.name}</p>}
                  </div>

                  {/* Father/Guardian */}
                  <div>
                    <label className={labelCls}>{language === 'en' ? "Father's / Husband's Name" : 'తండ్రి / భర్త పేరు'} *</label>
                    <input 
                      type="text" 
                      name="guardian" 
                      value={formData.guardian} 
                      onChange={handleInputChange} 
                      placeholder={language === 'en' ? 'Guardian full name' : 'పూర్తి పేరు నమోదు చేయండి'} 
                      className={inputCls} 
                    />
                    {errors.guardian && <p className={errorCls}>{errors.guardian}</p>}
                  </div>

                  {/* Phone & OTP Section */}
                  <div className="sm:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-4 items-end bg-[#f8f7f5] p-4 border border-gray-100">
                    <div className="sm:col-span-2">
                      <label className={labelCls}>{language === 'en' ? 'Mobile Number (WhatsApp Preferred)' : 'మొబైల్ నంబర్ (వాట్సాప్ మొబైల్)'} *</label>
                      <div className="relative">
                        <input 
                          type="tel" 
                          name="phone" 
                          disabled={otpVerified}
                          value={formData.phone} 
                          onChange={handleInputChange} 
                          placeholder="e.g. 9876543210" 
                          className={`${inputCls} pl-10 disabled:bg-gray-100 disabled:text-gray-500`} 
                        />
                        <Phone className="absolute left-3.5 top-3.5 h-4 w-4 text-gray-400" />
                      </div>
                      {errors.phone && <p className={errorCls}>{errors.phone}</p>}
                    </div>

                    <div>
                      {!otpSent && !otpVerified && (
                        <button
                          type="button"
                          onClick={sendOTP}
                          disabled={otpLoading}
                          className="w-full bg-[#0f5132] text-white py-3 text-xs font-black uppercase tracking-wider cursor-pointer hover:bg-[#0a361e] transition-colors"
                        >
                          {otpLoading ? <RefreshCw className="h-4 w-4 animate-spin mx-auto" /> : (language === 'en' ? 'Send OTP' : 'OTP పంపండి')}
                        </button>
                      )}
                      {otpSent && !otpVerified && (
                        <span className="text-xs text-green-700 font-bold block text-center py-2 bg-green-50 border border-green-200">
                          {language === 'en' ? 'OTP Sent to Mobile' : 'OTP మొబైల్‌కు పంపబడింది'}
                        </span>
                      )}
                      {otpVerified && (
                        <span className="text-xs text-[#0f5132] font-black uppercase tracking-widest block text-center py-3 bg-[#e8f5e9] border border-[#0f5132]/20 flex items-center justify-center gap-1.5">
                          <Check className="h-4 w-4 text-[#0f5132]" />
                          {language === 'en' ? 'Verified' : 'వెరిఫై చేయబడింది'}
                        </span>
                      )}
                    </div>

                    {otpSent && !otpVerified && (
                      <div className="sm:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-4 items-end mt-2 pt-2 border-t border-gray-200">
                        <div className="sm:col-span-2">
                          <label className={labelCls}>{language === 'en' ? 'Enter 6-Digit OTP (Use: 123456)' : '6 అంకెల OTP ని నమోదు చేయండి (123456)'} *</label>
                          <input 
                            type="text" 
                            name="otp" 
                            value={formData.otp} 
                            onChange={handleInputChange} 
                            placeholder="Enter 123456" 
                            className={inputCls} 
                          />
                          {errors.otp && <p className={errorCls}>{errors.otp}</p>}
                        </div>
                        <button
                          type="button"
                          onClick={verifyOTP}
                          className="w-full bg-[#a16207] text-white py-3 text-xs font-black uppercase tracking-wider cursor-pointer hover:bg-[#854d0e] transition-colors"
                        >
                          {language === 'en' ? 'Verify OTP' : 'ఓటిపి వెరిఫై'}
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Date of Birth */}
                  <div>
                    <label className={labelCls}>{language === 'en' ? 'Date of Birth' : 'పుట్టిన తేదీ'} *</label>
                    <input 
                      type="date" 
                      name="dob" 
                      value={formData.dob} 
                      onChange={handleInputChange} 
                      className={inputCls} 
                    />
                    {errors.dob && <p className={errorCls}>{errors.dob}</p>}
                  </div>

                  {/* Gender */}
                  <div>
                    <label className={labelCls}>{language === 'en' ? 'Gender' : 'లింగం'} *</label>
                    <select 
                      name="gender" 
                      value={formData.gender} 
                      onChange={handleInputChange} 
                      className={inputCls}
                    >
                      <option value="">{language === 'en' ? '-- Select Gender --' : '-- లింగం ఎంచుకోండి --'}</option>
                      <option value="Male">{language === 'en' ? 'Male' : 'పురుషుడు'}</option>
                      <option value="Female">{language === 'en' ? 'Female' : 'స్త్రీ'}</option>
                      <option value="Other">{language === 'en' ? 'Other' : 'ఇతరులు'}</option>
                    </select>
                    {errors.gender && <p className={errorCls}>{errors.gender}</p>}
                  </div>
                </div>

                <div className="flex justify-end pt-6 border-t border-gray-100">
                  <button 
                    type="button" 
                    onClick={nextStep}
                    className="btn-primary gap-2 text-xs py-3 px-6 cursor-pointer"
                    style={{ borderRadius: '2px' }}
                  >
                    {language === 'en' ? 'Next: Address details' : 'తరువాతి: చిరునామా వివరాలు'}
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="pb-4 border-b border-gray-100">
                  <h2 className="text-lg font-black text-[#0a361e] font-display flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-[#a16207]" />
                    {language === 'en' ? 'Step 2: Address & Constituency' : 'దశ 2: చిరునామా మరియు నియోజకవర్గం'}
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Address */}
                  <div className="sm:col-span-2">
                    <label className={labelCls}>{language === 'en' ? 'Residential Address / Door No.' : 'నివాస చిరునామా / డోర్ నంబర్'} *</label>
                    <input 
                      type="text" 
                      name="address" 
                      value={formData.address} 
                      onChange={handleInputChange} 
                      placeholder={language === 'en' ? 'Flat, Street, Area' : 'ఫ్లాట్ నంబర్, వీధి, గ్రామం'} 
                      className={inputCls} 
                    />
                    {errors.address && <p className={errorCls}>{errors.address}</p>}
                  </div>

                  {/* District */}
                  <div>
                    <label className={labelCls}>{language === 'en' ? 'District' : 'జిల్లా'} *</label>
                    <select 
                      name="district" 
                      value={formData.district} 
                      onChange={handleInputChange} 
                      className={inputCls}
                    >
                      <option value="">{language === 'en' ? '-- Select District --' : '-- జిల్లాను ఎంచుకోండి --'}</option>
                      {DISTRICTS.map((dist) => (
                        <option key={dist} value={dist}>{dist}</option>
                      ))}
                    </select>
                    {errors.district && <p className={errorCls}>{errors.district}</p>}
                  </div>

                  {/* Constituency */}
                  <div>
                    <label className={labelCls}>{language === 'en' ? 'Assembly Constituency' : 'అసెంబ్లీ నియోజకవర్గం'} *</label>
                    <input 
                      type="text" 
                      name="constituency" 
                      value={formData.constituency} 
                      onChange={handleInputChange} 
                      placeholder={language === 'en' ? 'e.g. Siddipet' : 'ఉదా: సిద్దిపేట'} 
                      className={inputCls} 
                    />
                    {errors.constituency && <p className={errorCls}>{errors.constituency}</p>}
                  </div>

                  {/* Mandal */}
                  <div>
                    <label className={labelCls}>{language === 'en' ? 'Mandal' : 'మండలం'} *</label>
                    <input 
                      type="text" 
                      name="mandal" 
                      value={formData.mandal} 
                      onChange={handleInputChange} 
                      placeholder="Mandal name" 
                      className={inputCls} 
                    />
                    {errors.mandal && <p className={errorCls}>{errors.mandal}</p>}
                  </div>

                  {/* Village */}
                  <div>
                    <label className={labelCls}>{language === 'en' ? 'Village / Ward No.' : 'గ్రామం / వార్డు నంబర్'} *</label>
                    <input 
                      type="text" 
                      name="village" 
                      value={formData.village} 
                      onChange={handleInputChange} 
                      placeholder="Village name" 
                      className={inputCls} 
                    />
                    {errors.village && <p className={errorCls}>{errors.village}</p>}
                  </div>
                </div>

                <div className="flex justify-between pt-6 border-t border-gray-100">
                  <button 
                    type="button" 
                    onClick={prevStep}
                    className="btn-secondary gap-2 text-xs py-3 px-6 cursor-pointer border-gray-300"
                    style={{ borderRadius: '2px' }}
                  >
                    <ArrowLeft className="h-4 w-4" />
                    {language === 'en' ? 'Back' : 'వెనుకకు'}
                  </button>
                  <button 
                    type="button" 
                    onClick={nextStep}
                    className="btn-primary gap-2 text-xs py-3 px-6 cursor-pointer"
                    style={{ borderRadius: '2px' }}
                  >
                    {language === 'en' ? 'Next: Review & Pledge' : 'తరువాతి: ప్రమాణ స్వీకారం'}
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="pb-4 border-b border-gray-100">
                  <h2 className="text-lg font-black text-[#0a361e] font-display flex items-center gap-2">
                    <CheckSquare className="h-5 w-5 text-[#a16207]" />
                    {language === 'en' ? 'Step 3: Membership Pledge' : 'దశ 3: తెలంగాణ రక్షణ సేన ప్రమాణ స్వీకారం'}
                  </h2>
                </div>

                {/* Upload Photo (Highly interactive additional item) */}
                <div className="bg-[#f8f7f5] p-5 border border-gray-100 text-center">
                  <label className={labelCls}>{language === 'en' ? 'Upload Membership Card Photo (Optional)' : 'సభ్యత్వ కార్డు ఫోటో అప్‌లోడ్ చేయండి (ఐచ్ఛికం)'}</label>
                  <div className="mt-3 flex flex-col items-center justify-center">
                    {formData.photoUrl ? (
                      <div className="relative">
                        <img 
                          src={formData.photoUrl} 
                          alt="Member preview" 
                          className="h-28 w-28 rounded-full border-4 border-[#0f5132] object-cover shadow-md" 
                        />
                        <button 
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, photoUrl: null }))}
                          className="absolute -top-1 -right-1 bg-red-600 text-white rounded-full p-1 text-[8px] font-black cursor-pointer hover:bg-red-800"
                        >
                          ✕
                        </button>
                      </div>
                    ) : (
                      <button
                        type="button"
                        onClick={triggerPhotoUpload}
                        className="h-28 w-28 rounded-full border-2 border-dashed border-gray-300 flex flex-col items-center justify-center bg-white cursor-pointer hover:border-[#0f5132] hover:bg-[#0f5132]/5 transition-all text-gray-500 hover:text-[#0f5132]"
                      >
                        <Camera className="h-6 w-6 mb-1" />
                        <span className="text-[9px] font-bold uppercase tracking-wider">{language === 'en' ? 'Upload Photo' : 'ఫోటో జోడించండి'}</span>
                      </button>
                    )}
                    <input 
                      type="file" 
                      ref={fileInputRef} 
                      onChange={handlePhotoUpload} 
                      accept="image/*" 
                      className="hidden" 
                    />
                  </div>
                </div>

                {/* Official Pledge Text */}
                <div className="border border-[#a16207]/30 bg-[#fffbeb] p-6 text-sm leading-relaxed text-[#3a2503] italic font-serif">
                  <p className="font-bold text-center mb-3 text-base text-[#a16207]">
                    {language === 'en' ? '— MEMBERSHIP PLEDGE —' : '— సభ్యత్వ ప్రమాణ స్వీకారం —'}
                  </p>
                  {language === 'en' ? (
                    `"I hereby declare that I reside in Telangana, subscribe fully to the core values of Telangana Rakshana Sena, and will actively dedicate my time to the preservation of our cultural heritage, the promotion of youth education and development, and social empowerment programs. I vow to work selflessly towards the creation of a Samajika Telangana (Social Telangana) as envisioned by the founding leadership."`
                  ) : (
                    `"తెలంగాణ రక్షణ సేన యొక్క మూల సిద్ధాంతాలకు కట్టుబడి ఉంటూ, మన సంస్కృతి సంప్రదాయాల పరిరక్షణకు, యువత విద్యా ఉపాధి అవకాశాల సాధనకు, సామాజిక సాధికారతకు నిస్వార్థంగా కృషి చేస్తానని ప్రమాణం చేస్తున్నాను. కల్వకుంట్ల కవిత గారి నాయకత్వంలో సామాజిక తెలంగాణ నిర్మాణానికి నా వంతు బాధ్యతగా పనిచేస్తానని సగర్వంగా ప్రకటిస్తున్నాను."`
                  )}
                </div>

                <div className="flex items-start gap-3 mt-4">
                  <input 
                    type="checkbox" 
                    id="pledge" 
                    name="pledge" 
                    checked={formData.pledge} 
                    onChange={handleInputChange} 
                    className="mt-1 h-4 w-4 border-gray-300 text-[#0f5132] focus:ring-[#0f5132] cursor-pointer"
                  />
                  <label htmlFor="pledge" className="text-xs text-gray-600 cursor-pointer select-none">
                    {language === 'en' 
                      ? 'I agree and solemnly accept the membership pledge of Telangana Rakshana Sena.' 
                      : 'నేను అంగీకరిస్తున్నాను మరియు తెలంగాణ రక్షణ సేన సభ్యత్వ ప్రమాణ స్వీకారాన్ని మనస్ఫూర్తిగా స్వీకరిస్తున్నాను.'} *
                  </label>
                </div>
                {errors.pledge && <p className={errorCls}>{errors.pledge}</p>}

                <div className="flex justify-between pt-6 border-t border-gray-100">
                  <button 
                    type="button" 
                    onClick={prevStep}
                    disabled={isSubmitting}
                    className="btn-secondary gap-2 text-xs py-3 px-6 cursor-pointer border-gray-300 disabled:opacity-50"
                    style={{ borderRadius: '2px' }}
                  >
                    <ArrowLeft className="h-4 w-4" />
                    {language === 'en' ? 'Back' : 'వెనుకకు'}
                  </button>
                  
                  <button 
                    type="button" 
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="btn-primary gap-2 text-xs py-3 px-8 cursor-pointer disabled:bg-gray-400 flex items-center justify-center"
                    style={{ borderRadius: '2px' }}
                  >
                    {isSubmitting ? (
                      <>
                        <RefreshCw className="h-4 w-4 animate-spin" />
                        {language === 'en' ? 'Registering...' : 'నమోదు అవుతోంది...'}
                      </>
                    ) : (
                      <>
                        <ShieldCheck className="h-4 w-4" />
                        {language === 'en' ? 'Complete Registration' : 'నమోదును పూర్తి చేయండి'}
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="space-y-8 text-center"
              >
                <div className="inline-flex h-16 w-16 bg-green-50 border border-green-200 rounded-full items-center justify-center text-green-600 mb-2">
                  <Check className="h-8 w-8 stroke-[3]" />
                </div>
                
                <div>
                  <h2 className="text-2xl font-black text-[#0f5132] font-display">
                    {language === 'en' ? 'Registration Successful!' : 'సభ్యత్వ నమోదు విజయవంతమైంది!'}
                  </h2>
                  <p className="text-xs text-gray-500 mt-2 max-w-md mx-auto">
                    {language === 'en' 
                      ? 'Congratulations! You are now an official registered member of Telangana Rakshana Sena. Your digital membership card is generated below.'
                      : 'అభినందనలు! మీరు ఇప్పుడు తెలంగాణ రక్షణ సేనలో అధికారిక సభ్యులుగా చేరారు. మీ సభ్యత్వ డిజిటల్ కార్డు క్రింద సిద్ధంగా ఉంది.'}
                  </p>
                </div>

                {/* Digital Membership Card design */}
                <div className="max-w-md mx-auto bg-gradient-to-br from-[#0a361e] via-[#0f5132] to-[#14532d] p-6 text-white border-2 border-[#a16207]/40 shadow-2xl relative select-none print:shadow-none print:border-black rounded-lg text-left" id="membership-card">
                  {/* Watermark map background */}
                  <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
                    style={{
                      backgroundImage: "url('/trslogo.jpeg')",
                      backgroundSize: 'contain',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat'
                    }}
                  />

                  {/* Gold border accents */}
                  <div className="absolute inset-2 border border-[#a16207]/20 pointer-events-none" />

                  {/* Card Header */}
                  <div className="flex justify-between items-start pb-4 border-b border-white/10 relative z-10">
                    <div className="flex items-center gap-2.5">
                      <img src="/trslogo.jpeg" alt="TJ Logo" className="h-10 w-10 object-contain bg-white/10 p-0.5 rounded-full" />
                      <div>
                        <p className="text-xs font-black tracking-widest uppercase font-display text-[#facc15]">
                          Telangana Rakshana Sena
                        </p>
                        <p className="text-[7px] text-[#a16207] tracking-[0.2em] font-ui font-bold uppercase">Official Member Card</p>
                      </div>
                    </div>
                    <span className="text-[7px] bg-[#a16207] text-white px-2 py-0.5 font-bold uppercase tracking-wider">ESTD 2006</span>
                  </div>

                  {/* Card Body */}
                  <div className="grid grid-cols-3 gap-4 py-5 relative z-10">
                    {/* User photo */}
                    <div className="col-span-1 flex flex-col justify-center items-center">
                      {formData.photoUrl ? (
                        <img 
                          src={formData.photoUrl} 
                          alt="Member" 
                          className="h-20 w-20 object-cover border-2 border-[#a16207] rounded-sm bg-white/5" 
                        />
                      ) : (
                        <div className="h-20 w-20 border-2 border-dashed border-white/20 bg-white/5 flex items-center justify-center text-white/40">
                          <User className="h-8 w-8" />
                        </div>
                      )}
                      <span className="text-[6px] text-center text-gray-300 font-bold uppercase tracking-wider mt-1 block">ACTIVE MEMBER</span>
                    </div>

                    {/* Member Details */}
                    <div className="col-span-2 space-y-2 text-xs">
                      <div>
                        <p className="text-[7px] text-white/50 uppercase tracking-widest">Name</p>
                        <p className="font-black text-white uppercase font-display leading-tight">{formData.name}</p>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <p className="text-[7px] text-white/50 uppercase tracking-widest">Member ID</p>
                          <p className="font-bold text-[#facc15] font-ui text-[9px]">{memberId}</p>
                        </div>
                        <div>
                          <p className="text-[7px] text-white/50 uppercase tracking-widest">Joining Date</p>
                          <p className="font-bold text-white text-[9px]">{registrationDate}</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <p className="text-[7px] text-white/50 uppercase tracking-widest">District</p>
                          <p className="font-bold text-white font-ui text-[9px]">{formData.district}</p>
                        </div>
                        <div>
                          <p className="text-[7px] text-white/50 uppercase tracking-widest">Constituency</p>
                          <p className="font-bold text-white text-[9px]">{formData.constituency}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card Footer with Signatures */}
                  <div className="flex justify-between items-end pt-3 border-t border-white/10 relative z-10">
                    <div>
                      <p className="text-[6px] text-white/40 uppercase tracking-widest">Verified by</p>
                      <p className="text-[8px] font-black text-white/90 uppercase tracking-wider font-ui mt-0.5">Central IT Cell</p>
                    </div>

                    <div className="text-right flex flex-col items-end">
                      {/* Mock Smt. Kavitha signature SVG */}
                      <svg className="h-6 w-16 text-[#facc15] opacity-80" viewBox="0 0 100 30" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M10 20 C 20 5, 30 25, 40 10 C 50 5, 60 25, 75 15 C 85 10, 90 20, 95 12" />
                        <circle cx="95" cy="12" r="1.5" fill="currentColor" />
                      </svg>
                      <p className="text-[6px] text-white/50 uppercase tracking-widest mt-0.5">K. Kavitha (President)</p>
                    </div>
                  </div>
                </div>

                {/* Print button */}
                <div className="flex justify-center gap-4 pt-4 border-t border-gray-100 print:hidden">
                  <button
                    onClick={() => {
                      setStep(1);
                      setFormData({
                        name: '', phone: '', otp: '', dob: '', gender: '', guardian: '',
                        address: '', district: '', constituency: '', mandal: '', village: '',
                        pledge: false, photoUrl: null
                      });
                      setOtpSent(false);
                      setOtpVerified(false);
                    }}
                    className="btn-secondary gap-2 text-xs py-3 px-6 cursor-pointer border-gray-300"
                    style={{ borderRadius: '2px' }}
                  >
                    {language === 'en' ? 'Register Another Member' : 'మరొక సభ్యత్వం నమోదు'}
                  </button>
                  
                  <button
                    onClick={handlePrint}
                    className="btn-primary gap-2 text-xs py-3 px-6 cursor-pointer"
                    style={{ borderRadius: '2px' }}
                  >
                    <Download className="h-4 w-4" />
                    {language === 'en' ? 'Print Member Card' : 'కార్డు ప్రింట్ చేయండి'}
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default MembershipFormView;
