import Link from 'next/link';
import HeroArt from '@/components/HeroArt';
import BrandLogo from '@/components/BrandLogo';

const serviceCards = [
  {
    title: 'Programação sob medida',
    text: 'Projetos web, sistemas internos, plataformas SaaS, APIs e integrações com arquitetura limpa, foco em desempenho e manutenção simples.',
  },
  {
    title: 'Automação inteligente',
    text: 'Fluxos operacionais, integrações de negócio e redução de tarefas repetitivas com segurança e rastreabilidade.',
  },
  {
    title: 'IA aplicada a negócios',
    text: 'Soluções com inteligência artificial para atendimento, análise, produtividade, classificação de dados e apoio à decisão.',
  },
  {
    title: 'TI e infraestrutura digital',
    text: 'Organização de ambientes, arquitetura, suporte e evolução de ecossistemas digitais com visão profissional.',
  },
  {
    title: 'CyberSecurity',
    text: 'Boas práticas de proteção, fortalecimento de superfícies públicas, hardening inicial e orientação para ambientes mais resilientes.',
  },
  {
    title: 'Produtos proprietários',
    text: 'Desenvolvimento e operação de soluções próprias como ViraLink e outras frentes SaaS desenhadas para escala.',
  },
];

const metrics = [
  { value: 'Alta', label: 'performance e foco em carregamento rápido' },
  { value: 'Senior', label: 'nível de estrutura e organização do projeto' },
  { value: 'Moderna', label: 'base tecnológica com Next.js e TypeScript' },
  { value: 'Pronto', label: 'para publicação em ambiente Firebase' },
];

export default function HomePage() {
  return (
    <>
      <section className="hero hero--premium bg-background overflow-hidden py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="hero-premium-shell grid grid-cols-1 lg:grid-cols-[1.02fr_0.98fr] gap-12 items-center">
            <div className="hero-premium-content space-y-8">
              <div className="eyebrow inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest border border-primary/20">
                BIT4CODE • presença digital com padrão profissional
              </div>

              <h1 className="text-4xl lg:text-6xl font-black leading-tight">
                Engenharia digital para marcas, operações e produtos que exigem
                presença forte.
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                A Bit4code desenvolve soluções com foco em programação, automação,
                inteligência artificial, TI, CyberSecurity, SaaS e produtos próprios
                como o ViraLink. Unimos identidade visual, execução técnica e
                performance para entregar presença digital séria e moderna.
              </p>

              <div className="hero-actions flex flex-wrap gap-4">
                <Link href="/contact" className="button bg-primary text-primary-foreground px-8 py-4 rounded-lg font-bold hover:opacity-90 transition-all shadow-lg glow-magenta">
                  Falar com a Bit4code
                </Link>
                <Link href="/services" className="button-secondary border border-border px-8 py-4 rounded-lg font-bold hover:bg-muted transition-all">
                  Conhecer serviços
                </Link>
              </div>

              <div className="badge-row flex flex-wrap gap-2" aria-label="Áreas de atuação">
                {['Programação', 'Automação', 'IA', 'TI', 'CyberSecurity', 'SaaS', 'ViraLink'].map(b => (
                  <span key={b} className="badge bg-muted px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider opacity-70">
                    {b}
                  </span>
                ))}
              </div>
            </div>

            <div className="hero-premium-side relative">
              <div className="hero-visual-card hero-visual-card--premium relative bg-card/50 backdrop-blur-xl border border-border/50 p-8 lg:p-12 rounded-[2rem] shadow-2xl overflow-hidden min-h-[400px] lg:min-h-[560px]">
                <div className="hero-brand-lockup hero-brand-lockup--premium relative z-10 flex flex-col gap-4 mb-8">
                  <BrandLogo size="lg" variant="full" />
                  <div className="hero-brand-note text-[10px] text-muted-foreground uppercase tracking-widest bg-white/5 border border-white/10 px-4 py-2 rounded-full w-fit">
                    identidade proprietária criada em SVG para uso institucional e digital
                  </div>
                </div>

                <div className="hero-floating-stats flex gap-4 absolute bottom-8 right-8 z-20">
                  <div className="hero-floating-card min-w-[140px] p-4 rounded-2xl border border-white/10 bg-black/60 backdrop-blur-md shadow-2xl">
                    <span className="hero-floating-label block text-[10px] text-muted-foreground uppercase tracking-widest mb-1">Presença</span>
                    <strong className="text-lg font-bold text-white">Premium</strong>
                  </div>
                  <div className="hero-floating-card min-w-[140px] p-4 rounded-2xl border border-white/10 bg-black/60 backdrop-blur-md shadow-2xl">
                    <span className="hero-floating-label block text-[10px] text-muted-foreground uppercase tracking-widest mb-1">Base</span>
                    <strong className="text-lg font-bold text-white">Next.js</strong>
                  </div>
                </div>

                <HeroArt />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="section-intro text-xl md:text-2xl font-medium text-muted-foreground max-w-3xl mx-auto mb-16 text-center">
            Estrutura institucional séria para presença digital, validação, branding e credibilidade.
          </div>

          <div className="stats-grid grid grid-cols-2 md:grid-cols-4 gap-8" role="list" aria-label="Destaques do projeto">
            {metrics.map((item) => (
              <div key={item.label} className="stat flex flex-col items-center" role="listitem">
                <strong className="text-4xl font-black text-primary mb-2">{item.value}</strong>
                <span className="stat-label text-xs uppercase tracking-widest text-muted-foreground text-center">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-16">
            <h2 className="section-title text-4xl lg:text-5xl font-black mb-6">O que a Bit4code entrega</h2>
            <p className="section-intro text-lg text-muted-foreground">
              Soluções modernas para empresas que precisam estruturar produtos, automatizar
              processos, fortalecer presença institucional e evoluir operações com tecnologia.
            </p>
          </div>

          <div className="grid-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCards.map((item) => (
              <article key={item.title} className="card p-8 bg-card border border-border/50 rounded-2xl hover:border-primary/50 transition-all duration-300">
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section py-24 bg-card border-y border-border/50">
        <div className="container mx-auto px-4 text-grid grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="text-block">
            <h2 className="text-3xl font-black mb-6">Marca preparada para múltiplos usos</h2>
            <p className="text-muted-foreground leading-relaxed">
              O sistema agora possui ícone, imagem social, manifest e marca vetorial
              em código, permitindo aplicação consistente no navegador, redes sociais,
              atalhos de dispositivo e futuras interfaces de produto.
            </p>
          </div>

          <div className="text-block">
            <h2 className="text-3xl font-black mb-6">Leveza, velocidade e percepção premium</h2>
            <p className="text-muted-foreground leading-relaxed">
              A combinação de Next.js, TypeScript, arte gerada em código, SEO básico,
              metadados ricos e cabeçalhos de segurança cria uma presença mais robusta,
              profissional e pronta para publicação no Firebase.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
