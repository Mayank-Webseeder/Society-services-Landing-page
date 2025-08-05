import { Box } from '@mui/material';
import ServicesShowcase from './ServicesShowcase';
import PlatformFeatures from './PlatformFeatures';


const LandingHero = ({ servicesRef, howItWorksRef }) => {
  
  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
        pb: 7
      }}
    >
      {/* Services Showcase Section */}
      <div ref={servicesRef}>
        <ServicesShowcase />
      </div>

      {/* Add spacing between the two components */}
      <Box sx={{ height: 48 }} />

      {/* Platform Features Section (will handle howItWorksRef inside) */}
      <PlatformFeatures howItWorksRef={howItWorksRef} />
    </Box>
  );
};

export default LandingHero;
