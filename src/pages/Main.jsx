import { Box } from '@mui/material';
import Seo from '../components/Seo';
import Banner from '../components/Banner';
import MovieCarousel from '../components/MovieCarousel';
import FeaturedMovies from '../components/FeaturedMovies';
import StreamingServices from '../components/StreamingServices';
import PricingComparison from '../components/PricingComparison';

export default function Main() {
  return (
    <Box m="20px">
      <Seo 
        title="TV House - Assista Tudo em Um Só Lugar" 
        description="Tenha acesso a milhares de filmes, séries e canais ao vivo por um único preço acessível!" 
        keywords="streaming, netflix, disney+, hbo max, filmes, séries, tv online" 
      />
      <Banner />
      <MovieCarousel />
      <FeaturedMovies />
      <StreamingServices />
      <PricingComparison />
    </Box>
  );
}