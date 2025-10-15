import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Verified as VerifiedIcon, AutoAwesome as SparkleIcon } from '@mui/icons-material';
import aboutUs from "../../assets/aboutUs.jpg";

const LandingAboutUs = () => {
  return (
    <Box
      sx={{
        py: { xs: 6, md: 8, lg: 10 },
        // background: 'linear-gradient(135deg, #f9fafb 0%, #f3f4f6 50%, #e5e7eb 100%)',
        position: "relative",
        overflow: 'hidden',
      }}
    >
      {/* Enhanced Background Pattern */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          // backgroundImage: `
          //   radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.08) 0%, transparent 50%),
          //   radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.08) 0%, transparent 50%),
          //   radial-gradient(circle at 50% 50%, rgba(249, 115, 22, 0.03) 0%, transparent 60%)
          // `,
        }}
      />

      {/* Floating Orbs */}
      <Box
        sx={{
          position: 'absolute',
          top: '10%',
          right: '5%',
          width: '200px',
          height: '200px',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(40px)',
          animation: 'float 6s ease-in-out infinite',
          '@keyframes float': {
            '0%, 100%': { transform: 'translateY(0px)' },
            '50%': { transform: 'translateY(-20px)' },
          },
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '15%',
          left: '8%',
          width: '150px',
          height: '150px',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(40px)',
          animation: 'float 8s ease-in-out infinite',
        }}
      />

      {/* Enhanced Heading Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            mb: { xs: 5, md: 7 },
            position: 'relative',
            zIndex: 1,
          }}
        >
          {/* Sparkle Accent */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              mb: 2,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 0.5,
                px: 2.5,
                py: 0.8,
                background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1))',
                borderRadius: '50px',
                border: '1px solid rgba(59, 130, 246, 0.2)',
              }}
            >
              <SparkleIcon sx={{ fontSize: 16, color: '#3b82f6' }} />
              <Typography
                sx={{
                  fontSize: '0.75rem',
                  fontWeight: '600',
                  color: '#3b82f6',
                  letterSpacing: '0.5px',
                  textTransform: 'uppercase',
                }}
              >
                Who We Are
              </Typography>
            </Box>
          </Box>




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
               About Us
            </Typography>

          
          </Box>




         
        </Box>
      </motion.div>

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Box
            sx={{
              width: { xs: '100%', sm: '95%', md: '90%' },
              mx: 'auto',
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              gap: { xs: 4, md: 6, lg: 8 },
            }}
          >
            {/* Left Side - Image */}
            <Box
              sx={{
                flex: 1,
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                px: { xs: 2, sm: 0 },
              }}
            >
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                style={{ width: '100%', maxWidth: '550px' }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    height: { xs: '320px', sm: '380px', md: '420px', lg: '480px' },
                    borderRadius: "20px",
                    overflow: "hidden",
                    // boxShadow: '0 20px 60px rgba(0, 0, 0, 0.12)',
                    border: "2px solid #e2e8f0",
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)',
                      zIndex: 1,
                      pointerEvents: 'none',
                    },
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                    },
                  }}
                >
                  <img
                    src="/about1.webp"
                    alt="About Us Preview"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
              </motion.div>
            </Box>

            {/* Right Side - Content */}
            <Box sx={{ flex: 1, px: { xs: 2, sm: 3, md: 0 } }}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {/* First Paragraph */}
                <Box
                  sx={{
                    mb: 4,
                    pl: { md: 3 },
                    borderLeft: { md: '4px solid' },
                    borderImage: { md: 'linear-gradient(180deg, #6495DC, #F9900F) 1' },
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#475569",
                      fontSize: { xs: "0.95rem", md: "1.05rem" },
                      lineHeight: 1.8,
                      fontWeight: '400',
                      textAlign: { xs: 'left', sm: 'left' },
                    }}
                  >
                    At <strong style={{ color: '#1e293b', fontWeight: '600' }}>My Society Needs</strong>, we specialize in delivering seamless Society and
                    Vendor Management solutions tailored to the unique needs of
                    residential societies and service providers. With services that
                    span across facility management, vendor coordination, and
                    resident services, we ensure every interaction is as efficient
                    as it is reliable. Our dedicated team leverages advanced
                    technology and industry expertise to streamline operations,
                    enhance communication, and provide peace of mind for all
                    stakeholders involved.
                  </Typography>
                </Box>

                {/* Second Paragraph */}
                <Box
                  sx={{
                    pl: { md: 3 },
                    borderLeft: { md: '4px solid' },
                    borderImage: { md: 'linear-gradient(180deg, #F9900F,  #6495DC ) 1' },
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#475569",
                      fontSize: { xs: "0.95rem", md: "1.05rem" },
                      lineHeight: 1.8,
                      fontWeight: '400',
                      textAlign: { xs: 'left', sm: 'left' },
                    }}
                  >
                    Our commitment goes beyond technology. At <strong style={{ color: '#1e293b', fontWeight: '600' }}>My Society Needs</strong>, we strive to
                    create management experiences that leave a lasting impression.
                    Whether it's residential society management, vendor
                    coordination, or a comprehensive service marketplace, we focus
                    on fostering meaningful connections and delivering exceptional
                    service. Every solution we design is guided by a passion for
                    excellence, trust, and a deep understanding of what makes
                    community living truly rewarding.
                  </Typography>
                </Box>

         
              </motion.div>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default LandingAboutUs;