import { Box, Container, Typography, Link, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import FavoriteIcon from '@mui/icons-material/Favorite';


const quickLinks = [
  { label: 'Home', href: '#' },
  { label: 'How we work', href: '#' },
  { label: 'Request Demo', href: '#' },
  { label: 'Contact', href: '#' },
];

const resources = [
  { label: 'Blog', href: '#' },
  { label: 'FAQs', href: '#' },
  { label: 'Case Studies', href: '#' },
  { label: 'Help Center', href: '#' },
];

const legalLinks = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms & Conditions', href: '#' },
];

const socialLinks = [
  { icon: LinkedInIcon, color: '#0077b5', hoverColor: '#005582' },
  { icon: FacebookIcon, color: '#1877f2', hoverColor: '#166fe5' },
  { icon: TwitterIcon, color: '#1da1f2', hoverColor: '#0d8bd9' },
  { icon: EmailIcon, color: '#ea4335', hoverColor: '#d23321' },
];


const LandingFooter = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <Box
      sx={{
        background: 'linear-gradient(90deg, #0f172a 0%, #334155 100%)',
        borderTop: '1px solid #1e293b',
        pt: { xs: 2, md: 3 },
        pb: { xs: 1, md: 3 },
        px: { xs: 0, md: 4, lg: 4, xl:1 },
      }}
    >
      <Container maxWidth="xl" className='flex justify-center'>
        <motion.div
          className='flex align-center flex-col gap-5 md:gap-8 lg:gap-12 w-full'
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          
        >
          <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-12 gap-3 sm:gap-5 justify-between">
            {/* Brand Section - Hidden on mobile */}
            <div className="hidden xl:block xl:col-span-4">
              <motion.div variants={itemVariants} className='max-w-lg'>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: '700',
                    color: '#f8fafc',
                    fontSize: { xs: '1.5rem', md: '1.8rem' },
                    mb: { xs: 1, md: 2 },
                  }}
                >
                  My Society Needs
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: '#cbd5e1',
                    opacity: 0.6,
                    fontSize: '1rem',
                    lineHeight: 1.6,
                    maxWidth: '360px'
                  }}
                >
                  Driving growth with smart solutions across society management, 
                  vendor coordination, and residential community services.
                </Typography>
              </motion.div>
            </div>

            {/* Quick Links */}
            <div className="col-span-1 sm:col-span-1 xl:col-span-2">
              <motion.div variants={itemVariants}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: '600',
                    color: '#f97316',
                    fontSize: { xs: '0.85rem', sm: '1rem', md: '1.1rem' },
                    mb: { xs: 0.5, sm: 1, md: 2 },
                  }}
                >
                  Quick Links
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 0.5, sm: 1, md: 1.5 } }}>
                  {quickLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      sx={{
                        color: '#cbd5e1',
                        textDecoration: 'none',
                        fontSize: { xs: '0.75rem', sm: '0.9rem', md: '0.95rem' },
                        transition: 'color 0.3s ease',
                        py: { xs: 0.125, sm: 0.25, md: 0 },
                        '&:hover': {
                          color: '#3b82f6',
                        },
                      }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </Box>
              </motion.div>
            </div>

            {/* Resources */}
            <div className="col-span-1 sm:col-span-1 xl:col-span-2">
              <motion.div variants={itemVariants}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: '600',
                    color: '#f97316',
                    fontSize: { xs: '0.85rem', sm: '1rem', md: '1.1rem' },
                    mb: { xs: 0.5, sm: 1, md: 2 },
                  }}
                >
                  Resources
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 0.5, sm: 1, md: 1.5 } }}>
                  {resources.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      sx={{
                        color: '#64748b',
                        textDecoration: 'none',
                        fontSize: { xs: '0.75rem', sm: '0.9rem', md: '0.95rem' },
                        transition: 'color 0.3s ease',
                        py: { xs: 0.125, sm: 0.25, md: 0 },
                        '&:hover': {
                          color: '#3b82f6',
                        },
                      }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </Box>
              </motion.div>
            </div>

            {/* Legal */}
            <div className="col-span-1 sm:col-span-1 xl:col-span-2">
              <motion.div variants={itemVariants}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: '600',
                    color: '#f97316',
                    fontSize: { xs: '0.85rem', sm: '1rem', md: '1.1rem' },
                    mb: { xs: 0.5, sm: 1, md: 2 },
                  }}
                >
                  Legal
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 0.5, sm: 1, md: 1.5 } }}>
                  {legalLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      sx={{
                        color: '#64748b',
                        textDecoration: 'none',
                        fontSize: { xs: '0.75rem', sm: '0.9rem', md: '0.95rem' },
                        transition: 'color 0.3s ease',
                        py: { xs: 0.125, sm: 0.25, md: 0 },
                        '&:hover': {
                          color: '#3b82f6',
                        },
                      }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </Box>
              </motion.div>
            </div>

            {/* Stay Connected */}
            <div className="col-span-1 sm:col-span-1 xl:col-span-2">
              <motion.div variants={itemVariants}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: '600',
                    color: '#f97316',
                    fontSize: { xs: '0.85rem', sm: '1rem', md: '1.1rem' },
                    mb: { xs: 0.5, sm: 1, md: 2 },
                  }}
                >
                  Stay Connected
                </Typography>
                <Box sx={{ 
                  display: 'flex', 
                  gap: { xs: 1, sm: 1.5, md: 2 },
                  justifyContent: 'flex-start'
                }}>
                  {socialLinks.map((link, index) => (
                    <IconButton
                      key={index}
                      sx={{
                        backgroundColor: link.color,
                        color: 'white',
                        width: { xs: 30, sm: 36, md: 40 },
                        height: { xs: 30, sm: 36, md: 40 },
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          backgroundColor: link.hoverColor,
                          transform: 'translateY(-2px)',
                        },
                      }}
                    >
                      <link.icon sx={{ fontSize: { xs: '14px', sm: 'small' } }} />
                    </IconButton>
                  ))}
                </Box>
              </motion.div>
            </div>
          </div>


          {/* Bottom Copyright Section */}
          <motion.div
            variants={itemVariants}
            style={{
              // mt: '3rem',
              // pt: '2rem',
              my: '10px',
              marginTop: { xs: '2rem', md: '3rem' },
              paddingTop: { xs: '1.5rem', md: '2rem' },
              borderTop: '1px solid #e5e7eb',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                // border: '2px solid red',
                flexDirection: { xs: 'column', sm: 'row' },
                justifyContent: 'center',
                alignItems: 'center',
                mt: '16px',
                gap: { xs: 0.5, sm: 1 },
                textAlign: 'center',
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  color: '#9ca3af',
                  fontSize: { xs: '0.8rem', md: '0.9rem' },
                  display: 'flex',
                  alignItems: 'center',
                  gap: 0.5,
                }}
              >
                Made with{' '}
                <FavoriteIcon 
                  sx={{ 
                    color: '#ef4444', 
                    fontSize: { xs: '0.9rem', md: '1rem' }
                  }} 
                />{' '}
                by Webseeder Technologies
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: '#9ca3af',
                  fontSize: { xs: '0.8rem', md: '0.9rem' },
                }}
              >
                © 2025 My Society Needs. All rights reserved.
              </Typography>
            </Box>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default LandingFooter;