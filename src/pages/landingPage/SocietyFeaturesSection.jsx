import { useState } from "react";
import { Box, Typography, Button, Container, Paper, Chip } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import {
  Business as BusinessIcon,
  Build as BuildIcon,
  AccountBalance as AccountBalanceIcon,
  Forum as ForumIcon,
  Security as SecurityIcon,
  ArrowForward as ArrowForwardIcon,
  CheckCircle as CheckCircleIcon,
} from "@mui/icons-material";
import societyImg from '../../assets/societyImg.jpg';


const SocietyFeaturesSection = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const societyFeatures = [
    {
      id: "management",
      icon: BusinessIcon,
      title: "Society Management & Administration",
      description:
        "Streamline your society operations with comprehensive management tools and administrative features.",
      benefits: [
        "Digital Record Keeping",
        "Automated Workflows",
        "Compliance Management",
      ],
      color: "#3b82f6",
    },
    {
      id: "maintenance",
      icon: BuildIcon,
      title: "Maintenance & Service Management",
      description:
        "Efficiently manage maintenance requests, track service providers, and ensure quality delivery.",
      benefits: [
        "Real-time Tracking",
        "Vendor Management",
        "Quality Assurance",
      ],
      color: "#f59e0b",
    },
    {
      id: "financial",
      icon: AccountBalanceIcon,
      title: "Financial Management & Reporting",
      description:
        "Handle society finances, maintenance collections, and generate detailed financial reports.",
      benefits: [
        "Automated Billing",
        "Expense Tracking",
        "Financial Analytics",
      ],
      color: "#10b981",
    },
    {
      id: "communication",
      icon: ForumIcon,
      title: "Communication & Resident Services",
      description:
        "Enhance resident communication with announcements, notices, and community engagement tools.",
      benefits: [
        "Instant Notifications",
        "Event Management",
        "Feedback System",
      ],
      color: "#8b5cf6",
    },
    {
      id: "security",
      icon: SecurityIcon,
      title: "Security & Access Control",
      description:
        "Manage visitor access, security protocols, and ensure safe community living.",
      benefits: ["Visitor Management", "Access Control", "Security Monitoring"],
      color: "#ef4444",
    },
  ];

  const handleDropdownClick = (dropdownId) => {
    setActiveDropdown(activeDropdown === dropdownId ? null : dropdownId);
  };

  return (
    <Container
      maxWidth="xl"
      sx={{ py: { xs: 3, md: 6 }, px: { xs: 2, md: 3 } }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Heading & Subheading */}
        <Box sx={{ textAlign: "center", mb: { xs: 3, md: 5 } }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Chip
              label="Society Management Platform"
              sx={{
                backgroundColor: "#dbeafe",
                color: "#1e40af",
                fontWeight: "600",
                fontSize: { xs: "0.7rem", md: "0.75rem" },
                mb: { xs: 1.5, md: 2 },
                px: { xs: 1.2, md: 1.5 },
                py: 0.3,
              }}
            />
          </motion.div>

          <Typography
            variant="h2"
            sx={{
              fontWeight: "800",
              color: "#0f172a",
              mb: { xs: 1.5, md: 2 },
              fontSize: {
                xs: "1.4rem",
                sm: "1.8rem",
                md: "2.2rem",
                lg: "2.5rem",
              },
              lineHeight: 1.1,
              background: "linear-gradient(135deg, #1e293b 0%, #3b82f6 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              px: { xs: 1, md: 0 },
            }}
          >
            Combine all your Society
            <br />
            systems into one platform
          </Typography>

          <Typography
            variant="h6"
            sx={{
              color: "#64748b",
              maxWidth: { xs: "340px", sm: "450px", md: "550px" },
              mx: "auto",
              fontSize: { xs: "0.9rem", md: "1.1rem" },
              lineHeight: 1.5,
              fontWeight: "400",
              px: { xs: 1, md: 0 },
            }}
          >
            Streamline operations, enhance communication, and create a seamless
            experience for your society members
          </Typography>
        </Box>

        {/* Layout Content */}
        <Box sx={{ maxWidth: { xs: '90%', sm: "80%", md: '95%', xl: "80%" }, mx: "auto" }}>
          <Box
            sx={{
              display: "flex",
              gap: { xs: 3, md: 4, lg: 6 },
              alignItems: "flex-start",
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            {/* Left Side - Enhanced Visual */}
            <Box
              sx={{
                flex: 1,
                position: { xs: "static", lg: "sticky" },
                top: 80,
                mx: "auto",
                // border: '2px solid red',
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
                    height: { xs: '300px', sm: '440px' }, // Responsive height
                    borderRadius: "16px",
                    overflow: "hidden",
                    border: "1px solid #e2e8f0",
                  }}
                >
                  <img
                    src={societyImg}
                    alt="Society Management Dashboard Preview"
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

            {/* Right Side - Feature Cards */}
            <Box sx={{ flex: 1, width: "100%" }}>
              {societyFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={feature.id}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  >
                    <Paper
                      elevation={0}
                      sx={{
                        mb: { xs: 1, md: 1.5 },
                        border: "1px solid",
                        borderColor:
                          activeDropdown === feature.id
                            ? feature.color
                            : "#e2e8f0",
                        borderRadius: { xs: "8px", md: "12px" },
                        overflow: "hidden",
                        cursor: "pointer",
                        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                        backgroundColor:
                          activeDropdown === feature.id
                            ? `${feature.color}05`
                            : "white",
                        "&:hover": {
                          borderColor: feature.color,
                          backgroundColor: `${feature.color}08`,
                          transform: {
                            xs: "translateY(-1px)",
                            md: "translateY(-2px)",
                          },
                          boxShadow: {
                            xs: `0 8px 16px -4px ${feature.color}20, 0 4px 6px -2px ${feature.color}10`,
                            md: `0 15px 20px -5px ${feature.color}20, 0 8px 8px -5px ${feature.color}10`,
                          },
                        },
                      }}
                      onClick={() => handleDropdownClick(feature.id)}
                    >
                      <Box
                        sx={{ 
                          display:'flex',
                          flexDirection: 'column' ,
                          justifyContent: 'center',
                          px: { xs: 1.6, md: 2.5 }, 
                          py: { xs: 1.1, md: 2.5 },
                          // border: '2px solid green',
                        }} 
                      >
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "flex-start",
                            // border: '2px solid red',
                          }}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: { xs: 1.5, md: 1.5 },
                            }}
                          >
                            <Box
                              sx={{
                                p: { xs: 0.8, md: 1 },
                                borderRadius: { xs: "8px", md: "10px" },
                                backgroundColor: `${feature.color}15`,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <IconComponent
                                sx={{
                                  color: feature.color,
                                  fontSize: { xs: "1.1rem", md: "1.25rem" },
                                }}
                              />
                            </Box>
                            <Typography
                              variant="h6"
                              sx={{
                                fontWeight: "700",
                                color: "#0f172a",
                                fontSize: { xs: "0.85rem", md: "1rem", lg: '1.1rem' },
                                lineHeight: 1.3,
                                maxWidth: { xs: "250px", md: "none" },
                              }}
                            >
                              {feature.title}
                            </Typography>
                          </Box>

                          <motion.div
                            animate={{
                              rotate: activeDropdown === feature.id ? 180 : 0,
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            <Box
                              sx={{
                                p: { xs: 0.6, md: 0.75 },
                                borderRadius: { xs: "4px", md: "6px" },
                                backgroundColor:
                                  activeDropdown === feature.id
                                    ? `${feature.color}15`
                                    : "#f1f5f9",
                                color:
                                  activeDropdown === feature.id
                                    ? feature.color
                                    : "#64748b",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                minWidth: { xs: "24px", md: "28px" },
                                minHeight: { xs: "24px", md: "28px" },
                              }}
                            >
                              <ArrowForwardIcon
                                sx={{
                                  fontSize: { xs: "0.9rem", md: "1rem" },
                                  transform: "rotate(90deg)",
                                }}
                              />
                            </Box>
                          </motion.div>
                        </Box>

                        <AnimatePresence>
                          {activeDropdown === feature.id && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.4, ease: "easeInOut" }}
                            >
                              <Box
                                sx={{
                                  mt: { xs: 2, md: 2.5 },
                                  pt: { xs: 2, md: 2.5 },
                                  borderTop: `1px solid ${feature.color}20`,
                                }}
                              >
                                <Typography
                                  variant="body1"
                                  sx={{
                                    color: "#475569",
                                    fontSize: { xs: "0.85rem", md: "1rem" },
                                    lineHeight: 1.6,
                                    mb: { xs: 2, md: 3 },
                                    fontWeight: "400",
                                  }}
                                >
                                  {feature.description}
                                </Typography>

                                <Box sx={{ mb: { xs: 2, md: 3 } }}>
                                  <Typography
                                    variant="subtitle2"
                                    sx={{
                                      color: "#0f172a",
                                      fontWeight: "600",
                                      mb: { xs: 1, md: 1.5 },
                                      fontSize: { xs: "0.75rem", md: "0.8rem" },
                                      textTransform: "uppercase",
                                      letterSpacing: "0.5px",
                                    }}
                                  >
                                    Key Benefits
                                  </Typography>
                                  <Box
                                    sx={{
                                      display: "flex",
                                      flexWrap: "wrap",
                                      gap: { xs: 0.8, md: 1 },
                                    }}
                                  >
                                    {feature.benefits.map((benefit, idx) => (
                                      <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{
                                          duration: 0.3,
                                          delay: idx * 0.1,
                                        }}
                                      >
                                        <Box
                                          sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: { xs: 0.5, md: 0.75 },
                                            backgroundColor: `${feature.color}08`,
                                            px: { xs: 1, md: 1.5 },
                                            py: { xs: 0.5, md: 0.75 },
                                            borderRadius: {
                                              xs: "12px",
                                              md: "16px",
                                            },
                                            border: `1px solid ${feature.color}20`,
                                          }}
                                        >
                                          <CheckCircleIcon
                                            sx={{
                                              color: feature.color,
                                              fontSize: {
                                                xs: "0.75rem",
                                                md: "0.875rem",
                                              },
                                            }}
                                          />
                                          <Typography
                                            variant="body2"
                                            sx={{
                                              color: "#374151",
                                              fontWeight: "500",
                                              fontSize: {
                                                xs: "0.75rem",
                                                md: "0.8rem",
                                              },
                                            }}
                                          >
                                            {benefit}
                                          </Typography>
                                        </Box>
                                      </motion.div>
                                    ))}
                                  </Box>
                                </Box>

                                <Box
                                  sx={{
                                    display: "flex",
                                    gap: { xs: 1, md: 1.5 },
                                    flexDirection: { xs: "column", sm: "row" },
                                    "& > *": { flex: { xs: 1, sm: "none" } },
                                  }}
                                >
                                  <Button
                                    variant="contained"
                                    sx={{
                                      backgroundColor: feature.color,
                                      color: "white",
                                      px: { xs: 2.5, md: 3 },
                                      py: { xs: 1, md: 1 },
                                      borderRadius: { xs: "6px", md: "8px" },
                                      textTransform: "none",
                                      fontWeight: "600",
                                      fontSize: {
                                        xs: "0.8rem",
                                        md: "0.875rem",
                                      },
                                      boxShadow: `0 3px 10px ${feature.color}30`,
                                      "&:hover": {
                                        backgroundColor: feature.color,
                                        filter: "brightness(0.9)",
                                        transform: "translateY(-1px)",
                                        boxShadow: `0 6px 20px ${feature.color}40`,
                                      },
                                    }}
                                  >
                                    Get a Demo
                                  </Button>

                                  <Button
                                    variant="outlined"
                                    sx={{
                                      borderColor: feature.color,
                                      color: feature.color,
                                      px: { xs: 2.5, md: 3 },
                                      py: { xs: 1, md: 1 },
                                      borderRadius: { xs: "6px", md: "8px" },
                                      textTransform: "none",
                                      fontWeight: "600",
                                      fontSize: {
                                        xs: "0.8rem",
                                        md: "0.875rem",
                                      },
                                      "&:hover": {
                                        borderColor: feature.color,
                                        backgroundColor: `${feature.color}08`,
                                        transform: "translateY(-1px)",
                                      },
                                    }}
                                  >
                                    Learn More
                                  </Button>
                                </Box>
                              </Box>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </Box>
                    </Paper>
                  </motion.div>
                );
              })}
            </Box>
          </Box>
        </Box>
      </motion.div>
    </Container>
  );
};

export default SocietyFeaturesSection;
