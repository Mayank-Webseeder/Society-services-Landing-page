import { Box } from '@mui/material';
import LandingNavbar from './LandingNavbar';
import LandingIntro from './LandingIntro';
import LandingAboutUs from './LandingAboutUs';
import LandingHero from './LandingHero';
import LandingReviews from './LandingReviews';
import LandingContact from './LandingContact';
import LandingFAQ from './LandingFAQ';
import LandingFooter from './LandingFooter';


const LandingPageMain = () => {
  
  return (
    <Box>
      <LandingNavbar />
      <LandingIntro />
      <LandingAboutUs />
      <LandingHero />
      <LandingReviews />
      <LandingContact />
      <LandingFAQ />
      <LandingFooter />
    </Box>
  );
};

export default LandingPageMain;
