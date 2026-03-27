const items = [
  {
    title: 'Desenvolvimento de software',
    text: 'Criação de sites, sistemas web, plataformas administrativas, áreas de cliente, APIs e aplicações sob medida.',
  },
  {
    title: 'Automação e integrações',
    text: 'Conexão entre sistemas, automação de processos, fluxos de negócio e operações mais eficientes.',
  },
  {
    title: 'Inteligência Artificial aplicada',
    text: 'Uso de IA para atendimento, produtividade, organização de dados, conteúdo e apoio a decisões.',
  },
  {
    title: 'TI e estrutura tecnológica',
    text: 'Apoio técnico, desenho de arquitetura, evolução de ambientes digitais e organização operacional.',
  },
  {
    title: 'CyberSecurity',
    text: 'Boas práticas de proteção, reforço de segurança em ambientes públicos e visão preventiva sobre riscos digitais.',
  },
  {
    title: 'SaaS e produtos próprios',
    text: 'Desenvolvimento e operação de soluções digitais escaláveis, incluindo produtos como o ViraLink.',
  },
];

export const metadata = {
  title: 'Serviços',
  description: 'Conheça os serviços oferecidos pela Bit4code.',
};

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 pb-20">
      <section className="page-hero pt-20">
        <span className="eyebrow">Serviços</span>
        <h1 className="mt-6">Áreas de atuação da Bit4code</h1>
        <p className="mt-6 text-xl">
          Atuamos com tecnologia aplicada a negócios, produtos digitais e estruturação
          de operações com base profissional e moderna.
        </p>
      </section>

      <section className="section py-16">
        <div className="card-grid">
          {items.map((item) => (
            <article key={item.title} className="card">
              <h3>{item.title}</h3>
              <p className="mt-4">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section py-16 border-t border-white/5">
        <div className="two-columns">
          <article className="content-block">
            <h2>Visão técnica e de negócio</h2>
            <p className="mt-4">
              Não entregamos apenas interface. Estruturamos soluções com foco em
              organização, manutenção, performance e aderência à operação da empresa.
            </p>
          </article>

          <article className="content-block">
            <h2>Projetos sob medida</h2>
            <p className="mt-4">
              Cada empresa possui necessidades específicas. Por isso, a Bit4code atua
              tanto em projetos personalizados quanto em frentes de produto e SaaS.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}