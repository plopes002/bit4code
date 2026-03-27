export const metadata = {
  title: 'Termos de Uso',
  description: 'Termos de Uso da Bit4code.',
};

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 pb-20">
      <section className="page-hero pt-20">
        <span className="eyebrow">Termos</span>
        <h1 className="mt-6">Termos de Uso</h1>
        <p className="mt-6">
          Estes Termos regulam o acesso e a utilização do site institucional da Bit4code.
        </p>
      </section>

      <section className="section py-12 legal-content space-y-8">
        <div>
          <h2>1. Titularidade</h2>
          <p className="mt-4">O site é mantido por BIT 4 CODE LTDA, CNPJ 36.989.661/0001-39.</p>
        </div>

        <div>
          <h2>2. Finalidade</h2>
          <p className="mt-4">
            Este ambiente possui caráter institucional e informativo, apresentando a empresa,
            seus serviços, áreas de atuação e canais de contato.
          </p>
        </div>

        <div>
          <h2>3. Uso permitido</h2>
          <p className="mt-4">
            O usuário compromete-se a utilizar este site de forma lícita, ética e compatível
            com sua finalidade, abstendo-se de práticas que comprometam segurança, estabilidade
            ou integridade do ambiente.
          </p>
        </div>

        <div>
          <h2>4. Propriedade intelectual</h2>
          <p className="mt-4">
            Marca, identidade visual, textos, estrutura e demais conteúdos associados à Bit4code
            pertencem à empresa ou são utilizados sob autorização.
          </p>
        </div>

        <div>
          <h2>5. Alterações</h2>
          <p className="mt-4">
            A Bit4code poderá atualizar, ajustar ou modificar conteúdos e elementos do site
            a qualquer momento, conforme necessidade institucional ou técnica.
          </p>
        </div>

        <div>
          <h2>6. Contato</h2>
          <p className="mt-4">
            Em caso de dúvidas, entre em contato pelo e-mail{' '}
            <a href="mailto:dev@bit4code.digital" className="text-primary hover:underline">dev@bit4code.digital</a>.
          </p>
        </div>
      </section>
    </div>
  );
}