import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Title from './Title';
import { streamingServices } from '../services/streamingServices';

export default function StreamingServices() {
  return (
    <Box component="section" sx={{ py: 4, textAlign: 'center', overflow: 'hidden', maxWidth: '1200px', margin: '0 auto' }}>
      <Title 
        title="Tenha acesso a"
        highlight="todos serviços de streaming!"
      />
      <Container>
        <Grid container spacing={4} display="flex" alignItems="flex-end">
          {/* Lado esquerdo - Imagem */}
          <Grid item xs={12} md={6} display="flex" justifyContent="center">
            <Box
              component="img"
              src="assets/capa-site.png"
              alt="TV com streaming"
              loading="lazy"
              sx={{ maxWidth: '100%', height: 'auto' }}
            />
          </Grid>
          {/* Lado direito - Quadro com streamings */}
          <Grid item xs={12} md={6} display="flex" justifyContent="center" alignItems="center">
            <Paper elevation={6} sx={{ padding: 4, borderRadius: '12px', backgroundColor: '#121212', textAlign: 'center', height: '100%' }}>
              <Grid container spacing={2} justifyContent="center">
                {streamingServices.map((service, index) => (
                  <Grid item xs={6} sm={4} md={3} key={index}>
                    <Box
                      component="img"
                      src={service.logo}
                      alt={service.name}
                      loading="lazy"
                      sx={{ 
                        height: 120,
                        width: 120,
                        border: '1px solid #333',
                        borderRadius:'12px',
                        backgroundColor: '#fff',
                        padding: 1,
                        transition: 'transform 0.3s ease', 
                        '&:hover': { transform: 'scale(1.1) rotate(5deg)' } 
                      }}
                    />
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}