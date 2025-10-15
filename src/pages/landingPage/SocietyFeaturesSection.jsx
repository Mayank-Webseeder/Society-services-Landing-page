import { Box, Typography, Container, Paper } from "@mui/material";
import {
  Business as BusinessIcon,
  Build as BuildIcon,
  AccountBalance as AccountBalanceIcon,
  Forum as ForumIcon,
  Security as SecurityIcon,
} from "@mui/icons-material";
import societyImg from '../../assets/societyImg.jpg';

const SocietyFeaturesSection = () => {

  const societyFeatures = [
    { id: "management", icon: BusinessIcon, title: "Society Management & Administration", color: "#3b82f6" },
    { id: "maintenance", icon: BuildIcon, title: "Maintenance & Service Management", color: "#f59e0b" },
    { id: "financial", icon: AccountBalanceIcon, title: "Financial Management & Reporting", color: "#10b981" },
    { id: "communication", icon: ForumIcon, title: "Communication & Resident Services", color: "#8b5cf6" },
    { id: "security", icon: SecurityIcon, title: "Security & Access Control", color: "#ef4444" },
  ];

  return (
    <Container maxWidth="xl" sx={{ py: { xs: 3, md: 4 }, px: { xs: 2, md: 3 } }}>
      {/* Heading */}
      <Box sx={{ textAlign: "center", mb: { xs: 3, md: 4 } }}>
        <Typography variant="h2" sx={{
          fontWeight: "800",
          color: "#0f172a",
          mb: 2,
          fontSize: { xs: "1.5rem", md: "2.5rem" },
        }}>
          Combine all your Society systems into one platform
        </Typography>
        <Typography sx={{ color: "#64748b", fontSize: { xs: "0.9rem", md: "1.1rem" }, maxWidth: 600, mx: "auto" }}>
          Streamline operations, enhance communication, and create a seamless experience for your society members
        </Typography>
      </Box>

      <Box sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: { xs: 4, md: 6 },
        alignItems: "flex-start",
        maxWidth: "95%",
        mx: "auto"
      }}>
        {/* Left Image */}
        <Box sx={{ flex: 1, mx: "auto" }}>
          <Box sx={{
            width: "100%",
            height: { xs: 300, md: 500 },
            borderRadius: "16px",
            overflow: "hidden",
            border: "1px solid #e2e8f0",
          }}>
            <img
              src={societyImg}
              alt="Society Management Dashboard Preview"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Box>
        </Box>

        {/* Right Features */}
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 3 }}>
          {societyFeatures.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <Paper key={feature.id} elevation={0} sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                p: { xs: 2, md: 3 },
                borderRadius: 2,
                border: `1px solid ${feature.color}20`,
                height: 80, // fixed height for all cards
                backgroundColor: "#fff",
              }}>
                <Box sx={{
                  p: 1,
                  borderRadius: 1,
                  backgroundColor: `${feature.color}15`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minWidth: 48,
                  minHeight: 48,
                }}>
                  <IconComponent sx={{ color: feature.color, fontSize: 28 }} />
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 700, color: "#0f172a" }}>
                  {feature.title}
                </Typography>
              </Paper>
            )
          })}
        </Box>
      </Box>
    </Container>
  )
};

export default SocietyFeaturesSection;
