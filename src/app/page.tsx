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
  { value: 'Sênior', label: 'nível de estrutura e organização do projeto' },
  { value: 'Moderna', label: 'base tecnológica com Next.js e TypeScript' },
  { value: 'Pronto', label: 'para publicação em ambiente Firebase' },
];

export default function HomePage() {
  return (
    <>
      <section className="hero py-20 lg:py-32 overflow-hidden bg-background">
        <div className="container mx-auto px-4 hero-grid grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="eyebrow inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest border border-primary/20">
              BIT4CODE • engenharia digital com identidade própria
            </div>
            <h1 className="text-4xl lg:text-6xl font-black leading-tight">
              Tecnologia com presença forte, execução sólida e visual profissional.
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              A Bit4code desenvolve soluções digitais com foco em programação,
              automação, inteligência artificial, TI, CyberSecurity, SaaS e produtos
              próprios como o ViraLink. Tudo com base técnica moderna, performance e
              apresentação institucional de alto nível.
            </p>

            <div className="hero-actions flex flex-wrap gap-4">
              <Link href="/contact" className="button bg-primary text-primary-foreground px-8 py-4 rounded-lg font-bold hover:opacity-90 transition-all shadow-lg glow-magenta">
                Falar com a Bit4code
              </Link>
              <Link href="/services" className="button-secondary border border-border px-8 py-4 rounded-lg font-bold hover:bg-muted transition-all">
                Ver serviços
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

          <div className="hero-visual-card relative bg-card/50 backdrop-blur-xl border border-border/50 p-8 lg:p-12 rounded-[2rem] shadow-2xl overflow-hidden">
            <div className="hero-brand-lockup hero-brand-lockup--premium relative z-10 flex flex-col gap-4 mb-8">
              <BrandLogo size="lg" variant="full" />
              <div className="hero-brand-note text-[10px] text-muted-foreground uppercase tracking-widest bg-white/5 border border-white/10 px-4 py-2 rounded-full w-fit">
                identidade visual própria criada em SVG para uso institucional
              </div>
            </div>
            <HeroArt />
          </div>
        </div>
      </section>

      <section className="section py-24 bg-muted/20">
        <div className="container mx-auto px-4 text-center">
          <div className="section-intro text-xl md:text-2xl font-medium text-muted-foreground max-w-3xl mx-auto mb-16">
            Estrutura institucional séria para presença digital, validação e credibilidade.
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
            <h2 className="text-3xl font-black mb-6">Marca completa para evoluir</h2>
            <p className="text-muted-foreground leading-relaxed">
              Agora a Bit4code passa a ter um símbolo próprio além do wordmark, o que facilita
              aplicação em favicon, avatar, redes sociais, cabeçalhos, rodapés, materiais
              comerciais e futuras interfaces de produto.
            </p>
          </div>

          <div className="text-block">
            <h2 className="text-3xl font-black mb-6">Base leve, rápida e preparada</h2>
            <p className="text-muted-foreground leading-relaxed">
              O projeto utiliza Next.js com TypeScript, páginas estáveis, SEO básico e
              cabeçalhos de segurança aplicados na aplicação, favorecendo velocidade,
              manutenção simples e publicação profissional no Firebase.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
