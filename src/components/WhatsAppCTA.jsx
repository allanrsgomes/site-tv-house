import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import { FaWhatsapp } from "react-icons/fa";
import { keyframes } from '@mui/system';

// Animação de luz passando sobre o texto
const shine = keyframes`
  0% { background-position: -200%; }
  100% { background-position: 200%; }
`;

export const WhatsAppCTA = () => {
  return (
    <Box display="flex" justifyContent="center" mt={4}>
      <ButtonBase
        sx={{
          backgroundColor: 'green',
          color: 'white',
          padding: '16px 32px',
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          borderRadius: '8px',
          fontWeight: 'bold',
          fontSize: '1.2rem',
          boxShadow: '0 4px 15px rgba(0, 255, 0, 0.4)',
          position: 'relative',
          overflow: 'hidden',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          backgroundImage: 'linear-gradient(120deg, rgba(0,255,0,0.2) 0%, rgba(255,255,255,0.5) 50%, rgba(0,255,0,0.2) 100%)',
          backgroundSize: '200%',
          animation: `${shine} 2s linear infinite`,
          '&:hover': {
            transform: 'scale(1.05)',
            boxShadow: '0 6px 20px rgba(0, 255, 0, 0.6)',
          },
        }}
        onClick={() => window.open('https://wa.me/48988591509', '_blank')}
      >
        <FaWhatsapp size={24} /> SAIBA MAIS
      </ButtonBase>
    </Box>
  );
}