import Brand from '@/components/Brand';

export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container footer-grid mx-auto px-4">
        <div className="footer-brand">
          <Brand href="/" compact />
          <p className="footer-text mt-4">
            Soluções digitais profissionais em programação, automação, inteligência
            artificial, TI, CyberSecurity e produtos SaaS.
          </p>
        </div>

        <div>
          <h3 className="footer-title">Empresa</h3>
          <p className="footer-text">BIT 4 CODE LTDA</p>
          <p className="footer-text">CNPJ: 36.989.661/0001-39</p>
        </div>

        <div>
          <h3 className="footer-title">Contato</h3>
          <p className="footer-text">
            <a href="mailto:dev@bit4code.digital" className="hover:text-primary transition-colors">dev@bit4code.digital</a>
          </p>
        </div>
      </div>
    </footer>
  );
}