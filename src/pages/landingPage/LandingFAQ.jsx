import { useState } from 'react';
import { HelpCircle, CheckCircle, ChevronDown } from 'lucide-react';

const dummyFAQs = [
  { id: 1, question: "What is society management?", answer: "Society management involves organizing and coordinating various aspects of residential communities, including maintenance, security, and vendor services." },
  { id: 2, question: "How does vendor management work?", answer: "Our vendor management system streamlines the process of hiring, tracking, and paying vendors for services in your society." },
  { id: 3, question: "Is the platform secure?", answer: "Yes, we use industry-standard encryption and security protocols to protect your data and transactions." },
  { id: 4, question: "What payment methods are supported?", answer: "We support multiple payment methods including credit cards, debit cards, UPI, and net banking." },
  { id: 5, question: "Can I manage multiple societies?", answer: "Yes, administrators can manage multiple societies from a single dashboard with role-based access control." },
  { id: 6, question: "Is there mobile app support?", answer: "Yes, our platform is fully responsive and we also offer dedicated mobile apps for iOS and Android." },
  { id: 7, question: "How do I get started?", answer: "Simply sign up for an account, complete your society profile, and start adding members and vendors." },
  { id: 8, question: "What support options are available?", answer: "We offer 24/7 customer support via email, phone, and live chat to assist with any issues or questions." }
];

const LandingFAQ = () => {
  const [expandedId, setExpandedId] = useState(null);

  const handleToggleExpand = (id) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  return (
    <div className="relative min-h-screen py-8 md:py-16 px-4 md:px-8 overflow-hidden bg-gradient-to-br from-slate-50 to-slate-200">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(139, 92, 246, 0.08) 0%, transparent 50%)'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-8 md:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 md:mb-6 rounded-full bg-blue-100 text-blue-800  text-xs md:text-sm">
            <HelpCircle className="w-4 h-4" />
            <span>Frequently Asked Questions</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl  mb-3 md:mb-4 bg-gradient-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent leading-tight">
            Got Questions?
            <br />
            We've Got Answers
          </h2>

          <p className="text-slate-600 text-sm md:text-lg max-w-xl mx-auto leading-relaxed">
            Find answers to common questions about our society and vendor management platform
          </p>
        </div>

        {/* FAQ List */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-6 max-w-6xl mx-auto">
          {dummyFAQs.map((faq) => {
            const isExpanded = expandedId === faq.id;

            return (
              <div
                key={faq.id}
                className={`bg-white rounded-xl border transition-all duration-300 overflow-hidden ${
                  isExpanded
                    ? 'border-blue-500 shadow-lg shadow-blue-100'
                    : 'border-slate-200 hover:border-blue-400 hover:shadow-md'
                }`}
              >
                <div
                  onClick={() => handleToggleExpand(faq.id)}
                  className={`flex items-center justify-between cursor-pointer p-4 md:p-6 transition-colors duration-300 ${
                    isExpanded ? 'bg-slate-50' : 'bg-white'
                  }`}
                >
                  <div className="flex items-center gap-3 md:gap-4 flex-1 pr-2">
                    <div
                      className={`flex items-center justify-center w-7 h-7 md:w-8 md:h-8 rounded-lg transition-colors duration-300 ${
                        isExpanded ? 'bg-blue-500' : 'bg-blue-100'
                      }`}
                    >
                      <CheckCircle
                        className={`w-4 h-4 md:w-5 md:h-5 ${
                          isExpanded ? 'text-white' : 'text-blue-500'
                        }`}
                      />
                    </div>

                    <h3
                      className={`text-sm md:text-base  transition-colors duration-300 ${
                        isExpanded ? 'text-blue-600' : 'text-slate-900'
                      }`}
                    >
                      {faq.question}
                    </h3>
                  </div>

                  <div
                    className={`flex items-center justify-center w-8 h-8 md:w-9 md:h-9 rounded-lg transition-all duration-300 ${
                      isExpanded ? 'bg-blue-500' : 'bg-slate-100'
                    }`}
                  >
                    <ChevronDown
                      className={`w-5 h-5 md:w-6 md:h-6 transition-all duration-300 ${
                        isExpanded ? 'rotate-180 text-white' : 'text-slate-600'
                      }`}
                    />
                  </div>
                </div>

                {/* Answer Section */}
                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-4 md:px-6 py-4 md:py-5 bg-slate-50">
                    <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default LandingFAQ;
