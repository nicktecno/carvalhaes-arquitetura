export const contato = {
  whatsapp: '5511917418011',
  instagram: 'https://instagram.com/',
  email: 'contato@carvalhaes.arq.br',
  cau: 'CAU A104001-4',
};

export const heroStats = [
  { valor: '+13', label: 'anos de experiência' },
  { valor: '+1.000', label: 'lojas implantadas' },
  { valor: '+90%', label: 'da rede sob sua orientação' },
];

export const publicos = [
  {
    icone: 'store',
    titulo: 'Franqueadores',
    texto: 'que querem escalar com consistência.',
  },
  {
    icone: 'shop',
    titulo: 'Lojas independentes',
    texto: 'que desejam loja atrativa e funcional.',
  },
  {
    icone: 'building',
    titulo: 'Empresas em transição',
    texto: 'que precisam montar ou otimizar seu setor de expansão.',
  },
];

export const servicos = [
  {
    titulo: 'Projetos de layout para lojas/franquias',
    texto: 'Projetos funcionais, replicáveis e de fácil execução.',
  },
  {
    titulo: 'Manuais de franquia e implantação',
    texto: 'Do passo a passo da obra à padronização da marca.',
  },
  {
    titulo: 'Consultoria para estruturação interna',
    texto: 'Monte seu próprio time de implantação dentro da empresa.',
  },
  {
    titulo: 'Rollout & atualização de layout',
    texto: 'Atualize o visual da rede sem perder identidade.',
  },
  {
    titulo: 'Lojas independentes',
    texto: 'Loja bonita não é só para franquia. Nós te ajudamos a criar uma!',
  },
];

export const sobreParagrafos = [
  'Sou arquiteta há mais de 13 anos e, nesse tempo, descobri que o que mais me move é ajudar marcas a crescerem com alma, identidade e propósito.',
  'Tive o privilégio (e o desafio!) de passar mais de 6 anos cuidando da expansão da Oggi Sorvetes. Foram mil lojas abertas por todo o Brasil — e com cada uma delas, aprendi mais sobre o que funciona de verdade na hora de transformar uma marca em uma rede forte, coesa e com personalidade.',
  'Hoje, meu trabalho é ajudar franqueadores e empresários a tirarem suas ideias do papel com leveza, criatividade e estratégia.',
  'Gosto de criar projetos que fazem sentido — que facilitam o dia a dia e que respeitam aquilo que torna cada negócio único.',
  'Sou movida por autenticidade, empatia, criatividade e conexão. E se você procura alguém para caminhar ao seu lado, com olhar cuidadoso e experiência de quem já esteve no campo de batalha, vai ser um prazer fazer parte da sua história.',
];

export type Projeto = {
  imagem?: string;
  imagens?: string[];
  antes?: string;
  depois?: string;
  marca: string;
  local?: string;
  tag: string;
  descricao: string;
  destaque?: boolean;
};

export const projetos: Projeto[] = [
  {
    imagem: '/images/projeto-oggi.jpeg',
    marca: 'Oggi Sorvetes',
    local: 'Brasil · +1.000 lojas',
    tag: 'Expansão de rede',
    descricao:
      'Elaboração de projeto e cronograma de lojas de rua, mercados e shoppings — mais de 1.000 unidades implantadas em 6 anos.',
    destaque: true,
  },
  {
    imagem: '/images/proj-bio-acai.png',
    marca: 'Bio Açaí',
    local: 'Projeto arquitetônico',
    tag: 'Açaiteria',
    descricao:
      'Projeto arquitetônico com setorização de fluxo, ambientação e identidade de marca aplicada ao ponto de venda.',
  },
  {
    imagens: [
      '/images/projeto-lanchonete-1.jpeg',
      '/images/projeto-lanchonete-2.jpeg',
      '/images/projeto-lanchonete-3.jpeg',
    ],
    marca: 'Mundo Natural',
    local: 'Rio de Janeiro',
    tag: 'Food service · Rollout',
    descricao:
      'Rollout de loja e projeto executivo: layout de lanchonete com fluxo otimizado, bancadas, vitrine e comunicação visual em renders 3D.',
    destaque: true,
  },
  {
    imagem: '/images/proj-acai-oggi.png',
    marca: 'Açaí da Oggi',
    local: 'Projeto conceito',
    tag: 'Açaiteria',
    descricao:
      'Projeto conceito e levantamento do custo para montar a franquia — obra e comunicação visual.',
  },
  {
    imagem: '/images/proj-bardega.png',
    marca: 'Bardega do Patrão',
    local: 'Diadema · SP',
    tag: 'Bar & restaurante',
    descricao:
      'Projeto de fachada e ambientação com identidade marcante, do conceito ao executivo.',
  },
  {
    imagem: '/images/proj-capiglu.png',
    marca: 'CapiGLU Açaiteria',
    local: 'Mogi das Cruzes · SP',
    tag: 'Açaiteria',
    descricao:
      'Projeto e implantação da loja com fachada e ambiente pensados para atrair e converter clientes.',
  },
  {
    imagem: '/images/proj-praca-moca.png',
    marca: 'Praça da Moça Café',
    local: 'Shopping Santana · Raposo',
    tag: 'Quiosque',
    descricao:
      'Projetos de quiosque para shopping, com layout compacto e alto giro de operação.',
  },
  {
    imagem: '/images/proj-oggi-quiosque.png',
    marca: 'Oggi Sorvetes · Quiosque',
    local: 'Mercados & shoppings',
    tag: 'Quiosque',
    descricao:
      'Projeto e implantação de quiosques da marca em mercados e shoppings, com padronização replicável.',
  },
  {
    antes: '/images/proj-oficina-antes.png',
    depois: '/images/proj-oficina-depois.png',
    marca: 'Oficina dos Assados',
    local: 'São Paulo · SP',
    tag: 'Branding & reforma',
    descricao:
      'Branding e reforma completos — arraste para comparar a loja atual com o novo conceito.',
  },
];

export const depoimento = {
  texto:
    'Com grande satisfação, recomendo a Camilla, que trabalhou conosco na Oggi Sorvetes por mais de cinco anos. Durante esse período, ela se destacou como a responsável pela implantação de nossas lojas e pelo desenvolvimento de novos projetos. Sua liderança foi fundamental para o crescimento da rede, que ultrapassou a marca de 1.000 lojas, das quais mais de 90% foram implantadas sob sua orientação. Tenho plena confiança de que a Camilla trará resultados positivos com seu novo empreendimento de projetos, ajudando outras marcas no processo de Expansão.',
  autor: 'Rodrigo Mauad',
  cargo: 'Sócio — Oggi Sorvetes',
};
