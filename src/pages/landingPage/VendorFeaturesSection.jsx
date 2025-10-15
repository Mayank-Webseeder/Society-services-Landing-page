import { Box, Typography, Container, Paper } from "@mui/material";
import {
  Work as WorkIcon,
  People as PeopleIcon,
  Payment as PaymentIcon,
  Groups as GroupsIcon,
  Analytics as AnalyticsIcon,
} from "@mui/icons-material";
import vendorImg from "../../assets/vendorImg.jpeg";

const VendorFeaturesSection = () => {
  const vendorFeatures = [
    { id: "jobs", icon: WorkIcon, title: "Job Management & Scheduling", color: "#f59e0b" },
    { id: "clients", icon: PeopleIcon, title: "Client Relationship Management", color: "#3b82f6" },
    { id: "payments", icon: PaymentIcon, title: "Payment & Billing Solutions", color: "#10b981" },
    { id: "workforce", icon: GroupsIcon, title: "Workforce Management", color: "#8b5cf6" },
    { id: "analytics", icon: AnalyticsIcon, title: "Business Analytics & Insights", color: "#ef4444" },
  ];

  return (
    <Container maxWidth="xl" sx={{ py: { xs: 3, md: 6 }, px: { xs: 2, md: 3 } }}>
      {/* Heading */}
      <Box sx={{ textAlign: "center", mb: { xs: 3, md: 5 } }}>
        <Typography variant="h2" sx={{
          fontWeight: "800",
          color: "#0f172a",
          mb: 2,
          fontSize: { xs: "1.5rem", md: "2.5rem" },
        }}>
          Empower your Service Business with our Vendor Platform
        </Typography>
        <Typography sx={{ color: "#64748b", fontSize: { xs: "0.9rem", md: "1.1rem" }, maxWidth: 600, mx: "auto" }}>
          Scale your business operations, manage your workforce, and deliver exceptional service to societies
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

           <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 3 }}>
          {vendorFeatures.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <Paper key={feature.id} elevation={0} sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                p: { xs: 2, md: 3 },
                borderRadius: 2,
                border: `1px solid ${feature.color}20`,
                height: 80, // uniform height
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
      

        {/* Right Features */}
       <Box sx={{ flex: 1, mx: "auto" }}>
          <Box sx={{
            width: "100%",
            height: { xs: 300, md: 500 },
            borderRadius: "16px",
            overflow: "hidden",
            border: "1px solid #e2e8f0",
          }}>
            <img
              src={vendorImg}
              alt="Vendor Management Dashboard Preview"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Box>
        </Box>
      </Box>
    </Container>
  )
};

export default VendorFeaturesSection;
