import type { Metadata, Viewport } from 'next';
import { Fredoka, Poppins } from 'next/font/google';
import './globals.css';

const fredoka = Fredoka({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-heading',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

const siteUrl = 'https://www.camillacarvalhaes.com.br';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Carvalhaes | Arquitetura & Expansão de Marcas',
    template: '%s | Carvalhaes Arquitetura',
  },
  description:
    'Projetos arquitetônicos de alto padrão para redes de franquias. Aumente o valor de mercado da sua marca com Camilla Carvalhaes — +1.000 lojas implantadas.',
  applicationName: 'Carvalhaes Arquitetura & Expansão',
  authors: [{ name: 'Camilla Carvalhaes' }],
  creator: 'Camilla Carvalhaes',
  publisher: 'Carvalhaes Arquitetura & Expansão',
  category: 'architecture',
  keywords: [
    'arquitetura de franquias',
    'expansão de marcas',
    'projeto de loja',
    'layout de franquia',
    'Camilla Carvalhaes',
  ],
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    title: 'Carvalhaes | Arquitetura & Expansão de Marcas',
    description:
      'Projetos arquitetônicos pensados para valorizar marcas, atrair clientes e gerar mais resultados.',
    url: siteUrl,
    siteName: 'Carvalhaes Arquitetura & Expansão',
    type: 'website',
    locale: 'pt_BR',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Carvalhaes Arquitetura & Expansão de Marcas',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Carvalhaes | Arquitetura & Expansão de Marcas',
    description:
      'Projetos arquitetônicos pensados para valorizar marcas, atrair clientes e gerar mais resultados.',
    images: ['/og-image.jpg'],
  },
};

export const viewport: Viewport = {
  themeColor: '#5b2a6e',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${fredoka.variable} ${poppins.variable}`}>
      <body>{children}</body>
    </html>
  );
}
