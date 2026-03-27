export const metadata = {
  title: 'Política de Privacidade',
  description: 'Política de Privacidade da Bit4code.',
};

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 pb-20">
      <section className="page-hero pt-20">
        <span className="eyebrow">Privacidade</span>
        <h1 className="mt-6">Política de Privacidade</h1>
        <p className="mt-6">
          Esta política descreve, de forma institucional e geral, como a Bit4code
          trata informações relacionadas ao uso de seus ambientes digitais.
        </p>
      </section>

      <section className="section py-12 legal-content space-y-8">
        <div>
          <h2>1. Identificação</h2>
          <p className="mt-4">BIT 4 CODE LTDA</p>
          <p>CNPJ: 36.989.661/0001-39</p>
          <p>
            E-mail: <a href="mailto:dev@bit4code.digital" className="text-primary hover:underline">dev@bit4code.digital</a>
          </p>
        </div>

        <div>
          <h2>2. Serviços da empresa</h2>
          <p className="mt-4">
            A Bit4code atua com programação, automação, inteligência artificial, TI,
            CyberSecurity, SaaS, produtos digitais e projetos correlatos, incluindo soluções como o ViraLink.
          </p>
        </div>

        <div>
          <h2>3. Informações que podem ser tratadas</h2>
          <p className="mt-4">
            Podemos tratar dados enviados voluntariamente em contatos institucionais e,
            quando aplicável, dados técnicos mínimos necessários à segurança, estabilidade
            e funcionamento dos ambientes digitais.
          </p>
        </div>

        <div>
          <h2>4. Finalidades</h2>
          <p className="mt-4">
            As informações podem ser utilizadas para responder contatos, manter segurança,
            aprimorar serviços, operar ambientes digitais e atender obrigações legais quando cabíveis.
          </p>
        </div>

        <div>
          <h2>5. Compartilhamento</h2>
          <p className="mt-4">
            Não realizamos compartilhamento indiscriminado de dados. Quando necessário,
            poderá haver uso de fornecedores de infraestrutura, hospedagem, suporte ou segurança.
          </p>
        </div>

        <div>
          <h2>6. Segurança</h2>
          <p className="mt-4">
            A Bit4code adota medidas técnicas e organizacionais compatíveis com seu contexto
            operacional para proteção de seus ambientes digitais.
          </p>
        </div>

        <div>
          <h2>7. Atualizações</h2>
          <p className="mt-4">
            Esta política poderá ser atualizada a qualquer momento para refletir ajustes
            legais, técnicos, operacionais ou institucionais.
          </p>
        </div>
      </section>
    </div>
  );
}