import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { WhatsAppCTA } from './WhatsAppCTA';

export default function Banner() {
  return (
    <Box component="section" sx={{ py: 4 }}>
      <Container>
        <Grid container spacing={4} alignItems="center">
          {/* Lado esquerdo - Texto */}
          <Grid item xs={12} md={6} display="flex" flexDirection="column" alignItems="flex-start" textAlign="left">
            <Box
              component="img"
              src="assets/logo-white.png"
              alt="Logo"
              sx={{ maxWidth: '120px', height: 'auto', marginBottom: '20px' }}
            />
            <Typography variant="h2" component="h1" gutterBottom>
              CONTEÚDO ILIMITADO POR <strong>UM VALOR QUE CABE NO SEU BOLSO!</strong>
            </Typography>
            <Typography variant="h4">
              Tenha acesso a mais de 2 mil canais, incluindo Netflix, Disney+, HBO Max e mais, por um preço acessível! 
              Com o TV House, você economiza e assiste com qualidade, estabilidade e suporte dedicado.
            </Typography>
            <WhatsAppCTA />
          </Grid>

          {/* Lado direito - Imagem da TV */}
          <Grid item xs={12} md={6} display="flex" justifyContent="center">
            <Box
              component="img"
              src="assets/capa2-site.png"
              alt="TV com streaming"
              sx={{ maxWidth: '100%', height: 'auto' }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}