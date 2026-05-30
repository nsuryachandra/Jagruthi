import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Search, Landmark, ShieldCheck, HelpCircle } from 'lucide-react';

const OrganizationalWings = () => {
  const { language } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');

  const wings = [
    { id: 'w1', en: 'BC Rakshana Sena', te: 'బీసీ రక్షణ సేన', type: 'social', desc: { en: 'Empowering Backward Classes through social advocacy and skill resources.', te: 'సామాజిక చైతన్యం మరియు నైపుణ్య శిక్షణ ద్వారా బీసీ వర్గాల సాధికారత.' } },
    { id: 'w2', en: 'MBC Rakshana Sena', te: 'ఎంబీసీ రక్షణ సేన', type: 'social', desc: { en: 'Advocating for developmental grants and resource rights for Most Backward Classes.', te: 'అత్యంత వెనుకబడిన వర్గాల అభివృద్ధి మరియు వనరుల హక్కుల కోసం పోరాటం.' } },
    { id: 'w3', en: 'Muslim Rakshana Sena', te: 'ముస్లిం రక్షణ సేన', type: 'minority', desc: { en: 'Supporting education, legal aid, and socio-economic growth for Muslim communities.', te: 'ముస్లిం మైనారిటీల విద్య, ఉపాధి మరియు సామాజిక-ఆర్థిక ప్రగతికి మద్దతు.' } },
    { id: 'w4', en: 'Student Rakshana Sena', te: 'విద్యార్థి రక్షణ సేన', type: 'youth', desc: { en: 'Leading educational campaigns, scholarship drives, and student rights awareness.', te: 'విద్యార్థి హక్కులు, ఉపకార వేతనాలు మరియు విద్యా సంస్కరణలపై పోరాటాలు.' } },
    { id: 'w5', en: 'Singareni Rakshana Sena', te: 'సింగరేణి రక్షణ సేన', type: 'labour', desc: { en: 'Representing coal mine workers of Singareni Collieries and supporting families.', te: 'సింగరేణి బొగ్గు గని కార్మికుల హక్కుల రక్షణ మరియు కుటుంబాల సంక్షేమం.' } },
    { id: 'w6', en: 'Disabled Rakshana Sena', te: 'వికలాంగ రక్షణ సేన', type: 'social', desc: { en: 'Advocating for accessible infrastructure, medical aids, and employment quotas.', te: 'దివ్యాంగుల హక్కులు, ఉచిత వైద్య సహాయం మరియు ఉద్యోగ అవకాశాల సాధన.' } },
    { id: 'w7', en: 'Farmer Rakshana Sena', te: 'రైతు రక్షణ సేన', type: 'labour', desc: { en: 'Standing for crop insurance, fair procurement prices, and sustainable cultivation.', te: 'పంట భీమా, మద్దతు ధర మరియు వ్యవసాయ కుటుంబాల అభివృద్ధికి అండగా.' } },
    { id: 'w8', en: 'Health Rakshana Sena', te: 'ఆరోగ్య రక్షణ సేన', type: 'professional', desc: { en: 'Organising free diagnostic medical camps and emergency relief networks.', te: 'ఉచిత వైద్య శిబిరాలు, రక్తదాన నిరంతర సేవల నిర్వహణ.' } },
    { id: 'w9', en: 'Merchant Rakshana Sena', te: 'వర్తక రక్షణ సేన', type: 'professional', desc: { en: 'Protecting the interests of small scale traders, shop owners, and street vendors.', te: 'చిరు వ్యాపారులు మరియు వర్తక రంగానికి సంబంధించిన సమస్యల పరిష్కారం.' } },
    { id: 'w10', en: 'Intellectual Rakshana Sena', te: 'మేధా రక్షణ సేన', type: 'professional', desc: { en: 'Conforming seminars, policy analysis, and debates on state development models.', te: 'రాష్ట్ర అభివృద్ధి నమూనాలపై మేధావులతో సదస్సులు మరియు చర్చల నిర్వహణ.' } },
    { id: 'w11', en: 'Auto Rakshana Sena', te: 'ఆటో రక్షణ సేన', type: 'labour', desc: { en: 'Representing auto-rickshaw and transit drivers for fair welfare policies.', te: 'ఆటో కార్మికుల సమస్యలు, బీమా మరియు సంక్షేమ పథకాల సాధన.' } },
    { id: 'w12', en: 'Labour Rakshana Sena', te: 'కార్మిక రక్షణ సేన', type: 'labour', desc: { en: 'Standing up for unorganized sector labourers, ensuring safe workplace standards.', te: 'అసంఘటిత రంగ కార్మికుల హక్కులు మరియు కనీస వేతనాల రక్షణ.' } },
    { id: 'w13', en: 'IT Rakshana Sena', te: 'ఐటీ రక్షణ సేన', type: 'professional', desc: { en: 'Guiding IT professionals, career counselling, and supporting local tech hubs.', te: 'సాఫ్ట్‌వేర్ మరియు ఐటీ రంగ నిపుణుల మార్గదర్శకత్వం మరియు ఉపాధి శిక్షణ.' } },
    { id: 'w14', en: 'Dalit Rakshana Sena', te: 'దళిత రక్షణ సేన', type: 'social', desc: { en: 'Fighting against discrimination and advocating for SC welfare programs.', te: 'దళిత హక్కుల రక్షణ, విద్య మరియు సంక్షేమ పథకాల అవగాహన కార్యక్రమాలు.' } },
    { id: 'w15', en: 'Adivasi Rakshana Sena', te: 'ఆదివాసీ రక్షణ సేన', type: 'social', desc: { en: 'Protecting tribal culture, forest rights, and indigenous land ownership.', te: 'గిరిజన సంస్కృతి రక్షణ, అడవి హక్కులు మరియు పోడు భూముల సమస్యలపై పోరాటం.' } },
    { id: 'w16', en: 'Banjara Rakshana Sena', te: 'బంజారా రక్షణ సేన', type: 'social', desc: { en: 'Reviving Banjara traditions, language, and cultural festivities.', te: 'బంజారా/లంబాడీ ల ప్రత్యేక సంస్కృతి, తీజ్ పండుగ మరియు హక్కుల సాధన.' } },
    { id: 'w17', en: 'Mahiya Rakshana Sena', te: 'మహిళా రక్షణ సేన', type: 'social', desc: { en: 'Empowering women through micro-finance resources and vocational centers.', te: 'మహిళల ఆర్థిక స్వావలంబన, రక్షణ మరియు స్వయం ఉపాధి శిక్షణా కేంద్రాలు.' } },
    { id: 'w18', en: 'Literary Rakshana Sena', te: 'సాహిత్య రక్షణ సేన', type: 'professional', desc: { en: 'Promoting Telangana literature, folk songs, and local historical poets.', te: 'తెలంగాణ జానపద కళలు, కవిత్వం మరియు స్థానిక భాషా సంరక్షణ.' } },
    { id: 'w19', en: 'Youth Rakshana Sena', te: 'యువ రక్షణ సేన', type: 'youth', desc: { en: 'Engaging youth in sports tournaments and statewide community development campaigns.', te: 'యువతను క్రీడలలో ప్రోత్సహించడం మరియు సామాజిక బాధ్యతలపై శిక్షణ.' } },
    { id: 'w20', en: 'Legal TRS', te: 'న్యాయ రక్షణ సేన', type: 'professional', desc: { en: 'Providing free legal aid cells for poor families and labor disputes.', te: 'పేదలకు ఉచిత న్యాయ సహాయం అందించడం మరియు ఉచిత న్యాయ సలహా కేంద్రాలు.' } },
    { id: 'w21', en: 'Christian Rakshana Sena', te: 'క్రిస్టియన్ రక్షణ సేన', type: 'minority', desc: { en: 'Addressing developmental concerns and educational support for Christian minorites.', te: 'క్రిస్టియన్ మైనారిటీల సంక్షేమం మరియు విద్యా వికాస కార్యక్రమాలు.' } },
    { id: 'w22', en: 'Sikh Rakshana Sena', te: 'సిఖ్ రక్షణ సేన', type: 'minority', desc: { en: 'Connecting and representing the unique Sikh community within Telangana.', te: 'తెలంగాణలో నివసిస్తున్న సిఖ్ సోదరుల హక్కులు మరియు సంక్షేమ రక్షణ.' } }
  ];

  const filteredWings = wings.filter(w =>
    w.en.toLowerCase().includes(searchTerm.toLowerCase()) ||
    w.te.toLowerCase().includes(searchTerm.toLowerCase()) ||
    w.desc[language].toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="wings" className="py-20 sm:py-28 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-14">
          <div className="section-eyebrow bg-[#0f5132]/5 text-[#0f5132] inline-flex items-center gap-1.5">
            <Users className="h-3.5 w-3.5 text-[#0f5132]" />
            <span>{language === 'en' ? 'Our Structure' : 'విభాగాలు'}</span>
          </div>
          <h2 className="section-title text-[#0a361e] font-display font-black uppercase tracking-tight">
            {language === 'en' ? '22 Specialized Wings' : 'టీఆర్ఎస్: తెలంగాణ రక్షణ సేన 22 విభాగాలు'}
          </h2>
          <div className="h-1 w-14 bg-[#a16207]" />
        </div>

        {/* Search Control */}
        <div className="max-w-md mx-auto mb-12">
          <div className="relative flex items-center bg-[#f8f7f5] border border-gray-200" style={{ borderRadius: '2px' }}>
            <span className="pl-4 text-gray-400">
              <Search className="h-4 w-4" />
            </span>
            <input
              type="text"
              placeholder={language === 'en' ? 'Search wings (e.g. BC, Student, Farmer)...' : 'విభాగాల కోసం శోధించండి...'}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-3 py-3 text-xs bg-transparent border-0 outline-none text-[#0a361e] placeholder-gray-400 font-sans"
            />
          </div>
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          <AnimatePresence>
            {filteredWings.map((w) => (
              <motion.div
                layout
                key={w.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="bg-white border border-gray-200 p-5 hover:border-[#0f5132]/50 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                style={{ borderRadius: '2px' }}
              >
                <div>
                  {/* Badge & Label */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[8px] font-black uppercase tracking-widest text-[#a16207] bg-[#a16207]/5 px-2 py-0.5" style={{ borderRadius: '1px' }}>
                      {w.type}
                    </span>
                    <Landmark className="h-3.5 w-3.5 text-[#0f5132]/30" />
                  </div>
                  {/* Name */}
                  <h3 className="font-ui font-black text-sm uppercase tracking-wider text-[#0a361e] leading-tight">
                    {w.te}
                  </h3>
                  <p className="text-[10px] text-gray-400 font-medium mt-0.5">
                    {w.en}
                  </p>
                  {/* Description */}
                  <p className="text-xs text-gray-500 leading-relaxed mt-3 font-sans">
                    {w.desc[language]}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-[8px] font-black uppercase tracking-widest text-[#0f5132] font-ui">
                  <span>TRS: Telangana Rakshana Sena</span>
                  <span>Active</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredWings.length === 0 && (
          <div className="text-center py-20 bg-[#f8f7f5] border border-gray-200" style={{ borderRadius: '2px' }}>
            <HelpCircle className="h-10 w-10 text-gray-300 mx-auto mb-4" />
            <h3 className="text-base font-black text-gray-500 font-display">
              {language === 'en' ? 'No specialized wings found' : 'ఎటువంటి విభాగాలు లభించలేదు'}
            </h3>
          </div>
        )}

      </div>
    </section>
  );
};

export default OrganizationalWings;
