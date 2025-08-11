import { Box, Typography, Modal, IconButton, Chip } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import GavelIcon from '@mui/icons-material/Gavel';
import termsData from '../static/dummyData_TermsConditions';

const TermsModal = ({ open, onClose }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="terms-modal-title"
      aria-describedby="terms-modal-description"
      sx={{
        backdropFilter: 'blur(8px)',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: { xs: '95%', sm: '80%', md: '70%', lg: '60%' },
          maxWidth: '800px',
          bgcolor: 'white',
          background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
          boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15)',
          borderRadius: '20px',
          maxHeight: '92vh',
          overflowY: 'auto',
          border: '1px solid rgba(226, 232, 240, 0.8)',
          position: 'relative',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          msOverflowStyle: 'none', // For Internet Explorer and Edge
          scrollbarWidth: 'none', // For Firefox
        }}
      >
        {/* Header with gradient background */}
        <Box 
          sx={{ 
            background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
            borderRadius: '20px 20px 0 0',
            p: { xs: 3, md: 4 },
            position: 'sticky',
            top: 0,
            zIndex: 10,
            boxShadow: '0 4px 20px rgba(249, 115, 22, 0.3)',
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Chip
                icon={<GavelIcon />}
                label="Legal Agreement"
                sx={{
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  color: 'white',
                  fontWeight: '600',
                  fontSize: '0.75rem',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                }}
              />
            </Box>
            <IconButton 
              onClick={onClose}
              sx={{
                color: 'white',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  transform: 'scale(1.05)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              <CloseIcon />
            </IconButton>
          </Box>
          <Typography 
            id="terms-modal-title" 
            variant="h4" 
            component="h2"
            sx={{
              color: 'white',
              fontWeight: '700',
              fontSize: { xs: '1.5rem', md: '2rem' },
              mt: 2,
              textShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
            }}
          >
            Terms and Conditions
          </Typography>
          <Typography 
            variant="body1"
            sx={{
              color: 'rgba(255, 255, 255, 0.9)',
              mt: 1,
              fontSize: { xs: '0.9rem', md: '1rem' },
            }}
          >
            Please read these terms carefully before using our services
          </Typography>
        </Box>

        {/* Content Area */}
        <Box sx={{ p: { xs: 3, md: 4 } }}>
          {termsData.map((term, index) => (
            <Box 
              key={term.id} 
              sx={{ 
                mb: 4,
                p: { xs: 2, md: 3 },
                backgroundColor: index % 2 === 0 ? 'rgba(254, 240, 230, 0.6)' : 'white',
                borderRadius: '12px',
                border: '1px solid rgba(249, 115, 22, 0.2)',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 25px rgba(249, 115, 22, 0.08)',
                  borderColor: 'rgba(249, 115, 22, 0.3)',
                },
              }}
            >
              <Typography 
                variant="h6" 
                sx={{ 
                  fontWeight: '700',
                  color: '#1e293b',
                  fontSize: { xs: '1.1rem', md: '1.25rem' },
                  mb: 2,
                  background: 'linear-gradient(135deg, #1e293b 0%, #f97316 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: '-8px',
                    left: 0,
                    width: '40px',
                    height: '3px',
                    background: 'linear-gradient(90deg, #f97316, #ea580c)',
                    borderRadius: '2px',
                  },
                }}
              >
                {term.id}. {term.heading}
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  color: '#64748b',
                  lineHeight: 1.7,
                  fontSize: { xs: '0.9rem', md: '1rem' },
                  fontWeight: '400',
                  textAlign: 'justify',
                }}
              >
                {term.content}
              </Typography>
            </Box>
          ))}
          
          {/* Footer */}
          <Box 
            sx={{ 
              mt: 4,
              p: 3,
              background: 'linear-gradient(135deg, #fef3e2 0%, #fed7aa 100%)',
              borderRadius: '12px',
              border: '1px solid rgba(249, 115, 22, 0.3)',
              textAlign: 'center',
            }}
          >
            <Typography 
              variant="body2" 
              sx={{ 
                color: '#92400e',
                fontSize: { xs: '0.8rem', md: '0.9rem' },
                fontWeight: '600',
                mb: 1,
              }}
            >
              By using our services, you acknowledge that you have read and agree to these terms.
            </Typography>
            <Typography 
              variant="body2" 
              sx={{ 
                color: '#a16207',
                fontSize: { xs: '0.75rem', md: '0.85rem' },
                fontStyle: 'italic',
              }}
            >
              Last updated: {new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default TermsModal;
