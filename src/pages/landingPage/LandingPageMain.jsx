import { useRef } from 'react';
import LandingNavbar from './LandingNavbar';
import LandingIntro from './LandingIntro';
import LandingAboutUs from './LandingAboutUs';
import LandingHero from './LandingHero';
import LandingReviews from './LandingReviews';
import LandingFAQ from './LandingFAQ';
import LandingContact from './LandingContact';
import LandingFooter from './LandingFooter';
import { Box } from '@mui/material';


const LandingPageMain = () => {

  // Only create refs here, do not render the sections directly
  const servicesRef = useRef(null);
  const howItWorksRef = useRef(null);
  const testimonialsRef = useRef(null);
  const faqsRef = useRef(null);
  const contactRef = useRef(null);


  return (
    <Box>
      <LandingNavbar
        refs={{
          servicesRef,
          howItWorksRef,
          testimonialsRef,
          faqsRef,
          contactRef,
        }}
      />

      <LandingIntro />
      
      <LandingAboutUs />
      
      <LandingHero
        servicesRef={servicesRef}
        howItWorksRef={howItWorksRef}
      />
      
      <div ref={testimonialsRef}>
        <LandingReviews />
      </div>
      
      <div ref={contactRef}>
        <LandingContact />
      </div>

      <div ref={faqsRef}>
        <LandingFAQ />
      </div>
      
      <LandingFooter />
    </Box>
  );
};

export default LandingPageMain;
