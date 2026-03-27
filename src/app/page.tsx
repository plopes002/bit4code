import Link from 'next/link';

const services = [
  {
    title: 'Programação sob medida',
    text: 'Criação de sites, sistemas, plataformas web, APIs e soluções personalizadas com foco em desempenho, escalabilidade e manutenção simples.',
  },
  {
    title: 'Automação de processos',
    text: 'Integrações, fluxos automatizados e redução de tarefas repetitivas para aumentar produtividade e eficiência operacional.',
  },
  {
    title: 'Inteligência Artificial',
    text: 'Aplicações de IA para atendimento, análise, produtividade, conteúdo, classificação e apoio estratégico ao negócio.',
  },
  {
    title: 'TI e estrutura digital',
    text: 'Organização de ambientes, suporte técnico, arquitetura de soluções e evolução tecnológica para operações profissionais.',
  },
  {
    title: 'CyberSecurity',
    text: 'Fortalecimento de ambientes digitais, boas práticas de proteção, redução de superfície de risco e visão mais segura da operação.',
  },
  {
    title: 'Produtos e SaaS',
    text: 'Desenvolvimento de produtos próprios e plataformas digitais, incluindo iniciativas como o ViraLink.',
  },
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container mx-auto px-4 hero-grid">
          <div className="hero-content">
            <span className="eyebrow">Tecnologia com identidade, clareza e execução profissional</span>

            <h1>
              Soluções digitais para empresas que precisam de presença forte e tecnologia séria.
            </h1>

            <p className="hero-text mt-6">
              A Bit4code atua no desenvolvimento de software, automação, inteligência
              artificial, TI, CyberSecurity, SaaS e produtos digitais. Unimos visão
              técnica, apresentação profissional e foco em resultado.
            </p>

            <div className="hero-actions">
              <Link href="/contact" className="button">
                Entrar em contato
              </Link>
              <Link href="/services" className="button-secondary">
                Conhecer serviços
              </Link>
            </div>

            <div className="tag-list">
              <span className="tag">Programação</span>
              <span className="tag">Automação</span>
              <span className="tag">IA</span>
              <span className="tag">TI</span>
              <span className="tag">CyberSecurity</span>
              <span className="tag">SaaS</span>
              <span className="tag">ViraLink</span>
            </div>
          </div>

          <div className="hero-panel">
            <div className="hero-panel-card">
              <span className="hero-panel-label">Bit4code</span>
              <h2 className="mt-4">Presença digital institucional com base técnica sólida.</h2>
              <p className="mt-4">
                Estrutura leve, rápida, organizada e pronta para publicação em ambiente
                profissional.
              </p>
            </div>

            <div className="hero-metrics">
              <div className="metric-card">
                <small>Foco</small>
                <strong className="block mt-1">Performance</strong>
              </div>
              <div className="metric-card">
                <small>Base</small>
                <strong className="block mt-1">Next.js</strong>
              </div>
              <div className="metric-card">
                <small>Padrão</small>
                <strong className="block mt-1">Profissional</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section py-20">
        <div className="container mx-auto px-4">
          <div className="section-heading mb-12">
            <h2>O que a Bit4code oferece</h2>
            <p className="mt-4">
              Soluções modernas para empresas que precisam estruturar operações,
              produtos, automações e presença digital com qualidade.
            </p>
          </div>

          <div className="card-grid">
            {services.map((item) => (
              <article key={item.title} className="card">
                <h3>{item.title}</h3>
                <p className="mt-4 text-sm">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section py-20 border-t border-white/5">
        <div className="container mx-auto px-4 two-columns">
          <article className="content-block">
            <h2>Estrutura profissional para empresas</h2>
            <p className="mt-4">
              A Bit4code desenvolve soluções com foco em clareza técnica, design
              consistente, organização de código, boa experiência e valor real para o negócio.
            </p>
          </article>

          <article className="content-block">
            <h2>Tecnologia preparada para evoluir</h2>
            <p className="mt-4">
              Trabalhamos com arquitetura moderna e base escalável para apoiar desde
              presença institucional até sistemas, integrações, automações e produtos próprios.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}