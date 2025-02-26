import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Title from './Title';
import Box from '@mui/material/Box';
import { WhatsAppCTA } from './WhatsAppCTA';

const movies = [
  {
    title: "Filmes incríveis",
    emoji: "🎥",
    image: "https://appflixtvon.com/site-novo/asset/img/fotos//FILMES-1.webp",
    synopsis: "Explore um vasto catálogo com os maiores sucessos do cinema, desde clássicos atemporais até os lançamentos mais esperados, tudo em alta definição."
  },
  {
    title: "Séries imperdíveis",
    emoji: "📺",
    image: "https://appflixtvon.com/site-novo/asset/img/fotos//SERIES-1.webp",
    synopsis: "Maratone temporadas completas das séries mais populares e premiadas, com conteúdos que vão do suspense ao drama, ação e comédia."
  },
  {
    title: "Canais adultos",
    emoji: "🔞",
    image: "https://appflixtvon.com/site-novo/asset/img/fotos//ADULTO-1.webp",
    synopsis: "Acesso exclusivo a canais adultos, protegidos por senha para garantir sua privacidade e segurança familiar."
  },
  {
    title: "Canais infantis",
    emoji: "👦🎈",
    image: "https://appflixtvon.com/site-novo/asset/img/fotos//INFANTIL-1.webp",
    synopsis: "Diversão garantida para as crianças com uma programação segura, incluindo os melhores conteúdos da Disney, Nickelodeon, Cartoon Network e muito mais!"
  },
  {
    title: "Esportes ao vivo",
    emoji: "⚽🏆",
    image: "https://appflixtvon.com/site-novo/asset/img/fotos//ESPORTES-1.webp",
    synopsis: "Acompanhe seu time do coração e assista a eventos esportivos ao vivo, incluindo futebol, artes marciais, basquete, automobilismo e muito mais!"
  },
  {
    title: "Animes Crunchyroll",
    emoji: "🎌🔥",
    image: "https://appflixtvon.com/site-novo/asset/img/fotos//ANIMES-1.webp",
    synopsis: "Tenha acesso a um catálogo completo de animes atualizados, com legendas e dublagens em alta qualidade para você assistir quando quiser."
  }
];

export default function FeaturedMovies() {
  return (
    <Box component="section" sx={{ py: 4, textAlign: 'center', overflow: 'hidden', maxWidth: '1200px', margin: '0 auto' }}>
      <Title 
        title=" Confira o que você vai encontrar"
        highlight="aqui na TV House"
      />
      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 4, mt: 6 }}>
        {movies.map((movie, index) => (
          <Card
            key={index}
            sx={{
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              '&:hover': {
                transform: 'scale(1.05)',
              },
            }}
          >
            <Box component="img" src={movie.image} alt={movie.title} sx={{ width: '100%', height: 'auto', borderRadius: '4px 4px 0 0' }} />
            <CardContent sx={{ padding: '24px' }}>
              <Typography variant="h4" component="h3" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                {movie.title} {movie.emoji}
              </Typography>
              <Typography variant="subtitle1" sx={{ mt: 1, textAlign: 'left' }}>{movie.synopsis}</Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
      <WhatsAppCTA />
    </Box>
  );
}