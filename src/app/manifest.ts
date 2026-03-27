import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Bit4code',
    short_name: 'Bit4code',
    description:
      'Tecnologia com presença forte, execução sólida e visual profissional.',
    start_url: '/',
    display: 'standalone',
    background_color: '#060606',
    theme_color: '#d9328a',
    lang: 'pt-BR',
    icons: [
      {
        src: '/icon',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
