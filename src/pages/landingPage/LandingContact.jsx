import React, { useState } from 'react';
import { Box, Container, Typography } from "@mui/material";

const LandingContact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Your request has been sent successfully!');
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <div className="bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
       {/* <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 10   } }}>
      

            <Typography
              variant="h2"
              sx={{
                fontWeight: '800',
                mb: 2,
                fontSize: { xs: '1rem', sm: '2rem', md: '2rem' },
                lineHeight: 1.1,
                color: '#0f172a',
                position: 'relative',
                display: 'inline-block',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -10,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '60%',
                  height: '4px',
                   background: 'linear-gradient(90deg, transparent, #0933A6, transparent)',
                  borderRadius: '2px',
                  transition: 'all 0.6s ease',
                },
              }}
            >
               Contact Us
            </Typography>

          
          </Box> */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left Column - Contact Info */}
     <div className="space-y-8 px-4 sm:px-6 lg:px-0">
  {/* Heading */}
  <div>
    <h1 className="text-2xl sm:text-3xl  lg:text-3xl text-black leading-tight mb-4 sm:mb-6">
      Reach Out to My Society Needs
    </h1>
    <p className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed max-w-md sm:max-w-lg">
      Whether you want to manage your society more efficiently, request a service, or have questions about our vendor coordination tools, our team is ready to assist your community.
    </p>
  </div>

  {/* Contact Info */}
  <div className="space-y-5">
    <div>
      <p className="text-gray-600 text-sm sm:text-base mb-1 sm:mb-2">Email:</p>
      <a
        href="mailto:contact@mysocietyneeds.com"
        className="text-lg  text-black hover:text-gray-700 transition-colors no-underline"
      >
        contact@mysocietyneeds.com
      </a>
    </div>

    <div>
      <p className="text-gray-600 text-sm sm:text-base mb-1 sm:mb-2">Phone:</p>
      <a
        href="tel:+919118811192"
        className="text-lg  text-black hover:text-gray-700 transition-colors no-underline"
      >
        +91-9646463534
      </a>
    </div>

    <div>
      <p className="text-gray-600 text-sm sm:text-base mb-1 sm:mb-2">Address:</p>
      <p className="text-black text-base ">
        123 Society Street, Community Plaza, Mumbai, India
      </p>
    </div>
  </div>
</div>


          {/* Right Column - Contact Form */}
          <div className="bg-white rounded-3xl shadow-lg p-6 sm:p-8 lg:p-10">
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Enter your first name"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Enter your last name"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  How can we assist your society?
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your request or issue..."
                  rows="6"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all resize-none"
                />
              </div>

              <div className="flex justify-end">
                <button
                  onClick={handleSubmit}
                  className="bg-black text-white px-8 py-4 rounded-full flex items-center gap-3 hover:bg-gray-800 transition-colors group"
                >
                  <span className="font-medium">Send Message</span>
                  <span className="w-6 h-6 bg-white rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform">
                    <svg
                      className="w-3 h-3 text-black"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingContact;
