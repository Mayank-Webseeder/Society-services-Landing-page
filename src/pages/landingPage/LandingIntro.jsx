import React from "react";
import { Stack, Button } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Motion variant
const fadeSlide = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: "easeOut" },
  },
});

const LandingIntro = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-gray-50 py-20 overflow-hidden">
      <div className="max-w-[90vw] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* ===== Left Content ===== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          {/* Title */}
     <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight
               bg-gradient-to-r  via-[#6EA1E4] from-[#F88B11]  to-[#52CED7]
               bg-clip-text text-transparent">
  My Society Needs
</h1>


          {/* Subtitle */}
          <h2 className="text-lg sm:text-xl md:text-2xl text-gray-600 font-medium mt-3">
            A Single Operating Platform for Your Community Services
          </h2>

          {/* Description */}
          <p className="text-gray-500 text-base md:text-lg mt-4 leading-relaxed max-w-md mx-auto md:mx-0">
            Manage maintenance, vendors, and residents in one place — built for
            clarity, accountability, and faster community solutions.
          </p>

          {/* Buttons */}
    <motion.div variants={fadeSlide(0.3)} initial="hidden" animate="show">
  <Stack
    direction={{ xs: "column", sm: "row" }} // Vertical on mobile, horizontal on sm+
    spacing={{ xs: 3, sm: 2.5 }}           // More gap on mobile
    justifyContent={{ xs: "center", md: "flex-start" }} // Center on mobile, left on md+
    alignItems={{ xs: "center", md: "flex-start" }}
    sx={{ mt: { xs: 6, sm: 5 } }}
  >
    {/* Primary Button */}
    <Button
      onClick={() => navigate("/auth")}
      size="large"
      sx={{
        width: { xs: "100%", sm: "auto" }, // Full width on mobile, auto on sm+
        maxWidth: 320,                     // Limit width on small screens
        background: "linear-gradient(135deg,#0ea5e9 0%,#6366f1 70%)",
        color: "#fff",
        px: 5,
        py: 1.8,
        borderRadius: "14px",
        fontWeight: 600,
        textTransform: "none",
        letterSpacing: 0.4,
        fontSize: { xs: "0.95rem", sm: "1rem" },
        boxShadow: "0 6px 22px -4px rgba(14,165,233,0.45)",
        transition: "all 0.3s ease",
        "&:hover": {
          background: "linear-gradient(135deg,#0284c7 0%,#4f46e5 70%)",
          boxShadow: "0 8px 26px -4px rgba(14,165,233,0.55)",
          transform: "translateY(-2px)",
        },
      }}
    >
      Launch Platform
    </Button>

    {/* Secondary Button */}
    <Button
      onClick={() => navigate("/contact")}
      size="large"
      sx={{
        width: { xs: "100%", sm: "auto" },
        maxWidth: 320,
        background: "rgba(14,165,233,0.08)",
        color: "#0f172a",
        px: 5,
        py: 1.8,
        borderRadius: "14px",
        fontWeight: 500,
        textTransform: "none",
        fontSize: { xs: "0.95rem", sm: "1rem" },
        border: "1px solid rgba(14,165,233,0.25)",
        transition: "all 0.3s ease",
        "&:hover": {
          background: "rgba(14,165,233,0.15)",
          borderColor: "rgba(14,165,233,0.35)",
          transform: "translateY(-2px)",
        },
      }}
    >
      Talk to Team
    </Button>
  </Stack>
</motion.div>

        </motion.div>

        {/* ===== Right Image ===== */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center md:w-1/2"
        >
          <div className="relative h-[70vh] w-full max-w-md md:max-w-2xl rounded-2xl overflow-hidden shadow-xl">
            <img
              src="https://www.genesiscare.in/public/uploads/service-15.jpg"
              alt="Community Management"
              className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LandingIntro;
