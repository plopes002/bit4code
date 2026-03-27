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

        <div>
          <h2>8. Direitos do usuário</h2>
            <p>
            O titular dos dados pode, quando aplicável, solicitar informações sobre o tratamento
            de seus dados, correção de dados incompletos ou desatualizados, bem como sua exclusão,
            respeitadas as obrigações legais aplicáveis.
            </p>
        </div>

        <div>
            <h2>9. Uso de cookies e dados de navegação</h2>
            <p>
            Este site pode utilizar dados técnicos de navegação, como endereço IP, tipo de navegador
            e informações de acesso, com a finalidade de garantir segurança, estabilidade e melhoria
            da experiência do usuário.
            </p>
        </div>

        <div>
            <h2>10. Contato</h2>
            <p>
            Para solicitações relacionadas a dados ou dúvidas sobre esta política, entre em contato pelo e-mail
            <a href="mailto:dev@bit4code.digital"> dev@bit4code.digital</a>.
            </p>
        </div>
      </section>
    </div>
  );
}