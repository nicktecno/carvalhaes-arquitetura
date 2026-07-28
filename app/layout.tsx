import type { Metadata } from 'next';
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

export const metadata: Metadata = {
  title: 'Carvalhaes | Arquitetura & Expansão de Marcas',
  description:
    'Projetos arquitetônicos de alto padrão para redes de franquias. Aumente o valor de mercado da sua marca com Camilla Carvalhaes — +1.000 lojas implantadas.',
  keywords: [
    'arquitetura de franquias',
    'expansão de marcas',
    'projeto de loja',
    'layout de franquia',
    'Camilla Carvalhaes',
  ],
  openGraph: {
    title: 'Carvalhaes | Arquitetura & Expansão de Marcas',
    description:
      'Projetos arquitetônicos pensados para valorizar marcas, atrair clientes e gerar mais resultados.',
    type: 'website',
    locale: 'pt_BR',
  },
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
