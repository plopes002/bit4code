import Link from 'next/link';

type BrandProps = {
  href?: string;
  compact?: boolean;
};

export default function Brand({ href = '/', compact = false }: BrandProps) {
  const content = (
    <div className={`brand ${compact ? 'brand--compact' : ''}`}>
      <div className="brand-mark" aria-hidden="true">
        <span className="brand-mark-b">B</span>
        <span className="brand-mark-4">4</span>
      </div>

      <div className="brand-wordmark" aria-label="Bit4code">
        <span className="brand-wordmark-bit">BIT</span>
        <span className="brand-wordmark-4">4</span>
        <span className="brand-wordmark-code">CODE</span>
      </div>
    </div>
  );

  if (!href) return content;

  return (
    <Link href={href} className="brand-link" aria-label="Bit4code - página inicial">
      {content}
    </Link>
  );
}