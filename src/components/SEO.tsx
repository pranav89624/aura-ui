import { Helmet, HelmetProvider } from 'react-helmet-async';

export default function SEO() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Aura UI | The Future of Digital Experience</title>
        <meta name="description" content="Award-winning digital agency specializing in 3D web experiences, branding, and high-conversion interfaces." />
        <meta name="keywords" content="web design, 3d website, react three fiber, agency, award winning" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aura.agency/" />
        <meta property="og:title" content="Aura UI | The Future of Digital Experience" />
        <meta property="og:description" content="Award-winning digital agency specializing in 3D web experiences." />
        <meta property="og:image" content="https://aura.agency/og-image.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://aura.agency/" />
        <meta property="twitter:title" content="Aura UI | The Future of Digital Experience" />
        <meta property="twitter:description" content="Award-winning digital agency specializing in 3D web experiences." />
        <meta property="twitter:image" content="https://aura.agency/og-image.jpg" />
        
        {/* Theme Color for Mobile Browsers */}
        <meta name="theme-color" content="#f97316" />
      </Helmet>
    </HelmetProvider>
  );
}