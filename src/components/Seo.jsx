import { Helmet } from "react-helmet-async";

export default function Seo({ title, description, keywords }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="%PUBLIC_URL%/banner.png" />
      <meta property="og:type" content="website" />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "TV House Streaming",
          "description": "Assista filmes e séries ilimitados pagando pouco.",
          "brand": { "@type": "Brand", "name": "TV House" },
          "offers": {
            "@type": "Offer",
            "price": "44.90",
            "priceCurrency": "BRL",
            "availability": "https://schema.org/InStock"
          }
        })}
      </script>
    </Helmet>
  );
}