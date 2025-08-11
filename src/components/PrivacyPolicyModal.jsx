import { Box, Typography, Modal, IconButton, List, ListItem, ListItemText, Chip } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import SecurityIcon from '@mui/icons-material/Security';
import policyData from '../static/dummyData_PrivacyPolicy';

const PrivacyPolicyModal = ({ open, onClose }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="privacy-policy-modal-title"
      aria-describedby="privacy-policy-modal-description"
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
            background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
            borderRadius: '20px 20px 0 0',
            p: { xs: 3, md: 4 },
            position: 'sticky',
            top: 0,
            zIndex: 10,
            boxShadow: '0 4px 20px rgba(59, 130, 246, 0.3)',
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Chip
                icon={<SecurityIcon />}
                label="Legal Document"
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
            id="privacy-policy-modal-title" 
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
            Privacy Policy
          </Typography>
          <Typography 
            variant="body1"
            sx={{
              color: 'rgba(255, 255, 255, 0.9)',
              mt: 1,
              fontSize: { xs: '0.9rem', md: '1rem' },
            }}
          >
            Your privacy and data protection are our top priorities
          </Typography>
        </Box>

        {/* Content Area */}
        <Box sx={{ p: { xs: 3, md: 4 } }}>
          {policyData.map((section, index) => (
            <Box 
              key={section.id} 
              sx={{ 
                mb: 4,
                p: { xs: 2, md: 3 },
                backgroundColor: index % 2 === 0 ? 'rgba(248, 250, 252, 0.8)' : 'white',
                borderRadius: '12px',
                border: '1px solid rgba(226, 232, 240, 0.6)',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 25px rgba(0, 0, 0, 0.08)',
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
                  background: 'linear-gradient(135deg, #1e293b 0%, #3b82f6 100%)',
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
                    background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)',
                    borderRadius: '2px',
                  },
                }}
              >
                {section.id}. {section.heading}
              </Typography>
              {section.type === 'list' ? (
                <List sx={{ pl: 0 }}>
                  {section.items.map((item, itemIndex) => (
                    <ListItem 
                      key={itemIndex} 
                      sx={{ 
                        pl: 0,
                        pb: 1.5,
                        alignItems: 'flex-start',
                      }}
                    >
                      <Box
                        sx={{
                          width: '6px',
                          height: '6px',
                          backgroundColor: '#3b82f6',
                          borderRadius: '50%',
                          mt: 1,
                          mr: 2,
                          flexShrink: 0,
                        }}
                      />
                      <ListItemText 
                        primary={item} 
                        primaryTypographyProps={{ 
                          variant: 'body1', 
                          color: '#64748b',
                          fontSize: { xs: '0.9rem', md: '1rem' },
                          lineHeight: 1.6,
                          fontWeight: '400',
                        }} 
                      />
                    </ListItem>
                  ))}
                </List>
              ) : (
                <Typography 
                  variant="body1" 
                  sx={{ 
                    color: '#64748b',
                    lineHeight: 1.7,
                    fontSize: { xs: '0.9rem', md: '1rem' },
                    fontWeight: '400',
                  }}
                >
                  {section.content}
                </Typography>
              )}
              {section.subItems && (
                <List sx={{ mt: 2 }}>
                  {section.subItems.map((subItem, subIndex) => (
                    <ListItem 
                      key={subIndex} 
                      sx={{ 
                        pl: 3,
                        pb: 1,
                        alignItems: 'flex-start',
                      }}
                    >
                      <Box
                        sx={{
                          width: '4px',
                          height: '4px',
                          backgroundColor: '#8b5cf6',
                          borderRadius: '50%',
                          mt: 1,
                          mr: 2,
                          flexShrink: 0,
                        }}
                      />
                      <ListItemText 
                        primary={subItem} 
                        primaryTypographyProps={{ 
                          variant: 'body2', 
                          color: '#64748b',
                          fontSize: { xs: '0.85rem', md: '0.95rem' },
                          lineHeight: 1.6,
                          fontWeight: '400',
                        }} 
                      />
                    </ListItem>
                  ))}
                </List>
              )}
            </Box>
          ))}
          
          {/* Footer */}
          <Box 
            sx={{ 
              mt: 4,
              p: 3,
              background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
              borderRadius: '12px',
              border: '1px solid rgba(226, 232, 240, 0.6)',
              textAlign: 'center',
            }}
          >
            <Typography 
              variant="body2" 
              sx={{ 
                color: '#64748b',
                fontSize: { xs: '0.8rem', md: '0.9rem' },
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

export default PrivacyPolicyModal;
