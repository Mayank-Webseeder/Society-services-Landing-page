import { Box, Container, Typography, Grid } from "@mui/material";
import { motion } from "framer-motion";
import { Verified as VerifiedIcon } from '@mui/icons-material';
import aboutUs from "../../assets/aboutUs.jpg";


const LandingAboutUs = () => {

  return (
    <Box
      sx={{
        py: { xs: 4, md: 6 },
        background: 'linear-gradient(135deg, #f9fafb 0%, #f3f4f6 50%, #e5e7eb 100%)',
        position: "relative",
        overflow: 'hidden',
      }}
    >
      {/* Background Pattern */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.05) 0%, transparent 40%),
            radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.05) 0%, transparent 40%)
          `,
        }}
      />

      {/* Enhanced Heading */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            mb: { xs: 4, md: 5 },
            position: 'relative',
            zIndex: 1,
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: "800",
              background: 'linear-gradient(135deg, #1e293b 0%, #3b82f6 50%, #8b5cf6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: { xs: "1.8rem", md: "2.2rem", lg: '2.5rem' },
              lineHeight: 1.2,
              mb: { xs: 0.5, sm: 1, md: 1.5 },
              mx: 'auto',
              textAlign: 'center',
            }}
          >
            About Us
          </Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 1,
              mb: 2,
            }}
          >
            <Box
              sx={{
                width: "60px",
                height: "4px",
                background: 'linear-gradient(135deg, #f97316, #ea580c)',
                borderRadius: "2px",
              }}
            />
            <VerifiedIcon sx={{ color: '#3b82f6', fontSize: 24 }} />
            <Box
              sx={{
                width: "60px",
                height: "4px",
                background: 'linear-gradient(135deg, #f97316, #ea580c)',
                borderRadius: "2px",
              }}
            />
          </Box>
          <Typography
            variant="subtitle1"
            sx={{
              color: '#64748b',
              fontSize: { xs: '0.9rem', md: '1rem' },
              fontWeight: '500',
              textAlign: 'center',
              maxWidth: { xs: '350px', md: '600px' },
              mx: 'auto',
            }}
          >
            Leading the future of community management with innovation and excellence
          </Typography>
        </Box>
      </motion.div>


      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Box
            sx={{
              width: { xs: '100%', sm: '88%' },
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              gap: { xs: 4, md: 6 },
            }}
          >
            {/* Left Side - Content */}
            <Box sx={{ flex: 1.2, pr: { md: 0 }, px: { xs: 1, sm: 0 } }}>
              {/* Description Content */}
              <Typography
                variant="body1"
                sx={{
                  textAlign: { xs: 'center', sm: 'left' },
                  color: "#475569",
                  fontSize: { xs: "0.85rem", md: "1rem" },
                  lineHeight: 1.7,
                  mb: 3,
                  fontWeight: '400',
                }}
              >
                At My Society Needs, we specialize in delivering seamless Society and
                Vendor Management solutions tailored to the unique needs of
                residential societies and service providers. With services that
                span across facility management, vendor coordination, and
                resident services, we ensure every interaction is as efficient
                as it is reliable. Our dedicated team leverages advanced
                technology and industry expertise to streamline operations,
                enhance communication, and provide peace of mind for all
                stakeholders involved.
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  textAlign: { xs: 'center', sm: 'left' },
                  color: "#475569",
                  fontSize: { xs: "0.85rem", md: "1rem" },
                  lineHeight: 1.7,
                  fontWeight: '400',
                }}
              >
                Our commitment goes beyond technology. At My Society Needs, we strive to
                create management experiences that leave a lasting impression.
                Whether it's residential society management, vendor
                coordination, or a comprehensive service marketplace, we focus
                on fostering meaningful connections and delivering exceptional
                service. Every solution we design is guided by a passion for
                excellence, trust, and a deep understanding of what makes
                community living truly rewarding.
              </Typography>
            </Box>


            {/* Right side - Visual Section */}
            <Box
              sx={{
                flex: 1,
                // border: '2px solid red',
                order: { xs: -1, md: 2 },
                // display: { xs: 'none', sm: 'block' },
                // position: { xs: "static", lg: "sticky" },
                // top: 80,
                mx: "auto",
              }}
            >
              <motion.div
                className="flex justify-center"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <Box
                  sx={{
                    width: { xs: '90%', sm: '100%' },
                    height: { xs: '300px', sm: '340px' }, // Responsive height
                    borderRadius: "16px",
                    overflow: "hidden",
                    border: "1px solid #e2e8f0",
                  }}
                >
                  <img
                    src={aboutUs}
                    alt="About Us Preview"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "16px",
                    }}
                  />
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