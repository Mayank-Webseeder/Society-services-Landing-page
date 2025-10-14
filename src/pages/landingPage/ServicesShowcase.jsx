import { useState } from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Button, Chip } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle as CheckIcon,
  ArrowForward as ArrowIcon,
  Star as StarIcon,
  TrendingUp as TrendingIcon
} from '@mui/icons-material';
import dummyOffers from '../../static/dummyData_ServicesOffered';

const ServicesShowcase = ({ refs }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);

  // Smooth scroll handler
  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Group services into categories
// Replace your current serviceCategories with:
const serviceCategories = {
  'All Services': { services: dummyOffers, color: '#0933A6', icon: '🎯' }, // deep blue
  'Cleaning': { 
    services: dummyOffers.filter(service => 
      service.label.includes('Cleaning') || 
      service.label.includes('Housekeeping') || 
      service.label.includes('Pest Control')
    ), 
    color: '#49CBD8', // cyan
    icon: '✨'
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
    color: '#FA930E', // orange
    icon: '🔧'
  },
  'Security': { 
    services: dummyOffers.filter(service => 
      service.label.includes('Security') || 
      service.label.includes('CCTV') || 
      service.label.includes('Fire Safety') || 
      service.label.includes('Visitor')
    ), 
    color: '#0933A6', // deep blue
    icon: '🛡️'
  },
  'Management': { 
    services: dummyOffers.filter(service => 
      service.label.includes('Management') || 
      service.label.includes('Administration') || 
      service.label.includes('Event')
    ), 
    color: '#49CBD8', // cyan
    icon: '📊'
  },
};


  const tabLabels = Object.keys(serviceCategories);
  const currentCategory = serviceCategories[tabLabels[selectedTab]];
  const currentServices = currentCategory.services;
  const currentColor = currentCategory.color;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <Box
      sx={{
        background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 50%, #f1f5f9 100%)',
        py: { xs: 6, md: 10, lg: 12 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative Background Shapes */}
      <Box
        sx={{
          position: 'absolute',
          top: '-100px',
          right: '-100px',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${currentColor}15 0%, transparent 70%)`,
          transition: 'all 0.6s ease',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '-150px',
          left: '-150px',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 70%)',
        }}
      />

      {/* Grid Pattern Overlay */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(148, 163, 184, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(148, 163, 184, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="xl" sx={{ px: { xs: 2, md: 3 }, position: 'relative', zIndex: 1 }}>
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
      

            {/* Main Title */}
            <Typography
              variant="h2"
              sx={{
                fontWeight: '800',
                mb: 2,
                fontSize: { xs: '2.2rem', sm: '3rem', md: '3.8rem' },
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
                  background: `linear-gradient(90deg, transparent, ${currentColor}, transparent)`,
                  borderRadius: '2px',
                  transition: 'all 0.6s ease',
                },
              }}
            >
              Our Premium Services
            </Typography>

            <Typography
              sx={{
                color: '#475569',
                fontSize: { xs: '1rem', md: '1.15rem' },
                lineHeight: 1.6,
                maxWidth: '650px',
                mx: 'auto',
                mt: 3,
              }}
            >
              Comprehensive solutions designed to elevate your community living experience
            </Typography>
          </Box>
        </motion.div>

        {/* Category Pills Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: { xs: 1, md: 1.5 },
              mb: { xs: 5, md: 7 },
              flexWrap: 'wrap',
              px: { xs: 1, md: 0 },
            }}
          >
            {tabLabels.map((label, index) => {
              const category = serviceCategories[label];
              const isActive = selectedTab === index;
              return (
                <motion.div
                  key={label}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Chip
                    label={
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <span>{category.icon}</span>
                        <span>{label}</span>
                        <Box
                          sx={{
                            px: 1,
                            py: 0.3,
                            borderRadius: '8px',
                            background: isActive ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.1)',
                            fontSize: '0.7rem',
                            fontWeight: 700,
                          }}
                        >
                          {category.services.length}
                        </Box>
                      </Box>
                    }
                    onClick={() => setSelectedTab(index)}
                    sx={{
                      px: { xs: 1.5, md: 2 },
                      py: { xs: 2.5, md: 3 },
                      fontSize: { xs: '0.85rem', md: '0.95rem' },
                      fontWeight: 700,
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      background: isActive 
                        ? `linear-gradient(135deg, ${category.color} 0%, ${category.color}dd 100%)`
                        : 'white',
                      color: isActive ? 'white' : '#475569',
                      border: `2px solid ${isActive ? category.color : '#e2e8f0'}`,
                      boxShadow: isActive 
                        ? `0 8px 20px ${category.color}40`
                        : '0 2px 8px rgba(0,0,0,0.06)',
                      '&:hover': {
                        background: isActive
                          ? `linear-gradient(135deg, ${category.color} 0%, ${category.color}dd 100%)`
                          : '#f8fafc',
                        borderColor: category.color,
                        boxShadow: `0 8px 20px ${category.color}30`,
                      },
                    }}
                  />
                </motion.div>
              );
            })}
          </Box>
        </motion.div>

        {/* Services Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTab}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, scale: 0.95 }}
          >
            <Box
              sx={{
                width: { xs: '100%', lg: '95%', xl: '80%' },
                mx: 'auto',
                mb: { xs: 5, md: 7 },
              }}
            >
              <Grid container spacing={{ xs: 1.5, md: 2.5 }}>
                {currentServices.slice(0, 12).map((service, index) => (
                  <Grid item xs={6} sm={4} md={3} key={service.value}>
                    <motion.div 
                      variants={itemVariants}
                      onHoverStart={() => setHoveredCard(index)}
                      onHoverEnd={() => setHoveredCard(null)}
                    >
                      <Card
                        sx={{
                          height: '100%',
                          minHeight: { xs: '100px', md: '130px' },
                          background: 'white',
                          borderRadius: '16px',
                          border: `2px solid ${hoveredCard === index ? currentColor : '#f1f5f9'}`,
                          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                          cursor: 'pointer',
                          position: 'relative',
                          overflow: 'visible',
                          boxShadow: hoveredCard === index 
                            ? `0 20px 40px ${currentColor}25`
                            : '0 4px 12px rgba(0, 0, 0, 0.05)',
                          transform: hoveredCard === index ? 'translateY(-8px)' : 'none',
                          '&::before': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            height: '6px',
                            background: `linear-gradient(90deg, ${currentColor}, ${currentColor}80)`,
                            opacity: hoveredCard === index ? 1 : 0,
                            transition: 'opacity 0.3s ease',
                            borderRadius: '16px 16px 0 0',
                          },
                        }}
                      >
                        <CardContent
                          sx={{
                            p: { xs: 2, md: 2.5 },
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            '&:last-child': { pb: { xs: 2, md: 2.5 } },
                          }}
                        >
                          <Box>
                            <Box
                              sx={{
                                width: '40px',
                                height: '40px',
                                borderRadius: '10px',
                                background: `${currentColor}15`,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                mb: 1.5,
                                transition: 'all 0.3s ease',
                                transform: hoveredCard === index ? 'scale(1.1) rotate(5deg)' : 'none',
                              }}
                            >
                              <CheckIcon sx={{ color: currentColor, fontSize: 24 }} />
                            </Box>
                            <Typography
                              sx={{
                                fontWeight: '700',
                                color: '#0f172a',
                                fontSize: { xs: '0.85rem', md: '0.95rem' },
                                lineHeight: 1.4,
                                mb: 0.5,
                              }}
                            >
                              {service.label}
                            </Typography>
                          </Box>
                          <ArrowIcon 
                            sx={{ 
                              fontSize: 18, 
                              color: currentColor,
                              opacity: hoveredCard === index ? 1 : 0,
                              transform: hoveredCard === index ? 'translateX(0)' : 'translateX(-10px)',
                              transition: 'all 0.3s ease',
                              alignSelf: 'flex-end',
                            }} 
                          />
                        </CardContent>
                      </Card>
                    </motion.div>
                  </Grid>
                ))}

             
              </Grid>
            </Box>
          </motion.div>
        </AnimatePresence>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Box
            sx={{
              textAlign: 'center',
              py: { xs: 4, md: 6 },
              px: { xs: 2, md: 4 },
              background: `linear-gradient(135deg, ${currentColor}10 0%, ${currentColor}05 100%)`,
              borderRadius: '24px',
              border: `2px dashed ${currentColor}40`,
              transition: 'all 0.6s ease',
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: '1.2rem', md: '1.5rem' },
                fontWeight: '700',
                color: '#0f172a',
                mb: 1,
              }}
            >
              Ready to Transform Your Community?
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: '0.9rem', md: '1rem' },
                color: '#64748b',
                mb: 3,
                maxWidth: '500px',
                mx: 'auto',
              }}
            >
              Let's discuss how our services can meet your specific needs
            </Typography>
            <Button
              variant="contained"
              size="large"
              onClick={() => scrollToSection(refs?.contactRef)}
              endIcon={<ArrowIcon />}
              sx={{
                px: { xs: 4, md: 6 },
                py: { xs: 1.5, md: 2 },
                borderRadius: '50px',
                fontSize: { xs: '1rem', md: '1.1rem' },
                fontWeight: '700',
                textTransform: 'none',
                background: `linear-gradient(135deg, ${currentColor} 0%, ${currentColor}dd 100%)`,
                color: 'white',
                boxShadow: `0 8px 24px ${currentColor}40`,
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-3px)',
                  boxShadow: `0 12px 32px ${currentColor}50`,
                },
              }}
            >
              Get Started Today
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default ServicesShowcase;