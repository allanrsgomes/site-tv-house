import { Box } from '@mui/material'
import Banner from '../components/Banner';
import MovieCarousel from '../components/MovieCarousel';
import FeaturedMovies from '../components/FeaturedMovies';
import StreamingServices from '../components/StreamingServices';
import PricingComparison from '../components/PricingComparison';

export default function Main() {
  return (
    <Box m="20px">
      <Banner />
      <MovieCarousel />
      <FeaturedMovies />
      <StreamingServices />
      <PricingComparison />
    </Box>
  );
}