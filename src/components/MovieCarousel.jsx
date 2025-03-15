import * as React from 'react';
import Box from '@mui/material/Box';
import Title from './Title';
import { keyframes } from '@mui/system';
import { WhatsAppCTA } from './WhatsAppCTA';

// Animações para deslizar as imagens
const slideLeft = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
`;

const slideRight = keyframes`
  from { transform: translateX(-50%); }
  to { transform: translateX(0); }
`;

const movies = [
  "https://www.themoviedb.org/t/p/w1280/viUricKwbToOJIRrKOUr0Bg9rOY.jpg",
  "https://www.themoviedb.org/t/p/w1280/xjj5n62FTqT4jLX8LO0sSyI0MGK.jpg",
  "https://www.themoviedb.org/t/p/w1280/7zL6RxMPmpPSdU5OTdVC4dtiKcr.jpg",
  "https://www.themoviedb.org/t/p/w1280/66Y6qdAmCTtzrtGSPrwHihIZP0W.jpg",
  "https://www.themoviedb.org/t/p/w1280/tsVRsCGJ4bZG1xWfQkUgt71ystL.jpg",
  "https://www.themoviedb.org/t/p/w1280/tfM1T6tAivjvy0sLwt6Y9WvlmzB.jpg",
  "https://www.themoviedb.org/t/p/w1280/bjp5zXaIG5tOCtyzUzuf4lsdZub.jpg",
];

const series = [
  "https://www.themoviedb.org/t/p/w1280/30erzlzIOtOK3k3T3BAl1GiVMP1.jpg",
  "https://www.themoviedb.org/t/p/w1280/5qfd0e2uMbVInX3YdeFbDsfxi1t.jpg",
  "https://www.themoviedb.org/t/p/w1280/1Wtfucko1wQBAN4rJbRnqA6kqQQ.jpg",
  "https://www.themoviedb.org/t/p/w1280/6GDW4EsgsXlYrL1ASb5eCHQK4er.jpg",
  "https://www.themoviedb.org/t/p/w1280/6gcHdboppvplmBWxvROc96NJnmm.jpg",
  "https://www.themoviedb.org/t/p/w1280/l2ezB41chGDjXcKo24lseuXYtKP.jpg",
  "https://www.themoviedb.org/t/p/w1280/2zmTngn1tYC1AvfnrFLhxeD82hz.jpg",
];

export default function MovieCarousel() {
  return (
    <Box component="section" sx={{ py: 4, textAlign: 'center', overflow: 'hidden', maxWidth: '1600px', margin: '0 auto' }}>
      <Title 
        title="O conteúdo de todos streamings"
        highlight="em uma única plataforma!"
      />

      {/* Carrossel de Filmes */}
      <Box sx={{ display: 'flex', overflow: 'hidden', whiteSpace: 'nowrap', position: 'relative', mt: 4 }}>
        <Box sx={{ display: 'flex', gap: 1, animation: `${slideLeft} 10s linear infinite`, width: '200%' }}>
          {[...movies, ...movies].map((movie, index) => (
            <Box key={index} component="img" loading="lazy" src={movie} alt={`Filme ${index + 1}`} sx={{ width: '218px', height: '327px', flexShrink: 0 }} />
          ))}
        </Box>
      </Box>
      {/* Carrossel de Séries (movendo para a direita) */}
      <Box sx={{ display: 'flex', overflow: 'hidden', whiteSpace: 'nowrap', position: 'relative', mt: 1 }}>
        <Box sx={{ display: 'flex', gap: 1, animation: `${slideRight} 10s linear infinite`, width: '200%' }}>
          {[...series, ...series].map((serie, index) => (
            <Box key={index} component="img" loading="lazy" src={serie} alt={`Série ${index + 1}`} sx={{ width: '218px', height: '327px', flexShrink: 0 }} />
          ))}
        </Box>
      </Box>
      <WhatsAppCTA />
    </Box>
  );
}