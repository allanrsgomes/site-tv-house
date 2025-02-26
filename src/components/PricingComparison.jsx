import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Title from './Title';
import { WhatsAppCTA } from './WhatsAppCTA';
import { streamingServices } from '../services/streamingServices';

const totalOriginalPrice = streamingServices.reduce((acc, service) => acc + service.price, 0);
const ourPrice = 29.90;

export default function PricingComparison() {
  return (
    <Box component="section" sx={{ py: 6, textAlign: 'center', overflow: 'hidden', maxWidth: '900px', margin: '0 auto' }}>
      <Title 
        title="Compare os"
        highlight="preços das assinaturas!"
      />
      <Container>
        <Paper elevation={3} sx={{ padding: 4, borderRadius: 4 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              {streamingServices.map((service, index) => (
                <Box key={index} sx={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', borderBottom: '1px solid #ddd', padding: '10px 0', fontSize: '1.1rem' }}>
                  <span>{service.name}</span>
                  <span>R${service.price.toFixed(2)}</span>
                </Box>
              ))}
            </Grid>
            <Grid item xs={12} md={6} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
              <Typography variant="h5" sx={{ color: 'white', backgroundColor: 'red', fontWeight: 'bold', padding: '12px 20px', borderRadius: '8px', marginBottom: '16px' }}>
                Você pagaria o total de: R$ {totalOriginalPrice.toFixed(2)}/mês
              </Typography>
              <Typography variant="h4" sx={{ color: 'green', fontWeight: 'bold', backgroundColor: '#e8f5e9', padding: '12px 20px', borderRadius: '8px' }}>
                Nosso serviço pode chegar a R${ourPrice.toFixed(2)}/mês
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Container>
      <WhatsAppCTA />
    </Box>
  );
}