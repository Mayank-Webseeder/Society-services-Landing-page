import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';

const CTASection = () => {
  const handleClick = () => {
    window.location.href = '/contact';
  };

  return (
    <div className="">
      <div className="max-w-7xl mx-auto rounded-lg bg-[#E7EBF4] shadow py-5">
        <Box
          sx={{
            py: { xs: 6, md: 2 },
            px: { xs: 2, md: 0 },
            color: '#2B518E', // Updated text color
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <Container sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
            {/* Heading */}
            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                mb: 3,
                fontSize: { xs: '1.5rem', sm: '2rem', md: '2.25rem' },
                lineHeight: 1.2,
                color: '#2B518E', // Ensure heading uses the color
              }}
            >
              Connect With My Society Needs
            </Typography>

            {/* Description */}
            <Typography
              variant="body1"
              sx={{
                maxWidth: { xs: '100%', sm: '70%', md: '50%' },
                mx: 'auto',
                mb: 5,
                fontSize: { xs: '0.9rem', sm: '1rem' },
                color: '#2B518E', // Ensure description uses the color
              }}
            >
              Whether you want to manage your society more efficiently, request a service, or learn about our vendor coordination tools, our team is here to support your community. Reach out today to get started!
            </Typography>

            {/* CTA Button */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={handleClick}
                variant="contained"
                sx={{
                  borderRadius: '50px',
                  px: 6,
                  py: 1,
                  bgcolor: '#1e3a8a',
                  '&:hover': { bgcolor: '#4338ca' },
                  fontWeight: 600,
                  fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
                  color: 'white', // Button text color
                }}
              >
                Get in Touch
              </Button>
            </motion.div>
          </Container>

          {/* Decorative Background Orbs */}
          <Box
            sx={{
              position: 'absolute',
              top: -50,
              right: -50,
              width: 200,
              height: 200,
              borderRadius: '50%',
              bgcolor: 'rgba(255,255,255,0.1)',
              filter: 'blur(100px)',
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              bottom: -50,
              left: -50,
              width: 200,
              height: 200,
              borderRadius: '50%',
              bgcolor: 'rgba(255,255,255,0.1)',
              filter: 'blur(100px)',
            }}
          />
        </Box>
      </div>
    </div>
  );
};

export default CTASection;
