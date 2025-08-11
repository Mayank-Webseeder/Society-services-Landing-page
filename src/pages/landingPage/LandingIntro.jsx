import { useNavigate } from 'react-router-dom';
import { Box, Container, Typography, Button, Grid, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import {
  HomeWork as HomeIcon,
  Build as MaintenanceIcon,
  Security as SecurityIcon,
  Assignment as VendorIcon,
  TrendingDown as PricingIcon,
  Emergency as EmergencyIcon,
  Reviews as ReviewsIcon,
  EmojiEvents as EmojiEventsIcon,
  Insights as InsightsIcon
} from '@mui/icons-material';

// Motion variants for reuse
const fadeSlide = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut', delay } }
});

const staggerParent = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } }
};

const cardVariant = {
  hidden: { opacity: 0, scale: 0.9, y: 32 },
  show: (i = 0) => ({ opacity: 1, scale: 1, y: 0, transition: { duration: 0.55, delay: 0.3 + i * 0.08 } })
};

const serviceCards = [
  { title: 'Home Upkeep', icon: <HomeIcon />, color: '#0ea5e9' },
  { title: 'Smart Security', icon: <SecurityIcon />, color: '#6366f1' },
  { title: 'Rapid Repairs', icon: <MaintenanceIcon />, color: '#14b8a6' },
  { title: 'Vendor Control', icon: <VendorIcon />, color: '#f59e0b' },
  { title: 'Pricing Drops', icon: <PricingIcon />, color: '#dc2626' },
  { title: '24/7 Emergency', icon: <EmergencyIcon />, color: '#f97316' },
];

const featureBullets = [
  { label: 'Unified Requests', icon: <InsightsIcon fontSize="inherit" /> },
  { label: 'Transparent Pricing', icon: <PricingIcon fontSize="inherit" /> },
  { label: 'Verified Vendors', icon: <VendorIcon fontSize="inherit" /> },
  { label: 'Incident Escalation', icon: <EmergencyIcon fontSize="inherit" /> },
];

const LandingIntro = () => {
  const navigate = useNavigate();

  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: { xs: 'auto', md: '80vh' },
        display: 'flex',
        alignItems: 'center',
        py: { xs: 6, md: 6 },
        background: 'linear-gradient(135deg,#f8fafc 0%,#ffffff 55%,#eef2f7 100%)'
      }}
    >
      {/* Soft ambient shapes */}
      <Box sx={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <Box sx={{
          position: 'absolute', top: '-140px', left: '-120px',
          width: 420, height: 420,
          background: 'linear-gradient(135deg,#bae6fd,#e0f2fe)',
          opacity: 0.5, filter: 'blur(90px)', borderRadius: '50%'
        }} />
        <Box sx={{
          position: 'absolute', bottom: '-160px', right: '-140px',
          width: 480, height: 480,
          background: 'linear-gradient(135deg,#e9d5ff,#ddd6fe)',
          opacity: 0.55, filter: 'blur(100px)', borderRadius: '50%'
        }} />
        <Box sx={{
          position: 'absolute', top: '20%', right: '15%',
          width: 180, height: 180, borderRadius: '50%',
          background: 'linear-gradient(135deg,#fde68a,#fff7ed)',
          opacity: 0.35, filter: 'blur(50px)'
        }} />
      </Box>

      {/* Light pattern overlay */}
      <Box sx={{
        position: 'absolute', inset: 0,
        backgroundImage: 'repeating-linear-gradient(60deg, rgba(15,23,42,0.06) 0px, rgba(15,23,42,0.06) 1px, transparent 1px, transparent 10px)',
        opacity: 0.25,
        mixBlendMode: 'multiply'
      }} />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Box sx={{ maxWidth: 960, mx: 'auto' }}>
          <motion.div variants={staggerParent} initial="hidden" animate="show" style={{ textAlign: 'center' }}>

            {/* Heading */}
            <motion.div variants={fadeSlide(0.1)}>
              <Typography
                component="h1"
                sx={{
                  fontSize: { xs: '2.5rem', sm: '3.2rem', md: '3.8rem', lg: '4.2rem' },
                  fontWeight: 900,
                  lineHeight: 1.08,
                  color: 'transparent',
                  background: 'linear-gradient(90deg, #1e293b 0%, #3b82f6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  letterSpacing: '-0.01em',
                  mb: { xs: 1, sm: 1.5 },
                  textAlign: 'center',
                  fontFamily: 'Inter, Roboto, sans-serif',
                  textTransform: 'none',
                }}
              >
                VELRA
              </Typography>
            </motion.div>
            <motion.div variants={fadeSlide(0.18)}>
              <Typography
                component="h1"
                sx={{
                  fontSize: { xs: '1.8rem', sm: '2.8rem', md: '3.2rem', lg: '3.5rem' },
                  fontWeight: 800,
                  lineHeight: 1.2,
                  letterSpacing: '-0.02em',
                  background: 'linear-gradient(90deg, #0ea5e9 0%, #6366f1 50%, #0f172a 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  mb: { xs: 1.5, sm: 2.5 },
                }}
              >
                A Single Operating Platform for<br /> Your Community Services
              </Typography>
            </motion.div>

            {/* Subheading */}
            <motion.div variants={fadeSlide(0.18)}>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '0.9rem', sm: '1rem', md: '1.05rem' },
                  lineHeight: 1.75,
                  color: '#475569',
                  maxWidth: { xs: 320, sm: 720 },
                  mx: 'auto',
                  // border: '2px solid red',
                  mb: { xs: 4, sm: 7 },
                }}
              >
                {/* Shorter text for mobile screens */}
                <span className="hidden sm:inline">
                  Velra consolidates maintenance, safety, procurement and resident workflows—delivering clearer accountability, faster resolution times and measurable cost efficiency.
                </span>
                <span className="sm:hidden">
                  Velra simplifies community management with unified workflows and measurable efficiency.
                </span>
              </Typography>
            </motion.div>


            {/* Feature bullets (Tailwind CSS grid layout) */}
            <motion.div variants={fadeSlide(0.26)}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5 mb-12 max-w-[90%] lg:max-w-4xl mx-auto">
                {featureBullets.map((f, i) => (
                  <div
                    key={f.label}
                    className="relative flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 via-white to-blue-50 hover:bg-gradient-to-r hover:from-blue-100 hover:via-indigo-50 hover:to-blue-200 border-solid border border-gray-100 rounded-lg shadow-sm transition-all duration-700 overflow-hidden group"
                  >
                    <div className="text-blue-500 text-2xl flex flex-shrink-0">
                      {f.icon}
                    </div>
                    <p className="text-gray-800 font-medium text-sm md:text-base">
                      {f.label}
                    </p>
                    {/* Left border animation */}
                    <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-blue-400 via-blue-500 to-blue-600 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* CTA buttons */}
            <motion.div variants={fadeSlide(0.34)}>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center" alignItems='center' sx={{ mb: { xs: 5, sm: 8, lg: 10 } }}>
                <Button
                  onClick={() => navigate('/auth')}
                  size="large"
                  sx={{
                    width: { xs:'90%', sm: 'fit-content' },
                    background: 'linear-gradient(135deg,#0ea5e9 0%,#6366f1 70%)',
                    color: '#fff',
                    px: 5,
                    py: 1.8,
                    borderRadius: '14px',
                    fontWeight: 600,
                    textTransform: 'none',
                    letterSpacing: 0.4,
                    fontSize: '0.95rem',
                    boxShadow: '0 6px 22px -4px rgba(14,165,233,0.45)',
                    '&:hover': { background: 'linear-gradient(135deg,#0284c7 0%,#4f46e5 70%)' }
                  }}
                >
                  Launch Platform
                </Button>
                <Button
                  onClick={() => navigate('/contact')}
                  size="large"
                  sx={{
                    width: { xs: '90%', sm: 'fit-content' },
                    background: 'rgba(14,165,233,0.08)',
                    color: '#0f172a',
                    px: 5,
                    py: 1.8,
                    borderRadius: '14px',
                    fontWeight: 500,
                    textTransform: 'none',
                    fontSize: '0.95rem',
                    border: '1px solid rgba(14,165,233,0.25)',
                    '&:hover': { background: 'rgba(14,165,233,0.15)' }
                  }}
                >
                  Talk to Team
                </Button>
              </Stack>
            </motion.div>
          </motion.div>

          {/* Stats Bar */}
          <motion.div variants={fadeSlide(0.05)} className='hidden sm:block'>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: { xs: 2, md: 4 },
                mb: 4,
                flexWrap: 'wrap',
              }}
            >
              {/*
                { label: '10K+ Residents', icon: <InsightsIcon sx={{ fontSize: 24, color: '#0ea5e9' }} /> },
                { label: '2.5K Reviews', icon: <AwardIcon sx={{ fontSize: 24, color: '#6366f1' }} /> },
                { label: 'Award 2025', icon: <EmojiEventsIcon sx={{ fontSize: 24, color: '#f59e0b' }} /> },
              */}
              { [
                { label: '10K+ Residents', icon: <InsightsIcon sx={{ fontSize: 24, color: '#0ea5e9' }} /> },
                { label: '2.5K Reviews', icon: <ReviewsIcon sx={{ fontSize: 24, color: '#6366f1' }} /> },
                { label: 'Award 2025', icon: <EmojiEventsIcon sx={{ fontSize: 24, color: '#f59e0b' }} /> },
              ].map((stat, index) => (
                <Box
                  key={index}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    px: 2,
                    py: 1,
                    background: 'rgba(255, 255, 255, 0.8)',
                    borderRadius: '12px',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  {stat.icon}
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: '0.9rem',
                      color: '#1e293b',
                    }}
                  >
                    {stat.label}
                  </Typography>
                </Box>
              ))}
            </Box>
          </motion.div>

          {/* Service Cards Mosaic (centered) */}
          <Box sx={{ position: 'relative', mx: 'auto', maxWidth: { xs: 400, sm: 600, md: 700, lg: 1000 } }}>
            <Grid container spacing={2.2} justifyContent="center">
              {serviceCards.map((c, i) => (
                <Grid
                  key={c.title}
                  item
                  xs={4} // 3 columns for extra small screens
                  sm={4}
                  md={4}
                  sx={{
                    display: 'flex',
                    justifyContent: { xs: 'center', sm: 'flex-start' },
                    textAlign: { xs: 'center', sm: 'left' },
                  }}
                >
                  <motion.div custom={i} variants={cardVariant} initial="hidden" animate="show" whileHover={{ y: -6 }}>
                    <Box
                      sx={{
                        position: 'relative',
                        p: { xs: 1.5, sm: 2.1 }, // Smaller padding for xs screens
                        background: 'linear-gradient(145deg, rgba(255,255,255,0.95), rgba(255,255,255,0.75))',
                        border: '1px solid rgba(15,23,42,0.08)',
                        borderRadius: { xs: '12px', sm: '18px' }, // Smaller border radius for xs screens
                        minHeight: { xs: 100, sm: 130 }, // Smaller height for xs screens
                        height: { xs: 100, sm: 130 }, // Fixed smaller height for xs screens
                        minWidth: { xs: 100, sm: 140 }, // Smaller width for xs screens
                        width: { xs: 100, sm: 140 }, // Fixed smaller width for xs screens
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: { xs: 'center', sm: 'flex-start' }, // Center icon and text for xs screens
                        justifyContent: { xs: 'center', sm: 'space-between' },
                        overflow: 'hidden',
                        transition: 'all .4s cubic-bezier(.4,0,.2,1)',
                        boxShadow: '0 4px 18px -2px rgba(0,0,0,0.08)',
                        '&:hover': {
                          boxShadow: '0 8px 26px -4px rgba(0,0,0,0.14)',
                          borderColor: c.color + '55',
                          cursor: 'pointer',
                        },
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          background: `linear-gradient(140deg, ${c.color}18, transparent 65%)`,
                          opacity: 0,
                          transition: 'opacity .5s',
                        },
                        '&:hover::after': { opacity: 1 },
                      }}>
                        <Box
                          sx={{
                            width: { xs: 30, sm: 40 }, // Smaller icon size for xs screens
                            height: { xs: 30, sm: 40 }, // Smaller icon size for xs screens
                            borderRadius: '10px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            background: `linear-gradient(135deg, ${c.color}25, ${c.color}08)`,
                            color: c.color,
                            mb: 1,
                            boxShadow: `0 0 0 1px ${c.color}40, inset 0 0 0 1px ${c.color}25`,
                          }}
                        >
                          {c.icon}
                        </Box>
                        <Typography
                          sx={{
                            fontWeight: 600,
                            fontSize: { xs: '0.75rem', sm: '0.9rem' }, // Smaller font size for xs screens
                            letterSpacing: 0.3,
                            color: '#0f172a',
                          }}
                        >
                          {c.title}
                        </Typography>
                      </Box>
                    </motion.div>
                  </Grid>
                ))}
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default LandingIntro;