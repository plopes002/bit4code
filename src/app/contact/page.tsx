export const metadata = {
  title: 'Contato',
  description: 'Entre em contato com a Bit4code.',
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 pb-20">
      <section className="page-hero pt-20">
        <span className="eyebrow">Contato</span>
        <h1 className="mt-6">Fale com a Bit4code</h1>
        <p className="mt-6 text-xl">
          Para contato institucional, propostas, parcerias, dúvidas comerciais ou técnicas,
          utilize o canal oficial abaixo.
        </p>
      </section>

      <section className="section py-16 two-columns">
        <article className="content-block">
          <h2>Contato principal</h2>
          <p className="mt-6">
            E-mail: <a href="mailto:dev@bit4code.digital" className="text-primary hover:underline transition-all">dev@bit4code.digital</a>
          </p>
          <p className="mt-2">Empresa: BIT 4 CODE LTDA</p>
          <p>CNPJ: 36.989.661/0001-39</p>
        </article>

        <article className="content-block">
          <h2>Áreas de atuação</h2>
          <p className="mt-6">
            Programação, automação, inteligência artificial, TI, CyberSecurity,
            SaaS e produtos digitais.
          </p>
        </article>
      </section>
    </div>
  );
}