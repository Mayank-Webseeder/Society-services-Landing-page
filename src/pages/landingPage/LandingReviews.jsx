import React, { useState, useEffect, useRef } from 'react';
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import dummyReviews from '../../static/dummyData_Reviews';
import { Star as StarIcon, Verified as VerifiedIcon } from '@mui/icons-material';
import { Box, Container, Typography } from "@mui/material";

const LandingReviews = () => {
  const [slidesPerView, setSlidesPerView] = useState(1);
  const [isHovering, setIsHovering] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  // Responsive slides
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    if (windowWidth >= 1280) setSlidesPerView(4);
    else if (windowWidth >= 1024) setSlidesPerView(3);
    else if (windowWidth >= 768) setSlidesPerView(2);
    else setSlidesPerView(1);

    return () => window.removeEventListener('resize', handleResize);
  }, [windowWidth]);

  const displayReviews = windowWidth < 768 ? dummyReviews.slice(0, 6) : dummyReviews.slice(0, 8);

  return (
    <div className="py-8 px-4 sm:px-8 lg:px-20 bg-gray-50 relative">
      
    <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 2 } }}>
      

            {/* Main Title */}
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
              What Our Customer Say
            </Typography>


          
          </Box>
      <div
        className="relative"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={2}
          slidesPerView={slidesPerView}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          loop={true}
        >
          {displayReviews.map((review) => {
            const isMobile = windowWidth < 768;
            const maxLength = isMobile ? 100 : 150;
            const truncatedReview = review.review.length > maxLength
              ? review.review.substring(0, maxLength) + "..."
              : review.review;

            return (
              <SwiperSlide key={review.id}>
                <div className="h-full flex flex-col p-2 sm:p-4">
                  <div className="flex flex-col justify-between h-full p-5 border border-gray-200 rounded-xl shadow hover:shadow-lg transition-transform transform hover:-translate-y-1 bg-white">
                    
                    {/* Stars */}
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon
                          key={i}
                          style={{
                            color: '#fbbf24',
                            fontSize: isMobile ? 16 : 18,
                            filter: 'drop-shadow(0 1px 2px rgba(251, 191, 36, 0.3))'
                          }}
                        />
                      ))}
                      <span className="ml-1 text-gray-500 text-xs">{review.rating}.0</span>
                    </div>

                    {/* Review Text */}
                    <p className="text-gray-600 italic mb-4 text-sm sm:text-base">
                      "{truncatedReview}"
                    </p>

                    {/* Divider */}
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-3"></div>

                    {/* User Info */}
                    <div className="flex items-center gap-3 mt-auto">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center text-white font-semibold shadow">
                        {review.avatar}
                      </div>
                      <div className="flex flex-col min-w-0">
                        <div className="flex items-center gap-1">
                          <h4 className="text-gray-900 font-semibold text-sm sm:text-base truncate">{review.name}</h4>
                          <VerifiedIcon style={{ color: '#3b82f6', fontSize: isMobile ? 16 : 18 }} />
                        </div>
                        {review.position && <span className="text-gray-500 text-xs sm:text-sm truncate">{review.position}</span>}
                        {review.company && <span className="text-gray-400 text-xs sm:text-sm truncate">{review.company}</span>}
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* Navigation buttons */}
        <button
          ref={prevRef}
          className={`z-50 absolute top-1/2 -translate-y-1/2 left-1 sm:left-0 cursor-pointer bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-opacity duration-300 ${isHovering ? 'opacity-100' : 'opacity-0'}`}
        >
          <MdOutlineArrowBackIos size={20} />
        </button>
        <button
          ref={nextRef}
          className={`z-50 absolute top-1/2 -translate-y-1/2 right-1 sm:right-0 cursor-pointer bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-opacity duration-300 ${isHovering ? 'opacity-100' : 'opacity-0'}`}
        >
          <MdOutlineArrowForwardIos size={20} />
        </button>

        {/* Pagination */}
        <div className="swiper-pagination flex justify-center mt-6 space-x-2"></div>
      </div>
    </div>
  );
};

export default LandingReviews;
