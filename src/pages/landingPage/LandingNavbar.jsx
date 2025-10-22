import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import faviconFinal from '/faviconFinal.png';

const VENDOR_URL = "https://vendor.mysocietyneeds.com/";
const SOCIETY_URL = import.meta.env.VITE_SOCIETY_URL;

const LandingNavbar = ({ refs }) => {
  const navigate = useNavigate();
  const [showNavbar, setShowNavbar] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Handle navbar hide/show on scroll
  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      setShowNavbar(window.scrollY < lastScrollY);
      lastScrollY = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { label: 'Home', onClick: () => navigate('/') },
    { label: 'How It Works', onClick: () => scrollToSection(refs?.howItWorksRef) },
    { label: 'Testimonials', onClick: () => scrollToSection(refs?.testimonialsRef) },
    { label: 'FAQs', onClick: () => scrollToSection(refs?.faqsRef) },
    { label: 'Contact', onClick: () => scrollToSection(refs?.contactRef) },
  ];

  const toggleDrawer = () => setMobileOpen((prev) => !prev);

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          top: 0,
          zIndex: 50,
          background: 'rgba(255, 255, 255, 0.98)',
          backdropFilter: 'blur(25px)',
          boxShadow: showNavbar 
            ? '0 4px 30px rgba(0,0,0,0.1)' 
            : '0 1px 20px rgba(0,0,0,0.08)',
          borderBottom: '1px solid rgba(226,232,240,0.6)',
          transform: showNavbar ? 'translateY(0)' : 'translateY(-100%)',
          transition: 'all 0.4s cubic-bezier(0.4,0,0.2,1)',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{
            display: 'flex',
            justifyContent: 'space-between',
            px: 0,
            py: { xs: 2, md: 1 }, // taller navbar
            minHeight: { xs: 64, md: 80 },
          }}>
            {/* Logo */}
            <Box
              sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
              onClick={() => navigate('/')}
            >
              <Box
                component="img"
                src={faviconFinal}
                alt="Logo"
                sx={{
                  width: { xs: 40, sm: 48, md: 64 },
                  height: { xs: 40, sm: 48, md: 64 },
                  borderRadius: 2,
                  objectFit: 'cover',
                }}
              />
            </Box>

            {/* Desktop nav items */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1 }}>
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  onClick={item.onClick}
                  sx={{ color: '#64748b', textTransform: 'none', '&:hover': { color: '#3b82f6' } }}
                >
                  {item.label}
                </Button>
              ))}
              <Button
                variant="outlined"
                onClick={() => (window.location.href = SOCIETY_URL)}
                sx={{ borderColor: '#f97316', color: '#f97316', ml: 1, textTransform: 'none' }}
              >
                Society Login
              </Button>
              <Button
                variant="outlined"
                onClick={() => (window.location.href = VENDOR_URL)}
                sx={{ borderColor: '#3b82f6', color: '#3b82f6', ml: 1, textTransform: 'none' }}
              >
                Vendor Login
              </Button>
            </Box>

            {/* Mobile menu button */}
            <IconButton
              edge="end"
              sx={{ display: { md: 'none' } }}
              onClick={toggleDrawer}
            >
              {mobileOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={toggleDrawer}
        sx={{
          '& .MuiDrawer-paper': {
            width: 260,
            p: 2,
            display: 'flex',
            flexDirection: 'column',
          },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <IconButton onClick={toggleDrawer}><CloseIcon /></IconButton>
        </Box>
        <List>
          {navItems.map((item) => (
            <ListItem key={item.label} disablePadding>
              <ListItemButton
                onClick={() => {
                  item.onClick();
                  toggleDrawer();
                }}
              >
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem disablePadding>
            <ListItemButton onClick={() => (window.location.href = SOCIETY_URL)}>
              <ListItemText primary="Society Login" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => (window.location.href = VENDOR_URL)}>
              <ListItemText primary="Vendor Login" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default LandingNavbar;
