import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import dummyOffers from '../../static/dummyData_ServicesOffered';

const serviceCategories = {
  'All Services': { services: dummyOffers, color: '#0933A6', icon: '🎯' },
  'Cleaning': { 
    services: dummyOffers.filter(service => 
      service.label.includes('Cleaning') || 
      service.label.includes('Housekeeping') || 
      service.label.includes('Pest Control')
    ), 
    color: '#49CBD8', icon: '✨'
  },
  'Maintenance': { 
    services: dummyOffers.filter(service => 
      service.label.includes('Maintenance') || 
      service.label.includes('Repairs') || 
      service.label.includes('Plumbing') || 
      service.label.includes('Electrical') || 
      service.label.includes('AC') || 
      service.label.includes('Carpentry') || 
      service.label.includes('Painting')
    ), 
    color: '#FA930E', icon: '🔧'
  },
  'Security': { 
    services: dummyOffers.filter(service => 
      service.label.includes('Security') || 
      service.label.includes('CCTV') || 
      service.label.includes('Fire Safety') || 
      service.label.includes('Visitor')
    ), 
    color: '#0933A6', icon: '🛡️'
  },
  'Management': { 
    services: dummyOffers.filter(service => 
      service.label.includes('Management') || 
      service.label.includes('Administration') || 
      service.label.includes('Event')
    ), 
    color: '#49CBD8', icon: '📊'
  },
};

const ServicesShowcase = ({ refs }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);

  const tabLabels = Object.keys(serviceCategories);
  const currentCategory = serviceCategories[tabLabels[selectedTab]];
  const currentServices = currentCategory.services;
  const currentColor = currentCategory.color;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05, delayChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 12 } },
  };

  const scrollToSection = (ref) => {
    if(ref && ref.current) ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative py-16 bg-gradient-to-b from-white via-gray-100 to-gray-200 overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full" style={{ background: `${currentColor}15` }} />
      <div className="absolute -bottom-36 -left-36 w-[500px] h-[500px] rounded-full bg-purple-100 opacity-20" />

      <div className="container mx-auto relative z-10 px-4 md:px-6">
        {/* Header */}
        <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.8 }}>
          <div className="text-center mb-16">
            <h2 className="font-extrabold text-3xl sm:text-4xl md:text-5xl text-gray-900 relative inline-block mb-4">
              Our Premium Services
              <span className="absolute bottom-[-4px] left-1/2 w-2/3 h-1 rounded" style={{ background: `linear-gradient(to right, transparent, ${currentColor}, transparent)` }} />
            </h2>
            <p className="text-gray-500 text-base md:text-lg max-w-xl mx-auto">
              Comprehensive solutions designed to elevate your community living experience
            </p>
          </div>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {tabLabels.map((label,index)=>{
            const category = serviceCategories[label];
            const isActive = selectedTab === index;
            return (
              <button
                key={label}
                onClick={()=>setSelectedTab(index)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl font-bold border transition-all duration-300 ${
                  isActive
                  ? `bg-gradient-to-r from-[${category.color}] to-[${category.color}dd] text-white border-[${category.color}] shadow-lg`
                  : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-100'
                }`}
              >
                <span>{category.icon}</span>
                <span>{label}</span>
                <span className="ml-1 px-2 py-0.5 text-xs rounded bg-white/20">{category.services.length}</span>
              </button>
            )
          })}
        </div>

        {/* Services Grid */}
        <AnimatePresence mode="wait">
          <motion.div key={selectedTab} variants={containerVariants} initial="hidden" animate="visible" exit={{ opacity:0, scale:0.95 }}>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
              {currentServices.slice(0,12).map((service,index)=>(
                <motion.div key={service.value} variants={itemVariants} onHoverStart={()=>setHoveredCard(index)} onHoverEnd={()=>setHoveredCard(null)}>
                  <div className={`flex flex-col justify-between rounded-2xl cursor-pointer overflow-hidden transition-all duration-300 p-4 ${hoveredCard===index ? `shadow-[0_20px_40px_${currentColor}25] -translate-y-2` : 'shadow-md'}`}>
                    <div className="h-1 w-full mb-2" style={{ background: `linear-gradient(90deg, ${currentColor}, ${currentColor}80)` }} />
                    <h3 className="font-bold text-gray-900 text-sm md:text-base">{service.label}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <div className="text-center py-10 px-6 md:px-12 rounded-3xl border-2 border-dashed" style={{ borderColor:`${currentColor}40`, background:`linear-gradient(135deg, ${currentColor}10 0%, ${currentColor}05 100%)` }}>
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Ready to Transform Your Community?</h3>
          <p className="text-gray-500 text-sm md:text-base mb-4 max-w-lg mx-auto">
            Let's discuss how our services can meet your specific needs
          </p>
          <button 
            onClick={()=>scrollToSection(refs?.contactRef)}
            className="px-6 md:px-12 py-2 md:py-3 rounded-full font-bold text-white" style={{ background: `linear-gradient(135deg, ${currentColor} 0%, ${currentColor}dd 100%)`, boxShadow:`0 8px 24px ${currentColor}40` }}
          >
            Get Started Today
          </button>
        </div>

      </div>
    </div>
  )
}

export default ServicesShowcase;
