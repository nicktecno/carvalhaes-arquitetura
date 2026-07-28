import Image from 'next/image';
import {
  contato,
  heroStats,
  publicos,
  servicos,
  sobreParagrafos,
  projetos,
  depoimento,
} from '@/lib/content';
import {
  StoreIcon,
  ShopIcon,
  BuildingIcon,
  WhatsAppIcon,
  ArrowIcon,
} from '@/components/icons';
import Carousel from '@/components/Carousel';
import BeforeAfter from '@/components/BeforeAfter';

const whatsappUrl = `https://wa.me/${contato.whatsapp}?text=${encodeURIComponent(
  'Olá Camilla! Vim pelo site e gostaria de saber mais sobre os projetos de arquitetura e expansão.'
)}`;

const publicoIcons = [<StoreIcon key="s" />, <ShopIcon key="sh" />, <BuildingIcon key="b" />];

export default function Home() {
  return (
    <>
      {/* ---------- Header ---------- */}
      <header className="header">
        <div className="container">
          <a className="brand" href="#top">
            <Image src="/images/logo.jpeg" alt="Carvalhaes Arquitetura & Expansão" width={52} height={52} />
            <span className="brand-name">
              carvalhaes
              <span>Arquitetura &amp; Expansão</span>
            </span>
          </a>
          <nav className="nav">
            <a href="#publico">Para quem</a>
            <a href="#sobre">Sobre</a>
            <a href="#servicos">Serviços</a>
            <a href="#portfolio">Portfólio</a>
            <a href="#depoimento">Depoimentos</a>
          </nav>
          <a className="btn btn-primary" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            Fale comigo
          </a>
        </div>
      </header>

      {/* ---------- Hero ---------- */}
      <section id="top" className="hero">
        <div className="hero-pattern" />
        <div className="container">
          <div className="hero-grid">
            <div>
              <span className="eyebrow">Arquitetura · Expansão de marcas</span>
              <h1>
                Aumentando o valor de mercado da sua rede de{' '}
                <span className="accent">franquias</span> com projetos de alto padrão!
              </h1>
              <p className="lead">
                Projetos arquitetônicos pensados para valorizar marcas, atrair clientes e gerar mais resultados.
              </p>
              <div className="hero-cta">
                <a className="btn btn-primary" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  Quero meu projeto <ArrowIcon />
                </a>
                <a className="btn btn-outline" href="#portfolio">
                  Ver portfólio
                </a>
              </div>
              <div className="hero-stats">
                {heroStats.map((s) => (
                  <div className="stat" key={s.label}>
                    <b>{s.valor}</b>
                    <span>{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="hero-photo">
              <Image
                src="/images/camilla-hero.jpeg"
                alt="Camilla Carvalhaes, arquiteta especialista em expansão de marcas"
                width={700}
                height={875}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Para quem ---------- */}
      <section id="publico" className="section publicos">
        <div className="container">
          <h2 className="section-title">Para quem é nosso trabalho?</h2>
          <p className="section-lead">
            Atuo ao lado de quem quer crescer com consistência, identidade e estratégia.
          </p>
          <div className="card-grid">
            {publicos.map((p, i) => (
              <article className="card" key={p.titulo}>
                <div className="card-icon">{publicoIcons[i]}</div>
                <h3>{p.titulo}</h3>
                <p>{p.texto}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Sobre ---------- */}
      <section id="sobre" className="section sobre">
        <div className="container">
          <div className="sobre-grid">
            <div>
              <span className="eyebrow">Muito prazer</span>
              <h2>
                Me chamo <span className="accent">Camilla!</span>
              </h2>
              {sobreParagrafos.map((par, i) => (
                <p key={i}>{par}</p>
              ))}
              <span className="cau">{contato.cau}</span>
            </div>
            <div className="sobre-photo">
              <Image
                src="/images/camilla-sobre.jpeg"
                alt="Camilla Carvalhaes"
                width={620}
                height={825}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Serviços ---------- */}
      <section id="servicos" className="section servicos">
        <div className="container">
          <h2 className="section-title">Conheça nossos serviços</h2>
          <p className="section-lead">
            Do projeto à padronização da marca — soluções replicáveis, funcionais e de fácil execução.
          </p>
          <div className="card-grid">
            {servicos.map((s) => (
              <article className="card servico-card" key={s.titulo}>
                <h3>{s.titulo}</h3>
                <p>{s.texto}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Portfólio ---------- */}
      <section id="portfolio" className="section portfolio">
        <div className="container">
          <h2 className="section-title light">Projetos que viraram redes</h2>
          <p className="section-lead" style={{ color: 'var(--text-light)' }}>
            Marcas que confiaram no meu olhar para crescer de forma escalável.
          </p>
          <div className="portfolio-grid">
            {projetos.map((proj, i) => (
              <article
                className={`projeto${proj.destaque ? ' featured' : ''}`}
                key={proj.marca + i}
              >
                {proj.imagens ? (
                  <Carousel imagens={proj.imagens} alt={proj.marca} />
                ) : proj.antes && proj.depois ? (
                  <BeforeAfter antes={proj.antes} depois={proj.depois} alt={proj.marca} />
                ) : (
                  <Image
                    src={proj.imagem as string}
                    alt={proj.marca}
                    width={900}
                    height={675}
                  />
                )}
                <div className="projeto-overlay">
                  <span className="projeto-tag">{proj.tag}</span>
                  <span className="marca">{proj.marca}</span>
                  {proj.local && <span className="projeto-local">{proj.local}</span>}
                  <p>{proj.descricao}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Depoimento ---------- */}
      <section id="depoimento" className="section depoimento">
        <div className="container">
          <div className="quote-mark">&ldquo;</div>
          <blockquote>{depoimento.texto}</blockquote>
          <div className="autor">
            <b>{depoimento.autor}</b>
            <span>{depoimento.cargo}</span>
          </div>
        </div>
      </section>

      {/* ---------- CTA final ---------- */}
      <section className="section cta">
        <div className="container">
          <h2>Vamos tirar sua ideia do papel?</h2>
          <p>
            Conte comigo para transformar sua marca em uma rede forte, coesa e com personalidade.
          </p>
          <a className="btn btn-primary" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            Falar no WhatsApp <ArrowIcon />
          </a>
        </div>
      </section>

      {/* ---------- Footer ---------- */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="brand">
              <Image src="/images/logo.jpeg" alt="Carvalhaes" width={48} height={48} style={{ borderRadius: 10 }} />
              <span className="brand-name">
                carvalhaes
                <span>Arquitetura &amp; Expansão</span>
              </span>
            </div>
            <nav className="footer-links">
              <a href="#publico">Para quem</a>
              <a href="#sobre">Sobre</a>
              <a href="#servicos">Serviços</a>
              <a href="#portfolio">Portfólio</a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </nav>
          </div>
          <div className="footer-bottom">
            © {new Date().getFullYear()} Camilla Carvalhaes · Arquitetura &amp; Expansão de Marcas · {contato.cau}
          </div>
        </div>
      </footer>

      {/* ---------- WhatsApp float ---------- */}
      <a
        className="whatsapp-float"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
      >
        <WhatsAppIcon />
      </a>
    </>
  );
}
